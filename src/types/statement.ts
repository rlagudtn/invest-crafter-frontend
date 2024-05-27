export interface IKeyIndicator{
  id: number;
  calendarYear: string;
  peg: number;
  debtRatio: number;
  roeRecent1yr: number;
  roeRecent2yr: number;
  roeRecent3yr: number;
  opmRecent1yr: number;
  opmRecent2yr: number;
  opmRecent3yr: number;
  freeCashFlow: number;
  dividendYield: number;
  pbr: number;
  per: number;
  operatingActivitiesCashFlow: number;
  investingActivitiesCashFlow: number;
  financingActivitiesCashFlow: number;
}

export interface IBalanceSheet{
  id: number;
  calendarYear: string;
  inventory: number;
  propertyPlantEquipmentNet: number;
  totalLiabilities: number;
  totalEquity: number;
  url: string;
}

export interface IIncomeStatement {
  id: number;
  calendarYear: string;
  revenue: number;
  researchAndDevelop: number;
  operatingIncome: number;
  opm: number;  
  netIncome: number;
  eps: number; 
  url: string;
}
export interface ICashFlowStatement {
  id: number;
  calendarYear: string;
  operatingActivitiesCashFlow: number;
  investingActivitiesCashFlow: number;
  financingActivitiesCashFlow: number;
  freeCashFlow: number;
  dividendsPaid: number;
  // totalEquity: number | null;
  url: string;
}