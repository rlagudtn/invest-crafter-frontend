import { IKeyIndicator } from "./statement";

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