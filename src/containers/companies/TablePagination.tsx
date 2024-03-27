import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { List } from "postcss/lib/list";
import { useEffect, useState } from "react";

interface ITablePaginationProps {
  page: number;
  size: number;
  totalPages: number;
  setPage: (page: number) => void;
}
export const TablePagination = ({
  page,
  totalPages,
  setPage,
}: ITablePaginationProps) => {
  const maxPageItems = 5; // 한 번에 보여줄 최대 페이지 수

  // 현재 페이지가 속한 페이지 그룹의 시작 페이지 계산
  let groupStart = Math.floor((page - 1) / maxPageItems) * maxPageItems + 1;

  // 페이지 아이템 생성
  const [paginationItems, setPaginationItems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const paginationList = [];
    for (
      let i = groupStart;
      i < groupStart + maxPageItems && i <= totalPages;
      i++
    ) {
      paginationList.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault(); // 페이지 리로드 방지
              setPage(i);
            }}
            isActive={i === page ? true : false}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    setPaginationItems([...paginationList]);
  }, [page]);
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={() => setPage(page - 1)} />
        </PaginationItem>
        {paginationItems}
        {page < totalPages && (
          <PaginationItem>
            <PaginationNext href="#" onClick={() => setPage(page + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
