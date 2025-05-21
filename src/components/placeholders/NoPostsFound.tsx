import Image from "next/image";

export function NoPostsFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-4">
      <Image
        src="/images/no-posts.svg"
        alt="No posts found"
        width={150}
        height={150}
      />

      <p className="text-gray-400 text-xl">Nenhum post encontrado</p>
    </div>
  );
}
