import { Suspense } from "react";

import { getUser, getUsers } from "@/actions/users";
import Posts from "@/app/posts/components/Posts";
import PostsSkeleton from "@/app/posts/components/PostsSkeleton";
import { Separator } from "@/components/ui/separator";
import { IPageProps } from "@/types/common/page.interface";
import * as E from "@/utils/either";

import { UserInfo, UserInfoSkeleton } from "./components/UserInfo";

export const revalidate = 60;
export const dynamicParams = false;

export async function generateStaticParams() {
  const usersEither = await getUsers();

  if (E.isLeft(usersEither)) {
    return [];
  }

  return usersEither.value.map((user) => ({
    id: String(user.id),
  }));
}

export async function generateMetadata({ params }: IPageProps<{ id: string }>) {
  const { id } = await params;

  const userResult = await getUser(Number(id));
  if (E.isLeft(userResult)) {
    return {
      title: "Usuário não encontrado",
      description: "Usuário não encontrado",
    };
  }

  const { name } = userResult.value;

  return {
    title: name,
    description: `Página do usuário ${name}`,
  };
}


export default async function UserPage({ params }: IPageProps<{ id: string }>) {
  const { id } = await params;

  return (
    <>
      <Suspense fallback={<UserInfoSkeleton />}>
        <UserInfo id={Number(id)} />
      </Suspense>

      <Separator />

      <Suspense fallback={<PostsSkeleton />}>
        <Posts userId={Number(id)} />
      </Suspense>
    </>
  );
}
