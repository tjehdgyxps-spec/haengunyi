// 경량 가격 조회 API — /api/price?symbol=000250.KQ
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache, no-store');

  const symbol = req.query.symbol;
  if (!symbol) return res.status(400).json({ error: 'symbol required' });

  const isKorean = symbol.endsWith('.KS') || symbol.endsWith('.KQ');

  try {
    if (isKorean) {
      const code = symbol.split('.')[0];
      const r = await fetch('https://m.stock.naver.com/api/stock/' + code + '/basic', {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
      });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const b = await r.json();
      const over = b.overMarketPriceInfo;
      const isAfter = over && over.overMarketStatus === 'OPEN' && over.overPrice;

      if (isAfter) {
        res.json({
          price: over.overPrice,
          change: over.compareToPreviousClosePrice,
          changePercent: over.fluctuationsRatio,
          isAfterHours: true,
          tradedAt: over.localTradedAt || b.localTradedAt,
          marketStatus: b.marketStatus
        });
      } else {
        res.json({
          price: b.closePrice,
          change: b.compareToPreviousClosePrice,
          changePercent: b.fluctuationsRatio,
          isAfterHours: false,
          tradedAt: b.localTradedAt,
          marketStatus: b.marketStatus
        });
      }
    } else {
      // US stocks
      const r = await fetch('https://query1.finance.yahoo.com/v8/finance/chart/' + encodeURIComponent(symbol) + '?range=1d&interval=1d&includePrePost=false', {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
      });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const d = await r.json();
      const meta = d.chart.result[0].meta;
      const prev = meta.chartPreviousClose || 0;
      const price = meta.regularMarketPrice || 0;
      const change = prev ? (price - prev) : 0;
      const pct = prev ? ((change / prev) * 100) : 0;
      res.json({
        price: price.toFixed(2),
        change: change.toFixed(2),
        changePercent: pct.toFixed(2),
        isAfterHours: false,
        tradedAt: null,
        marketStatus: meta.marketState || 'CLOSED'
      });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
