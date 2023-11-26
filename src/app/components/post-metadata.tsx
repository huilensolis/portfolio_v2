"use client";

import { useEffect, useRef, useState } from "react";
import { InterfacePostMetadata } from "../models/post-metadata.interface";
import RelativeTime from "./relative-time";
import { ProseLayout } from "./layout/prose-layout";
import { Span } from "./span";

export function PostMetadata({
  metaData,
  useObserver = false,
  callback,
}: {
  metaData: InterfacePostMetadata;
  useObserver?: boolean;
  callback?: null | (() => void);
}) {
  const postMetadataRef = useRef(null);
  useEffect(() => {
    if (useObserver && callback) {
      const options = {
        root: null,
        rootMargin: "100px",
        threshold: 0.3,
      };
      const observerCallback = (entries: any, observer: any) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            callback();
            observer.unobserve(entry.target);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, options);
      observer.observe(postMetadataRef.current as any);
      if (postMetadataRef === null) observer.disconnect();
    }
  }, [useObserver, callback, postMetadataRef]);

  return (
    <article
      ref={postMetadataRef}
      className="animate-cm-scale-top transition-all delay-700 ease-in-out w-full"
    >
      <h3 className="font-bold sm:text-4xl text-3xl break-words text-neutral-300 [text-wrap:_balance;]">
        {metaData.title}
      </h3>
      <p className="text-gray-500 text-xl break-words sm:break-words [text-wrap:_balance;]">
        {metaData.subtitle}
      </p>
      <Span>
        <span className="text-xl">
          <RelativeTime date={Date.parse(metaData.date)} />
        </span>
      </Span>
    </article>
  );
}
