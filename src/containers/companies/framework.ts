import { IFilterItem, IFrameItem, ISortItem } from "@/types/customTypes";

export const sortItems: ISortItem[] = [
  
  {
    value: "peg",
    label: "PEG",
  },
  {
    value: "debtRatio",
    label: "부채비율",
  },
  {
    value: "roeRecent1yr",
    label: "최근 1년 ROE",
  },
  {
    value: "roeRecent2yr",
    label: "최근 2년 ROE",
  },
  {
    value: "roeRecent3yr",
    label: "최근 3년 ROE",
  },
  {
    value: "opmRecent1yr",
    label: "최근 1년 OPM",
  },
  {
    value: "opmRecent2yr",
    label: "최근 2년 OPM",
  },
  {
    value: "opmRecent3yr",
    label: "최근 3년 OPM",
  },
  {
    value: "freeCashFlow",
    label: "잉여현금흐름",
  },
  {
    value: "dividendYield",
    label: "배당수익률",
  },
  {
    value: "pbr",
    label: "PBR",
  },
  {
    value: "per",
    label: "PER",
  },
  {
    value: "operatingActivitiesCashFlow",
    label: "영업활동 현금흐름",
  },
  {
    value: "investingActivitiesCashFlow",
    label: "투자활동 현금흐름",
  },
  {
    value: "financingActivitiesCashFlow",
    label: "재무활동 현금흐름",
  },
];

export const filterItems: IFilterItem[] = [
  {
    value: "peg",
    label: "PEG",
    minLabel: "minPeg",
    maxLabel: "maxPeg"
  },
  {
    value: "debtRatio",
    label: "부채비율",
    minLabel: "minDebtRatio",
    maxLabel: "maxDebtRatio"
  },
  {
    value: "roeRecent1yr",
    label: "최근 1년 ROE",
    minLabel: "minRoeRecent1yr",
    maxLabel: "maxRoeRecent1yr"
  },
  {
    value: "roeRecent2yr",
    label: "최근 2년 ROE",
    minLabel: "minRoeRecent2yr",
    maxLabel: "maxRoeRecent2yr"
  },
  {
    value: "roeRecent3yr",
    label: "최근 3년 ROE",
    minLabel: "minRoeRecent3yr",
    maxLabel: "maxRoeRecent3yr"
  },
  {
    value: "opmRecent1yr",
    label: "최근 1년 OPM",
    minLabel: "minOpmRecent1yr",
    maxLabel: "maxOpmRecent1yr"
  },
  {
    value: "opmRecent2yr",
    label: "최근 2년 OPM",
    minLabel: "minOpmRecent2yr",
    maxLabel: "maxOpmRecent2yr"
  },
  {
    value: "opmRecent3yr",
    label: "최근 3년 OPM",
    minLabel: "minOpmRecent3yr",
    maxLabel: "maxOpmRecent3yr"
  },
  {
    value: "freeCashFlow",
    label: "잉여현금흐름",
    minLabel: "minFreeCashFlow",
    maxLabel: "maxFreeCashFlow"
  },
  {
    value: "dividendYield",
    label: "배당수익률",
    minLabel: "minDividendYield",
    maxLabel: "maxDividendYield"
  },
  {
    value: "pbr",
    label: "PBR",
    minLabel: "minPbr",
    maxLabel: "maxPbr"
  },
  {
    value: "per",
    label: "PER",
    minLabel: "minPer",
    maxLabel: "maxPer"
  },
  {
    value: "operatingActivitiesCashFlow",
    label: "영업활동 현금흐름",
    minLabel: "minOperatingActivitiesCashFlow",
    maxLabel: "maxOperatingActivitiesCashFlow"
  },
  {
    value: "investingActivitiesCashFlow",
    label: "투자활동 현금흐름",
    minLabel: "minInvestingActivitiesCashFlow",
    maxLabel: "maxInvestingActivitiesCashFlow"
  },
  {
    value: "financingActivitiesCashFlow",
    label: "재무활동 현금흐름",
    minLabel: "minFinancingActivitiesCashFlow",
    maxLabel: "maxFinancingActivitiesCashFlow"
  },
];


export const industries: IFrameItem[] = [
  {
    value: "소프트웨어",
    label: "소프트웨어",
  },
  {
    value: "전화 및 소형 장치",
    label: "전화 및 소형 장치",
  },
  {
    value: "반도체",
    label: "반도체",
  },
  {
    value: "백화점",
    label: "백화점",
  },
  {
    value: "온라인 서비스",
    label: "온라인 서비스",
  },
  {
    value: "자동차 및 트럭 제조",
    label: "자동차 및 트럭 제조",
  },
  {
    value: "반도체 장비 및 테스트",
    label: "반도체 장비 및 테스트",
  },
  {
    value: "할인점",
    label: "할인점",
  },
  {
    value: "무알콜 음료",
    label: "무알콜 음료",
  },
  {
    value: "상품 화학",
    label: "상품 화학",
  },
  {
    value: "제약",
    label: "제약",
  },
  {
    value: "통신 및 네트워킹",
    label: "통신 및 네트워킹",
  },
  {
    value: "무선 통신 서비스",
    label: "무선 통신 서비스",
  },
  {
    value: "핀테크",
    label: "핀테크",
  },
  {
    value: "첨단 의료 장비 및 기술",
    label: "첨단 의료 장비 및 기술",
  },
  {
    value: "여가 및 오락시설",
    label: "여가 및 오락시설",
  },
  {
    value: "소비재 대기업",
    label: "소비재 대기업",
  },
  {
    value: "생명 공학 및 의학 연구",
    label: "생명 공학 및 의학 연구",
  },
  {
    value: "레스토랑 및 바",
    label: "레스토랑 및 바",
  },
  {
    value: "IT 서비스 및 컨설팅",
    label: "IT 서비스 및 컨설팅",
  },
  {
    value: "식품 가공",
    label: "식품 가공",
  },
  {
    value: "특수 REITs",
    label: "특수 REITs",
  },
  {
    value: "금융, 상품 시장 운영 및 서비스 제공",
    label: "금융, 상품 시장 운영 및 서비스 제공",
  },
  {
    value: "지상 화물 및 물류",
    label: "지상 화물 및 물류",
  },
  {
    value: "호텔, 모텔 및 크루즈 라인",
    label: "호텔, 모텔 및 크루즈 라인",
  },
  {
    value: "경영 지원 서비스",
    label: "경영 지원 서비스",
  },
  {
    value: "자동차 차량, 부품 및 서비스 소매",
    label: "자동차 차량, 부품 및 서비스 소매",
  },
  {
    value: "중장비 및 차량",
    label: "중장비 및 차량",
  },
  {
    value: "의류 및 액세서리",
    label: "의류 및 액세서리",
  },
  {
    value: "컴퓨터 하드웨어",
    label: "컴퓨터 하드웨어",
  },
  {
    value: "의류 및 액세서리 소매",
    label: "의류 및 액세서리 소매",
  },
  {
    value: "의료 장비, 물품 및 유통",
    label: "의료 장비, 물품 및 유통",
  },
  {
    value: "투자 은행 및 중개 서비스",
    label: "투자 은행 및 중개 서비스",
  },
  {
    value: "고용 서비스",
    label: "고용 서비스",
  },
  {
    value: "통합 통신 서비스",
    label: "통합 통신 서비스",
  },
  {
    value: "전력 유틸리티",
    label: "전력 유틸리티",
  },
  {
    value: "블록 체인 및 암호화폐",
    label: "블록 체인 및 암호화폐",
  },
  {
    value: "산업용 기계 및 장비",
    label: "산업용 기계 및 장비",
  },
  {
    value: "통합 하드웨어 및 소프트웨어",
    label: "통합 하드웨어 및 소프트웨어",
  },
  {
    value: "항공사",
    label: "항공사",
  },
  {
    value: "손해보험",
    label: "손해보험",
  },
  {
    value: "오일, 가스 탐사 및 생산",
    label: "오일, 가스 탐사 및 생산",
  },
  {
    value: "오일 관련 서비스 및 장비",
    label: "오일 관련 서비스 및 장비",
  },
  {
    value: "복합보험 및 중개인",
    label: "복합보험 및 중개인",
  },
  {
    value: "기타 전문 소매",
    label: "기타 전문 소매",
  },
  {
    value: "투자 관리 및 펀드 운영",
    label: "투자 관리 및 펀드 운영",
  },
  {
    value: "방송",
    label: "방송",
  },
  {
    value: "은행",
    label: "은행",
  },
  {
    value: "항공우주 및 방위",
    label: "항공우주 및 방위",
  },
  {
    value: "철 및 강철",
    label: "철 및 강철",
  },
  {
    value: "카지노 및 도박",
    label: "카지노 및 도박",
  },
  {
    value: "의약품 소매",
    label: "의약품 소매",
  },
  {
    value: "엔터테인먼트 제작",
    label: "엔터테인먼트 제작",
  },
  {
    value: "재생 가능 에너지 장비 및 서비스",
    label: "재생 가능 에너지 장비 및 서비스",
  },
  {
    value: "오락용 제품",
    label: "오락용 제품",
  },
  {
    value: "전자 장비 및 부품",
    label: "전자 장비 및 부품",
  },
  {
    value: "자동차, 트럭 및 오토바이 부품",
    label: "자동차, 트럭 및 오토바이 부품",
  },
  {
    value: "전문 정보 서비스",
    label: "전문 정보 서비스",
  },
  {
    value: "폐쇄형 펀드",
    label: "폐쇄형 펀드",
  },
  {
    value: "오일 및 가스 수송 서비스",
    label: "오일 및 가스 수송 서비스",
  },
  {
    value: "상업용 REITs",
    label: "상업용 REITs",
  },
  {
    value: "식품 소매 및 유통",
    label: "식품 소매 및 유통",
  },
  {
    value: "소비자 출판",
    label: "소비자 출판",
  },
  {
    value: "환경 서비스 및 장비",
    label: "환경 서비스 및 장비",
  },
  {
    value: "부동산 서비스",
    label: "부동산 서비스",
  },
  {
    value: "의료 시설 및 서비스",
    label: "의료 시설 및 서비스",
  },
  {
    value: "오일, 가스 정제 및 마케팅",
    label: "오일, 가스 정제 및 마케팅",
  },
  {
    value: "소비자 대출",
    label: "소비자 대출",
  },
  {
    value: "제화",
    label: "제화",
  },
  {
    value: "장난감 및 어린이 제품",
    label: "장난감 및 어린이 제품",
  },
  {
    value: "임업 및 목재 제품",
    label: "임업 및 목재 제품",
  },
  {
    value: "금",
    label: "금",
  },
  {
    value: "전기 부품 및 장비",
    label: "전기 부품 및 장비",
  },
  {
    value: "천연가스 유틸리티",
    label: "천연가스 유틸리티",
  },
  {
    value: "가정용 제품",
    label: "가정용 제품",
  },
  {
    value: "기업 금융 서비스",
    label: "기업 금융 서비스",
  },
  {
    value: "건설 자재 및 비품",
    label: "건설 자재 및 비품",
  },
  {
    value: "특수 화학제",
    label: "특수 화학제",
  },
  {
    value: "오일 및 가스 시추",
    label: "오일 및 가스 시추",
  },
  {
    value: "개인 생활 필수 용품",
    label: "개인 생활 필수 용품",
  },
  {
    value: "재보험",
    label: "재보험",
  },
  {
    value: "기타 교육 서비스 제공",
    label: "기타 교육 서비스 제공",
  },
  {
    value: "의료 관리",
    label: "의료 관리",
  },
  {
    value: "지상 및 해상 여객 운송",
    label: "지상 및 해상 여객 운송",
  },
  {
    value: "건설 및 엔지니어링",
    label: "건설 및 엔지니어링",
  },
  {
    value: "타이어 및 고무 제품",
    label: "타이어 및 고무 제품",
  },
  {
    value: "가전제품, 도구 및 가정 용품",
    label: "가전제품, 도구 및 가정 용품",
  },
  {
    value: "주택 건설",
    label: "주택 건설",
  },
  {
    value: "복합 유틸리티",
    label: "복합 유틸리티",
  },
  {
    value: "공항 운영 및 서비스",
    label: "공항 운영 및 서비스",
  },
  {
    value: "어업 및 농업",
    label: "어업 및 농업",
  },
  {
    value: "사무기기",
    label: "사무기기",
  },
  {
    value: "용기(종이 제외) 및 포장재",
    label: "용기(종이 제외) 및 포장재",
  },
  {
    value: "개인 서비스",
    label: "개인 서비스",
  },
  {
    value: "광고 및 마케팅",
    label: "광고 및 마케팅",
  },
  {
    value: "석탄",
    label: "석탄",
  },
  {
    value: "상업 인쇄 서비스",
    label: "상업 인쇄 서비스",
  },
  {
    value: "민자 발전 사업",
    label: "민자 발전 사업",
  },
];
