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
    const res = await fetch(`${API_BASE}/api/search?q=${encodeURIC
