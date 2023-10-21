"use client";

import { ReactNode } from "react";
import { IconChevronLeft } from "@tabler/icons-react";
import { PostFooter } from "./post-footer";
import { InterfacePostMetadata } from "@models/post-metadata.interface";
import { AvatarCard } from "@components/avatar-card";
import { Logo } from "@components/icons";
import { Hr } from "@components/hr";
import { useRouter } from "next/navigation";

export function PostLayout({
  children,
  blogsMetaData,
}: {
  children: ReactNode;
  blogsMetaData: InterfacePostMetadata[];
}) {
  const router = useRouter();
  return (
    <article className="max-w-4xl w-full">
      <button
        onClick={() => router.back()}
        className="mb-[20px] flex w-full justify-start items-center"
      >
        <IconChevronLeft className="text-gray-500 dark:text-gray-400 w-6 h-6" />
        <span className="text-gray-500 dark:text-gray-400 text-2xl">
          Go back
        </span>
      </button>
      {children}
      <div className="w-full flex justify-start mt-[0.8888889em]">
        <AvatarCard
          btnHref="https://www.linkedin.com/in/huilensolis/"
          btnTarget="__blank"
          btnText="Connect on Linkedin"
          subtitle="FullStack Developer"
          title="Huilen Solis"
          logo={<Logo classes={"h-16 w-16"} />}
        >
          this is my about me!
        </AvatarCard>
      </div>
      <Hr />
      <PostFooter blogsMetaData={blogsMetaData} />
    </article>
  );
}
