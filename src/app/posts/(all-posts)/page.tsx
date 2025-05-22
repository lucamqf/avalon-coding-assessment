import Posts from "@/app/posts/components/Posts";
import { IPageProps } from "@/types/common/page.interface";

export const metadata = {
  title: "Posts",
  description: "Página de posts",
};

export default async function PostsPage({ searchParams }: IPageProps) {
  const { page, limit } = await searchParams;

  const pageNumber = page ? Number(page) : undefined;
  const limitNumber = limit ? Number(limit) : undefined;

  return <Posts page={pageNumber} limit={limitNumber} shouldShowPagination />;
}
