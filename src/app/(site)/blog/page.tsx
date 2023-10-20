import { Metadata } from "next";

import BlogList from "./components/blog-list";

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
    <>
      <BlogList />
    </>
  );
}
