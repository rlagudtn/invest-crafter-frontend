"use client";

import { ColumnDef } from "@tanstack/react-table";

export interface Company {
  id: number;
  name: string;
  symbol: string;
  industry: string;
  exchange: string;
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

export const tableColumns: ColumnDef<Company>[] = [
  {
    accessorKey: "name",
    header: "기업명",
  },
  {
    accessorKey: "symbol",
    header: "심볼",
  },
  {
    accessorKey: "industry",
    header: "Industry",
  },
  {
    accessorKey: "exchange",
    header: "거래소",
  },
  {
    accessorKey: "calendarYear",
    header: "연도",
  },
  {
    accessorKey: "peg",
    header: "PEG",
  },
  {
    accessorKey: "debtRatio",
    header: "부채비율",
  },
  {
    accessorKey: "roeRecent1yr",
    header: "최근 1년 ROE",
  },
  {
    accessorKey: "roeRecent2yr",
    header: "최근 2년 ROE",
  },
  {
    accessorKey: "roeRecent3yr",
    header: "최근 3년 ROE",
  },
  {
    accessorKey: "opmRecent1yr",
    header: "최근 1년 OPM",
  },
  {
    accessorKey: "opmRecent2yr",
    header: "최근 2년 OPM",
  },
  {
    accessorKey: "opmRecent3yr",
    header: "최근 3년 OPM",
  },
  {
    accessorKey: "freeCashFlow",
    header: "잉여현금흐름",
  },
  {
    accessorKey: "dividendYield",
    header: "배당수익률",
  },
  {
    accessorKey: "pbr",
    header: "PBR",
  },
  {
    accessorKey: "per",
    header: "PER",
  },
  {
    accessorKey: "operatingActivitiesCashFlow",
    header: "영업활동 현금흐름",
  },
  {
    accessorKey: "investingActivitiesCashFlow",
    header: "투자활동 현금흐름",
  },
  {
    accessorKey: "financingActivitiesCashFlow",
    header: "재무활동 현금흐름",
  },
];
