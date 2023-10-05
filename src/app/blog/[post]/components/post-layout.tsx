import { ReactNode } from "react";
import Link from "next/link";
import { IconChevronLeft } from "@tabler/icons-react";
import { PostFooter } from "./post-footer";
import { InterfacePostMetadata } from "../../../interfaces/post-metadata.interface";
export function PostLayout({
  children,
  blogsMetaData,
}: {
  children: ReactNode;
  blogsMetaData: InterfacePostMetadata[];
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
      <hr className="w-full my-14 dark:border-gray-700 border-b-[1px] border-gray-400" />
      <PostFooter blogsMetaData={blogsMetaData} />
    </>
  );
}
