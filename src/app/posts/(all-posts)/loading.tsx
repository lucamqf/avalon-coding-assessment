import PostsSkeleton from "@/app/posts/components/PostsSkeleton";

export default function Loading() {
  return (
    <main className="h-screen">
      <PostsSkeleton />
    </main>
  );
}
