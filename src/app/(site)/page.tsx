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
            <Card
              leftSide={
                <article className="h-full w-full flex flex-col justify-center items-start">
                  <h3 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Culinary Alchemy
                  </h3>
                  <p className="font-normal text-neutral-800 dark:text-neutral-400">
                    A recipe social network, build in cooperation with{" "}
                    <a
                      href="https://www.linkedin.com/in/jesus-oyola-b9b530284/"
                      className="dark:text-orange-400 text-orange-600"
                    >
                      Jesus Oyola
                    </a>
                    , my role consisted on creating the backend api, creating
                    routes, controllers, providers, connecting to a database and
                    manageing images hosted in third party services, interacting
                    through an api.
                  </p>
                  <div className="flex gap-4 mt-4 justify-start w-full">
                    <PrimaryBtn>Deploy</PrimaryBtn>
                    <SecondaryBtn>github</SecondaryBtn>
                  </div>
                </article>
              }
              cards={[
                <>
                  <img
                    src="https://plus.unsplash.com/premium_photo-1673264933188-811321fb4dd2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-full h-full object-cover rounded-sm"
                  />
                </>,
                <>
                  <img
                    src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-full h-full object-cover rounded-sm"
                  />
                </>,
                <>
                  <h3 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Technologies
                  </h3>
                  <span className="dark:text-orange-400 text-orange-600">
                    Backend
                  </span>
                  <p className="font-normal text-neutral-800 dark:text-neutral-400">
                    Node.JS, Express, JWT, PostgreSQL, Bcrypt, Express-validator
                  </p>
                  <span className="dark:text-orange-400 text-orange-600">
                    Frontend
                  </span>
                  <p className="font-normal text-neutral-800 dark:text-neutral-400">
                    React, React-router-dom, Mui, Axios
                  </p>
                </>,
              ]}
            />
          </li>
        </ul>
      </main>
    </>
  );
}
