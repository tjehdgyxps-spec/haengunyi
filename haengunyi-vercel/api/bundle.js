// Vercel Serverless Function — /api/bundle?symbol=005930.KS
module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const symbol = req.query.symbol;
  if (!symbol) return res.status(400).json({ error: '종목 심볼이 필요합니다.' });

  const isKorean = symbol.endsWith('.KS') || symbol.endsWith('.KQ');
  const result = { symbol, isKorean, timestamp: new Date().toISOString() };

  try {
    if (isKorean) {
      const code = symbol.split('.')[0];
      const [naverBasic, naverIntegration, naverChart, yahooChart] = await Promise.all([
        fetchNaverBasic(code),
        fetchNaverIntegration(code),
        fetchNaverChart(code),
        fetchYahooChart(symbol)
      ]);
      result.naver = { basic: naverBasic, integration: naverIntegration, chart: naverChart };
      result.yahoo = yahooChart;

      if (!naverBasic && !yahooChart) {
        return res.status(502).json({ error: '데이터를 가져올 수 없습니다. 잠시 후 다시 시도해주세요.' });
      }
    } else {
      // US stocks: fetch 1y (for analysis) + 1d (for daily change) in parallel
      const [yahooChart, yahooDailyChange] = await Promise.all([
        fetchYahooChart(symbol),
        fetchYahooDaily(symbol)
      ]);
      result.yahoo = yahooChart;
      result.yahooDaily = yahooDailyChange;
      if (!yahooChart) {
        return res.status(502).json({ error: '데이터를 가져올 수 없습니다. 종목명을 확인하고 다시 시도해주세요.' });
      }
    }
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: '서버 오류: ' + e.message });
  }
};

// ─── Helpers ───
async function fetchWithTimeout(url, opts = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), opts.timeout || 12000);
  try {
    const r = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        ...(opts.headers || {})
      }
    });
    clearTimeout(timeout);
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return opts.text ? r.text() : r.json();
  } catch (e) {
    clearTimeout(timeout);
    throw e;
  }
}

async function fetchNaverBasic(code) {
  try { return await fetchWithTimeout('https://m.stock.naver.com/api/stock/' + code + '/basic'); }
  catch (e) { return null; }
}

async function fetchNaverIntegration(code) {
  try { return await fetchWithTimeout('https://m.stock.naver.com/api/stock/' + code + '/integration'); }
  catch (e) { return null; }
}

async function fetchNaverChart(code) {
  try {
    var end = new Date();
    var start = new Date();
    start.setFullYear(start.getFullYear() - 1);
    var fmt = function(d) { return d.toISOString().slice(0, 10).replace(/-/g, ''); };
    var url = 'https://api.stock.naver.com/chart/domestic/item/' + code + '/day?startDateTime=' + fmt(start) + '&endDateTime=' + fmt(end);
    var data = await fetchWithTimeout(url);
    if (Array.isArray(data)) {
      return data.map(function(d) {
        return {
          date: d.localDate,
          open: d.openPrice,
          high: d.highPrice,
          low: d.lowPrice,
          close: d.closePrice,
          volume: d.accumulatedTradingVolume || 0
        };
      });
    }
    return null;
  } catch (e) { return null; }
}

async function fetchYahooChart(symbol) {
  try {
    var url = 'https://query1.finance.yahoo.com/v8/finance/chart/' + encodeURIComponent(symbol) + '?range=1y&interval=1d&includePrePost=false';
    return await fetchWithTimeout(url);
  } catch (e) {
    try {
      var url2 = 'https://query2.finance.yahoo.com/v8/finance/chart/' + encodeURIComponent(symbol) + '?range=1y&interval=1d&includePrePost=false';
      return await fetchWithTimeout(url2);
    } catch (e2) { return null; }
  }
}

// 전일대비용 1d 데이터 (미국 주식)
async function fetchYahooDaily(symbol) {
  try {
    var url = 'https://query1.finance.yahoo.com/v8/finance/chart/' + encodeURIComponent(symbol) + '?range=1d&interval=1d&includePrePost=false';
    var data = await fetchWithTimeout(url);
    var meta = data && data.chart && data.chart.result && data.chart.result[0] && data.chart.result[0].meta;
    if (meta) {
      return {
        previousClose: meta.chartPreviousClose || meta.previousClose || 0,
        price: meta.regularMarketPrice || 0,
        dayHigh: meta.regularMarketDayHigh || 0,
        dayLow: meta.regularMarketDayLow || 0
      };
    }
    return null;
  } catch (e) { return null; }
}
