import { LucideProps } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";

interface IItem {
  text: string;
  icon: (props: LucideProps) => React.ReactNode;
}

interface IProps {
  items: IItem[];
}

export function InfoSection({ items }: IProps) {
  return (
    <section className="space-y-1">
      {items.map((item) => {
        const { text, icon: Icon } = item;

        return (
          <div key={text} className="flex items-center gap-2">
            <Icon className="w-4 h-4 text-gray-500" />

            <p className="text-sm text-gray-500 truncate">{text}</p>
          </div>
        );
      })}
    </section>
  );
}

interface ISkeletonProps {
  items: number;
}

export function InfoSectionSkeleton({ items }: ISkeletonProps) {
  return (
    <section className="space-y-1">
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className="flex items-center gap-2">
          <Skeleton className="w-4 h-4 bg-gray-200 rounded-xs" />

          <Skeleton className="w-40 h-4 bg-gray-200 rounded-xs" />
        </div>
      ))}
    </section>
  );
}
