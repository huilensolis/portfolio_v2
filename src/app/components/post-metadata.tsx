"use client";

import { useEffect, useRef, useState } from "react";
import { InterfacePostMetadata } from "../models/post-metadata.interface";
import RelativeTime from "./relative-time";

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
      className="animate-cm-scale-top transition-all delay-700 ease-in-out"
    >
      <h2 className="font-bold text-4xl dark:text-cm-white text-cm-black">
        {metaData.title}
      </h2>
      <p className="dark:text-gray-500 text-gray-600">{metaData.subtitle}</p>
      <span className="dark:text-gray-500 text-gray-600">
        <RelativeTime date={Date.parse(metaData.date)} />
      </span>
    </article>
  );
}
