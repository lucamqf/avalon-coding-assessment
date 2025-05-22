"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { PageSizeSelector } from "./PageSizeSelector";
import { PaginationControls } from "./PaginationControls";
import { DEFAULT_PAGINATION_LIMIT } from "@/constants/pagination";

interface IProps {
  pages: number;
}

export function Pagination({ pages }: IProps) {
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const currentPageQuery = searchParams.get("page");
  const limitQuery = searchParams.get("limit") ?? DEFAULT_PAGINATION_LIMIT;
  
  const currentPage = currentPageQuery ? Number(currentPageQuery) : 1;
  const limit = Number(limitQuery);

  const handleLimitChange = (value: string) => {
    push(`/posts?page=${currentPage}&limit=${value}`);
  };

  return (
    <div className="w-full flex flex-col flex-wrap px-4 gap-4">
      <PageSizeSelector
        limit={limit}
        onLimitChange={handleLimitChange}
      />

      <PaginationControls
        amountOfPages={pages}
        currentPage={currentPage}
        limit={limit}
      />
    </div>
  );
}
