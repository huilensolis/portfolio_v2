import { ReactNode } from "react";
import Link from "next/link";

export function PostLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Link href={"/blog"} className="mb-[20px] flex w-full justify-start items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-chevron-left text-gray-500 dark:text-gray-400"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M15 6l-6 6l6 6"></path>
        </svg>
        <span className="text-gray-500 dark:text-gray-400">go back</span>
      </Link>
      {children}
    </>
  );
}
