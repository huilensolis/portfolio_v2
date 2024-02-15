import { PrimaryBtn, SecondaryBtn } from "@components/buttons";
import {
  ArrowUpRight,
  IconBxlJavascript,
  IconBxlReact,
  IconCss3,
  IconExpress,
  IconHtml5,
  IconNextjs,
  IconNodeJs,
  IconTypescript,
} from "@components/icons";
import { Card } from "@components/card";
import { Span } from "../components/span";
import { SingleCard } from "../components/card-2";
import { SquarePatten } from "../components/square-patten";
import { Chip } from "../components/chip";

export const metadata = {
  title: `Huilen Solis's Portfolio`,
  description:
    "Full stack developer, Working with React, Nextjs, Nodejs and Tailwind!",
  openGraph: {
    images: [{ url: "/metadata-portfolio.png", alt: "Huilen Solis logo" }],
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
    images: [{ url: "/metadata-portfolio.png", alt: "Huilen Solis logo" }],
  },
};
const technologies: {
  name: string;
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  color: "orange" | "blue" | "violet" | "green";
  span: string;
}[] = [
  {
    name: "Next JS",
    icon: IconNextjs,
    color: "violet",
    span: "xl:col-span-3 col-span-1",
  },
  {
    name: "React JS",
    icon: IconBxlReact,
    color: "blue",
    span: "xl:col-span-3 col-span-1",
  },
  {
    name: "Node JS",
    icon: IconNodeJs,
    color: "green",
    span: "xl:col-span-2 col-span-1",
  },
  {
    name: "Typescript",
    icon: IconTypescript,
    color: "blue",
    span: "xl:col-span-4 col-span-1",
  },

  {
    name: "JavaScript",
    icon: IconBxlJavascript,
    color: "orange",
    span: "xl:col-span-4 col-span-1",
  },
  {
    name: "Express",
    icon: IconExpress,
    color: "green",
    span: "xl:col-span-2 col-sapn-1",
  },
  {
    name: "CSS",
    icon: IconCss3,
    color: "blue",
    span: "xl:col-span-3 col-span-1",
  },

  {
    name: "HTML",
    icon: IconHtml5,
    color: "orange",
    span: "xl:col-span-3 col-span-1",
  },
];
export default function Home() {
  return (
    <>
      <SquarePatten />
      <section className="flex flex-col items-center gap-24 max-w-5xl w-full relative">
        <main className="flex flex-col items-center px-20 pb-20 cm-1xl:p-4 justify-center z-[3]">
          <h1 className="text-5xl cm-lg:text-4xl break-words font-bold text-neutral-300 text-center z-10 flex justify-center items-center [text-wrap:_balance]">
            Frontend Engineer - Forging Solutions with The-State-Of-Art
            Technologies, Enforcing Accessibility for Inclusive User Experiences
          </h1>
          <div className="mt-6 flex justify-center items-center gap-8 cm-1xl:gap-4 cm-1xl:flex-wrap w-full">
            <a
              href="https://www.linkedin.com/in/huilensolis/"
              target="_blank"
              className="sm:w-40 w-full max-w-xs"
            >
              <PrimaryBtn>
                LinkedIn <ArrowUpRight classes="w-4 h-4" />
              </PrimaryBtn>
            </a>
            <a
              href="https://github.com/Huilensolis"
              target="_blank"
              className="sm:w-40 w-full max-w-xs"
            >
              <SecondaryBtn>
                Github
                <ArrowUpRight classes="w-4 h-4" />
              </SecondaryBtn>
            </a>
          </div>
        </main>
        <section className="w-full flex flex-col justify-center items-center gap-8 mb-20 z-10">
          <h2 className="text-5xl font-bold text-neutral-300">Projects</h2>
          <ul className="flex flex-col gap-16 justify-center items-center w-full">
            <li className="z-[1] sticky top-32 cm-2xl:static animate-cm-scale-top w-full">
              <Card
                leftSide={
                  <article className="h-full w-full flex flex-col justify-center items-start">
                    <h3 className="text-4xl font-semibold tracking-tight text-neutral-300">
                      Culinary Alchemy
                    </h3>
                    <span className="text-orange-300 mb-2 ">
                      07/2023 - Present
                    </span>
                    <p className="font-normal text-neutral-400 [text-wrap:_balance;]">
                      A Recipe Social Network, built in collaboration with{" "}
                      <a
                        href="https://www.linkedin.com/in/jesus-oyola-b9b530284/"
                        className="text-orange-300 font-semibold hover:underline transition-all delay-75"
                        target="_blank"
                      >
                        Jesus Oyola
                      </a>
                      , who worked on the frontend, while I worked in the
                      Backend. My role consisted of creating the backend API,
                      and its routes, controllers, and providers while working
                      with JSON Web Tokens to manage user sessions and roles.
                      Connecting to a database and managing images hosted in
                      third-party services, interacting through an API.
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
                    <article className="p-8 cm-1xl:p-4 flex flex-col border-neutral-600 border-[1px]   h-full w-full ">
                      <h4 className="mb-2 text-2xl font-semibold tracking-tight text-neutral-300 cm-1xl:break-all">
                        Metodologies
                      </h4>
                      <p className="font-normal text-neutral-400 ">
                        We have been working with a{" "}
                        <span className="text-orange-300">
                          Clean Architecture
                        </span>{" "}
                        following the{" "}
                        <span className="text-orange-300">
                          Solid principles,
                        </span>{" "}
                        while staying organized using{" "}
                        <span className="text-orange-300">Jira</span> and{" "}
                        <span className="text-orange-300">
                          Scrum metodologie
                        </span>{" "}
                      </p>
                    </article>
                  </>,
                  <>
                    <article className="p-8 cm-1xl:p-4 flex flex-col border-neutral-600 border-[1px]   h-full w-full ">
                      <h4 className="mb-2 text-2xl font-semibold tracking-tight text-neutral-300 cm-1xl:break-all">
                        Backend Technologies
                      </h4>
                      <section className="flex flex-wrap gap-2">
                        <Chip bgColor="bg-blue-500/20" textColor="text-sky-200">
                          Typescript
                        </Chip>
                        <Chip
                          bgColor="bg-emerald-500/30"
                          textColor="text-emerald-200"
                        >
                          Node JS
                        </Chip>
                        <Chip
                          bgColor="bg-violet-500/30"
                          textColor="text-violet-200"
                        >
                          Express
                        </Chip>
                        <Chip bgColor="bg-blue-500/20" textColor="text-sky-200">
                          Sequelize(ORM)
                        </Chip>
                        <Chip
                          bgColor="bg-orange-500/20"
                          textColor="text-orange-200"
                        >
                          Json Web Tokens
                        </Chip>
                        <Chip
                          bgColor="bg-yellow-500/20"
                          textColor="text-yellow-200"
                        >
                          PostgreSQL
                        </Chip>
                        <Chip bgColor="bg-sky-500/20" textColor="text-sky-200">
                          Bcrypt (encrypting)
                        </Chip>
                      </section>
                    </article>
                  </>,
                  <>
                    <article className="p-8 cm-1xl:p-4 flex flex-col border-neutral-600 border-[1px]   h-full w-full">
                      <h4 className="mb-2 text-2xl  font-semibold tracking-tight  text-neutral-300 cm-1xl:break-all">
                        Frontend Technologies
                      </h4>
                      <section className="flex flex-wrap gap-2">
                        <Chip bgColor="bg-blue-500/20" textColor="text-sky-200">
                          Typescript
                        </Chip>
                        <Chip bgColor="bg-sky-500/30" textColor="text-sky-200">
                          React
                        </Chip>
                        <Chip bgColor="bg-red-500/30" textColor="text-red-200">
                          React Router Dom
                        </Chip>
                        <Chip bgColor="bg-blue-500/20" textColor="text-sky-200">
                          Sequelize(ORM)
                        </Chip>
                        <Chip
                          bgColor="bg-blue-500/20"
                          textColor="text-blue-200"
                        >
                          MUI
                        </Chip>
                        <Chip
                          bgColor="bg-yellow-500/20"
                          textColor="text-yellow-200"
                        >
                          Axios
                        </Chip>
                        <Chip bgColor="bg-red-500/20" textColor="text-red-200">
                          Zod
                        </Chip>
                      </section>
                    </article>
                  </>,
                ]}
              />
            </li>
            <li className="sticky top-36 cm-2xl:static z-[2] animate-cm-fade-in-top [animation-timeline:view();] [animation-range:10%_500px] supports-no-scroll-driven-animations:animate-none w-full opacity-0">
              <Card
                leftSide={
                  <article className="h-full w-full flex flex-col justify-center items-start">
                    <h3 className="text-4xl font-semibold tracking-tight text-neutral-300 cm-1xl:break-all">
                      Spotify Clone
                    </h3>
                    <span className="text-orange-300 mb-2 ">
                      09/2023 - 09/2023
                    </span>
                    <p className="font-normal text-neutral-400 [text-wrap:_balance;]">
                      A personal Project, Built with Next js, Typescript and
                      Tailwind. It Contains almost all Spotify Functionalities,
                      providing a log-in service music player, songs upload,
                      user profile, favorites collection and a song search
                      system.
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
                    <article className="p-8 cm-1xl:p-4 flex flex-col border-neutral-600 border-[1px] h-full w-full ">
                      <h4 className="mb-2 text-2xl  font-semibold tracking-tight text-neutral-300 cm-1xl:break-all">
                        Backend Technologies
                      </h4>
                      <p className="font-normal text-neutral-400 [text-wrap:_balance;]">
                        I have used{" "}
                        <span className="text-orange-300">Supabase</span>, which
                        is a Firebase Alternative, Built on PostgreSQL, which
                        comes with an ORM for Next js, letting you interact with
                        your database and authenticate the user.
                      </p>
                    </article>
                  </>,
                  <>
                    <article className="p-8 cm-1xl:p-4 flex flex-col border-neutral-600 border-[1px]   h-full w-full ">
                      <h4 className="mb-2 text-2xl font-semibold tracking-tight text-neutral-300 cm-1xl:break-all">
                        Frontend Technologies
                      </h4>
                      <section className="flex flex-wrap gap-2">
                        <Chip bgColor="bg-blue-500/20" textColor="text-sky-200">
                          Typescript
                        </Chip>
                        <Chip
                          bgColor="bg-neutral-500/30"
                          textColor="text-neutral-200"
                        >
                          Next JS
                        </Chip>
                        <Chip
                          bgColor="bg-emerald-500/30"
                          textColor="text-emerald-200"
                        >
                          Supabase ORM
                        </Chip>
                        <Chip
                          bgColor="bg-orange-500/20"
                          textColor="text-orange-200"
                        >
                          Zustand
                        </Chip>
                        <Chip
                          bgColor="bg-pink-500/20"
                          textColor="text-pink-200"
                        >
                          Radix UI
                        </Chip>
                        <Chip
                          bgColor="bg-blue-500/20"
                          textColor="text-blue-200"
                        >
                          Tailwind CSS
                        </Chip>
                      </section>
                    </article>
                  </>,
                ]}
              />
            </li>
            <li className="sticky top-40 cm-2xl:static z-[3] animate-cm-fade-in-top supports-no-scroll-driven-animations:animate-none [animation-timeline:view();] [animation-range:10%_500px] opacity-0 w-full">
              <Card
                leftSide={
                  <article className="h-full w-full flex flex-col justify-center items-start">
                    <h3 className=" text-4xl font-semibold tracking-tight text-neutral-300">
                      Owr
                    </h3>
                    <span className="text-orange-300 mb-2 ">
                      08/2023 - 08/2023
                    </span>
                    <p className="font-normal text-neutral-400 [text-wrap:_balance;]">
                      A mini Duolingo clone, which entertainingly provides
                      random practising exercises, providing a sentence in
                      French, letting you choose the correct traduction to
                      English, validating the traduction and communicating if it
                      is right or else.
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
                    <article className="p-8 cm-1xl:p-4 flex flex-col border-neutral-600 border-[1px] h-full w-full ">
                      <h4 className="mb-2 text-2xl font-semibold tracking-tight text-neutral-300 cm-1xl:break-all">
                        Frontend Technologies
                      </h4>
                      <section className="flex flex-wrap gap-2">
                        <Chip bgColor="bg-blue-500/20" textColor="text-sky-200">
                          Typescript
                        </Chip>
                        <Chip bgColor="bg-sky-500/30" textColor="text-sky-200">
                          React
                        </Chip>
                        <Chip bgColor="bg-red-500/30" textColor="text-red-200">
                          React Router DOM
                        </Chip>
                        <Chip
                          bgColor="bg-orange-500/20"
                          textColor="text-orange-200"
                        >
                          Zustand
                        </Chip>
                        <Chip
                          bgColor="bg-blue-500/20"
                          textColor="text-blue-200"
                        >
                          Tailwind CSS
                        </Chip>
                      </section>
                    </article>
                  </>,
                ]}
              />
            </li>
          </ul>
        </section>
        <section className="w-full flex flex-col gap-8 justify-center items-center mb-20 relative">
          <figure className="absolute top-[-10%] left-0 h-[110%] w-[1px] [background-image:_radial-gradient(at_center,_#FFDBB3,_#FFF7E41A);] opacity-20" />
          <figure className="absolute top-[10%] right-0 h-[110%] w-[1px] [background-image:_radial-gradient(at_center,_#FFDBB3,_#FFF7E41A);] opacity-20" />
          <h2 className="text-5xl font-bold text-neutral-300">About me</h2>
          <article className="flex flex-col justify-center items-center gap-5 px-32 cm-1xl:px-5 text-cm-white font-normal text-lg text-center">
            <p className="text-neutral-200">
              Completed Santex Bootcamp in 2023, gaining proficiency in
              full-stack development, collaborative workflows, and utilizing
              Scrum methodology for product development. Continuously improving
              English proficiency since 2019 through ongoing language studies.
              <br />
              <br />
              Subsequently, I have actively built personal projects
              collaborating with friends and open-source contributors on GitHub.
              <br />
              <br />
              Seeking a remote Frontend/Full-stack position, with an environment
              that propels my developer growth. Eager to join a collaborative
              team and receive mentorship from seasoned professionals, while
              contributing my skills for building innovative products. My
              commitment to ongoing learning drives my interest in embracing new
              technologies, industry best practices, and design patterns.
            </p>
            <a
              href="https://www.linkedin.com/in/huilensolis/"
              target="_blank"
              className="sm:w-40 inline-block w-full"
            >
              <PrimaryBtn>
                LinkedIn <ArrowUpRight classes="w-4 h-4" />
              </PrimaryBtn>
            </a>
          </article>
        </section>
        <section className="w-full flex flex-col items-center justify-center gap-8 mb-20">
          <h2 className="text-5xl font-bold text-neutral-300">My stack</h2>
          <ul className="md:grid flex flex-col w-full max-w-full xl:grid-cols-6 md:grid-cols-2 gap-3">
            {technologies.map((technologie, i) => {
              return (
                <li key={i} className={`w-full h-full ${technologie.span}`}>
                  <SingleCard>
                    <article className="flex gap-3 xl:p-14 md:p-10 p-10 w-full h-full">
                      <technologie.icon
                        className={`${
                          technologie.color === "blue"
                            ? "fill-blue-200 text-blue-200"
                            : technologie.color === "orange"
                              ? "fill-orange-200 text-orange-300"
                              : technologie.color === "violet"
                                ? "fill-violet-200 text-violet-200"
                                : technologie.color === "green"
                                  ? "fill-green-200 text-green-200"
                                  : "fill-neutral-400 text-neutral-400"
                        } w-20 h-20 xl:inline-block hidden`}
                      />
                      <div className="flex flex-col justify-center h-full w-full">
                        <h3
                          className={`${
                            technologie.color === "blue"
                              ? "text-blue-200"
                              : technologie.color === "orange"
                                ? "text-orange-300"
                                : technologie.color === "violet"
                                  ? "text-violet-200"
                                  : technologie.color === "green"
                                    ? "text-green-200"
                                    : "text-neutral-400"
                          } w-full cm-1xl:text-center font-semibold text-3xl`}
                        >
                          {technologie.name}
                        </h3>
                      </div>
                    </article>
                  </SingleCard>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="w-full flex justify-center items-center flex-col gap-8 mb-20">
          <h2 className="text-5xl font-bold text-neutral-300" id="contact">
            Contact me
          </h2>
          <SingleCard>
            <article className="flex items-center justify-center xl:p-40 p-5 py-20 relative group w-full">
              <div className="z-[1] flex items-center justify-center w-full h-ful relative">
                <h3 className="text-neutral-200 font-semibold sm:text-5xl xl:text-6xl text-4xl break-all">
                  huilensolis@skiff.com
                </h3>
                <figure className="absolute top-0 right-[-15%] w-[130%] h-[1px] [background-image:_radial-gradient(at_center,_#FFDBB3,_#FFF7E41A);] animate-cm-dissapear [animation-timeline:view();] [animation-range:0%_1200px] inline-block cm-1xl:hidden" />
                <figure className="absolute bottom-0 right-[-15%] w-[130%] h-[1px] [background-image:_radial-gradient(at_center,_#FFDBB3,_#FFF7E41A);] animate-cm-dissapear [animation-timeline:view();] [animation-range:0%_400px] inline-block cm-1xl:hidden" />

                <figure className="absolute left-0 top-[-150%] h-[400%] w-[1px] [background-image:_radial-gradient(at_center,_#FFDBB3,_#FFF7E41A);] animate-cm-dissapear [animation-timeline:view();] [animation-range:0%_1200px] inline-block cm-1xl:hidden" />
                <figure className="absolute right-0 top-[-150%] h-[400%] w-[1px] [background-image:_radial-gradient(at_center,_#FFDBB3,_#FFF7E41A);] animate-cm-dissapear [animation-timeline:view();] [animation-range:0%_1200px] inline-block cm-1xl:hidden" />
              </div>
              <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 overflow-hidden z-0">
                <span className="text-neutral-200/10  font-semibold xl:text-[15rem] md:text-9xl text-[6rem] select-none">
                  Gmail
                </span>
              </div>
            </article>
          </SingleCard>
          <SingleCard>
            <a
              href="https://www.linkedin.com/in/huilensolis/"
              target="_blank"
              className="z-[1] w-full"
            >
              <article className="flex items-center justify-center xl:p-40 p-5 py-20 relative group">
                <div className="flex items-center justify-center w-full h-full relative">
                  <h3 className="text-neutral-200  font-semibold sm:text-5xl xl:text-6xl text-4xl break-all">
                    Huilensolis
                  </h3>
                  <ArrowUpRight classes="w-12 h-12 text-neutral-200" />
                  <figure className="absolute top-0 right-[-15%] w-[130%] h-[1px] [background-image:_radial-gradient(at_center,_#FFDBB3,_#FFF7E41A);] animate-cm-dissapear [animation-timeline:view();] [animation-range:0%_1200px] inline-block cm-1xl:hidden" />
                  <figure className="absolute bottom-0 right-[-15%] w-[130%] h-[1px] [background-image:_radial-gradient(at_center,_#FFDBB3,_#FFF7E41A);] animate-cm-dissapear [animation-timeline:view();] [animation-range:0%_400px] inline-block cm-1xl:hidden" />

                  <figure className="absolute left-0 top-[-150%] h-[400%] w-[1px] [background-image:_radial-gradient(at_center,_#FFDBB3,_#FFF7E41A);] animate-cm-dissapear [animation-timeline:view();] [animation-range:0%_1200px] inline-block cm-1xl:hidden" />
                  <figure className="absolute right-0 top-[-150%] h-[400%] w-[1px] [background-image:_radial-gradient(at_center,_#FFDBB3,_#FFF7E41A);] animate-cm-dissapear [animation-timeline:view();] [animation-range:0%_1200px] inline-block cm-1xl:hidden" />
                </div>
                <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 overflow-hidden z-0">
                  <span className="text-neutral-200/10  font-semibold xl:text-[15rem] md:text-9xl text-[6rem] select-none z-0">
                    LinkedIn
                  </span>
                </div>
              </article>
            </a>
          </SingleCard>
          <SingleCard>
            <a
              href="https://github.com/Huilensolis"
              target="_blank"
              className="z-[1] w-full"
            >
              <article className="flex items-center justify-center xl:p-40 p-5 py-20 relative group">
                <div className="flex items-center justify-center w-full h-full relative">
                  <h3 className="text-neutral-200  font-semibold sm:text-5xl xl:text-6xl text-4xl break-all">
                    Huilensolis
                  </h3>
                  <ArrowUpRight classes="w-12 h-12 text-neutral-200" />
                  <figure className="absolute top-0 right-[-15%] w-[130%] h-[1px] [background-image:_radial-gradient(at_center,_#FFDBB3,_#FFF7E41A);] animate-cm-dissapear [animation-timeline:view();] [animation-range:0%_1200px] inline-block cm-1xl:hidden" />
                  <figure className="absolute bottom-0 right-[-15%] w-[130%] h-[1px] [background-image:_radial-gradient(at_center,_#FFDBB3,_#FFF7E41A);] animate-cm-dissapear [animation-timeline:view();] [animation-range:0%_400px] inline-block cm-1xl:hidden" />

                  <figure className="absolute left-0 top-[-150%] h-[400%] w-[1px] [background-image:_radial-gradient(at_center,_#FFDBB3,_#FFF7E41A);] animate-cm-dissapear [animation-timeline:view();] [animation-range:0%_1200px] inline-block cm-1xl:hidden" />
                  <figure className="absolute right-0 top-[-150%] h-[400%] w-[1px] [background-image:_radial-gradient(at_center,_#FFDBB3,_#FFF7E41A);] animate-cm-dissapear [animation-timeline:view();] [animation-range:0%_1200px] inline-block cm-1xl:hidden" />
                </div>
                <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 overflow-hidden z-0">
                  <span className="text-neutral-200/10  font-semibold xl:text-[15rem] md:text-9xl text-[6rem] select-none z-0">
                    Github
                  </span>
                </div>
              </article>
            </a>
          </SingleCard>
          <SingleCard>
            <a
              href="https://twitter.com/solishuilen"
              target="_blank"
              className="z-[1] w-full"
            >
              <article className="flex items-center justify-center xl:p-40 p-5 py-20 relative group">
                <div className="flex items-center justify-center w-full h-full relative">
                  <h3 className="text-neutral-200  font-semibold sm:text-5xl xl:text-6xl text-4xl break-all">
                    solishuilen
                  </h3>
                  <ArrowUpRight classes="w-12 h-12 text-neutral-200" />
                  <figure className="absolute top-0 right-[-15%] w-[130%] h-[1px] [background-image:_radial-gradient(at_center,_#FFDBB3,_#FFF7E41A);] animate-cm-dissapear [animation-timeline:view();] [animation-range:0%_1200px] inline-block cm-1xl:hidden" />
                  <figure className="absolute bottom-0 right-[-15%] w-[130%] h-[1px] [background-image:_radial-gradient(at_center,_#FFDBB3,_#FFF7E41A);] animate-cm-dissapear [animation-timeline:view();] [animation-range:0%_400px] inline-block cm-1xl:hidden" />

                  <figure className="absolute left-0 top-[-150%] h-[400%] w-[1px] [background-image:_radial-gradient(at_center,_#FFDBB3,_#FFF7E41A);] animate-cm-dissapear [animation-timeline:view();] [animation-range:0%_1200px] inline-block cm-1xl:hidden" />
                  <figure className="absolute right-0 top-[-150%] h-[400%] w-[1px] [background-image:_radial-gradient(at_center,_#FFDBB3,_#FFF7E41A);] animate-cm-dissapear [animation-timeline:view();] [animation-range:0%_1200px] inline-block cm-1xl:hidden" />
                </div>
                <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 overflow-hidden z-0">
                  <span className="text-neutral-200/10  font-semibold xl:text-[15rem] md:text-9xl text-[6rem] select-none z-0">
                    Twitter
                  </span>
                </div>
              </article>
            </a>
          </SingleCard>
        </section>
      </section>
    </>
  );
}
