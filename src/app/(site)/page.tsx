import { PrimaryBtn, SecondaryBtn } from "@components/buttons";
import { ArrowUpRight } from "@components/icons";
import { Card } from "@components/card";

export const metadata = {
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

export default function Home() {
  return (
    <>
      <main className="h-full w-full flex flex-col gap-4 justify-center items-center p-20">
        <section className="flex flex-col items-center relative mb-10">
          <h1 className="text-6xl font-semibold dark:text-neutral-300 text-neutral-700">
            Huilen Solis
          </h1>
          <h2 className="text-4xl font-normal dark:text-neutral-400 text-neutral-500">
            Full stack web developer
          </h2>
          <div className="mt-6 flex justify-center items-center gap-4">
            <a href="#projects">
              <PrimaryBtn>Projects</PrimaryBtn>
            </a>
            <a href="https://www.linkedin.com/in/huilensolis/" target="_blank">
              <SecondaryBtn>
                Linkedin <ArrowUpRight classes="w-4 h-4" />
              </SecondaryBtn>
            </a>
          </div>
        </section>
        <ul className="w-full flex justify-center items-center">
          <li className="w-full max-w-5xl">
            <Card />
          </li>
        </ul>
      </main>
    </>
  );
}
