import { Company } from "@/containers/companies/columns";
import { ICompanyWithKeyIndicator } from "@/types/company";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumberWithCommas(num:number) {
  return num.toLocaleString();
}

export const transformToCompany = (
  companyWithIndicator: ICompanyWithKeyIndicator
): Company => {
  const { id, ...restKeyIndicator } = companyWithIndicator.keyIndicator;
  return {
    ...companyWithIndicator,
    ...restKeyIndicator,
  };
};