"use client";

import { useEffect, useRef, useState } from "react";
import { InterfacePostMetadata } from "../models/post-metadata.interface";
import RelativeTime from "./relative-time";
import { ProseLayout } from "./layout/prose-layout";

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
    <ProseLayout margings={false}>
      <article
        ref={postMetadataRef}
        className="animate-cm-scale-top transition-all delay-700 ease-in-out max-w-[100vw]"
      >
        <h2 className="font-bold sm:text-4xl text-3xl break-words dark:text-cm-white text-cm-black">
          {metaData.title}
        </h2>
        <p className="text-gray-500 sm:text-4xl break-words sm:break-words">
          {metaData.subtitle}
        </p>
        <span className="dark:text-gray-500 text-gray-600 text-xl">
          <RelativeTime date={Date.parse(metaData.date)} />
        </span>
      </article>
    </ProseLayout>
  );
}
