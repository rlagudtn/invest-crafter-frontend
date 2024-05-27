import { ColumnDef } from "@tanstack/react-table";

export const attributeNames: AttributeNames = {

  inventory: "재고",
  propertyPlantEquipmentNet: "유형자산",
  totalLiabilities: "총부채",
  totalEquity: "총자본",
  operatingActivitiesCashFlow: "영업활동 현금흐름",
  investingActivitiesCashFlow: "투자활동 현금흐름",
  financingActivitiesCashFlow: "재무활동 현금흐름",
  freeCashFlow: "잉여현금흐름",
  dividendsPaid: "배당금",
  revenue: "매출액",
  researchAndDevelop: "연구 개발 비용",
  operatingIncome: "영업이익",
  opm: "영업이익률",
  netIncome: "순이익"
  
};

export const excludeKeys = new Set(["id", "url", "calendarYear"]);

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export const transformData = <T extends { calendarYear: string, [key: string]: any }>({
  statements,
}: FinancialStatementsData<T>): DataTableProps<T, any> => {
  const excludeKeys = new Set(["id", "url", "calendarYear"]);

  const years = new Set<string>();
  const attributes: { [key: string]: { [year: string]: any } } = {};

  statements?.forEach((statement) => {
    years.add(statement.calendarYear);
    Object.keys(statement).forEach((key) => {
      if (!excludeKeys.has(key)) {
        if (!attributes[key]) {
          attributes[key] = {};
        }
        attributes[key][statement.calendarYear] = statement[key];
      }
    });
  });

  const columns: ColumnDef<T, any>[] = [
    {
      accessorKey: "attribute",
      header: "항목",
      cell: (info) => {
        const key = info.getValue() as keyof AttributeNames; // key를 attributeNames의 키로 단언
        return attributeNames[key] || info.getValue();
       },
    },
    ...Array.from(years)
      .sort()
      .reverse()
      .map((year) => ({
        accessorKey: year,
        header: year,
      })),
  ];

  const data: T[] = Object.keys(attributes).map((attribute) => {
    const row: any = { attribute };
    Object.entries(attributes[attribute]).forEach(([year, value]) => {
      row[year] = typeof value === 'number' ? new Intl.NumberFormat().format(value) : value;
    });
    return row as T;
  });

  return { columns, data };
};