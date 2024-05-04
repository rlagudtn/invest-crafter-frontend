"use client";

import { Company } from "@/containers/companies/columns";
import { transformToCompany } from "@/lib/utils";
import { ICompanyWithKeyIndicator } from "@/types/company";
import { IApiResponse } from "@/types/customTypes";
import clsx from "clsx";
import { SearchIcon } from "lucide-react";
import { SetStateAction, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
interface SearchInputProps {
  className: string;
  height: string;
  btnWidth: string;
  keyword: string;
  setKeyword: React.Dispatch<SetStateAction<string>>;
  setCompanies: React.Dispatch<SetStateAction<Company[]>>;
  setTotalPages: React.Dispatch<SetStateAction<number>>;
  setPage: (page: number) => void;

  // companies: Company[];
}
export const SearchInput: React.FC<SearchInputProps> = ({
  className,
  btnWidth,
  height,
  keyword,
  setKeyword,
  setCompanies,
  setTotalPages,
  setPage,
}) => {
  const [input, setInput] = useState(keyword);

  const searchCompanies = async (keyword: string) => {
    const res: any = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/companies?keyword=${keyword}`
    );
    const data: IApiResponse<ICompanyWithKeyIndicator> = await res.json();
    setCompanies(data.data.content.map(transformToCompany));
    setTotalPages(data.data.totalPages);
  };
  return (
    <div
      className={clsx(
        "flex w-full justify-center items-center space-x-2",
        className,
        height
      )}
    >
      <Input
        className="h-full rounded-lg max-w-md"
        placeholder="기업명, 심볼을 입력해주세요."
        type="search"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Button
        className={clsx(btnWidth, "h-full rounded-lg")}
        onClick={() => {
          setKeyword(input);
          searchCompanies(input);
          setPage(0);
        }}
      >
        <SearchIcon className="h-6 w-6 shrink-0 " />
      </Button>
    </div>
  );
};
