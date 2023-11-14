/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { ImageIcon } from "@icons";

export function ImageComponent({
  src,
  alt,
  className = "w-full h-full object-cover object-center",
}: {
  src: string;
  alt: string;
  className: string;
}) {
  const [error, setError] = useState(() => {
    try {
      new URL(src);
      return false;
    } catch (error) {
      return true;
    }
  });
  const [imageIsLoading, setImageIsLoading] = useState(true);
  return (
    <>
      {!error && (
        <img
          src={src}
          alt={alt}
          className={`${className} h-[196px] md:h-[312px] lg:h-[463px] xl:[600px] ${
            imageIsLoading ? "hidden" : "inline-block"
          }`}
          onError={() => setError(true)}
          onLoad={() => setImageIsLoading(false)}
        />
      )}
      {imageIsLoading && !error && (
        <>
          <div
            className={`animate-pulse delay-75 bg-gray-700 w-full h-[196px] md:h-[312px] lg:h-[463px] xl:[600px]`}
          />
          <span className="sr-only">Loading...</span>
        </>
      )}
      {error && <ErrorImage />}
    </>
  );
}
function ErrorImage() {
  return (
    <div className="w-full h-[196px] md:h-[312px] lg:h-[463px] xl:[600px] flex flex-col gap-1 justify-center items-center bg-gray-700 sm:p-1 p-5">
      <ImageIcon classes="h-20 w-20 fill-gray-400" />
    </div>
  );
}
