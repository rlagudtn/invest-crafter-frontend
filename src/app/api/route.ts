import {getCompaniesWithKeyIndicator} from "@/services/stocks"
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page:number = Number(searchParams.get('page')) ;
  const size: number = Number(searchParams.get('size'));
  
  const companies = await getCompaniesWithKeyIndicator(page,size);
  
  return Response.json(companies);
}