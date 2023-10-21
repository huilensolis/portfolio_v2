import { BoxPattern } from "../components/box-pattern";
import { FloatingContainer } from "../components/floating-container";
import { PrimaryBtn } from "../components/buttons";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";

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
      <main className="h-[calc(100dvh)] pt-20 w-full flex flex-col justify-center items-center absolute top-0 left-0">
        <BoxPattern>
      <figure className="h-screen w-[1px] from-orange-500 to-orange-500/0 bg-gradient-to-b absolute top-0 z-10" />
      <figure className="h-screen w-[1px] from-emerald-500 to-emerald-500/0 bg-gradient-to-b absolute top-0 z-10" />
      <figure className="h-screen w-[1px] from-blue-500 to-blue-500/0 bg-gradient-to-b absolute top-0 z-10" />
      <figure className="h-screen w-[1px] from-red-500 to-red-500/0 bg-gradient-to-b absolute top-0 z-10" />
          <div className="z-10">
            <div className="flex">
              <section className="flex flex-col items-center relative">
                <h1 className="text-6xl font-semibold text-neutral-300 drop-shadow-md">
                  Huilen Solis
                </h1>
                <h2 className="text-4xl font-normal text-neutral-400 rotate">
                  Full stack web developer
                </h2>
              </section>
            </div>
            <div className="mt-8 flex justify-center items-center w-full">
              <PrimaryBtn href="">Projects</PrimaryBtn>
            </div>
          </div>
        </BoxPattern>
      </main>
      <div className="mb-[100dvh] w-full h-[1px]" />
    </>
  );
}
