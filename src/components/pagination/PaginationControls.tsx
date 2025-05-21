import Link from "next/link";

import { cn } from "@/lib/utils";

interface IProps {
  amountOfPages: number;
  currentPage: number;
  limit: number;
}

export function PaginationControls({
  amountOfPages,
  currentPage,
  limit,
}: IProps) {
  const pageNumbers = Array.from({ length: amountOfPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-4 flex-wrap">
      {pageNumbers.map((pageNumber) => {
        const isActive = currentPage === pageNumber;

        return (
          <Link
            key={pageNumber}
            href={`/posts?page=${pageNumber}&limit=${limit}`}
            className={cn(
              "text-xl w-8 h-8 flex items-center justify-center rounded-full",
              isActive && "text-white bg-primary-500 font-bold"
            )}
          >
            {pageNumber}
          </Link>
        );
      })}
    </div>
  );
}
