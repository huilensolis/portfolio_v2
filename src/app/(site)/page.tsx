import cssStyles from "./page.module.css";

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
  const ABOUTME =
    "My journey into web development commenced on the dynamic online learning platform, Platzi. [space] There, I delved into the intricacies of web development, mastering the fundamental building blocks of *JavaScript, *HTML, and *CSS. [space] These early experiences ignited my passion for coding, and in March 2023, I embarked on an exciting journey by enrolling in the *Full *Stack Santex *Bootcamp. [space] The Santex Bootcamp, organized by Santex, a leading software company, was a remarkable initiative. It provided a unique opportunity to learn web development from industry experts who were actively contributing to Santex's projects. In addition to technical skills, I also acquired invaluable experience in teamwork and the *Scrum methodology. [space] Through this immersive experience, I not only honed my skills in JavaScript, Node.js, Express, TypeScript, SCSS, and Angular but also learned how to effectively *collaborate *within *a *team and follow agile Scrum practices. It was an intensive period of growth, and I emerged with the confidence to tackle real-world challenges in web development. [space] In October 2023, as the Bootcamp came to a close, my journey continued, and I ventured into the dynamic realm of *React. Today, I am continuously crafting impressive projects using *React.js, *Next.js, *Tailwind *CSS, *Node.js, *Express, and *TypeScript. The learning never stops, and I'm committed to staying at the forefront of web development technologies to deliver top-notch solutions. I am eager to bring my passion, skills, and dedication to your team. [space] *Let's *create something exceptional together!";
  return (
    <section className="flex flex-col items-center gap-32">
      <main className="flex flex-col items-center relative p-20 cm-1xl:p-4 justify-center">
        <h1 className="text-6xl font-bold dark:text-neutral-300 text-neutral-700 text-center">
          Huilen Solis
        </h1>
        <h2 className="text-xl font-normal dark:text-neutral-400 text-neutral-500 w-2/3 text-center">
          Full Stack Web Developer, building aesthetic, accesible and responsive
          websites.
        </h2>
        <div className="mt-6 flex justify-center items-center gap-4 cm-1xl:flex-wrap">
          <a href="https://github.com/Huilensolis" target="_blank">
            <SecondaryBtn>
              Github
              <ArrowUpRight classes="w-4 h-4" />
            </SecondaryBtn>
          </a>
          <a href="https://www.linkedin.com/in/huilensolis/" target="_blank">
            <PrimaryBtn>
              LinkedIn <ArrowUpRight classes="w-4 h-4" />
            </PrimaryBtn>
          </a>
        </div>
      </main>
      <section className="max-w-5xl">
        <ul className="flex flex-col gap-16 justify-center items-center w-full">
          <li className="z-[1] sticky top-32 cm-2xl:static animate-cm-scale-top w-full">
            <Card
              leftSide={
                <article className="h-full w-full flex flex-col justify-center items-start">
                  <h3 className="text-4xl font-bold tracking-tight text-neutral-700 dark:text-neutral-300">
                    Culinary Alchemy
                  </h3>
                  <span className="dark:text-cm-orange mb-2 text-blue-600">
                    07/2023 - Present
                  </span>
                  <p className="font-normal text-neutral-800 dark:text-neutral-400">
                    A Recipe Social Network, build in colaboration with{" "}
                    <a
                      href="https://www.linkedin.com/in/jesus-oyola-b9b530284/"
                      className="dark:text-cm-orange text-blue-600 font-semibold hover:underline transition-all delay-75"
                      target="_blank"
                    >
                      Jesus Oyola
                    </a>
                    , who worked on the frontend, while I worked in the Backend
                    my role consisted on creating the backend api, and its
                    routes, controllers, providers, while working with Json Web
                    Tokens to manage user session and roles. Connecting to a
                    database and manageing images hosted in third party
                    services, interacting through an api.
                  </p>
                  <div className="flex cm-1xl:flex-col gap-4 mt-4 justify-start w-full">
                    <a
                      href="https://culinary-alchemy-web-app.vercel.app/"
                      target="_blank"
                    >
                      <PrimaryBtn>
                        Deploy <ArrowUpRight classes="w-4 h-4" />
                      </PrimaryBtn>
                    </a>
                    <a
                      href="https://github.com/CulinaryAlchemy/CulinaryAlchemy"
                      target="_blank"
                    >
                      <SecondaryBtn>
                        Github <ArrowUpRight classes="w-4 h-4" />
                      </SecondaryBtn>
                    </a>
                  </div>
                </article>
              }
              cards={[
                <>
                  <article className="p-8 cm-1xl:p-4 flex flex-col dark:border-neutral-600 border-2 border-neutral-400/50 cm-1xl:border-transparent cm-1xl:border-0 dark:cm-1xl:border-transparent dark:cm-1xl:border-0 h-full w-full rounded-xl">
                    <h3 className="mb-2 text-3xl font-bold tracking-tight text-neutral-700 dark:text-neutral-300 cm-1xl:break-all">
                      Metodologies
                    </h3>
                    <p className="font-normal text-neutral-800 dark:text-neutral-400">
                      We have been working with a{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        Clean Architecture
                      </span>{" "}
                      following the{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        Solid principles,
                      </span>{" "}
                      while staying organized using{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        Jira
                      </span>{" "}
                      and{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        Scrum metodologie
                      </span>{" "}
                    </p>
                  </article>
                </>,
                <>
                  <article className="p-8 cm-1xl:p-4 flex flex-col dark:border-neutral-600 border-2 border-neutral-400/50 cm-1xl:border-transparent cm-1xl:border-0 dark:cm-1xl:border-transparent dark:cm-1xl:border-0 h-full w-full rounded-xl">
                    <h3 className="mb-2 text-3xl font-bold tracking-tight text-neutral-700 dark:text-neutral-300 cm-1xl:break-all">
                      Backend Technologies
                    </h3>
                    <p className="font-normal text-neutral-800 dark:text-neutral-400">
                      <span className="dark:text-orange-400 text-blue-600">
                        Typescript
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        Node.JS
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        Express
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        Sequelize
                      </span>{" "}
                      (database ORM),{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        JWT
                      </span>{" "}
                      (Json Web Tokens),{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        PostgreSQL
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        Bcrypt
                      </span>{" "}
                      (encripting library),{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        Express-validator
                      </span>{" "}
                      (input validation)
                    </p>
                  </article>
                </>,
                <>
                  <article className="p-8 cm-1xl:p-4 flex flex-col dark:border-neutral-600 border-2 border-neutral-400/50 cm-1xl:border-transparent cm-1xl:border-0 dark:cm-1xl:border-transparent dark:cm-1xl:border-0 h-full w-full rounded-xl">
                    <h3 className="mb-2 text-3xl  font-bold tracking-tight text-neutral-700 dark:text-neutral-300 cm-1xl:break-all">
                      Frontend Technologies
                    </h3>
                    <p className="font-normal text-neutral-800 dark:text-neutral-400">
                      <span className="dark:text-orange-400 text-blue-600">
                        Typescript
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        React
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        React-router-dom
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        Mui
                      </span>{" "}
                      (component library),{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        Axios
                      </span>{" "}
                      and{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        Zod
                      </span>{" "}
                      (input validation)
                    </p>
                  </article>
                </>,
              ]}
            />
          </li>
          <li className="sticky top-36 cm-2xl:static z-[2] animate-cm-fade-in-top [animation-timeline:view();] [animation-range:10%_500px] w-full opacity-0">
            <Card
              leftSide={
                <article className="h-full w-full flex flex-col justify-center items-start">
                  <h3 className=" text-4xl font-bold tracking-tight text-neutral-700 dark:text-neutral-300 cm-1xl:break-all">
                    Spotify Clone
                  </h3>
                  <span className="dark:text-cm-orange mb-2 text-blue-600">
                    09/2023 - 09/2023
                  </span>
                  <p className="font-normal text-neutral-800 dark:text-neutral-400">
                    A personal Project, Built with Next js, Typescript and
                    Tailwind. It Contains almost all Spotify Functionalities,
                    providing a log In service music player, songs upload, user
                    profile, favorites colection and a song search system.
                  </p>
                  <div className="flex cm-1xl:flex-col gap-4 mt-4 justify-start w-full">
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
                        Github <ArrowUpRight classes="w-4 h-4" />
                      </SecondaryBtn>
                    </a>
                  </div>
                </article>
              }
              cards={[
                <>
                  <article className="p-8 cm-1xl:p-4 flex flex-col dark:border-neutral-600 border-2 border-neutral-400/50 cm-1xl:border-transparent cm-1xl:border-0 dark:cm-1xl:border-transparent dark:cm-1xl:border-0 h-full w-full rounded-xl">
                    <h3 className="mb-2 text-3xl  font-bold tracking-tight text-neutral-700 dark:text-neutral-300 cm-1xl:break-all">
                      Backend Technologies
                    </h3>
                    <p className="font-normal text-neutral-800 dark:text-neutral-400">
                      I have used{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        Supabase
                      </span>
                      , which is a Firebase Alternative, Built on PostgreSQL,
                      which comes with a ORM for Next js, letting you interact
                      with your database and authenticating the user.
                    </p>
                  </article>
                </>,
                <>
                  <article className="p-8 cm-1xl:p-4 flex flex-col dark:border-neutral-600 border-2 border-neutral-400/50 cm-1xl:border-transparent cm-1xl:border-0 dark:cm-1xl:border-transparent dark:cm-1xl:border-0 h-full w-full rounded-xl">
                    <h3 className="mb-2 text-3xl  font-bold tracking-tight text-neutral-700 dark:text-neutral-300 cm-1xl:break-all">
                      Frontend Technologies
                    </h3>
                    <p className="font-normal text-neutral-800 dark:text-neutral-400">
                      <span className="dark:text-orange-400 text-blue-600">
                        Typescript
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        Next JS
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        Supabase
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        Zustand
                      </span>{" "}
                      (Global State manager), and{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        Remix
                      </span>{" "}
                      (component library)
                    </p>
                  </article>
                </>,
              ]}
            />
          </li>
          <li className="sticky top-40 cm-2xl:static z-[3] animate-cm-fade-in-top [animation-timeline:view();] [animation-range:10%_500px] opacity-0 w-full">
            <Card
              leftSide={
                <article className="h-full w-full flex flex-col justify-center items-start">
                  <h3 className=" text-4xl font-bold tracking-tight text-neutral-700 dark:text-neutral-300">
                    Owr
                  </h3>
                  <span className="dark:text-cm-orange mb-2 text-blue-600">
                    08/2023 - 08/2023
                  </span>
                  <p className="font-normal text-neutral-800 dark:text-neutral-400">
                    A mini Duolingo clone, which provides random practicing
                    exercises in a entretaining way, providing a sentence in
                    French, letting you choose the correct traduction to
                    English, validation the traduction and communicating if its
                    right or else.
                  </p>
                  <div className="flex cm-1xl:flex-col gap-4 mt-4 justify-start w-full">
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
                        Github <ArrowUpRight classes="w-4 h-4" />
                      </SecondaryBtn>
                    </a>
                  </div>
                </article>
              }
              cards={[
                <>
                  <article className="p-8 cm-1xl:p-4 flex flex-col dark:border-neutral-600 border-2 border-neutral-400/50 cm-1xl:border-transparent cm-1xl:border-0 dark:cm-1xl:border-transparent dark:cm-1xl:border-0 h-full w-full rounded-xl">
                    <h3 className="mb-2 text-3xl font-bold tracking-tight text-neutral-700 dark:text-neutral-300 cm-1xl:break-all">
                      Frontend Technologies
                    </h3>
                    <p className="font-normal text-neutral-800 dark:text-neutral-400">
                      <span className="dark:text-orange-400 text-blue-600">
                        Typescript
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        React
                      </span>
                      ,{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        React-router-dom
                      </span>{" "}
                      and{" "}
                      <span className="dark:text-orange-400 text-blue-600">
                        Zustand
                      </span>{" "}
                      (global state manager)
                    </p>
                  </article>
                </>,
              ]}
            />
          </li>
        </ul>
      </section>

      <section className="max-w-5xl">
        <article className="w-full h-full flex flex-col items-start justify-center max-w-[calc(100vw-12rem)] overflow-y-visible">
          <h3 className="text-cm-white font-semibold text-5xl">
            {/* A little more <br /> about me */}
          </h3>
          <div className="flex flex-wrap gap-8">
            {ABOUTME.split(" ").map((word, i) => {
              if (word === "[space]") {
                return <div className="w-full h-16" key={i} />;
              }

              if (word.startsWith("*")) {
                const charactersArray = word.split("");
                charactersArray.shift();

                const finalWord = charactersArray.join("");
                return (
                  <p
                    className="text-cm-white text-4xl font-semibold animate-cm-fade-text-in-top-orange [animation-timeline:view()] [animation-range:entry_150px_800px] text-center text-transparent"
                    key={i}
                  >
                    {finalWord}
                  </p>
                );
              }

              return (
                <p
                  className="text-cm-white text-4xl font-semibold animate-cm-fade-text-in-top-dark [animation-timeline:view()] [animation-range:entry_150px_800px] text-center text-transparent"
                  key={i}
                >
                  {word}
                </p>
              );
            })}
            {/* <p className="text-cm-white text-5xl animate-cm-fade-text-in-top-dark [animation-timeline:view()] 
            <p className="text-cm-white text-5xl animate-cm-fade-text-in-top-dark [animation-timeline:view()] [animation-range:entry_400px_800px] text-center text-transparent">
              
            </p>
            <p className="text-cm-white text-5xl animate-cm-fade-text-in-top-dark [animation-timeline:view()] [animation-range:entry_400px_800px] text-center text-transparent">
              
            </p> */}
          </div>
        </article>
      </section>

      <section id={cssStyles["sectionPin"]}>
        <div className={cssStyles["pin-wrap-sticky"]}>
          <div className={cssStyles["pin-wrap"]}>
            <div className="flex py-10 w-full h-[calc(100%-(2.5rem*2))] px-24"></div>
          </div>
        </div>
      </section>
    </section>
  );
}
