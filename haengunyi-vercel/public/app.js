/* ═══════════════════════════════════════════
   행운의서동이 — AI 종목 분석 엔진 v2
   완전 클라이언트사이드 분석 + 서버 프록시 데이터
   ═══════════════════════════════════════════ */

// API Base — Vercel serverless
const API_BASE = '';

// ══════════════════════════════════════
// 1. KOREAN STOCK DATABASE (200+)
// ══════════════════════════════════════
const KOREAN_STOCKS = {
  // ── 코스피 대형주 ──
  '삼성전자': { code: '005930', market: 'KS' },
  '삼성전자우': { code: '005935', market: 'KS' },
  'SK하이닉스': { code: '000660', market: 'KS' },
  'LG에너지솔루션': { code: '373220', market: 'KS' },
  '삼성바이오로직스': { code: '207940', market: 'KS' },
  '현대차': { code: '005380', market: 'KS' },
  '현대자동차': { code: '005380', market: 'KS' },
  '기아': { code: '000270', market: 'KS' },
  '기아차': { code: '000270', market: 'KS' },
  '셀트리온': { code: '068270', market: 'KS' },
  'NAVER': { code: '035420', market: 'KS' },
  '네이버': { code: '035420', market: 'KS' },
  '카카오': { code: '035720', market: 'KS' },
  'LG화학': { code: '051910', market: 'KS' },
  'POSCO홀딩스': { code: '005490', market: 'KS' },
  '포스코홀딩스': { code: '005490', market: 'KS' },
  'KB금융': { code: '105560', market: 'KS' },
  '신한지주': { code: '055550', market: 'KS' },
  '삼성SDI': { code: '006400', market: 'KS' },
  '현대모비스': { code: '012330', market: 'KS' },
  'LG전자': { code: '066570', market: 'KS' },
  'SK이노베이션': { code: '096770', market: 'KS' },
  'SK텔레콤': { code: '017670', market: 'KS' },
  'KT': { code: '030200', market: 'KS' },
  'KT&G': { code: '033780', market: 'KS' },
  'SK': { code: '034730', market: 'KS' },
  'LG': { code: '003550', market: 'KS' },
  '한국전력': { code: '015760', market: 'KS' },
  '한전': { code: '015760', market: 'KS' },
  '삼성물산': { code: '028260', market: 'KS' },
  '삼성생명': { code: '032830', market: 'KS' },
  '삼성화재': { code: '000810', market: 'KS' },
  '삼성전기': { code: '009150', market: 'KS' },
  '삼성SDS': { code: '018260', market: 'KS' },
  '하나금융지주': { code: '086790', market: 'KS' },
  '우리금융지주': { code: '316140', market: 'KS' },
  'SK바이오팜': { code: '326030', market: 'KS' },
  'SK바이오사이언스': { code: '302440', market: 'KS' },
  '카카오뱅크': { code: '323410', market: 'KS' },
  '카카오페이': { code: '377300', market: 'KS' },
  '크래프톤': { code: '259960', market: 'KS' },
  '한화에어로스페이스': { code: '012450', market: 'KS' },
  '한화에어로': { code: '012450', market: 'KS' },
  '한화오션': { code: '042660', market: 'KS' },
  '한화솔루션': { code: '009830', market: 'KS' },
  'HD현대중공업': { code: '329180', market: 'KS' },
  'HD한국조선해양': { code: '009540', market: 'KS' },
  'HD현대': { code: '267250', market: 'KS' },
  '두산에너빌리티': { code: '034020', market: 'KS' },
  '두산밥캣': { code: '241560', market: 'KS' },
  'LG디스플레이': { code: '034220', market: 'KS' },
  'LG이노텍': { code: '011070', market: 'KS' },
  'LG생활건강': { code: '051900', market: 'KS' },
  '아모레퍼시픽': { code: '090430', market: 'KS' },
  'S-Oil': { code: '010950', market: 'KS' },
  'GS칼텍스': { code: '078930', market: 'KS' },
  'GS': { code: '078930', market: 'KS' },
  'CJ제일제당': { code: '097950', market: 'KS' },
  'CJ': { code: '001040', market: 'KS' },
  '롯데케미칼': { code: '011170', market: 'KS' },
  '롯데쇼핑': { code: '023530', market: 'KS' },
  '한미약품': { code: '128940', market: 'KS' },
  '유한양행': { code: '000100', market: 'KS' },
  '녹십자': { code: '006280', market: 'KS' },
  'HLB': { code: '028300', market: 'KS' },
  '대한항공': { code: '003490', market: 'KS' },
  '한진칼': { code: '180640', market: 'KS' },
  '현대건설': { code: '000720', market: 'KS' },
  '대우건설': { code: '047040', market: 'KS' },
  '포스코인터내셔널': { code: '047050', market: 'KS' },
  '포스코퓨처엠': { code: '003670', market: 'KS' },
  '에코프로비엠': { code: '247540', market: 'KS' },
  '에코프로': { code: '086520', market: 'KS' },
  'SK아이이테크놀로지': { code: '361610', market: 'KS' },
  'SK스퀘어': { code: '402340', market: 'KS' },
  '미래에셋증권': { code: '006800', market: 'KS' },
  'NH투자증권': { code: '005940', market: 'KS' },
  '키움증권': { code: '039490', market: 'KS' },
  '삼성증권': { code: '016360', market: 'KS' },
  '한국금융지주': { code: '071050', market: 'KS' },
  '메리츠금융지주': { code: '138040', market: 'KS' },
  '현대글로비스': { code: '086280', market: 'KS' },
  '현대제철': { code: '004020', market: 'KS' },
  '현대로템': { code: '064350', market: 'KS' },
  '현대위아': { code: '011210', market: 'KS' },
  '현대해상': { code: '001450', market: 'KS' },
  'DB손해보험': { code: '005830', market: 'KS' },
  '한화': { code: '000880', market: 'KS' },
  '한화투자증권': { code: '003530', market: 'KS' },
  '넷마블': { code: '251270', market: 'KS' },
  '엔씨소프트': { code: '036570', market: 'KS' },
  '펄어비스': { code: '263750', market: 'KS' },
  '카카오게임즈': { code: '293490', market: 'KS' },
  '하이브': { code: '352820', market: 'KS' },
  'JYP엔터': { code: '035900', market: 'KS' },
  'SM': { code: '041510', market: 'KS' },
  'YG엔터': { code: '122870', market: 'KS' },
  '이마트': { code: '139480', market: 'KS' },
  'BGF리테일': { code: '282330', market: 'KS' },
  '오리온': { code: '271560', market: 'KS' },
  '농심': { code: '004370', market: 'KS' },
  '삼양식품': { code: '003230', market: 'KS' },
  '풀무원': { code: '017810', market: 'KS' },
  '한국타이어': { code: '161390', market: 'KS' },
  '금호타이어': { code: '073240', market: 'KS' },
  '만도': { code: '204320', market: 'KS' },
  '한온시스템': { code: '018880', market: 'KS' },
  '코웨이': { code: '021240', market: 'KS' },
  '강원랜드': { code: '035250', market: 'KS' },
  'OCI': { code: '010060', market: 'KS' },
  '한화시스템': { code: '272210', market: 'KS' },
  'LIG넥스원': { code: '079550', market: 'KS' },
  '한국항공우주': { code: '047810', market: 'KS' },
  'KAI': { code: '047810', market: 'KS' },
  '현대엘리베이터': { code: '017800', market: 'KS' },
  '두산': { code: '000150', market: 'KS' },
  '효성': { code: '004800', market: 'KS' },
  'LS': { code: '006260', market: 'KS' },
  'LS일렉트릭': { code: '010120', market: 'KS' },
  '일진머티리얼즈': { code: '020150', market: 'KS' },
  'SKC': { code: '011790', market: 'KS' },
  '고려아연': { code: '010130', market: 'KS' },
  '영풍': { code: '000670', market: 'KS' },
  '삼성중공업': { code: '010140', market: 'KS' },
  '호텔신라': { code: '008770', market: 'KS' },
  '신세계': { code: '004170', market: 'KS' },
  '현대백화점': { code: '069960', market: 'KS' },

  // ── 코스닥 주요 종목 ──
  '에코프로비엠': { code: '247540', market: 'KQ' },
  '알테오젠': { code: '196170', market: 'KQ' },
  '엘앤에프': { code: '066970', market: 'KQ' },
  '레인보우로보틱스': { code: '277810', market: 'KQ' },
  '씨젠': { code: '096530', market: 'KQ' },
  '셀트리온제약': { code: '068760', market: 'KQ' },
  '셀트리온헬스케어': { code: '091990', market: 'KQ' },
  'CJ ENM': { code: '035760', market: 'KQ' },
  '카카오게임즈': { code: '293490', market: 'KQ' },
  '위메이드': { code: '112040', market: 'KQ' },
  '컴투스': { code: '078340', market: 'KQ' },
  '스튜디오드래곤': { code: '253450', market: 'KQ' },
  'JYP Ent': { code: '035900', market: 'KQ' },
  '원익IPS': { code: '240810', market: 'KQ' },
  '리노공업': { code: '058470', market: 'KQ' },
  '에스엠': { code: '041510', market: 'KQ' },
  '클래시스': { code: '214150', market: 'KQ' },
  '파라다이스': { code: '034230', market: 'KQ' },
  '주성엔지니어링': { code: '036930', market: 'KQ' },
  'HPSP': { code: '403870', market: 'KQ' },
  '이오테크닉스': { code: '039030', market: 'KQ' },
  '제주반도체': { code: '080220', market: 'KQ' },
  '테크윙': { code: '089030', market: 'KQ' },
  '한미반도체': { code: '042700', market: 'KQ' },
  '두산테스나': { code: '131970', market: 'KQ' },
  '티씨케이': { code: '064760', market: 'KQ' },
  'ISC': { code: '095340', market: 'KQ' },
  '솔브레인': { code: '357780', market: 'KQ' },
  '동진쎄미켐': { code: '005290', market: 'KQ' },
  '피에스케이': { code: '319660', market: 'KQ' },
  '심텍': { code: '222800', market: 'KQ' },
  '대덕전자': { code: '353200', market: 'KQ' },
  '와이지엔터': { code: '122870', market: 'KQ' },
  'HLB생명과학': { code: '067630', market: 'KQ' },
  '메디톡스': { code: '086900', market: 'KQ' },
  '휴젤': { code: '145020', market: 'KQ' },
  '파마리서치': { code: '214450', market: 'KQ' },
  '레이저테크': { code: '228760', market: 'KQ' },
  '인텔리안테크': { code: '189300', market: 'KQ' },
  '에스피지': { code: '058610', market: 'KQ' },
  '성일하이텍': { code: '365340', market: 'KQ' },
  '나노신소재': { code: '121600', market: 'KQ' },
  '천보': { code: '278280', market: 'KQ' },
  '새론오토모티브': { code: '075180', market: 'KQ' },
  '포스코DX': { code: '022100', market: 'KQ' },
};

// ══════════════════════════════════════
// 2. FUZZY SEARCH ENGINE
// ══════════════════════════════════════
function searchStocks(query) {
  if (!query || query.trim().length === 0) return [];
  const q = query.trim();
  const qLower = q.toLowerCase();
  const qNoSpace = q.replace(/\s+/g, '');
  const qLowerNoSpace = qLower.replace(/\s+/g, '');

  const results = [];
  const seen = new Set();

  // Phase 1: Exact match
  for (const [name, info] of Object.entries(KOREAN_STOCKS)) {
    if (name === q && !seen.has(info.code)) {
      seen.add(info.code);
      results.push({ name, code: info.code, market: info.market, score: 100 });
    }
  }

  // Phase 2: Case-insensitive match
  for (const [name, info] of Object.entries(KOREAN_STOCKS)) {
    if (name.toLowerCase() === qLower && !seen.has(info.code)) {
      seen.add(info.code);
      results.push({ name, code: info.code, market: info.market, score: 90 });
    }
  }

  // Phase 3: Starts-with
  for (const [name, info] of Object.entries(KOREAN_STOCKS)) {
    if (name.toLowerCase().startsWith(qLower) && !seen.has(info.code)) {
      seen.add(info.code);
      results.push({ name, code: info.code, market: info.market, score: 80 });
    }
  }

  // Phase 4: Contains
  for (const [name, info] of Object.entries(KOREAN_STOCKS)) {
    if (name.toLowerCase().includes(qLower) && !seen.has(info.code)) {
      seen.add(info.code);
      results.push({ name, code: info.code, market: info.market, score: 70 });
    }
  }

  // Phase 5: No-space match
  for (const [name, info] of Object.entries(KOREAN_STOCKS)) {
    const nameNoSpace = name.replace(/\s+/g, '').toLowerCase();
    if (nameNoSpace.includes(qLowerNoSpace) && !seen.has(info.code)) {
      seen.add(info.code);
      results.push({ name, code: info.code, market: info.market, score: 60 });
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, 8);
}

// Check if query looks like a US ticker
function isUSTicker(q) {
  return /^[A-Za-z]{1,5}$/.test(q.trim());
}

// Naver 검색 API로 종목 찾기 (DB에 없는 종목용)
async function searchNaver(query) {
  try {
    const res = await fetch(`${API_BASE}/api/search?q=${encodeURIComponent(query)}`);
    if (!res.ok) return [];
    return await res.json();
  } catch (e) { return []; }
}

// Resolve query → Yahoo symbol (async - Naver 검색 포함)
async function resolveSymbol(query) {
  const q = query.trim();
  // Direct match in DB
  const matches = searchStocks(q);
  if (matches.length > 0) {
    const m = matches[0];
    return { symbol: `${m.code}.${m.market}`, name: m.name, isKorean: true };
  }
  // Check if it's a code like 005930
  if (/^\d{6}$/.test(q)) {
    for (const [name, info] of Object.entries(KOREAN_STOCKS)) {
      if (info.code === q) {
        return { symbol: `${info.code}.${info.market}`, name, isKorean: true };
      }
    }
    return { symbol: `${q}.KS`, name: q, isKorean: true };
  }
  // US ticker
  if (isUSTicker(q)) {
    return { symbol: q.toUpperCase(), name: q.toUpperCase(), isKorean: false };
  }
  // DB에 없으면 Naver 검색으로 찾기
  const naverResults = await searchNaver(q);
  if (naverResults.length > 0) {
    const m = naverResults[0];
    const sym = m.symbol || `${m.code}.${m.market}`;
    const isKR = sym.endsWith('.KS') || sym.endsWith('.KQ');
    return { symbol: sym, name: m.name, isKorean: isKR };
  }
  // 최후의 수단: 에러
  throw new Error('"' + q + '" 종목을 찾을 수 없습니다. 종목명 또는 티커를 정확히 입력해주세요.');
}

// ══════════════════════════════════════
// 3. DATA FETCHING
// ══════════════════════════════════════
async function fetchBundle(symbol) {
  const url = `${API_BASE}/api/bundle?symbol=${encodeURIComponent(symbol)}`;
  const res = await fetch(url);
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error(err.error || `서버 오류 (${res.status})`);
  }
  return res.json();
}

// ══════════════════════════════════════
// 4. DATA PARSER
// ══════════════════════════════════════
function parseStockData(bundle) {
  const data = {
    name: '',
    symbol: bundle.symbol,
    isKorean: bundle.isKorean,
    price: 0,
    prevClose: 0,
    change: 0,
    changePercent: 0,
    volume: 0,
    avgVolume: 0,
    high52w: 0,
    low52w: 0,
    marketCap: 0,
    per: 0,
    pbr: 0,
    eps: 0,
    targetPrice: 0,
    prices: [],    // daily close array
    volumes: [],   // daily volume array
    highs: [],
    lows: [],
    currency: 'KRW',
  };

  // ── Parse Naver data (Korean) ──
  if (bundle.naver) {
    const basic = bundle.naver.basic;
    const integ = bundle.naver.integration;
    const chart = bundle.naver.chart;

    if (basic) {
      data.name = basic.stockName || basic.stockNameEng || data.symbol;
      data.marketStatus = basic.marketStatus; // 'OPEN','CLOSE','PREOPEN' 등
      data.tradedAt = basic.localTradedAt || '';

      // 시간외 거래 활성 시: 시간외 가격을 메인으로 표시 (토스증권과 동일)
      const over = basic.overMarketPriceInfo;
      const isAfterHours = over && over.overMarketStatus === 'OPEN' && over.overPrice;

      if (isAfterHours) {
        data.price = parseFloat(String(over.overPrice).replace(/,/g, ''));
        data.change = parseFloat(String(over.compareToPreviousClosePrice).replace(/,/g, ''));
        data.changePercent = parseFloat(over.fluctuationsRatio) || 0;
        data.prevClose = data.price - data.change;
        data.isAfterHours = true;
      } else {
        data.price = parseFloat(String(basic.closePrice || basic.nowVal || 0).replace(/,/g, ''));
        if (basic.compareToPreviousClosePrice != null) {
          data.change = parseFloat(String(basic.compareToPreviousClosePrice).replace(/,/g, ''));
          data.changePercent = parseFloat(basic.fluctuationsRatio) || 0;
          data.prevClose = data.price - data.change;
        } else {
          data.prevClose = parseFloat(String(basic.previousClosePrice || basic.prevClose || 0).replace(/,/g, ''));
          data.change = data.price - data.prevClose;
          data.changePercent = data.prevClose ? ((data.change / data.prevClose) * 100) : 0;
        }
        data.isAfterHours = false;
      }
      data.volume = parseFloat(String(basic.accumulatedTradingVolume || basic.tradeVol || 0).replace(/,/g, ''));
      data.currency = 'KRW';
    }

    if (integ) {
      // Try extracting from various structures
      try {
        const dealInfo = integ.dealInfo || {};
        const stockInfo = integ.stockInfo || {};
        const analysis = integ.analysis || {};

        // Market cap
        if (integ.marketValue) data.marketCap = parseFloat(String(integ.marketValue).replace(/,/g, ''));
        if (integ.marketCap) data.marketCap = parseFloat(String(integ.marketCap).replace(/,/g, ''));

        // PER, PBR, EPS
        if (integ.per) data.per = parseFloat(integ.per);
        if (integ.pbr) data.pbr = parseFloat(integ.pbr);
        if (integ.eps) data.eps = parseFloat(String(integ.eps).replace(/,/g, ''));

        // 52-week
        if (integ.high52wPrice) data.high52w = parseFloat(String(integ.high52wPrice).replace(/,/g, ''));
        if (integ.low52wPrice) data.low52w = parseFloat(String(integ.low52wPrice).replace(/,/g, ''));

        // Consensus target
        if (analysis.targetPrice) data.targetPrice = parseFloat(String(analysis.targetPrice).replace(/,/g, ''));
        if (integ.targetPrice) data.targetPrice = parseFloat(String(integ.targetPrice).replace(/,/g, ''));

        // Deep extraction from various nested structures
        if (integ.totalInfos) {
          for (const info of integ.totalInfos) {
            const items = info.items || [];
            for (const item of items) {
              const code = item.code;
              const val = String(item.value || '').replace(/,/g, '');
              if (code === 'per' && !data.per) data.per = parseFloat(val) || 0;
              if (code === 'pbr' && !data.pbr) data.pbr = parseFloat(val) || 0;
              if (code === 'eps' && !data.eps) data.eps = parseFloat(val) || 0;
              if (code === 'marketValue' && !data.marketCap) data.marketCap = parseFloat(val) || 0;
              if (code === 'high52wPrice' && !data.high52w) data.high52w = parseFloat(val) || 0;
              if (code === 'low52wPrice' && !data.low52w) data.low52w = parseFloat(val) || 0;
            }
          }
        }
      } catch (e) {
        console.log('Integration parse partial error:', e.message);
      }
    }

    if (chart && chart.length > 0) {
      data.prices = chart.map(c => parseFloat(c.close)).filter(v => !isNaN(v));
      data.volumes = chart.map(c => parseFloat(c.volume) || 0);
      data.highs = chart.map(c => parseFloat(c.high)).filter(v => !isNaN(v));
      data.lows = chart.map(c => parseFloat(c.low)).filter(v => !isNaN(v));
      // Avg volume from last 20 days
      const recentVols = data.volumes.slice(-20);
      data.avgVolume = recentVols.reduce((a, b) => a + b, 0) / recentVols.length;
    }
  }

  // ── Parse Yahoo data (fill gaps or US stocks) ──
  if (bundle.yahoo && bundle.yahoo.chart && bundle.yahoo.chart.result) {
    const result = bundle.yahoo.chart.result[0];
    const meta = result.meta || {};
    const quotes = result.indicators?.quote?.[0] || {};
    const timestamps = result.timestamp || [];

    if (!data.name || data.name === data.symbol) {
      data.name = meta.shortName || meta.longName || meta.symbol || data.symbol;
    }

    if (!data.price) data.price = meta.regularMarketPrice || 0;

    // 미국 주식: yahooDaily(range=1d)에서 정확한 전일종가 가져오기
    // range=1y의 chartPreviousClose는 1년전 종가라서 사용하면 안 됨
    if (bundle.yahooDaily && bundle.yahooDaily.previousClose) {
      data.prevClose = bundle.yahooDaily.previousClose;
      data.change = data.price - data.prevClose;
      data.changePercent = data.prevClose ? ((data.change / data.prevClose) * 100) : 0;
    } else if (!data.prevClose) {
      // fallback: 차트 데이터에서 마지막 2일치로 계산
      const closes = (result.indicators?.quote?.[0]?.close || []).filter(v => v != null);
      if (closes.length >= 2) {
        data.prevClose = closes[closes.length - 2];
        data.change = data.price - data.prevClose;
        data.changePercent = data.prevClose ? ((data.change / data.prevClose) * 100) : 0;
      } else {
        data.prevClose = meta.chartPreviousClose || 0;
        data.change = data.price - data.prevClose;
        data.changePercent = data.prevClose ? ((data.change / data.prevClose) * 100) : 0;
      }
    }
    if (!data.volume && meta.regularMarketVolume) data.volume = meta.regularMarketVolume;
    data.currency = meta.currency || data.currency;

    // Price history from Yahoo
    if (data.prices.length === 0 && quotes.close) {
      data.prices = quotes.close.filter(v => v != null && !isNaN(v));
      data.volumes = (quotes.volume || []).filter(v => v != null && !isNaN(v));
      data.highs = (quotes.high || []).filter(v => v != null && !isNaN(v));
      data.lows = (quotes.low || []).filter(v => v != null && !isNaN(v));

      const recentVols = data.volumes.slice(-20);
      if (recentVols.length > 0) {
        data.avgVolume = recentVols.reduce((a, b) => a + b, 0) / recentVols.length;
      }
    }

    // 52-week from Yahoo prices
    if (!data.high52w && data.prices.length > 0) {
      data.high52w = Math.max(...data.highs.slice(-252));
      data.low52w = Math.min(...data.lows.slice(-252).filter(v => v > 0));
    }
  }

  return data;
}

// ══════════════════════════════════════
// 5. TECHNICAL INDICATORS
// ══════════════════════════════════════
function calcSMA(prices, period) {
  if (prices.length < period) return null;
  const slice = prices.slice(-period);
  return slice.reduce((a, b) => a + b, 0) / period;
}

function calcRSI(prices, period = 14) {
  if (prices.length < period + 1) return 50;
  // Wilder's Smoothed RSI (정확한 산업 표준 계산)
  let avgGain = 0, avgLoss = 0;
  // 첫 번째 평균: 단순 평균
  const startIdx = prices.length - Math.min(prices.length - 1, 100); // 최대 100일 사용
  for (let i = startIdx; i < startIdx + period; i++) {
    const diff = prices[i + 1] - prices[i];
    if (diff >= 0) avgGain += diff;
    else avgLoss -= diff;
  }
  avgGain /= period;
  avgLoss /= period;
  // Wilder 평활법 적용
  for (let i = startIdx + period; i < prices.length - 1; i++) {
    const diff = prices[i + 1] - prices[i];
    if (diff >= 0) {
      avgGain = (avgGain * (period - 1) + diff) / period;
      avgLoss = (avgLoss * (period - 1)) / period;
    } else {
      avgGain = (avgGain * (period - 1)) / period;
      avgLoss = (avgLoss * (period - 1) + Math.abs(diff)) / period;
    }
  }
  if (avgLoss === 0) return 100;
  const rs = avgGain / avgLoss;
  return 100 - (100 / (1 + rs));
}

function calcMACD(prices) {
  if (prices.length < 35) return { macd: 0, signal: 0, histogram: 0, trend: 'flat' };
  // 정확한 EMA 계산 (전체 데이터 사용)
  function emaCalc(arr, period) {
    const k = 2 / (period + 1);
    let ema = arr[0];
    for (let i = 1; i < arr.length; i++) ema = arr[i] * k + ema * (1 - k);
    return ema;
  }
  // MACD 라인 시리즈 생성 (시그널 계산용)
  const macdSeries = [];
  for (let end = 26; end <= prices.length; end++) {
    const slice = prices.slice(0, end);
    const e12 = emaCalc(slice, 12);
    const e26 = emaCalc(slice, 26);
    macdSeries.push(e12 - e26);
  }
  const macdLine = macdSeries[macdSeries.length - 1];
  // 시그널 라인: MACD 시리즈의 9일 EMA
  const signalLine = macdSeries.length >= 9 ? emaCalc(macdSeries.slice(-18), 9) : macdLine * 0.8;
  const histogram = macdLine - signalLine;
  // 추세 판단
  const prevHist = macdSeries.length >= 2 ? macdSeries[macdSeries.length - 2] - (macdSeries.length >= 10 ? emaCalc(macdSeries.slice(-19, -1), 9) : macdSeries[macdSeries.length - 2] * 0.8) : 0;
  let trend = 'flat';
  if (histogram > 0 && histogram > prevHist) trend = 'bullish';
  else if (histogram > 0 && histogram <= prevHist) trend = 'weakening';
  else if (histogram < 0 && histogram < prevHist) trend = 'bearish';
  else if (histogram < 0 && histogram >= prevHist) trend = 'recovering';
  return { macd: macdLine, signal: signalLine, histogram, trend };
}

function calcBollingerBands(prices, period = 20) {
  if (prices.length < period) return { upper: 0, middle: 0, lower: 0, percentB: 50 };
  const slice = prices.slice(-period);
  const middle = slice.reduce((a, b) => a + b, 0) / period;
  const variance = slice.reduce((sum, p) => sum + Math.pow(p - middle, 2), 0) / period;
  const std = Math.sqrt(variance);
  const upper = middle + 2 * std;
  const lower = middle - 2 * std;
  const current = prices[prices.length - 1];
  const percentB = upper !== lower ? ((current - lower) / (upper - lower)) * 100 : 50;
  return { upper, middle, lower, percentB };
}


function calcStochastic(prices, highs, lows, kPeriod = 14, dPeriod = 3) {
  if (prices.length < kPeriod || highs.length < kPeriod || lows.length < kPeriod) {
    return { k: 50, d: 50 };
  }
  // %K 시리즈 생성
  const kSeries = [];
  for (let i = kPeriod - 1; i < prices.length; i++) {
    const periodHighs = highs.slice(i - kPeriod + 1, i + 1);
    const periodLows = lows.slice(i - kPeriod + 1, i + 1);
    const highest = Math.max(...periodHighs);
    const lowest = Math.min(...periodLows.filter(v => v > 0));
    const close = prices[i];
    const k = highest !== lowest ? ((close - lowest) / (highest - lowest)) * 100 : 50;
    kSeries.push(k);
  }
  // %D = %K의 dPeriod 이동평균
  const k = kSeries[kSeries.length - 1];
  const d = kSeries.length >= dPeriod
    ? kSeries.slice(-dPeriod).reduce((a, b) => a + b, 0) / dPeriod
    : k;
  return { k: Math.round(k * 10) / 10, d: Math.round(d * 10) / 10 };
}

function calcVolatility(prices, period = 20) {
  if (prices.length < period + 1) return 0;
  const returns = [];
  for (let i = prices.length - period; i < prices.length; i++) {
    if (prices[i - 1] > 0) returns.push((prices[i] - prices[i - 1]) / prices[i - 1]);
  }
  const mean = returns.reduce((a, b) => a + b, 0) / returns.length;
  const variance = returns.reduce((sum, r) => sum + Math.pow(r - mean, 2), 0) / returns.length;
  return Math.sqrt(variance) * Math.sqrt(252) * 100; // annualized %
}


// ══════════════════════════════════════
// 5b. ENTRY TIMING SCORE (ETS) ENGINE
// ══════════════════════════════════════
function calcEntryTiming(data, indicators) {
  const { rsi, bb, sma5, sma20, sma60, sma120, currentPrice, volatility, macd } = indicators;
  const prices = data.prices;
  let score = 50;
  const signals = [];

  // ── 1. 52주 고점 대비 눌림 정도 ──
  if (data.high52w > 0 && data.low52w > 0) {
    const fromHigh = ((data.high52w - currentPrice) / data.high52w) * 100;
    const range52 = (currentPrice - data.low52w) / (data.high52w - data.low52w) * 100;
    if (fromHigh >= 15 && fromHigh <= 30) {
      score += 15;
      signals.push({ text: '52주 고점 대비 ' + fromHigh.toFixed(0) + '% 눌림 → 저가 매수 구간', type: 'positive' });
    } else if (fromHigh >= 8 && fromHigh < 15) {
      score += 8;
      signals.push({ text: '52주 고점 대비 ' + fromHigh.toFixed(0) + '% 조정 → 진입 가능', type: 'positive' });
    } else if (fromHigh > 30 && fromHigh <= 45) {
      score += 5;
      signals.push({ text: '52주 고점 대비 ' + fromHigh.toFixed(0) + '% 하락 → 저가이나 리스크 동반', type: 'neutral' });
    } else if (fromHigh > 45) {
      score -= 8;
      signals.push({ text: '52주 고점 대비 ' + fromHigh.toFixed(0) + '% 급락 → 구조적 하락 의심', type: 'negative' });
    } else if (fromHigh < 3) {
      score -= 15;
      signals.push({ text: '52주 신고가 근접 → 고점 추격 매수 위험', type: 'negative' });
    } else {
      // 3~8% — mild
      score += 2;
    }
  }

  // ── 2. RSI 과매도/과매수 ──
  if (rsi <= 25) {
    score += 18;
    signals.push({ text: 'RSI ' + rsi.toFixed(0) + ' 극단적 과매도 → 강한 반등 매수 시그널', type: 'positive' });
  } else if (rsi <= 35) {
    score += 14;
    signals.push({ text: 'RSI ' + rsi.toFixed(0) + ' 과매도 구간 → 매수 유리', type: 'positive' });
  } else if (rsi <= 45) {
    score += 8;
    signals.push({ text: 'RSI ' + rsi.toFixed(0) + ' 중립 하단 → 진입 적정', type: 'neutral' });
  } else if (rsi <= 55) {
    score += 2;
  } else if (rsi <= 65) {
    score -= 3;
  } else if (rsi <= 75) {
    score -= 10;
    signals.push({ text: 'RSI ' + rsi.toFixed(0) + ' 과매수 접근 → 진입 시 고점 물릴 위험', type: 'negative' });
  } else {
    score -= 18;
    signals.push({ text: 'RSI ' + rsi.toFixed(0) + ' 극단 과매수 → 절대 진입 금지 구간', type: 'negative' });
  }

  // ── 3. 볼린저밴드 위치 ──
  if (bb.percentB <= 10) {
    score += 15;
    signals.push({ text: '볼린저밴드 하단 이탈 → 반등 매수 시그널', type: 'positive' });
  } else if (bb.percentB <= 25) {
    score += 10;
    signals.push({ text: '볼린저밴드 하단 근접 → 저가 매수 구간', type: 'positive' });
  } else if (bb.percentB >= 90) {
    score -= 13;
    signals.push({ text: '볼린저밴드 상단 이탈 → 과열, 진입 위험', type: 'negative' });
  } else if (bb.percentB >= 75) {
    score -= 6;
    signals.push({ text: '볼린저밴드 상단 접근 → 단기 부담', type: 'negative' });
  }

  // ── 4. 단기 눌림목 (5일 수익률) ──
  if (prices.length >= 5) {
    const p5ago = prices[prices.length - 5];
    const ret5 = p5ago > 0 ? ((currentPrice - p5ago) / p5ago) * 100 : 0;
    const aboveLongMA = sma120 ? currentPrice > sma120 : (sma60 ? currentPrice > sma60 : false);

    if (ret5 <= -5 && ret5 > -12 && aboveLongMA) {
      score += 14;
      signals.push({ text: '5일간 ' + ret5.toFixed(1) + '% 눌림 (장기추세↑ 유지) → 매수 적기', type: 'positive' });
    } else if (ret5 <= -3 && ret5 > -5 && aboveLongMA) {
      score += 8;
      signals.push({ text: '5일간 ' + ret5.toFixed(1) + '% 소폭 눌림 → 진입 양호', type: 'positive' });
    } else if (ret5 <= -12) {
      score -= 5;
      signals.push({ text: '5일간 ' + ret5.toFixed(1) + '% 급락 → 패닉 구간, 신중', type: 'negative' });
    } else if (ret5 >= 8) {
      score -= 14;
      signals.push({ text: '5일간 +' + ret5.toFixed(1) + '% 급등 → 단기 과열, 진입 불리', type: 'negative' });
    } else if (ret5 >= 4) {
      score -= 6;
      signals.push({ text: '5일간 +' + ret5.toFixed(1) + '% 상승 → 이미 올라, 소폭 부담', type: 'negative' });
    }
  }

  // ── 5. 20일 이평선 이격도 ──
  if (sma20 && currentPrice > 0) {
    const dev = ((currentPrice - sma20) / sma20) * 100;
    if (dev <= -8 && dev > -20) {
      score += 10;
      signals.push({ text: '20일선 대비 ' + dev.toFixed(1) + '% 이격 → 복귀 매수 기회', type: 'positive' });
    } else if (dev <= -3 && dev > -8) {
      score += 5;
      signals.push({ text: '20일선 살짝 아래 → 평균 복귀 기대', type: 'neutral' });
    } else if (dev >= 10) {
      score -= 10;
      signals.push({ text: '20일선 대비 +' + dev.toFixed(1) + '% 과이격 → 평균회귀 하락 위험', type: 'negative' });
    } else if (dev >= 5) {
      score -= 4;
      signals.push({ text: '20일선 위 ' + dev.toFixed(1) + '% → 소폭 과열', type: 'neutral' });
    }
  }

  // ── 6. MACD 추세 + 골든/데드크로스 ──
  if (macd) {
    if (macd.trend === 'recovering') {
      score += 10;
      signals.push({ text: 'MACD 히스토그램 반등 → 하락 둔화, 반전 초기', type: 'positive' });
    } else if (macd.histogram > 0 && macd.macd < 0) {
      score += 8;
      signals.push({ text: 'MACD 골든크로스 진행 → 상승 전환 시그널', type: 'positive' });
    } else if (macd.trend === 'bullish') {
      score += 3;
    } else if (macd.trend === 'weakening') {
      score -= 5;
      signals.push({ text: 'MACD 모멘텀 약화 → 상승 탄력 둔화', type: 'neutral' });
    } else if (macd.trend === 'bearish') {
      score -= 8;
      signals.push({ text: 'MACD 하락 가속 → 추가 하락 가능', type: 'negative' });
    } else if (macd.histogram < 0 && macd.macd > 0) {
      score -= 6;
      signals.push({ text: 'MACD 데드크로스 진행 → 하락 전환 주의', type: 'negative' });
    }
  }

  // ── 6b. 스토캐스틱 오실레이터 ──
  const stoch = indicators.stoch;
  if (stoch) {
    if (stoch.k <= 20 && stoch.d <= 25) {
      score += 10;
      signals.push({ text: '스토캐스틱 ' + stoch.k.toFixed(0) + '/' + stoch.d.toFixed(0) + ' 과매도 → 반등 매수 시그널', type: 'positive' });
    } else if (stoch.k <= 30 && stoch.k > stoch.d) {
      score += 6;
      signals.push({ text: '스토캐스틱 골든크로스 (저점) → 매수 신호', type: 'positive' });
    } else if (stoch.k >= 80 && stoch.d >= 75) {
      score -= 8;
      signals.push({ text: '스토캐스틱 ' + stoch.k.toFixed(0) + '/' + stoch.d.toFixed(0) + ' 과매수 → 고점 매수 위험', type: 'negative' });
    } else if (stoch.k >= 70 && stoch.k < stoch.d) {
      score -= 5;
      signals.push({ text: '스토캐스틱 데드크로스 (고점) → 하락 전환 주의', type: 'negative' });
    }
  }

  // ── 7. 거래량 분석 (하락 시 거래량 체크) ──
  if (prices.length >= 25 && data.volumes && data.volumes.length >= 25) {
    const recentRet = currentPrice - prices[prices.length - 5];
    if (recentRet < 0) {
      const recentAvgVol = data.volumes.slice(-5).reduce((a,b) => a+b, 0) / 5;
      const prevAvgVol = data.volumes.slice(-25, -5).reduce((a,b) => a+b, 0) / 20;
      if (prevAvgVol > 0) {
        const volR = recentAvgVol / prevAvgVol;
        if (volR < 0.7) {
          score += 6;
          signals.push({ text: '하락 시 거래량 감소 → 매도 압력 약함 (건전한 조정)', type: 'positive' });
        } else if (volR > 2.5) {
          score -= 6;
          signals.push({ text: '하락 시 거래량 폭증 → 투매 가능성', type: 'negative' });
        }
      }
    }
  }

  const ets = Math.max(0, Math.min(100, Math.round(score)));

  let etsGrade, etsClass, etsDesc;
  if (ets >= 75) {
    etsGrade = '매수 적기';
    etsClass = 'ets-buy';
    etsDesc = '차트 지표가 매수에 매우 유리한 구간입니다. 분할 진입을 적극 고려하세요.';
  } else if (ets >= 60) {
    etsGrade = '진입 양호';
    etsClass = 'ets-good';
    etsDesc = '무난한 진입 구간입니다. 소량 매수 후 추가 매수 전략을 권합니다.';
  } else if (ets >= 45) {
    etsGrade = '중립';
    etsClass = 'ets-neutral';
    etsDesc = '뚜렷한 매수 시그널이 부족합니다. 눌림을 기다리거나 관망하세요.';
  } else if (ets >= 30) {
    etsGrade = '진입 불리';
    etsClass = 'ets-bad';
    etsDesc = '단기 과열 또는 하락 모멘텀 구간입니다. 지금 사면 고점에 물릴 수 있습니다.';
  } else {
    etsGrade = '진입 위험';
    etsClass = 'ets-danger';
    etsDesc = '지금 매수는 높은 위험을 수반합니다. 확실한 반전 신호를 확인한 후 진입하세요.';
  }

  return { score: ets, grade: etsGrade, gradeClass: etsClass, desc: etsDesc, signals };
}

// ══════════════════════════════════════
// 6. 8-STEP ANALYSIS FRAMEWORK
// ══════════════════════════════════════
function analyze(data) {
  const prices = data.prices;
  const volumes = data.volumes;

  // ── STEP 1: Collect market data ──
  const sma5 = calcSMA(prices, 5);
  const sma20 = calcSMA(prices, 20);
  const sma60 = calcSMA(prices, 60);
  const sma120 = calcSMA(prices, 120);
  const rsi = calcRSI(prices);
  const macd = calcMACD(prices);
  const bb = calcBollingerBands(prices);
  const volatility = calcVolatility(prices);
  const currentPrice = data.price || (prices.length > 0 ? prices[prices.length - 1] : 0);

  const stoch = calcStochastic(prices, data.highs || prices, data.lows || prices);
  const indicators = { sma5, sma20, sma60, sma120, rsi, macd, bb, volatility, currentPrice, stoch };

  // ── STEP 2: Market phase diagnosis ──
  let phase = 'sideways'; // 상승, 횡보, 하락, 반등
  let phaseKR = '횡보';
  let phaseClass = 'sideways';

  if (sma5 && sma20 && sma60) {
    const shortAboveMid = sma5 > sma20;
    const midAboveLong = sma20 > (sma60 || sma20);
    const priceAboveShort = currentPrice > sma5;

    if (priceAboveShort && shortAboveMid && midAboveLong) {
      phase = 'uptrend'; phaseKR = '상승 추세'; phaseClass = 'uptrend';
    } else if (!priceAboveShort && !shortAboveMid && !midAboveLong) {
      phase = 'downtrend'; phaseKR = '하락 추세'; phaseClass = 'downtrend';
    } else if (!shortAboveMid && priceAboveShort && rsi > 40) {
      phase = 'rebound'; phaseKR = '반등 국면'; phaseClass = 'rebound';
    } else {
      phase = 'sideways'; phaseKR = '횡보 국면'; phaseClass = 'sideways';
    }
  }

  // ── STEP 3: Weight adjustment by phase ──
  const weights = { value: 20, growth: 20, momentum: 20, supply: 20, technical: 20 };
  if (phase === 'uptrend') {
    weights.momentum = 30; weights.technical = 25; weights.value = 15; weights.growth = 15; weights.supply = 15;
  } else if (phase === 'downtrend') {
    weights.value = 30; weights.supply = 10; weights.technical = 25; weights.momentum = 15; weights.growth = 20;
  } else if (phase === 'rebound') {
    weights.technical = 30; weights.momentum = 25; weights.value = 20; weights.growth = 15; weights.supply = 10;
  }

  // ── STEP 4: Scoring per category ──
  const scores = {};

  // Value Score (PER, PBR, 52w position)
  let valueScore = 50;
  if (data.per > 0) {
    if (data.per < 8) valueScore += 20;
    else if (data.per < 15) valueScore += 10;
    else if (data.per < 25) valueScore += 0;
    else if (data.per < 40) valueScore -= 10;
    else valueScore -= 20;
  }
  if (data.pbr > 0) {
    if (data.pbr < 1) valueScore += 10;
    else if (data.pbr < 2) valueScore += 5;
    else if (data.pbr > 5) valueScore -= 10;
  }
  if (data.high52w > 0 && data.low52w > 0) {
    const range52 = (currentPrice - data.low52w) / (data.high52w - data.low52w);
    if (range52 < 0.3) valueScore += 10;  // near 52w low = value
    else if (range52 > 0.9) valueScore -= 10; // near 52w high = expensive
  }
  if (data.targetPrice > 0 && currentPrice > 0) {
    const upside = ((data.targetPrice - currentPrice) / currentPrice) * 100;
    if (upside > 30) valueScore += 15;
    else if (upside > 15) valueScore += 10;
    else if (upside > 0) valueScore += 5;
    else valueScore -= 5;
  }
  scores.value = Math.max(0, Math.min(100, valueScore));

  // Growth Score (EPS, price momentum)
  let growthScore = 50;
  if (prices.length >= 60) {
    const price60ago = prices[prices.length - 60];
    const priceGrowth = price60ago > 0 ? ((currentPrice - price60ago) / price60ago) * 100 : 0;
    if (priceGrowth > 20) growthScore += 20;
    else if (priceGrowth > 10) growthScore += 15;
    else if (priceGrowth > 0) growthScore += 5;
    else if (priceGrowth > -10) growthScore -= 5;
    else growthScore -= 15;
  }
  if (data.eps > 0) growthScore += 10;
  scores.growth = Math.max(0, Math.min(100, growthScore));

  // Momentum Score (RSI, MACD, Bollinger)
  let momentumScore = 50;
  if (rsi > 60 && rsi < 75) momentumScore += 15;
  else if (rsi >= 50 && rsi <= 60) momentumScore += 10;
  else if (rsi > 75) momentumScore -= 10;
  else if (rsi < 30) momentumScore += 5; // oversold = potential rebound
  else momentumScore -= 5;

  if (macd.trend === 'bullish') momentumScore += 12;
  else if (macd.trend === 'recovering') momentumScore += 6;
  else if (macd.histogram > 0) momentumScore += 8;
  else if (macd.trend === 'weakening') momentumScore -= 3;
  else if (macd.trend === 'bearish') momentumScore -= 8;
  else momentumScore -= 5;

  if (bb.percentB > 30 && bb.percentB < 70) momentumScore += 5;
  else if (bb.percentB > 90) momentumScore -= 10;
  // 스토캐스틱 반영
  if (stoch.k <= 20) momentumScore += 5; // 과매도 = 반등 모멘텀 가능
  else if (stoch.k >= 80) momentumScore -= 5; // 과매수 = 모멘텀 소진
  scores.momentum = Math.max(0, Math.min(100, momentumScore));

  // Supply/Demand Score (Volume)
  let supplyScore = 50;
  if (data.volume > 0 && data.avgVolume > 0) {
    const volRatio = data.volume / data.avgVolume;
    if (volRatio > 2 && data.change > 0) supplyScore += 20;
    else if (volRatio > 1.5 && data.change > 0) supplyScore += 15;
    else if (volRatio > 1 && data.change > 0) supplyScore += 5;
    else if (volRatio > 2 && data.change < 0) supplyScore -= 15;
    else if (volRatio < 0.5) supplyScore -= 5;
  }
  scores.supply = Math.max(0, Math.min(100, supplyScore));

  // Technical Score (SMA alignment, trend)
  let techScore = 50;
  if (sma5 && currentPrice > sma5) techScore += 5;
  if (sma20 && currentPrice > sma20) techScore += 10;
  if (sma60 && currentPrice > sma60) techScore += 10;
  if (sma120 && currentPrice > sma120) techScore += 10;
  if (sma5 && sma20 && sma5 > sma20) techScore += 5; // golden cross tendency
  if (sma5 && sma20 && sma5 < sma20) techScore -= 5; // death cross tendency

  if (volatility < 20) techScore += 5; // stable
  else if (volatility > 50) techScore -= 10; // very volatile
  scores.technical = Math.max(0, Math.min(100, techScore));

  // ── STEP 4b: Entry Timing Score ──
  const entryTiming = calcEntryTiming(data, indicators);

  // ── STEP 5: TSS Calculation ──
  const totalWeight = weights.value + weights.growth + weights.momentum + weights.supply + weights.technical;
  const tss = (
    scores.value * weights.value +
    scores.growth * weights.growth +
    scores.momentum * weights.momentum +
    scores.supply * weights.supply +
    scores.technical * weights.technical
  ) / totalWeight;

  const tssRounded = Math.round(tss * 10) / 10;

  // Grade
  let grade, gradeDesc, gradeClass;
  if (tssRounded >= 80) { grade = 'A'; gradeDesc = '적극 매수 구간'; gradeClass = 'grade-a'; }
  else if (tssRounded >= 65) { grade = 'B'; gradeDesc = '매수 유리 구간'; gradeClass = 'grade-b'; }
  else if (tssRounded >= 50) { grade = 'C'; gradeDesc = '관망 구간'; gradeClass = 'grade-c'; }
  else if (tssRounded >= 35) { grade = 'D'; gradeDesc = '매도 고려 구간'; gradeClass = 'grade-d'; }
  else { grade = 'F'; gradeDesc = '매도 / 회피 구간'; gradeClass = 'grade-f'; }

  // ── STEP 6: Filter checks ──
  const filters = [];

  // 급락 경고
  const recentDrop = prices.length >= 5 ? ((currentPrice - prices[prices.length - 5]) / prices[prices.length - 5]) * 100 : 0;
  filters.push({
    name: '급락 경고',
    pass: recentDrop > -10,
    detail: recentDrop <= -10 ? `5일간 ${recentDrop.toFixed(1)}% 하락` : '최근 급락 없음'
  });

  // 거래량 이상
  const volSpike = data.avgVolume > 0 ? data.volume / data.avgVolume : 1;
  const volAnomaly = volSpike > 5 && data.change < 0;
  filters.push({
    name: '거래량 이상',
    pass: !volAnomaly,
    detail: volAnomaly ? `거래량 ${volSpike.toFixed(1)}배 급증 + 하락` : '정상 범위'
  });

  // 과대평가
  const overvalued = data.per > 60 || data.pbr > 10;
  filters.push({
    name: '과대평가',
    pass: !overvalued,
    detail: overvalued ? `PER ${data.per.toFixed(1)} / PBR ${data.pbr.toFixed(1)}` : '적정 수준'
  });

  // 추세 이탈
  const trendBreak = sma60 && currentPrice < sma60 * 0.9;
  filters.push({
    name: '추세 이탈',
    pass: !trendBreak,
    detail: trendBreak ? '60일 이평선 대비 10% 이상 하락' : '추세 유지'
  });

  // 변동성 과다
  const highVol = volatility > 60;
  filters.push({
    name: '변동성 과다',
    pass: !highVol,
    detail: highVol ? `연간 변동성 ${volatility.toFixed(1)}%` : `변동성 ${volatility.toFixed(1)}%`
  });

  const failedFilters = filters.filter(f => !f.pass).length;

  // ── STEP 7: Verdict (TSS × ETS 교차 판단) ──
  const ets = entryTiming.score;
  let verdict, verdictClass, verdictTitle, verdictReason;

  if (failedFilters >= 3) {
    verdict = 'avoid'; verdictClass = 'avoid';
    verdictTitle = '🚫 매매 회피 권고';
    verdictReason = `경고 필터 ${failedFilters}개 작동. 현재 진입은 위험합니다. 안정화 이후 재검토를 권합니다.`;
  } else if (failedFilters >= 2) {
    verdict = 'wait'; verdictClass = 'wait';
    verdictTitle = '⏸ 관망 권고';
    verdictReason = `경고 필터 ${failedFilters}개 감지. 추가 하락 가능성이 있어 관망을 권합니다.`;
  } else if (tssRounded >= 65 && ets >= 65) {
    verdict = 'buy'; verdictClass = 'buy';
    verdictTitle = '🟢 적극 매수 — 종목 우수 + 타이밍 양호';
    verdictReason = `종목 평가 ${tssRounded}점(${grade}등급) + 진입 타이밍 ${ets}점. 펀더멘탈과 차트 모두 매수에 유리합니다. 분할 매수를 적극 고려하세요.`;
  } else if (tssRounded >= 60 && ets >= 55) {
    verdict = 'buy'; verdictClass = 'buy';
    verdictTitle = '✅ 매수 추천';
    verdictReason = `종목 평가 ${tssRounded}점(${grade}등급), 진입 타이밍 ${ets}점. 양호한 진입 구간입니다. 소량부터 분할 매수를 시작하세요.`;
  } else if (tssRounded >= 65 && ets < 40) {
    verdict = 'wait'; verdictClass = 'wait';
    verdictTitle = '⏸ 좋은 종목, 타이밍 대기';
    verdictReason = `종목 자체는 우수(TSS ${tssRounded}점)하나, 진입 타이밍이 불리합니다(ETS ${ets}점). 이미 많이 올랐을 가능성이 높습니다. 눌림목을 기다리세요.`;
  } else if (tssRounded >= 55 && ets >= 65) {
    verdict = 'buy'; verdictClass = 'buy';
    verdictTitle = '✅ 타이밍 매수 — 눌림목 진입 기회';
    verdictReason = `종목 평가 보통(TSS ${tssRounded}점)이나, 차트가 매수 적기를 가리킵니다(ETS ${ets}점). 눌림목 반등을 노린 소량 진입을 고려하세요.`;
  } else if (tssRounded >= 55 && ets >= 45) {
    verdict = 'hold'; verdictClass = 'hold';
    verdictTitle = '📊 보유 유지 / 소량 매수';
    verdictReason = `TSS ${tssRounded}점, ETS ${ets}점. 보유 중이라면 유지하되, 신규 진입은 소량으로만.`;
  } else if (tssRounded < 40) {
    verdict = 'avoid'; verdictClass = 'avoid';
    verdictTitle = '🚫 매도 / 회피 권고';
    verdictReason = `TSS ${tssRounded}점(${grade}등급). 종목 자체가 약합니다. 보유 중이라면 비중 축소를 검토하세요.`;
  } else if (tssRounded < 50 && ets >= 70) {
    verdict = 'wait'; verdictClass = 'wait';
    verdictTitle = '⏸ 저점이나 종목 약함';
    verdictReason = `차트상 저점 구간(ETS ${ets}점)이나, 종목 자체가 약합니다(TSS ${tssRounded}점). 펀더멘탈 개선 확인 후 진입하세요.`;
  } else {
    verdict = 'wait'; verdictClass = 'wait';
    verdictTitle = '⏸ 관망 권고';
    verdictReason = `TSS ${tssRounded}점, ETS ${ets}점. 매수 시그널이 불충분합니다. 추세 전환 또는 눌림을 기다리세요.`;
  }

  // ── STEP 8: Final Report ──
  const report = generateReport(data, { tss: tssRounded, grade, phase: phaseKR, scores, weights, filters, verdict, verdictTitle, indicators, entryTiming });

  return {
    data, tss: tssRounded, grade, gradeDesc, gradeClass,
    phase, phaseKR, phaseClass,
    scores, weights, indicators,
    filters, failedFilters,
    verdict, verdictClass, verdictTitle, verdictReason,
    entryTiming,
    report
  };
}

function generateReport(data, a) {
  const formatNum = (n) => {
    if (!n) return '-';
    if (n >= 1e12) return (n / 1e12).toFixed(1) + '조';
    if (n >= 1e8) return (n / 1e8).toFixed(0) + '억';
    if (n >= 1e4) return (n / 1e4).toFixed(0) + '만';
    return n.toLocaleString();
  };

  const formatPrice = (p, currency) => {
    if (!p) return '-';
    if (currency === 'KRW') return p.toLocaleString() + '원';
    return '$' + p.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  let lines = [];
  lines.push(`■ ${data.name} 종합 분석 리포트`);
  lines.push(`분석 시각: ${new Date().toLocaleString('ko-KR')}`);
  lines.push('');
  lines.push(`현재가: ${formatPrice(data.price, data.currency)} (${data.changePercent >= 0 ? '+' : ''}${data.changePercent.toFixed(2)}%)`);
  if (data.marketCap) lines.push(`시가총액: ${formatNum(data.marketCap)}`);
  if (data.per) lines.push(`PER: ${data.per.toFixed(1)}배`);
  if (data.pbr) lines.push(`PBR: ${data.pbr.toFixed(2)}배`);
  if (data.high52w) lines.push(`52주 고가: ${formatPrice(data.high52w, data.currency)}`);
  if (data.low52w) lines.push(`52주 저가: ${formatPrice(data.low52w, data.currency)}`);
  if (data.targetPrice) lines.push(`컨센서스 목표가: ${formatPrice(data.targetPrice, data.currency)}`);
  lines.push('');
  lines.push(`시장 국면: ${a.phase}`);
  lines.push(`TSS 스코어: ${a.tss}점 (${a.grade}등급)`);
  lines.push('');
  lines.push(`[카테고리별 점수]`);
  lines.push(`  가치(Value): ${a.scores.value}점 (가중치 ${a.weights.value}%)`);
  lines.push(`  성장(Growth): ${a.scores.growth}점 (가중치 ${a.weights.growth}%)`);
  lines.push(`  모멘텀(Momentum): ${a.scores.momentum}점 (가중치 ${a.weights.momentum}%)`);
  lines.push(`  수급(Supply): ${a.scores.supply}점 (가중치 ${a.weights.supply}%)`);
  lines.push(`  기술적(Technical): ${a.scores.technical}점 (가중치 ${a.weights.technical}%)`);
  lines.push('');
  lines.push(`[진입 타이밍 분석] ETS ${a.entryTiming ? a.entryTiming.score : '-'}점 (${a.entryTiming ? a.entryTiming.grade : '-'})`);
  if (a.entryTiming && a.entryTiming.signals) {
    for (const s of a.entryTiming.signals) {
      const icon = s.type === 'positive' ? '🟢' : s.type === 'negative' ? '🔴' : '🟡';
      lines.push(`  ${icon} ${s.text}`);
    }
  }
  lines.push('');
  lines.push(`[필터 체크]`);
  for (const f of a.filters) {
    lines.push(`  ${f.pass ? '✅' : '❌'} ${f.name}: ${f.detail}`);
  }
  lines.push('');
  lines.push(`[최종 판단] ${a.verdictTitle}`);
  lines.push('');
  lines.push('※ 본 분석은 AI 알고리즘에 의한 참고 자료이며, 투자 판단의 최종 책임은 투자자 본인에게 있습니다.');

  return lines.join('\n');
}

// ══════════════════════════════════════
// 7. UI RENDERING
// ══════════════════════════════════════
function renderResults(result) {
  const { data, tss, grade, gradeDesc, gradeClass, phaseKR, phaseClass,
          scores, weights, filters, verdictClass, verdictTitle, verdictReason, entryTiming, report } = result;

  const formatPrice = (p) => {
    if (!p) return '-';
    if (data.currency === 'KRW') return '₩' + p.toLocaleString();
    return '$' + p.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const scoreColor = (s) => {
    if (s >= 70) return 'green';
    if (s >= 55) return 'blue';
    if (s >= 40) return 'yellow';
    if (s >= 25) return 'orange';
    return 'red';
  };

  let html = '';

  // Stock Hero — 실시간 가격 갱신 대상
  html += `<div class="stock-hero">
    <div class="stock-hero-name">${data.name}</div>
    <div class="stock-hero-symbol">${data.symbol}</div>
    <div class="stock-hero-price" id="live-price">${formatPrice(data.price)}</div>
    <div class="stock-hero-change ${data.change >= 0 ? 'up' : 'down'}" id="live-change">
      ${data.change >= 0 ? '▲' : '▼'} ${Math.abs(data.change).toLocaleString()} (${data.changePercent >= 0 ? '+' : ''}${data.changePercent.toFixed(2)}%)
    </div>
    <div class="price-time" id="live-time"><span class="live-dot"></span> 실시간</div>
  </div>`;
  // 실시간 가격 갱신 시작
  startLivePriceRefresh(data.symbol, data.currency);

  // TSS Score
  html += `<div class="tss-score-section">
    <div class="tss-label">TSS (Total Smart Score)</div>
    <div class="tss-score-number ${gradeClass}">${tss}</div>
    <div class="tss-grade">${grade}등급</div>
    <div class="tss-grade-desc">${gradeDesc}</div>
  </div>`;

  // Verdict Banner
  html += `<div class="verdict-banner ${verdictClass}">
    <div class="verdict-title">${verdictTitle}</div>
    <div class="verdict-reason">${verdictReason}</div>
  </div>`;

  // Entry Timing Analysis Card (ETS)
  if (entryTiming) {
    const etsBarColor = entryTiming.score >= 65 ? 'var(--accent)' : entryTiming.score >= 45 ? 'var(--yellow)' : 'var(--red)';
    html += '<div class="analysis-card ets-card">';
    html += '<div class="analysis-card-title"><span class="card-icon">⏱</span> 진입 타이밍 분석 (ETS)</div>';
    html += '<div class="ets-score-section">';
    html += '<div class="ets-score-row">';
    html += '<div class="ets-gauge-wrap"><div class="ets-gauge-track"><div class="ets-gauge-fill" style="width:' + entryTiming.score + '%;background:' + etsBarColor + '"></div></div></div>';
    html += '<span class="ets-score-num">' + entryTiming.score + '</span>';
    html += '</div>';
    html += '<div class="ets-verdict ' + entryTiming.gradeClass + '">' + entryTiming.grade + '</div>';
    html += '<div class="ets-desc">' + entryTiming.desc + '</div>';
    html += '</div>';
    if (entryTiming.signals && entryTiming.signals.length > 0) {
      html += '<div class="ets-signals">';
      for (const sig of entryTiming.signals) {
        const dotClass = sig.type === 'positive' ? 'sig-positive' : sig.type === 'negative' ? 'sig-negative' : 'sig-neutral';
        html += '<div class="ets-signal-item ' + dotClass + '"><span class="sig-dot"></span>' + sig.text + '</div>';
      }
      html += '</div>';
    }
    html += '</div>';
  }

  // Market Phase Card
  html += `<div class="analysis-card">
    <div class="analysis-card-title"><span class="card-icon">📡</span> 시장 국면 진단</div>
    <div style="text-align:center;">
      <span class="phase-badge ${phaseClass}">${phaseKR}</span>
    </div>
    <div style="margin-top:14px; font-size:13px; color:var(--text-secondary); line-height:1.6;">
      ${getPhaseExplanation(phaseClass, data)}
    </div>
  </div>`;

  // Category Scores Card
  html += `<div class="analysis-card">
    <div class="analysis-card-title"><span class="card-icon">📊</span> 카테고리별 점수</div>
    ${renderScoreRow('가치', scores.value, weights.value, scoreColor)}
    ${renderScoreRow('성장', scores.growth, weights.growth, scoreColor)}
    ${renderScoreRow('모멘텀', scores.momentum, weights.momentum, scoreColor)}
    ${renderScoreRow('수급', scores.supply, weights.supply, scoreColor)}
    ${renderScoreRow('기술적', scores.technical, weights.technical, scoreColor)}
  </div>`;

  // Fundamental Info Card
  html += `<div class="analysis-card">
    <div class="analysis-card-title"><span class="card-icon">💰</span> 펀더멘탈 지표</div>
    <table class="metrics-table">
      <tr><th>지표</th><th>값</th></tr>
      ${data.per ? `<tr><td>PER (주가수익비율)</td><td>${data.per.toFixed(1)}배</td></tr>` : ''}
      ${data.pbr ? `<tr><td>PBR (주가순자산비율)</td><td>${data.pbr.toFixed(2)}배</td></tr>` : ''}
      ${data.eps ? `<tr><td>EPS (주당순이익)</td><td>${data.currency === 'KRW' ? data.eps.toLocaleString() + '원' : '$' + data.eps.toFixed(2)}</td></tr>` : ''}
      ${data.high52w ? `<tr><td>52주 최고가</td><td>${formatPrice(data.high52w)}</td></tr>` : ''}
      ${data.low52w ? `<tr><td>52주 최저가</td><td>${formatPrice(data.low52w)}</td></tr>` : ''}
      ${data.targetPrice ? `<tr><td>목표가 (컨센서스)</td><td>${formatPrice(data.targetPrice)}</td></tr>` : ''}
      <tr><td>거래량</td><td>${data.volume ? data.volume.toLocaleString() : '-'}</td></tr>
    </table>
  </div>`;

  // Technical Indicators Card
  const ind = result.indicators;
  html += `<div class="analysis-card">
    <div class="analysis-card-title"><span class="card-icon">📈</span> 기술적 지표</div>
    <table class="metrics-table">
      <tr><th>지표</th><th>값</th></tr>
      <tr><td>RSI (14)</td><td>${ind.rsi.toFixed(1)}</td></tr>
      <tr><td>MACD / 시그널</td><td>${ind.macd.macd.toFixed(1)} / ${ind.macd.signal.toFixed(1)}</td></tr>
      <tr><td>볼린저 %B</td><td>${ind.bb.percentB.toFixed(1)}%</td></tr>
      ${ind.sma5 ? `<tr><td>5일 이평선</td><td>${formatPrice(ind.sma5)}</td></tr>` : ''}
      ${ind.sma20 ? `<tr><td>20일 이평선</td><td>${formatPrice(ind.sma20)}</td></tr>` : ''}
      ${ind.sma60 ? `<tr><td>60일 이평선</td><td>${formatPrice(ind.sma60)}</td></tr>` : ''}
      <tr><td>연간 변동성</td><td>${ind.volatility.toFixed(1)}%</td></tr>
      ${ind.stoch ? '<tr><td>스토캐스틱 %K/%D</td><td>' + ind.stoch.k.toFixed(1) + ' / ' + ind.stoch.d.toFixed(1) + '</td></tr>' : ''}
      <tr><td>MACD 추세</td><td>${ind.macd.trend === 'bullish' ? '🟢 강세' : ind.macd.trend === 'recovering' ? '🔵 회복' : ind.macd.trend === 'weakening' ? '🟡 약화' : ind.macd.trend === 'bearish' ? '🔴 약세' : '⚪ 중립'}</td></tr>
    </table>
  </div>`;

  // Filter Check Card
  html += `<div class="analysis-card">
    <div class="analysis-card-title"><span class="card-icon">🛡</span> 안전 필터 체크</div>
    <div class="filter-grid">
      ${filters.map(f => `
        <div class="filter-item ${f.pass ? 'pass' : 'fail'}">
          <span>${f.name}: ${f.detail}</span>
          <span class="filter-icon">${f.pass ? '✅' : '❌'}</span>
        </div>
      `).join('')}
    </div>
  </div>`;

  // Final Report Card
  html += `<div class="analysis-card">
    <div class="analysis-card-title"><span class="card-icon">📋</span> 종합 리포트</div>
    <div class="report-text">${report.replace(/\n/g, '<br>')}</div>
  </div>`;

  // Timestamp
  html += `<div class="analysis-timestamp">분석 완료: ${new Date().toLocaleString('ko-KR')} | 행운의서동이 AI</div>`;

  document.getElementById('results-content').innerHTML = html;
}

function renderScoreRow(label, score, weight, colorFn) {
  return `<div class="score-row">
    <span class="score-label">${label} (${weight}%)</span>
    <div class="score-bar"><div class="score-bar-fill ${colorFn(score)}" style="width:${score}%"></div></div>
    <span class="score-value">${score}</span>
  </div>`;
}

function getPhaseExplanation(phase, data) {
  const name = data.name;
  if (phase === 'uptrend') return `${name}은(는) 현재 <strong>상승 추세</strong>입니다. 단기·중기 이동평균이 정배열 상태이며, 추세 지속 가능성이 높습니다. 조정 시 분할 매수를 고려해볼 수 있습니다.`;
  if (phase === 'downtrend') return `${name}은(는) 현재 <strong>하락 추세</strong>입니다. 이동평균 역배열 상태로 추세 반전 확인 전까지 신규 매수는 신중해야 합니다.`;
  if (phase === 'rebound') return `${name}은(는) 현재 <strong>반등 국면</strong>입니다. 하락 후 기술적 반등이 진행 중이나, 추세 전환 여부는 추가 확인이 필요합니다.`;
  return `${name}은(는) 현재 <strong>횡보 국면</strong>입니다. 뚜렷한 방향성 없이 일정 범위 내에서 움직이고 있습니다. 돌파 방향을 확인한 후 진입을 권합니다.`;
}

// ══════════════════════════════════════
// 8. UI CONTROLLERS
// ══════════════════════════════════════
const searchScreen = document.getElementById('search-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultsScreen = document.getElementById('results-screen');
const errorOverlay = document.getElementById('error-overlay');
const stockInput = document.getElementById('stock-input');
const searchBtn = document.getElementById('search-btn');
const backBtn = document.getElementById('back-btn');
const suggestionsDiv = document.getElementById('suggestions');
const errorMessage = document.getElementById('error-message');
const errorCloseBtn = document.getElementById('error-close-btn');

function showScreen(screen) {
  searchScreen.classList.add('hidden');
  loadingScreen.classList.add('hidden');
  resultsScreen.classList.add('hidden');
  var s1 = document.getElementById('top20-scan-screen');
  var s2 = document.getElementById('top20-results-screen');
  if (s1) s1.classList.add('hidden');
  if (s2) s2.classList.add('hidden');
  screen.classList.remove('hidden');
  window.scrollTo(0, 0);
}

function showError(msg) {
  errorMessage.textContent = msg;
  errorOverlay.classList.remove('hidden');
}

errorCloseBtn.addEventListener('click', () => {
  errorOverlay.classList.add('hidden');
});

// Loading animation
async function animateLoading(name) {
  document.getElementById('loading-stock-name').textContent = `${name} 분석 중...`;
  const bar = document.getElementById('progress-bar');
  const steps = document.querySelectorAll('.load-step');

  bar.style.width = '0%';
  steps.forEach(s => { s.classList.remove('active', 'done'); });

  const stepTimings = [
    { pct: '15%', delay: 300 },
    { pct: '35%', delay: 500 },
    { pct: '55%', delay: 400 },
    { pct: '70%', delay: 400 },
    { pct: '85%', delay: 300 },
    { pct: '100%', delay: 200 },
  ];

  for (let i = 0; i < steps.length; i++) {
    steps[i].classList.add('active');
    bar.style.width = stepTimings[i].pct;
    await sleep(stepTimings[i].delay);
    steps[i].classList.remove('active');
    steps[i].classList.add('done');
  }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// Main analysis flow
// symbol을 이미 알 때 직접 분석 (검색 단계 생략)
async function runAnalysisDirect(symbol, name) {
  const isKR = symbol.endsWith('.KS') || symbol.endsWith('.KQ');
  return _runAnalysisCore({ symbol, name: name || symbol, isKorean: isKR });
}

async function runAnalysis(query) {
  const resolved = await resolveSymbol(query);
  return _runAnalysisCore(resolved);
}

async function _runAnalysisCore(resolved) {
  showScreen(loadingScreen);

  // Start animation
  const animPromise = animateLoading(resolved.name);

  try {
    const bundle = await fetchBundle(resolved.symbol);
    await animPromise; // wait for animation to finish

    const data = parseStockData(bundle);
    if (!data.price && data.prices.length === 0) {
      throw new Error('유효한 가격 데이터를 찾을 수 없습니다. 종목명을 확인해주세요.');
    }

    // If name wasn't resolved from DB, update from data
    if (!resolved.name || resolved.name === resolved.symbol) {
      resolved.name = data.name;
    }

    const result = analyze(data);
    showScreen(resultsScreen);
    renderResults(result);
  } catch (err) {
    console.error('Analysis failed:', err);
    showScreen(searchScreen);
    showError(err.message || '분석 중 오류가 발생했습니다. 다시 시도해주세요.');
  }
}

// Search button
searchBtn.addEventListener('click', () => {
  const q = stockInput.value.trim();
  if (q) runAnalysis(q);
});

// Enter key
stockInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const q = stockInput.value.trim();
    if (q) {
      suggestionsDiv.classList.add('hidden');
      runAnalysis(q);
    }
  }
});

// Back button
backBtn.addEventListener('click', () => {
  showScreen(searchScreen);
  stockInput.value = '';
  stockInput.focus();
});

// Quick tags
document.querySelectorAll('.quick-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    const sym = tag.dataset.symbol;
    const name = tag.textContent;
    stockInput.value = name;
    runAnalysis(name);
  });
});

// ══════════════════════════════════════
// 9. AUTOCOMPLETE SUGGESTIONS
// ══════════════════════════════════════
let selectedSuggestion = -1;

let searchTimer = null;
stockInput.addEventListener('input', () => {
  const q = stockInput.value.trim();
  if (q.length === 0) {
    suggestionsDiv.classList.add('hidden');
    return;
  }

  const matches = searchStocks(q);
  if (matches.length > 0) {
    showSuggestions(matches);
    return;
  }

  // US ticker
  if (isUSTicker(q) && q.length >= 1) {
    suggestionsDiv.innerHTML = `<div class="suggestion-item" data-name="${q.toUpperCase()}" data-symbol="${q.toUpperCase()}">
      <span class="suggestion-name">${q.toUpperCase()}</span>
      <span class="suggestion-code">US Stock</span>
    </div>`;
    suggestionsDiv.classList.remove('hidden');
    bindSuggestionClicks();
    selectedSuggestion = -1;
    return;
  }

  // DB에 없으면 Naver 검색 (타이핑 끝나고 300ms 후)
  if (searchTimer) clearTimeout(searchTimer);
  searchTimer = setTimeout(async () => {
    const naverResults = await searchNaver(q);
    if (naverResults.length > 0) {
      showSuggestions(naverResults);
    } else {
      suggestionsDiv.classList.add('hidden');
    }
  }, 300);
  selectedSuggestion = -1;
});

function showSuggestions(matches) {
  suggestionsDiv.innerHTML = matches.map(m => {
    const sym = m.symbol || `${m.code}.${m.market}`;
    const dispMarket = m.market || '';
    return `<div class="suggestion-item" data-name="${m.name}" data-symbol="${sym}">
      <span class="suggestion-name">${m.name}</span>
      <span class="suggestion-code">${m.code}${dispMarket ? ' · ' + dispMarket : ''}</span>
    </div>`;
  }).join('');
  suggestionsDiv.classList.remove('hidden');
  selectedSuggestion = -1;
  bindSuggestionClicks();
}

function bindSuggestionClicks() {
  suggestionsDiv.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', () => {
      const sym = item.dataset.symbol;
      const name = item.dataset.name || item.querySelector('.suggestion-name').textContent;
      stockInput.value = name;
      suggestionsDiv.classList.add('hidden');
      // symbol이 있으면 직접 사용 (검색 단계 생략)
      if (sym) {
        runAnalysisDirect(sym, name);
      } else {
        runAnalysis(name);
      }
    });
  });
}

// Arrow key navigation
stockInput.addEventListener('keydown', (e) => {
  const items = suggestionsDiv.querySelectorAll('.suggestion-item');
  if (items.length === 0 || suggestionsDiv.classList.contains('hidden')) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    selectedSuggestion = Math.min(selectedSuggestion + 1, items.length - 1);
    items.forEach((it, i) => it.classList.toggle('active', i === selectedSuggestion));
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    selectedSuggestion = Math.max(selectedSuggestion - 1, 0);
    items.forEach((it, i) => it.classList.toggle('active', i === selectedSuggestion));
  } else if (e.key === 'Enter' && selectedSuggestion >= 0) {
    e.preventDefault();
    const item = items[selectedSuggestion];
    const sym = item.dataset.symbol;
    const name = item.dataset.name || item.querySelector('.suggestion-name').textContent;
    stockInput.value = name;
    suggestionsDiv.classList.add('hidden');
    if (sym) {
      runAnalysisDirect(sym, name);
    } else {
      runAnalysis(name);
    }
  }
});

// Close suggestions on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-box-wrapper')) {
    suggestionsDiv.classList.add('hidden');
  }
});

// Focus input on page load
stockInput.focus();

// ══════════════════════════════════════
// VISITOR COUNTER (counterapi.dev)
// ══════════════════════════════════════
(async function initVisitorCounter() {
  try {
    const today = new Date().toISOString().split('T')[0].replace(/-/g, '');
    const key = `visit${today}`;
    const res = await fetch(`https://api.counterapi.dev/v1/power-seodong/${key}/up`);
    if (!res.ok) return;
    const data = await res.json();
    const count = data.count || data.value || 0;
    if (count > 0) {
      const html = `<span class="dot"></span>오늘 ${count.toLocaleString()}명 방문`;
      document.querySelectorAll('.visitor-count').forEach(el => {
        el.innerHTML = html;
        el.classList.add('active');
      });
    }
  } catch(e) { /* silent fail */ }
})();

// ══════════════════════════════════════
// LIVE PRICE REFRESH (15초마다 최신 가격)
// ══════════════════════════════════════
let _livePriceTimer = null;

function startLivePriceRefresh(symbol, currency) {
  // 기존 타이머 정리
  if (_livePriceTimer) clearInterval(_livePriceTimer);

  const fmt = (p) => {
    const num = parseFloat(String(p).replace(/,/g, ''));
    if (currency === 'KRW') return '₩' + num.toLocaleString();
    return '$' + num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  async function refresh() {
    try {
      const res = await fetch(`${API_BASE}/api/price?symbol=${encodeURIComponent(symbol)}`);
      if (!res.ok) return;
      const d = await res.json();

      const priceEl = document.getElementById('live-price');
      const changeEl = document.getElementById('live-change');
      const timeEl = document.getElementById('live-time');
      if (!priceEl) { clearInterval(_livePriceTimer); return; }

      const price = parseFloat(String(d.price).replace(/,/g, ''));
      const change = parseFloat(String(d.change).replace(/,/g, ''));
      const pct = parseFloat(d.changePercent);

      priceEl.textContent = fmt(price);
      changeEl.className = 'stock-hero-change ' + (change >= 0 ? 'up' : 'down');
      changeEl.textContent = `${change >= 0 ? '▲' : '▼'} ${Math.abs(change).toLocaleString()} (${pct >= 0 ? '+' : ''}${pct.toFixed(2)}%)`;

      const now = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const badge = d.isAfterHours ? ' 시간외' : '';
      timeEl.innerHTML = `<span class="live-dot"></span> ${now} 기준${badge}`;
    } catch (e) { /* silent */ }
  }

  // 즉시 1회 + 15초마다
  refresh();
  _livePriceTimer = setInterval(refresh, 15000);
}

// 결과 화면 벗어나면 타이머 정리
const _origShowScreen = showScreen;
showScreen = function(screen) {
  if (screen !== resultsScreen && _livePriceTimer) {
    clearInterval(_livePriceTimer);
    _livePriceTimer = null;
  }
  _origShowScreen(screen);
};

// ══════════════════════════════════════
// 11. TSS TOP 20 실시간 추천
// ══════════════════════════════════════

const top20ScanScreen = document.getElementById('top20-scan-screen');
const top20ResultsScreen = document.getElementById('top20-results-screen');
const scanProgressBar = document.getElementById('scan-progress-bar');
const scanProgressText = document.getElementById('scan-progress-text');
const scanLiveFeed = document.getElementById('scan-live-feed');
const top20TableWrap = document.getElementById('top20-table-wrap');
const top20UpdateTime = document.getElementById('top20-update-time');
const top20Countdown = document.getElementById('top20-countdown');

let _top20Timer = null;
let _countdownTimer = null;
let _top20Data = null;

// 중복 제거된 스캔 리스트 생성
function getUniqueScanList() {
  const seen = new Set();
  const list = [];
  for (const [name, info] of Object.entries(KOREAN_STOCKS)) {
    if (!seen.has(info.code)) {
      seen.add(info.code);
      list.push({ name, code: info.code, market: info.market });
    }
  }
  return list;
}

// quickscan API 호출
async function fetchQuickScan(code) {
  const res = await fetch(`${API_BASE}/api/quickscan?code=${code}`);
  if (!res.ok) return null;
  const data = await res.json();
  if (data.error) return null;
  return data;
}

// quickscan 데이터를 analyze() 호환 형식으로 변환
function parseScanData(scan, stock) {
  const chart = scan.chart || [];
  const prices = chart.map(c => c.close).filter(v => v > 0 && !isNaN(v));
  const volumes = chart.map(c => c.volume || 0);
  const highs = chart.map(c => c.high).filter(v => v > 0 && !isNaN(v));
  const lows = chart.map(c => c.low).filter(v => v > 0 && !isNaN(v));

  const recentVols = volumes.slice(-20);
  const avgVolume = recentVols.length > 0 ? recentVols.reduce((a, b) => a + b, 0) / recentVols.length : 0;

  return {
    name: scan.name,
    symbol: stock.code + '.' + stock.market,
    isKorean: true,
    price: scan.price || 0,
    prevClose: (scan.price || 0) - (scan.change || 0),
    change: scan.change || 0,
    changePercent: scan.changePercent || 0,
    volume: scan.volume || 0,
    avgVolume: avgVolume,
    high52w: scan.high52w || 0,
    low52w: scan.low52w || 0,
    marketCap: 0,
    per: scan.per || 0,
    pbr: scan.pbr || 0,
    eps: scan.eps || 0,
    targetPrice: scan.targetPrice || 0,
    prices: prices,
    volumes: volumes,
    highs: highs,
    lows: lows,
    currency: 'KRW'
  };
}

// 스캔 진행상황 업데이트
function updateScanProgress(done, total) {
  const pct = total > 0 ? (done / total * 100) : 0;
  scanProgressBar.style.width = pct + '%';
  scanProgressText.textContent = `${done} / ${total} 종목 분석 완료`;
}

// 라이브 피드에 종목 추가
function addScanFeedItem(name, tss, grade) {
  const item = document.createElement('div');
  item.className = 'scan-feed-item';
  item.innerHTML = `<span>${name}</span><span class="scan-feed-score ${grade.toLowerCase()}">${tss}점 ${grade}등급</span>`;
  scanLiveFeed.prepend(item);
  if (scanLiveFeed.children.length > 8) scanLiveFeed.lastChild.remove();
}

// 메인 스캔 실행
async function runTop20Scan() {
  showScreen(top20ScanScreen);
  scanLiveFeed.innerHTML = '';
  scanProgressBar.style.width = '0%';

  const scanList = getUniqueScanList();
  const batchSize = 6;
  const allResults = [];
  let done = 0;

  updateScanProgress(0, scanList.length);

  for (let i = 0; i < scanList.length; i += batchSize) {
    const batch = scanList.slice(i, i + batchSize);
    const promises = batch.map(s => fetchQuickScan(s.code).catch(() => null));
    const batchResults = await Promise.all(promises);

    for (let j = 0; j < batchResults.length; j++) {
      done++;
      const scanData = batchResults[j];
      if (!scanData) continue;

      const stock = batch[j];
      try {
        const data = parseScanData(scanData, stock);
        if (data.price > 0 && data.prices.length >= 20) {
          const result = analyze(data);
          const entry = {
            name: scanData.name || stock.name,
            code: stock.code,
            market: stock.market,
            symbol: stock.code + '.' + stock.market,
            price: data.price,
            change: data.change,
            changePercent: data.changePercent,
            tss: result.tss,
            grade: result.grade,
            gradeClass: result.gradeClass,
            phaseKR: result.phaseKR,
            verdict: result.verdict,
            verdictTitle: result.verdictTitle,
            entryTiming: result.entryTiming,
            per: data.per,
            pbr: data.pbr,
            scores: result.scores
          };
          allResults.push(entry);
          addScanFeedItem(entry.name, entry.tss, entry.grade);
        }
      } catch (e) {
        console.log('Scan skip:', stock.name, e.message);
      }
    }
    updateScanProgress(done, scanList.length);
    // 배치 간 100ms 딜레이 (네이버 부하 방지)
    if (i + batchSize < scanList.length) await new Promise(r => setTimeout(r, 100));
  }

  // TSS ≥ 45 필터 + TSS × ETS 교차 점수 정렬
  const viableResults = allResults.filter(r => r.tss >= 45);
  const sortTarget = viableResults.length >= 20 ? viableResults : allResults;
  sortTarget.sort((a, b) => {
    const scoreA = a.tss * 0.5 + (a.entryTiming ? a.entryTiming.score : 50) * 0.5;
    const scoreB = b.tss * 0.5 + (b.entryTiming ? b.entryTiming.score : 50) * 0.5;
    return scoreB - scoreA;
  });
  allResults.length = 0;
  allResults.push(...sortTarget);
  _top20Data = allResults;

  renderTop20Results(allResults.slice(0, 20), allResults.length);
  showScreen(top20ResultsScreen);
  startAutoRefreshTimer();
}

// TOP 20 결과 렌더링
function renderTop20Results(top20, totalScanned) {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toLocaleDateString('ko-KR', { month: 'long', day: 'numeric' });
  top20UpdateTime.textContent = `${dateStr} ${timeStr} 기준 · ${totalScanned}개 종목 분석`;

  const formatPrice = (p) => '₩' + Math.round(p).toLocaleString();
  const formatChange = (c, pct) => {
    const sign = c >= 0 ? '+' : '';
    const arrow = c >= 0 ? '▲' : '▼';
    return `${arrow} ${sign}${pct.toFixed(2)}%`;
  };

  let html = '<table class="top20-table"><thead><tr>';
  html += '<th class="rank-col">#</th>';
  html += '<th class="name-col">종목</th>';
  html += '<th class="price-col">현재가</th>';
  html += '<th class="change-col">등락</th>';
  html += '<th class="tss-col">TSS</th>';
  html += '<th class="ets-col">타이밍</th>';
  html += '<th class="grade-col">등급</th>';
  html += '<th class="phase-col">국면</th>';
  html += '<th class="detail-col">세부</th>';
  html += '</tr></thead><tbody>';

  top20.forEach((item, idx) => {
    const changeClass = item.change >= 0 ? 'up' : 'down';
    const gradeClass = 'grade-' + item.grade.toLowerCase();
    html += `<tr class="top20-row" data-symbol="${item.symbol}" data-name="${item.name}">`;
    html += `<td class="rank-col"><span class="rank-badge rank-${idx < 3 ? 'top3' : 'normal'}">${idx + 1}</span></td>`;
    html += `<td class="name-col"><div class="stock-name-cell">${item.name}<span class="stock-code-sub">${item.code}</span></div></td>`;
    html += `<td class="price-col">${formatPrice(item.price)}</td>`;
    html += `<td class="change-col ${changeClass}">${formatChange(item.change, item.changePercent)}</td>`;
    const etsVal = item.entryTiming ? item.entryTiming.score : '-';
    const etsGradeClass = item.entryTiming ? item.entryTiming.gradeClass : '';
    html += `<td class="tss-col"><span class="tss-score">${item.tss}</span></td>`;
    html += `<td class="ets-col"><span class="ets-badge ${etsGradeClass}">${etsVal}</span></td>`;
    html += `<td class="grade-col"><span class="grade-badge ${gradeClass}">${item.grade}</span></td>`;
    html += `<td class="phase-col">${item.phaseKR}</td>`;
    html += `<td class="detail-col">`;
    html += `<span class="detail-tag">V ${Math.round(item.scores.value)}</span>`;
    html += `<span class="detail-tag">G ${Math.round(item.scores.growth)}</span>`;
    html += `<span class="detail-tag">M ${Math.round(item.scores.momentum)}</span>`;
    html += `<span class="detail-tag">S ${Math.round(item.scores.supply)}</span>`;
    html += `<span class="detail-tag">T ${Math.round(item.scores.technical)}</span>`;
    html += `</td>`;
    html += '</tr>';
  });

  html += '</tbody></table>';
  top20TableWrap.innerHTML = html;

  // 행 클릭 → 상세 분석
  top20TableWrap.querySelectorAll('.top20-row').forEach(row => {
    row.addEventListener('click', () => {
      const sym = row.dataset.symbol;
      const name = row.dataset.name;
      stockInput.value = name;
      runAnalysisDirect(sym, name);
    });
  });
}

// 자동 갱신 타이머
function startAutoRefreshTimer() {
  if (_top20Timer) clearTimeout(_top20Timer);
  if (_countdownTimer) clearInterval(_countdownTimer);

  // 장중(9:00~15:30) = 10분, 그 외 = 30분
  const now = new Date();
  const kstHour = (now.getUTCHours() + 9) % 24;
  const isMarketHours = kstHour >= 9 && kstHour < 16;
  const refreshMs = isMarketHours ? 10 * 60 * 1000 : 30 * 60 * 1000;
  const refreshMin = refreshMs / 60000;

  let remaining = refreshMs;
  _countdownTimer = setInterval(() => {
    remaining -= 1000;
    if (remaining <= 0) {
      clearInterval(_countdownTimer);
      return;
    }
    const min = Math.floor(remaining / 60000);
    const sec = Math.floor((remaining % 60000) / 1000);
    top20Countdown.textContent = `다음 갱신: ${min}분 ${sec}초 후${isMarketHours ? ' (장중 10분 주기)' : ' (장외 30분 주기)'}`;
  }, 1000);

  _top20Timer = setTimeout(() => {
    runTop20Scan();
  }, refreshMs);
}

// 이벤트 바인딩
document.getElementById('top20-btn').addEventListener('click', () => runTop20Scan());
document.getElementById('top20-back-btn').addEventListener('click', () => {
  if (_top20Timer) clearTimeout(_top20Timer);
  if (_countdownTimer) clearInterval(_countdownTimer);
  showScreen(searchScreen);
});
document.getElementById('top20-results-back-btn').addEventListener('click', () => {
  if (_top20Timer) clearTimeout(_top20Timer);
  if (_countdownTimer) clearInterval(_countdownTimer);
  showScreen(searchScreen);
});
document.getElementById('top20-refresh-btn').addEventListener('click', () => runTop20Scan());

// ══════════════════════════════════════
// 12. 오늘의 추천 1위 (첫 화면 자동 로딩)
// ══════════════════════════════════════

// 핵심 대형주 후보 (빠르게 스캔해서 1위 선정)
const PICK_CANDIDATES = [
  { name: '삼성전자', code: '005930', market: 'KS' },
  { name: 'SK하이닉스', code: '000660', market: 'KS' },
  { name: '현대차', code: '005380', market: 'KS' },
  { name: 'NAVER', code: '035420', market: 'KS' },
  { name: '카카오', code: '035720', market: 'KS' },
  { name: '셀트리온', code: '068270', market: 'KS' },
  { name: 'LG에너지솔루션', code: '373220', market: 'KS' },
  { name: '삼성SDI', code: '006400', market: 'KS' },
  { name: '기아', code: '000270', market: 'KS' },
  { name: 'KB금융', code: '105560', market: 'KS' },
  { name: '신한지주', code: '055550', market: 'KS' },
  { name: 'KT', code: '030200', market: 'KS' },
  { name: 'KT&G', code: '033780', market: 'KS' },
  { name: '한화에어로스페이스', code: '012450', market: 'KS' },
  { name: 'HD현대중공업', code: '329180', market: 'KS' },
  { name: 'POSCO홀딩스', code: '005490', market: 'KS' },
  { name: '하나금융지주', code: '086790', market: 'KS' },
  { name: '크래프톤', code: '259960', market: 'KS' },
  { name: '두산에너빌리티', code: '034020', market: 'KS' },
  { name: 'LG전자', code: '066570', market: 'KS' },
  { name: 'SK텔레콤', code: '017670', market: 'KS' },
  { name: '삼성바이오로직스', code: '207940', market: 'KS' },
  { name: '현대모비스', code: '012330', market: 'KS' },
  { name: '한국전력', code: '015760', market: 'KS' },
  { name: 'HLB', code: '028300', market: 'KS' },
  { name: '에코프로비엠', code: '247540', market: 'KS' },
  { name: '오리온', code: '271560', market: 'KS' },
  { name: 'BGF리테일', code: '282330', market: 'KS' },
  { name: 'LG화학', code: '051910', market: 'KS' },
  { name: '삼성물산', code: '028260', market: 'KS' }
];

(async function loadTodayPick() {
  const card = document.getElementById('today-pick-card');
  const inner = document.getElementById('today-pick-inner');
  if (!card || !inner) return;

  try {
    // 30개 후보를 6개씩 병렬로 빠르게 스캔
    const allResults = [];
    const batchSize = 6;

    for (let i = 0; i < PICK_CANDIDATES.length; i += batchSize) {
      const batch = PICK_CANDIDATES.slice(i, i + batchSize);
      const batchResults = await Promise.all(
        batch.map(s => fetchQuickScan(s.code).catch(() => null))
      );

      for (let j = 0; j < batchResults.length; j++) {
        const scan = batchResults[j];
        if (!scan || scan.error) continue;
        const stock = batch[j];
        try {
          const data = parseScanData(scan, stock);
          if (data.price > 0 && data.prices.length >= 20) {
            const result = analyze(data);
            allResults.push({
              name: scan.name || stock.name,
              code: stock.code,
              market: stock.market,
              symbol: stock.code + '.' + stock.market,
              price: data.price,
              change: data.change,
              changePercent: data.changePercent,
              tss: result.tss,
              grade: result.grade,
              gradeClass: result.gradeClass,
              phaseKR: result.phaseKR,
              verdictTitle: result.verdictTitle,
              verdict: result.verdict,
              scores: result.scores,
              indicators: result.indicators,
              entryTiming: result.entryTiming,
              per: data.per,
              pbr: data.pbr,
              volume: data.volume,
              avgVolume: data.avgVolume,
              high52w: data.high52w,
              low52w: data.low52w
            });
          }
        } catch (e) { /* skip */ }
      }
    }

    if (allResults.length === 0) {
      inner.innerHTML = '<div class="today-pick-loading">데이터를 불러오는 중...</div>';
      return;
    }

    // TSS ≥ 50 (C등급 이상) 필터 → 약한 종목은 타이밍이 좋아도 추천 제외
    const qualified = allResults.filter(a => a.tss >= 50);
    const pickPool = qualified.length > 0 ? qualified : allResults;
    // TSS × ETS 교차 점수로 정렬 — 좋은 종목 + 좋은 타이밍
    pickPool.sort((a, b) => {
      const scoreA = a.tss * 0.4 + (a.entryTiming ? a.entryTiming.score : 50) * 0.6;
      const scoreB = b.tss * 0.4 + (b.entryTiming ? b.entryTiming.score : 50) * 0.6;
      return scoreB - scoreA;
    });
    const pick = pickPool[0];
    const pickETS = pick.entryTiming ? pick.entryTiming.score : 0;

    // 왜 좋은지 + 왜 지금인지 요약 생성
    const reasons = [];
    // 타이밍 근거 우선
    if (pick.entryTiming && pick.entryTiming.signals) {
      const posSigs = pick.entryTiming.signals.filter(s => s.type === 'positive');
      for (const s of posSigs.slice(0, 2)) {
        reasons.push(s.text);
      }
    }
    // 종목 퀄리티 근거
    if (pick.scores.value >= 65) reasons.push('PER·PBR 기준 저평가 구간');
    if (pick.scores.technical >= 70) reasons.push('이동평균선 정배열 — 기술적 위치 양호');
    else if (pick.scores.technical >= 60) reasons.push('주요 이평선 위 — 추세 유지');
    if (pick.scores.momentum >= 65) reasons.push('모멘텀 강세 신호 감지');
    if (reasons.length === 0) reasons.push('TSS·ETS 교차 분석 최상위');

    // 신뢰 지표
    const trustBadges = [];
    if (pick.high52w > 0 && pick.low52w > 0) {
      const pos = ((pick.price - pick.low52w) / (pick.high52w - pick.low52w) * 100).toFixed(0);
      trustBadges.push(`52주 위치 ${pos}%`);
    }
    if (pick.volume > 0 && pick.avgVolume > 0) {
      const volR = (pick.volume / pick.avgVolume).toFixed(1);
      if (volR > 1) trustBadges.push(`거래량 평균 대비 ${volR}배`);
    }
    if (pick.per > 0) trustBadges.push(`PER ${pick.per.toFixed(1)}배`);

    const changeClass = pick.change >= 0 ? 'up' : 'down';
    const changeSign = pick.change >= 0 ? '+' : '';
    const priceStr = '₩' + Math.round(pick.price).toLocaleString();

    card.classList.remove('loading-shimmer');
    inner.innerHTML = `
      <div class="pick-label">${pick.tss >= 65 && pickETS >= 60 ? '🔥 오늘의 매수 적기 1위' : pick.tss >= 50 && pickETS >= 55 ? '🔥 오늘의 주목 종목' : '📊 오늘의 관심 종목'}</div>
      <div class="pick-main">
        <div class="pick-name-row">
          <span class="pick-name">${pick.name}</span>
          <span class="pick-grade ${pick.gradeClass}">${pick.grade}등급</span>
        </div>
        <div class="pick-price-row">
          <span class="pick-price">${priceStr}</span>
          <span class="pick-change ${changeClass}">${changeSign}${pick.changePercent.toFixed(2)}%</span>
        </div>
        <div class="pick-tss-row">
          <span class="pick-tss-label">TSS</span>
          <span class="pick-tss-score">${pick.tss}</span>
          <span class="pick-tss-max">/ 100</span>
          <span class="pick-phase">${pick.phaseKR}</span>
          <span class="pick-note">간편분석</span>
        </div>
        <div class="pick-ets-row">
          <span class="pick-ets-label">진입 타이밍</span>
          <span class="pick-ets-score">${pickETS}</span>
          <span class="pick-ets-max">/ 100</span>
          <span class="pick-ets-grade ${pick.entryTiming ? pick.entryTiming.gradeClass : ''}">${pick.entryTiming ? pick.entryTiming.grade : '-'}</span>
        </div>
      </div>
      <div class="pick-reasons">
        ${reasons.slice(0, 3).map(r => `<div class="pick-reason">✔ ${r}</div>`).join('')}
      </div>
      ${trustBadges.length > 0 ? `
      <div class="pick-trust">
        ${trustBadges.map(b => `<span class="trust-badge">${b}</span>`).join('')}
      </div>` : ''}
      <div class="pick-cta">
        <button class="pick-analyze-btn" data-symbol="${pick.symbol}" data-name="${pick.name}">상세 분석 보기 →</button>
      </div>
    `;

    // 카드 클릭 → 상세 분석
    inner.querySelector('.pick-analyze-btn').addEventListener('click', function() {
      const sym = this.dataset.symbol;
      const name = this.dataset.name;
      stockInput.value = name;
      runAnalysisDirect(sym, name);
    });

  } catch (e) {
    console.error('Today pick error:', e);
    inner.innerHTML = '<div class="today-pick-loading">추천 종목을 불러오지 못했습니다.</div>';
    card.classList.remove('loading-shimmer');
  }
})();
