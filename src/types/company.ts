import { IBalanceSheet, ICashFlowStatement, IIncomeStatement, IKeyIndicator } from "./statement";

export interface ICompany{
  id: number;
  name: string;
  symbol: string;
  industry: string;
  exchange: string;
  
}

export interface ICompanyWithKeyIndicator extends ICompany{
  keyIndicator: IKeyIndicator;
}

export interface ICompanyWithStatements extends ICompany{
  balanceSheets: IBalanceSheet[];
  incomeStatements:IIncomeStatement[];
  cashFlowStatements:ICashFlowStatement[];
}