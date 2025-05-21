import { Separator } from "@/components/ui/separator";

interface IProps {
  title: string;
  body: string;
}

export function PostContent({ title, body }: IProps) {
  return (
    <article className="max-w-2xl w-full space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
        <Separator />
      </header>

      <p className="text-gray-600 leading-relaxed">{body}</p>
    </article>
  );
}
