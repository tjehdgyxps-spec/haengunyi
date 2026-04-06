// Vercel Serverless — /api/quickscan?code=005930
// 경량 스캔용: 네이버 basic + integration + chart (Yahoo 생략)
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');

  var code = req.query.code;
  if (!code) return res.status(400).json({ error: 'code required' });

  try {
    var results = await Promise.all([
      fetchJSON('https://m.stock.naver.com/api/stock/' + code + '/basic'),
      fetchJSON('https://m.stock.naver.com/api/stock/' + code + '/integration'),
      fetchChart(code)
    ]);

    var basic = results[0];
    var integration = results[1];
    var chart = results[2];

    if (!basic) return res.json({ code: code, error: 'no data' });

    // Parse integration totalInfos
    var per = 0, pbr = 0, eps = 0, high52w = 0, low52w = 0, targetPrice = 0;
    var totalInfos = (integration && integration.totalInfos) || [];
    for (var i = 0; i < totalInfos.length; i++) {
      var item = totalInfos[i];
      var val = parseNum(item.value);
      if (item.code === 'per') per = val;
      else if (item.code === 'pbr') pbr = val;
      else if (item.code === 'eps') eps = val;
      else if (item.code === 'highPriceOf52Weeks') high52w = val;
      else if (item.code === 'lowPriceOf52Weeks') low52w = val;
    }

    // Consensus target price
    if (integration && integration.consensusInfo && integration.consensusInfo.priceTargetMean) {
      targetPrice = parseNum(integration.consensusInfo.priceTargetMean);
    }

    // After-hours price handling (same as bundle.js)
    var price, change, changePercent;
    var over = basic.overMarketPriceInfo;
    var isAfterHours = over && over.overMarketStatus === 'OPEN' && over.overPrice;

    if (isAfterHours) {
      price = parseNum(over.overPrice);
      change = parseNum(over.compareToPreviousClosePrice);
      changePercent = parseFloat(over.fluctuationsRatio) || 0;
    } else {
      price = parseNum(basic.closePrice);
      change = parseNum(basic.compareToPreviousClosePrice);
      changePercent = parseFloat(basic.fluctuationsRatio) || 0;
    }

    res.json({
      code: code,
      name: basic.stockName || code,
      price: price,
      change: change,
      changePercent: changePercent,
      volume: parseNum(basic.accumulatedTradingVolume),
      per: per,
      pbr: pbr,
      eps: eps,
      high52w: high52w,
      low52w: low52w,
      targetPrice: targetPrice,
      isAfterHours: !!isAfterHours,
      chart: chart
    });
  } catch (e) {
    res.json({ code: code, error: e.message });
  }
};

function parseNum(str) {
  if (!str && str !== 0) return 0;
  return parseFloat(String(str).replace(/[^0-9.\-]/g, '')) || 0;
}

async function fetchJSON(url) {
  try {
    var controller = new AbortController();
    var timeout = setTimeout(function () { controller.abort(); }, 8000);
    var r = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0' }
    });
    clearTimeout(timeout);
    if (!r.ok) return null;
    return r.json();
  } catch (e) {
    return null;
  }
}

async function fetchChart(code) {
  try {
    var end = new Date();
    var start = new Date();
    start.setFullYear(start.getFullYear() - 1);
    var fmt = function (d) { return d.toISOString().slice(0, 10).replace(/-/g, ''); };
    var url = 'https://api.stock.naver.com/chart/domestic/item/' + code + '/day?startDateTime=' + fmt(start) + '&endDateTime=' + fmt(end);
    var controller = new AbortController();
    var timeout = setTimeout(function () { controller.abort(); }, 8000);
    var r = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0' }
    });
    clearTimeout(timeout);
    if (!r.ok) return null;
    var data = await r.json();
    if (!Array.isArray(data)) return null;
    return data.map(function (d) {
      return {
        close: parseFloat(String(d.closePrice || 0).replace(/,/g, '')),
        high: parseFloat(String(d.highPrice || 0).replace(/,/g, '')),
        low: parseFloat(String(d.lowPrice || 0).replace(/,/g, '')),
        volume: parseFloat(String(d.accumulatedTradingVolume || 0).replace(/,/g, ''))
      };
    });
  } catch (e) {
    return null;
  }
}
