// Vercel Serverless Function — /api/search?q=삼천당제약
// 한국 + 미국 주식만 검색
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  var q = req.query.q;
  if (!q) return res.json([]);

  try {
    var url = 'https://ac.stock.naver.com/ac?q=' + encodeURIComponent(q) + '&target=stock';
    var controller = new AbortController();
    var timeout = setTimeout(function() { controller.abort(); }, 8000);

    var r = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    clearTimeout(timeout);

    var data = await r.json();
    var items = (data.items || []).filter(function(item) {
      if (!item.code || !item.name) return false;
      // 한국 + 미국만
      var nation = (item.nationCode || '').toUpperCase();
      if (nation === 'KOR' || nation === 'USA') return true;
      var tn = (item.typeName || '');
      if (tn.indexOf('코스피') >= 0 || tn.indexOf('코스닥') >= 0) return true;
      if (tn.indexOf('나스닥') >= 0 || tn.indexOf('뉴욕') >= 0 || tn.indexOf('NYSE') >= 0 || tn.indexOf('NASDAQ') >= 0) return true;
      return false;
    }).map(function(item) {
      var tn = (item.typeName || '');
      var symbol = '';

      if (tn.indexOf('코스닥') >= 0) {
        symbol = item.code + '.KQ';
      } else if (tn.indexOf('코스피') >= 0 || item.nationCode === 'KOR') {
        symbol = item.code + '.KS';
      } else {
        // 미국: reutersCode 또는 code 그대로 (AAPL, TSLA 등)
        symbol = item.reutersCode || item.code;
        // .O(나스닥) .N(뉴욕) 제거 → 순수 티커
        symbol = symbol.replace(/\.(O|N|OQ|K|A)$/, '');
      }

      return {
        name: item.name,
        code: item.code,
        symbol: symbol,
        market: tn
      };
    }).slice(0, 10);

    res.json(items);
  } catch (e) {
    res.json([]);
  }
};
