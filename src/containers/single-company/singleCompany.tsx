"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ICompanyWithStatements } from "@/types/company";
import { IJSendResponse } from "@/types/customTypes";
import { useEffect, useState } from "react";
import { StatementTable } from "./statementTable";

interface SingleCompanyProps {
  id?: number;
}
export const SingleCompany = ({ id }: SingleCompanyProps) => {
  const [company, setCompany] = useState<ICompanyWithStatements | null>(null);
  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/companies/${id}`;
    const fetchSingleCompany = async () => {
      const res: any = await fetch(url);
      const data: IJSendResponse<ICompanyWithStatements> = await res.json();
      setCompany(data.data);
      console.log(data);
    };
    fetchSingleCompany();
    //fetching single company by id
  }, [id]);

  if (company === null) {
    return <div>Loading...</div>; // Render a loading or placeholder content if company is not yet loaded
  }
  return (
    <div>
      <div className=" py-10">
        <Tabs defaultValue="balance" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="balance">재무상태표</TabsTrigger>
            <TabsTrigger value="income">손익계산서</TabsTrigger>
            <TabsTrigger value="cashflow">현금흐름표</TabsTrigger>
          </TabsList>
          <TabsContent value="balance">
            <StatementTable type="balance" statements={company.balanceSheets} />
          </TabsContent>
          <TabsContent value="income">
            <StatementTable
              type="income"
              statements={company.incomeStatements}
            />
          </TabsContent>
          <TabsContent value="cashflow">
            <StatementTable
              type="cashflow"
              statements={company?.cashFlowStatements}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
