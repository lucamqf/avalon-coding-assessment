import { Mail, User } from "lucide-react";

import { getUser } from "@/actions/users";
import { InfoSection } from "@/app/user/[id]/components/InfoSection";
import { Avatar } from "@/components/ui/avatar";
import * as E from "@/utils/either";
import Link from "next/link";

interface IProps {
  userId: number;
}

export async function Author({ userId }: IProps) {
  const userResult = await getUser(userId);
  if (E.isLeft(userResult)) {
    return <p>Error loading user</p>;
  }

  const { name, username, email } = userResult.value;

  return (
    <Link href={`/user/${userId}`}>
      <section className="h-28 border rounded-lg border-gray-200 p-4 flex items-center gap-4 bg-white">
        <Avatar
          className="h-14 w-14"
          initialClassName="bg-primary-400 text-neutral-800 text-xl font-medium"
          initials={userResult.value.name
            .split(" ")
            .map((name) => name.charAt(0))
            .join("")}
        />

        <div className="space-y-1">
          <h1 className="text-md font-bold truncate">{name}</h1>

          <InfoSection
            items={[
              { text: username, icon: User },
              { text: email, icon: Mail },
            ]}
          />
        </div>
      </section>
    </Link>
  );
}
