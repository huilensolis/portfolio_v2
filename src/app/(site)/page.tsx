import { PrimaryBtn, SecondaryBtn } from "@components/buttons";
import { ArrowUpRight } from "@components/icons";
import { Card } from "@components/card";
import Image from "next/image";

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
        <ul className="w-full flex flex-col gap-8 justify-center items-center max-w-5xl">
          <li className="z-10 sticky top-28">
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
                    <a href="">
                      <PrimaryBtn>
                        Deploy <ArrowUpRight classes="w-4 h-4" />
                      </PrimaryBtn>
                    </a>
                    <a href="">
                      <SecondaryBtn>
                        github <ArrowUpRight classes="w-4 h-4" />
                      </SecondaryBtn>
                    </a>
                  </div>
                </article>
              }
              cards={[
                <>
                  <article className="p-8 flex flex-col">
                    <h3 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Metodologies
                    </h3>
                    <p className="font-normal text-neutral-800 dark:text-neutral-400">
                      we have been working with a{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Clean Architecture
                      </span>{" "}
                      following the{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Solid
                      </span>{" "}
                      principles. We Organized the project with{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Jira
                      </span>{" "}
                      and used the{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Scrum
                      </span>{" "}
                      metodologie
                    </p>
                  </article>
                </>,
                <>
                  <article className="p-8 flex flex-col">
                    <h3 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Backend Technologies
                    </h3>
                    <p className="font-normal text-neutral-800 dark:text-neutral-400">
                      Node.JS, Express, JWT, PostgreSQL, Bcrypt,
                      Express-validator
                    </p>
                  </article>
                </>,
                <>
                  <article className="p-8 flex flex-col">
                    <h3 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Frontend Technologies
                    </h3>
                    <p className="font-normal text-neutral-800 dark:text-neutral-400">
                      React, React-router-dom, Mui, Axios
                    </p>
                  </article>
                  ,
                </>,
              ]}
            />
          </li>
          <li className="animate-cm-fade-in-top [animation-timeline:scroll();] [animation-range:0px_200vh] opacity-0 z-20 sticky top-32">
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
                    <a href="">
                      <PrimaryBtn>
                        Deploy <ArrowUpRight classes="w-4 h-4" />
                      </PrimaryBtn>
                    </a>
                    <a href="">
                      <SecondaryBtn>
                        github <ArrowUpRight classes="w-4 h-4" />
                      </SecondaryBtn>
                    </a>
                  </div>
                </article>
              }
              cards={[
                <>
                  <article className="p-8 flex flex-col">
                    <h3 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Metodologies
                    </h3>
                    <p className="font-normal text-neutral-800 dark:text-neutral-400">
                      we have been working with a{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Clean Architecture
                      </span>{" "}
                      following the{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Solid
                      </span>{" "}
                      principles. We Organized the project with{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Jira
                      </span>{" "}
                      and used the{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Scrum
                      </span>{" "}
                      metodologie
                    </p>
                  </article>
                </>,
                <>
                  <article className="p-8 flex flex-col">
                    <h3 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Backend Technologies
                    </h3>
                    <p className="font-normal text-neutral-800 dark:text-neutral-400">
                      Node.JS, Express, JWT, PostgreSQL, Bcrypt,
                      Express-validator
                    </p>
                  </article>
                </>,
                <>
                  <article className="p-8 flex flex-col">
                    <h3 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Frontend Technologies
                    </h3>
                    <p className="font-normal text-neutral-800 dark:text-neutral-400">
                      React, React-router-dom, Mui, Axios
                    </p>
                  </article>
                  ,
                </>,
              ]}
            />
          </li>
          <li className="animate-cm-fade-in-top [animation-timeline:scroll();] [animation-range:0px_300vh] opacity-0 z-30 sticky top-36">
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
                    <a href="">
                      <PrimaryBtn>
                        Deploy <ArrowUpRight classes="w-4 h-4" />
                      </PrimaryBtn>
                    </a>
                    <a href="">
                      <SecondaryBtn>
                        github <ArrowUpRight classes="w-4 h-4" />
                      </SecondaryBtn>
                    </a>
                  </div>
                </article>
              }
              cards={[
                <>
                  <article className="p-8 flex flex-col">
                    <h3 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Metodologies
                    </h3>
                    <p className="font-normal text-neutral-800 dark:text-neutral-400">
                      we have been working with a{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Clean Architecture
                      </span>{" "}
                      following the{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Solid
                      </span>{" "}
                      principles. We Organized the project with{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Jira
                      </span>{" "}
                      and used the{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Scrum
                      </span>{" "}
                      metodologie
                    </p>
                  </article>
                </>,
                <>
                  <article className="p-8 flex flex-col">
                    <h3 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Backend Technologies
                    </h3>
                    <p className="font-normal text-neutral-800 dark:text-neutral-400">
                      Node.JS, Express, JWT, PostgreSQL, Bcrypt,
                      Express-validator
                    </p>
                  </article>
                </>,
                <>
                  <article className="p-8 flex flex-col">
                    <h3 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Frontend Technologies
                    </h3>
                    <p className="font-normal text-neutral-800 dark:text-neutral-400">
                      React, React-router-dom, Mui, Axios
                    </p>
                  </article>
                  ,
                </>,
              ]}
            />
          </li>
        </ul>
      </main>
    </>
  );
}
