import { ReactNode } from "react";
import Link from "next/link";
import { IconChevronLeft } from "@tabler/icons-react";
import { PostFooter } from "./post-footer";
import { PostMetadata } from "../../../interfaces/post-metadata.interface";
export function PostLayout({
  children,
  blogsMetaData,
}: {
  children: ReactNode;
  blogsMetaData: PostMetadata[];
}) {
  return (
    <>
      <Link
        href={"/blog"}
        className="mb-[20px] flex w-full justify-start items-center"
      >
        <IconChevronLeft className="text-gray-500 dark:text-gray-400" />
        <span className="text-gray-500 dark:text-gray-400">go back</span>
      </Link>
      {children}
      <div className="w-full h-[1px] my-14 bg-gray-400 dark:bg-gray-700" />
      <PostFooter blogsMetaData={blogsMetaData} />
    </>
  );
}
