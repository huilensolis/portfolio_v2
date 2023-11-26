"use client";

import Link from "next/link";
import { PostMetadata } from "@components/post-metadata";
import { type InterfacePostMetadata } from "@models/post-metadata.interface";
import { useEffect, useState } from "react";
import { ErrorComponent } from "@components/error";
import RelativeTime from "@components/relative-time";
import { ArrowUpRight, Logo } from "@components/icons";
import { Hr } from "@components/hr";
import { ProseLayout } from "@components/layout/prose-layout";
import { ImageComponent } from "@components/image";
import { Loader } from "../../../components/loader";
import { Card3 } from "../../../components/card-3";
import { PrimaryBtn } from "../../../components/buttons";
import { Span } from "@/app/components/span";

export default function BlogList() {
  const [isLoading, setIsLoading] = useState(false);
  const [blogsMetaData, setBlogsMetaData] = useState(
    [] as InterfacePostMetadata[],
  );
  const [offset, setOffset] = useState(0);
  const [areMorePosts, setAreMorePosts] = useState(true);
  const [limit, _setLimit] = useState(10);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);
  const [isFirstRequest, setIsFirstRequest] = useState(true);
  const [latestPost, setLatestPost] = useState<InterfacePostMetadata | null>(
    null,
  );

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      setIsLoading(true);

      try {
        const response = await fetch(
          `api/blog?offset=${offset}&limit=${limit}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const jsonResponse: { data: InterfacePostMetadata[] } =
          await response.json();

        if (isFirstRequest) {
          setLatestPost(jsonResponse.data.shift() as InterfacePostMetadata);
          setIsFirstRequest(false);
        }

        setBlogsMetaData((prev) => [...prev, ...jsonResponse.data]);

        const areThereMorePosts = jsonResponse.data.length + 1 >= limit;
        setAreMorePosts(areThereMorePosts);
        setError(false);
      } catch (error) {
        setLatestPost(null);
        setError(true);
      } finally {
        setIsLoading(false);
        setIsFetching(false);
      }
    }
    if (areMorePosts && !isFetching) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  function handleScroll() {
    if (areMorePosts && !error) {
      setOffset((prev) => prev + limit);
    }
    return;
  }
  return (
    <div className="flex flex-col justify-center items-center gap-5 max-w-5xl">
      <main className="w-full flex flex-col items-center">
        {latestPost && (
          <Link href={`/blog/${latestPost.slug}`} className="w-full">
            <article className="flex flex-col gap-5">
              <ImageComponent
                src={latestPost.image}
                alt={latestPost.title}
                className="w-full h-full object-cover object-center"
              />
              <article className="flex flex-col xl:max-h-64 justify-start">
                <h1 className="font-bold text-2xl sm:text-5xl text-cm-white [text-wrap:_balance;]">
                  {latestPost.title}
                </h1>
                <p className="text-gray-500 [text-wrap:_balance;] text-xl">
                  {latestPost.subtitle}
                </p>
                <Span>
                  <span className="text-xl">
                    <RelativeTime date={Date.parse(latestPost.date)} />
                  </span>
                </Span>
              </article>
            </article>
          </Link>
        )}
        <Hr />
        {blogsMetaData.length > 0 && (
          <ul className="w-full flex flex-col gap-5">
            {blogsMetaData.map((metaData, index) => (
              <li key={index} className="w-full">
                <Link
                  href={`blog/${metaData.slug}`}
                  className="hover:cursor-pointer"
                >
                  <PostMetadata
                    metaData={metaData}
                    useObserver={
                      blogsMetaData.length - 1 === index && areMorePosts
                    }
                    callback={
                      blogsMetaData.length - 1 === index ? handleScroll : null
                    }
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
      {isLoading && (
        <ul className="flex flex-col justify-center items-center gap-5 w-full">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <li
                key={index}
                className="w-full animate-pulse delay-75 ease-in-out"
              >
                <article className="w-full flex flex-col gap-3">
                  <figure className="w-3/4 h-8 bg-neutral-600 rounded-xl" />
                  <figure className="w-2/4 h-16 bg-neutral-600 rounded-xl" />
                  <figure className="w-1/4 h-8 bg-neutral-600 rounded-xl" />
                </article>
              </li>
            ))}
        </ul>
      )}
      {error && <ErrorComponent />}
      {blogsMetaData.length === 0 && !isLoading && (
        <Card3>
          <article className="flex flex-col items-center justify-center gap-4">
            <div>
              <h4 className="text-red-300 text-center text-4xl font-bold">
                No blogs found
              </h4>
              <p className="text-red-300 font-normal text-lg text-center ">
                There are no blogs yet, please check back later
              </p>
            </div>
            <Link href="/" className="text-cm-white font-bold w-max">
              <PrimaryBtn>
                Go back to Portfolio <ArrowUpRight classes="w-4 h-4" />
              </PrimaryBtn>
            </Link>
          </article>
        </Card3>
      )}
    </div>
  );
}
