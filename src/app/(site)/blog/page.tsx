import { Metadata } from "next";

import BlogList from "./components/blog-list";
import { Span } from "@/app/components/span";

export const metadata: Metadata = {
  title: "Huilen Blog",
  description: "FullStack development",
  openGraph: {
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/113150193?v=4",
        alt: "Huilen Solis blog",
      },
    ],
    title: "Huilen Blog",
    description: "FullStack development",
    type: "website",
    siteName: "Huilen Solis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Huilen Blog",
    description: "FullStack development",
    creator: "@solishuilen",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/113150193?v=4",
        alt: "Huilen Solis blog",
      },
    ],
  },
};

export default function Blog() {
  return (
    <div className="max-w-5xl w-full h-full flex flex-col gap-24">
      <main className="flex flex-col items-center px-20 pb-20 cm-1xl:p-4 justify-center gap-2">
        <h1 className="text-7xl cm-lg:text-4xl cm-1xl:text-5xl font-bold text-neutral-300 text-center [text-wrap:_balance;]">
          My Developer <Span>Journey</Span> Blog
        </h1>
        <sub className="text-xl font-normal text-neutral-400 [text-wrap:_balance;] w-full text-center">
          Here is where I share my journey in web development. Sharing
          experiences, opinions, tips and tutorials.
        </sub>
      </main>
      <BlogList />
    </div>
  );
}
