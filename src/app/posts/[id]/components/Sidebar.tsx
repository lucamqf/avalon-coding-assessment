import { Suspense } from "react";

import { Skeleton } from "@/components/ui/skeleton";

import { Author } from "./Author";
import { Comments } from "./Comments";

interface IProps {
  userId: number;
  postId: number;
}

export function PostSidebar({ userId, postId }: IProps) {
  return (
    <aside className="w-full lg:w-[400px] min-h-screen flex flex-col lg:border-l border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <Suspense fallback={<Skeleton className="h-28 w-full" />}>
          <Author userId={userId} />
        </Suspense>
      </div>

      <div className="flex-1 p-4">
        <Suspense
          fallback={<Skeleton className="w-full h-[calc(100vh-10rem)]" />}
        >
          <Comments postId={postId} />
        </Suspense>
      </div>
    </aside>
  );
}
