import { getComments } from "@/actions/posts";
import { Avatar } from "@/components/ui/avatar";
import * as E from "@/utils/either";

interface IProps {
  postId: number;
}

export async function Comments({ postId }: IProps) {
  const commentsResult = await getComments(postId);
  if (E.isLeft(commentsResult)) {
    return <p>Error loading comments</p>;
  }

  return (
    <section className="max-h-[calc(100vh-10rem)] flex flex-col border rounded-lg border-gray-200 bg-white">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-bold">Comments</h2>
      </div>

      <div className="h-full overflow-auto p-4 space-y-4">
        {commentsResult.value.map((comment) => (
          <div key={comment.id} className="space-y-1">
            <div className="flex items-center gap-2">
              <Avatar
                className="h-6 w-6"
                initialClassName="bg-primary-200 text-neutral-800 text-xs font-medium"
                initials={comment.email.charAt(0)}
              />

              <p className="text-sm font-bold">{comment.email}</p>
            </div>
            <div className="pl-8">
              <p className="text-sm font-bold">{comment.name}</p>
              <p className="text-xs leading-relaxed">{comment.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
