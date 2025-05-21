import { Skeleton } from "@/components/ui/skeleton";

export default function PostsSkeleton() {
  return (
    <section className="py-4 grid gap-4 overflow-auto grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} className="w-full bg-gray-200 h-40" />
      ))}
    </section>
  );
}
