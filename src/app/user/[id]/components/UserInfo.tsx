import {
  Briefcase,
  Building,
  Globe,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

import { getUser } from "@/actions/users";
import { Avatar } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import * as E from "@/utils/either";

import { InfoSection, InfoSectionSkeleton } from "./InfoSection";

interface IProps {
  id: number;
}

export async function UserInfo({ id }: IProps) {
  const userEither = await getUser(id);

  if (E.isLeft(userEither)) {
    return null;
  }

  const { name, username, company, email, website, address, phone } =
    userEither.value;
  const initials = name
    .split(" ")
    .map((name) => name[0])
    .join("");

  const personalInfo = [
    { text: username, icon: User },
    { text: website, icon: Globe },
    { text: address.street, icon: MapPin },
  ];

  const companyInfo = [
    { text: company.name, icon: Building },
    { text: company.bs, icon: Briefcase },
  ];

  const contactInfo = [
    { text: email, icon: Mail },
    { text: phone, icon: Phone },
  ];

  return (
    <section className="pb-4">
      <div className="w-full h-40 bg-primary-500" />

      <div className="pl-6">
        <Avatar
          className="w-32 h-32 -mt-16"
          initialClassName="bg-primary-300 text-neutral-800 text-4xl font-medium"
          initials={initials}
        />

        <h1 className="text-2xl pt-2 font-medium">{name}</h1>

        <div className="flex pt-4 items-end gap-x-14 gap-y-4 flex-wrap">
          <InfoSection items={personalInfo} />
          <InfoSection items={companyInfo} />
          <InfoSection items={contactInfo} />
        </div>
      </div>
    </section>
  );
}

export function UserInfoSkeleton() {
  return (
    <section className="pb-4">
      <div className="w-full h-40 bg-neutral-200 rounded-sm" />

      <div className="pl-6">
        <Skeleton className="w-32 h-32 -mt-16 bg-gray-200 rounded-full" />

        <Skeleton className="w-50 h-6 mt-2 bg-gray-200 rounded-xs" />

        <div className="flex pt-4 items-end gap-x-14 gap-y-4 flex-wrap">
          <InfoSectionSkeleton items={3} />
          <InfoSectionSkeleton items={2} />
          <InfoSectionSkeleton items={2} />
        </div>
      </div>
    </section>
  );
}
