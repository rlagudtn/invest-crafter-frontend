interface FinancialStatement {
  calendarYear: string;
  [key: string]: number | string; // 모든 속성을 포함하기 위해 인덱스 시그니처 사용
}
interface FinancialStatementsData<T> {
  statements: T[];
}

// interface FinancialStatementsData {
//   financialStatements: FinancialStatement[];
// }
interface AttributeNames {
  inventory: string; // "재고"
  propertyPlantEquipmentNet: string; // "유형자산"
  totalLiabilities: string; // "총부채"
  totalEquity: string; // "총자본"
  operatingActivitiesCashFlow: string; // "영업활동으로 인한 현금 흐름"
  investingActivitiesCashFlow: string; // "투자활동으로 인한 현금 흐름"
  financingActivitiesCashFlow: string; // "재무활동으로 인한 현금 흐름"
  freeCashFlow: string; // "자유 현금 흐름"
  dividendsPaid: string; // "지급된 배당금"
  revenue: string; // "매출액"
  researchAndDevelop: string; // "연구 개발 비용"
  operatingIncome: string; // "영업 이익"
  opm: string; // "영업 이익률"
  netIncome: string; // "순이익"
}
