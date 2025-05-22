import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import type { IPost } from "@/types/http/posts.interface";

interface Props {
  post: IPost;
}

export default function Post({ post }: Props) {
  return (
    <Link href={`/posts/${post.id}`} className="h-full">
      <Card
        key={post.id}
        className="bg-white shadow-sm rounded-md hover:shadow-md cursor-pointer h-full"
      >
        <CardContent className="space-y-1">
          <CardTitle className="text-lg font-bold line-clamp-2">
            {post.title}
          </CardTitle>
          <CardDescription className="text-sm text-gray-500 line-clamp-2">
            {post.body}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
