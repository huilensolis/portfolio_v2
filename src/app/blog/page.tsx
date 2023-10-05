"use client";

import Link from "next/link";
import { PostMetadata } from "../components/post-metadata";
import { type InterfacePostMetadata } from "../interfaces/post-metadata.interface";
import { useEffect, useState } from "react";

export default function Blog() {
  const [isLoading, setIsLoading] = useState(false);
  const [blogsMetaData, setBlogsMetaData] = useState(
    [] as InterfacePostMetadata[]
  );
  const [offset, setOffset] = useState(0);
  const [areMorePosts, setAreMorePosts] = useState(true);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3000/api/blog?offset=${offset}&limit=${limit}`,
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
    }
    if (areMorePosts) {
      setIsLoading(true);
      fetchData().then(() => setIsLoading(false));
    }
  }, [offset, limit]);

  function handleScroll() {
    if (areMorePosts) {
      setOffset((prev) => prev + limit);
    }
    return;
  }
  return (
    <>
      {isLoading ? (
        <p>loading ...</p>
      ) : (
        <ul className="w-full flex flex-col gap-5">
          {blogsMetaData.map((metaData, index) => (
            <li key={metaData.title}>
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
    </>
  );
}
