"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { PageSizeSelector } from "./PageSizeSelector";
import { PaginationControls } from "./PaginationControls";

interface IProps {
  pages: number;
}

export function Pagination({ pages }: IProps) {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const currentPage = Number(searchParams.get("page"));
  const limit = searchParams.get("limit") || "10";

  const handleLimitChange = (value: string) => {
    push(`/posts?page=${currentPage}&limit=${value}`);
  };

  return (
    <div className="w-full flex flex-col flex-wrap px-4 gap-4">
      <PageSizeSelector
        limit={Number(limit)}
        onLimitChange={handleLimitChange}
      />

      <PaginationControls
        amountOfPages={pages}
        currentPage={currentPage}
        limit={Number(limit)}
      />
    </div>
  );
}
