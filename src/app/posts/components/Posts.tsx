import { getPosts } from "@/actions/posts";
import Post from "@/app/posts/components/Post";
import { Pagination } from "@/components/pagination";
import { NoPostsFound } from "@/components/placeholders/NoPostsFound";
import { DEFAULT_PAGINATION_LIMIT } from "@/constants/pagination";
import * as E from "@/utils/either";

interface IProps {
  userId?: number;
  page?: number;
  limit?: number;
  shouldShowPagination?: boolean;
}

export default async function Posts({
  userId,
  page = 1,
  limit = DEFAULT_PAGINATION_LIMIT,
  shouldShowPagination = false
}: IProps) {
  const postsResult = await getPosts({ userId, page, limit });
  if (E.isLeft(postsResult)) {
    return <NoPostsFound />;
  }
  
  const { totalAmount, posts } = postsResult.value;
  const hasPosts = posts.length > 0;
  
  return (
    <div className="p-4">
      {hasPosts ? (
        <section className="py-4 grid gap-4 overflow-auto grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </section>
      ) : (
        <NoPostsFound />
      )}

      {shouldShowPagination && (
        <Pagination pages={Math.ceil(totalAmount / limit)} />
      )}
    </div>
  );
}
