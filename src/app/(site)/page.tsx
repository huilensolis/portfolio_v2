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
      <main className="h-full w-full flex flex-col gap-4 justify-center items-center">
        <section className="flex flex-col items-center relative mb-10 p-20 justify-center">
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
        <ul className="w-full flex flex-col gap-16 justify-center items-center max-w-5xl relative">
          <li className="z-[1] sticky top-32 animate-cm-fade-in-top w-full">
            <Card
              leftSide={
                <article className="h-full w-full flex flex-col justify-center items-start">
                  <h3 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Culinary Alchemy
                  </h3>
                  <span className="text-[#F3AF37] mb-2">07/2023 - present</span>
                  <p className="font-normal text-neutral-800 dark:text-neutral-400">
                    A Recipe Social Network, build in colaboration with{" "}
                    <a
                      href="https://www.linkedin.com/in/jesus-oyola-b9b530284/"
                      className="dark:text-orange-400 text-orange-600 hover:underline transition-all delay-75"
                      target="_blank"
                    >
                      Jesus Oyola
                    </a>
                    , who worked on the frontend, whyle I worked in the Backend
                    my role consisted on creating the backend api, and its
                    routes, controllers, providers, while working with Json Web
                    Tokens to manage user session and roles. Connecting to a
                    database and manageing images hosted in third party
                    services, interacting through an api.
                  </p>
                  <div className="flex gap-4 mt-4 justify-start w-full">
                    <a href="https://culinary-alchemy-web-app.vercel.app/">
                      <PrimaryBtn>
                        Deploy <ArrowUpRight classes="w-4 h-4" />
                      </PrimaryBtn>
                    </a>
                    <a href="https://github.com/CulinaryAlchemy/CulinaryAlchemy">
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
                      We have been working with a{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Clean Architecture
                      </span>{" "}
                      following the{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Solid principles,
                      </span>{" "}
                      while staying organized using{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Jira
                      </span>{" "}
                      and{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Scrum metodologie
                      </span>{" "}
                    </p>
                  </article>
                </>,
                <>
                  <article className="p-8 flex flex-col">
                    <h3 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Backend Technologies
                    </h3>
                    <p className="font-normal text-neutral-800 dark:text-neutral-400">
                      <span className="dark:text-orange-400 text-orange-600">
                        Typescript
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Node.JS
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Express
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Sequelize
                      </span>{" "}
                      (database ORM),{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        JWT
                      </span>{" "}
                      (Json Web Tokens),{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        PostgreSQL
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Bcrypt
                      </span>{" "}
                      (encripting library),{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Express-validator
                      </span>{" "}
                      (input validation)
                    </p>
                  </article>
                </>,
                <>
                  <article className="p-8 flex flex-col">
                    <h3 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Frontend Technologies
                    </h3>
                    <p className="font-normal text-neutral-800 dark:text-neutral-400">
                      <span className="dark:text-orange-400 text-orange-600">
                        Typescript
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        React
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        React-router-dom
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Mui
                      </span>{" "}
                      (component library),{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Axios
                      </span>{" "}
                      and{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Zod
                      </span>{" "}
                      (input validation)
                    </p>
                  </article>
                  ,
                </>,
              ]}
            />
          </li>
          <li className="sticky top-36 z-[2] animate-cm-fade-in-top [animation-timeline:scroll();] w-full">
            <Card
              leftSide={
                <article className="h-full w-full flex flex-col justify-center items-start">
                  <h3 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Spotify Clone
                  </h3>
                  <span className="text-[#F3AF37]">09/2023 - 09/23</span>
                  <p className="font-normal text-neutral-800 dark:text-neutral-400">
                    A personal Project, Built with Next js, Typescript and
                    Tailwind. It Contains almost all Spotify Functionalities,
                    providing a log In service music player, songs upload, user
                    profile, favorites colection and a song search system.
                  </p>
                  <div className="flex gap-4 mt-4 justify-start w-full">
                    <a
                      href="https://spotify-clone-jjk.vercel.app/"
                      target="_blank"
                    >
                      <PrimaryBtn>
                        Deploy <ArrowUpRight classes="w-4 h-4" />
                      </PrimaryBtn>
                    </a>
                    <a
                      href="https://github.com/Huilensolis/spotify-clone"
                      target="_blank"
                    >
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
                      Backend Technologies
                    </h3>
                    <p className="font-normal text-neutral-800 dark:text-neutral-400">
                      I have used{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Supabase
                      </span>
                      , which is a Firebase Alternative, Built on PostgreSQL,
                      which comes with a ORM for Next js, letting you interact
                      with your database and authenticating the user.
                    </p>
                  </article>
                </>,
                <>
                  <article className="p-8 flex flex-col">
                    <h3 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Frontend Technologies
                    </h3>
                    <p className="font-normal text-neutral-800 dark:text-neutral-400">
                      <span className="dark:text-orange-400 text-orange-600">
                        Typescript
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Next JS
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Supabase
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Zustand
                      </span>{" "}
                      (Global State manager), and{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Remix
                      </span>{" "}
                      (component library)
                    </p>
                  </article>
                  ,
                </>,
              ]}
            />
          </li>
          <li className="sticky top-40 z-[3] animate-cm-fade-in-top [animation-timeline:scroll();]">
            <Card
              leftSide={
                <article className="h-full w-full flex flex-col justify-center items-start">
                  <h3 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Owr
                  </h3>
                  <p className="font-normal text-neutral-800 dark:text-neutral-400">
                    A mini Duolingo clone, which provides random practicing
                    exercises in a entretaining way, providing a sentence in
                    French, letting you choose the correct traduction to
                    English, validation the traduction and communicating if its
                    right or else.
                  </p>
                  <div className="flex gap-4 mt-4 justify-start w-full">
                    <a href="https://owr-french.vercel.app/" target="_blank">
                      <PrimaryBtn>
                        Deploy <ArrowUpRight classes="w-4 h-4" />
                      </PrimaryBtn>
                    </a>
                    <a
                      href="https://github.com/Huilensolis/owr"
                      target="_blank"
                    >
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
                      Frontend Technologies
                    </h3>
                    <p className="font-normal text-neutral-800 dark:text-neutral-400">
                      <span className="dark:text-orange-400 text-orange-600">
                        Typescript
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        React
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        React-router-dom
                      </span>{" "}
                      and{" "}
                      <span className="dark:text-orange-400 text-orange-600">
                        Zustand
                      </span>{" "}
                      (global state manager)
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
