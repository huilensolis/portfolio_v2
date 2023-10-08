import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Huilen Solis's Portfolio`,
    description:
      "Full stack developer, Working with React, Nextjs, Nodejs and Tailwind!",
    openGraph: {
      images: [{ url: "../../public/icon.png", alt: "Huilen Solis logo" }],
      title: `Huilen Solis's Portfolio`,
      description:
        "Full stack developer, Working with React, Nextjs, Nodejs and Tailwind!",
      type: "website",
      siteName: "Huilen Solis's Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: `Huilen Solis's Portfolio`,
      description:
        "Full stack developer, Working with React, Nextjs, Nodejs and Tailwind!",
      creator: "@solishuilen",
      images: [{ url: "../../public/icon.png", alt: "Huilen Solis logo" }],
    },
  };
}

export default function Home() {
  return (
    <main className="h-screen w-full flex justify-start items-start">
      <h1 className="text-2xl text-cm-black dark:text-cm-white font-bold sm:text-5xl 2xl:text-9xl">
        PORTFOLIO STILL UNDER DEVELOPMENT, <br />
        <span>
          you can{" "}
          <a
            href="https://huilensolis.vercel.app"
            className="text-blue-500"
            target="__blank"
          >
            check my old one
          </a>
        </span>
      </h1>
    </main>
  );
}
