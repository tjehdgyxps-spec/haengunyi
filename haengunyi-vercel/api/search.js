// Vercel Serverless Function — /api/search?q=삼천당제약
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
      return item.code && item.name;
    }).map(function(item) {
      var market = item.typeName === '코스닥' ? 'KQ' : 'KS';
      return {
        name: item.name,
        code: item.code,
        market: market
      };
    }).slice(0, 10);

    res.json(items);
  } catch (e) {
    res.json([]);
  }
};
