import { notFound } from "next/navigation";

import { getPost, getPosts } from "@/actions/posts";
import { IPageProps } from "@/types/common/page.interface";
import * as E from "@/utils/either";

import { PostContent } from "./components/PostContent";
import { PostSidebar } from "./components/Sidebar";

export const revalidate = 60;
export const dynamicParams = false;

export async function generateStaticParams() {
  const postsResult = await getPosts();
  if (E.isLeft(postsResult)) {
    return [];
  }

  const { posts } = postsResult.value;

  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export async function generateMetadata({ params }: IPageProps<{ id: string }>) {
  const { id } = await params;

  return {
    title: `Post ${id}`,
    description: `Página do post ${id}`,
  };
}

export default async function PostPage({ params }: IPageProps<{ id: string }>) {
  const { id } = await params;
  const postId = Number(id);

  const postResult = await getPost(postId);
  if (E.isLeft(postResult)) {
    return notFound();
  }

  const { title, body, userId } = postResult.value;

  return (
    <div className="max-h-screen flex flex-col lg:flex-row">
      <main className="flex-1 p-8 flex flex-col items-center">
        <PostContent title={title} body={body} />
      </main>

      <PostSidebar userId={userId} postId={postId} />
    </div>
  );
}
