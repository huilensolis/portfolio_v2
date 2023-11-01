"use client";

import { ReactNode } from "react";
import { IconChevronLeft } from "@tabler/icons-react";
import { PostFooter } from "./post-footer";
import { InterfacePostMetadata } from "@models/post-metadata.interface";
import { ArrowUpRight, Logo } from "@components/icons";
import { Hr } from "@components/hr";
import { useRouter } from "next/navigation";
import { Card } from "../../../../components/card";

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
        <Card
          leftSide={
            <article className="w-full flex flex-col cm-2xl:flex-row cm-2xl:gap-4 cm-2xl:items-center cm-lg:flex-col">
              <Logo classes={"h-48 w-48 cm-lg:w-full cm-lg:h-full"} />
              <h1 className="dark:text-neutral-300 text-neutral-700 font-bold text-7xl break-all cm-lg:hidden">
                Lets <br /> Con <br /> nect!
              </h1>
              <h1 className="dark:text-neutral-300 text-neutral-700 font-bold text-7xl break-all hidden cm-lg:inline-block">
                Lets Connect!
              </h1>
            </article>
          }
          cards={[
            <>
              <a
                href="https://www.linkedin.com/in/huilensolis"
                target="_blank"
                className="w-full h-full rounded-xl overflow-hidden"
              >
                <article className="h-full w-full flex flex-col cm-1xl:flex-row cm-1xl:gap-4 cm-1xl:items-center items-start p-4 bg-blue-600">
                  <div className="flex items-center">
                    <h3 className="text-neutral-300 font-bold text-4xl cm-1xl:text-7xl cm-lg:text-4xl">
                      LinkedIn
                    </h3>
                  </div>
                  <ArrowUpRight classes="text-neutral-300 h-64 w-64 text-neutral-300 cm-1xl:h-14 cm-1xl:w-14 cm-lg:h-8 cm-lg:w-8" />
                </article>
              </a>
            </>,
            <>
              <a
                href="https://twitter.com/solishuilen"
                target="_blank"
                className="w-full h-full rounded-xl overflow-hidden"
              >
                <article className="flex flex-col cm-1xl:flex-row cm-1xl:gap-4 cm-1xl:items-center items-start p-4 bg-neutral-950 h-full w-full md:text-red-100">
                  <div className="flex items-center">
                    <h3 className="text-neutral-300 font-bold text-4xl cm-1xl:text-7xl  cm-lg:text-4xl">
                      Twitter
                    </h3>
                  </div>
                  <ArrowUpRight classes="text-neutral-300 h-64 w-64 text-neutral-300 cm-1xl:h-14 cm-1xl:w-14 cm-lg:h-8 cm-lg:w-8" />
                </article>
              </a>
            </>,
            <>
              <a
                href="https://github.com/Huilensolis"
                target="_blank"
                className="w-full h-full rounded-xl overflow-hidden"
              >
                <article className="flex flex-col cm-1xl:flex-row cm-1xl:gap-4 cm-1xl:items-center items-start p-4 bg-neutral-800 h-full w-full md:text-red-100">
                  <div className="flex items-center">
                    <h3 className="text-neutral-300 font-bold text-4xl cm-1xl:text-7xl cm-lg:text-4xl">
                      Github
                    </h3>
                  </div>
                  <ArrowUpRight classes="text-neutral-300 h-64 w-64 text-neutral-300 cm-1xl:h-14 cm-1xl:w-14 cm-lg:h-8 cm-lg:w-8" />
                </article>
              </a>
            </>,
          ]}
        />
      </div>
      <Hr />
      <PostFooter blogsMetaData={blogsMetaData} />
    </article>
  );
}
