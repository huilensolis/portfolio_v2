"use client";

import Link from "next/link";
import { PostMetadata } from "../components/post-metadata";
import { type InterfacePostMetadata } from "../models/post-metadata.interface";
import { useEffect, useRef, useState } from "react";
import { ErrorComponent } from "../components/error";
import { Loader } from "../components/loader";

export default function Blog() {
  const [isLoading, setIsLoading] = useState(false);
  const [blogsMetaData, setBlogsMetaData] = useState(
    [] as InterfacePostMetadata[]
  );
  const [offset, setOffset] = useState(0);
  const [areMorePosts, setAreMorePosts] = useState(true);
  const [limit, setLimit] = useState(10);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      setIsLoading(true);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blog?offset=${offset}&limit=${limit}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonResponse: { data: InterfacePostMetadata[] } =
          await response.json();

        setBlogsMetaData((prev) => [...prev, ...jsonResponse.data]);

        const areThereMorePosts = jsonResponse.data.length >= limit;
        setAreMorePosts(areThereMorePosts);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
        setIsFetching(false);
      }
    }
    if (areMorePosts && !isFetching) {
      fetchData();
    }
  }, [offset]);

  function handleScroll() {
    if (areMorePosts && !error) {
      setOffset((prev) => prev + limit);
    }
    return;
  }
  return (
    <>
      {blogsMetaData.length > 0 && (
        <ul className="w-full flex flex-col gap-5">
          {blogsMetaData.map((metaData, index) => (
            <li key={index}>
              <Link href={`blog/${metaData.slug}`}>
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
      {isLoading && <Loader />}
      {error && <ErrorComponent />}
    </>
  );
}
