import { ReactNode } from "react";
import { ArrowUpRight } from "./icons";

export function AvatarCard({
  logo,
  title,
  subtitle,
  btnText,
  btnHref,
  btnTarget,
  children,
}: {
  logo: ReactNode;
  title: string;
  subtitle: string;
  btnText: string;
  btnHref: string;
  btnTarget: string;
  children: ReactNode;
}) {
  return (
    <div className="flex">
      <article className="flex flex-col gap-3 lg:max-w-1xl w-full max-w-4xl dark:bg-cm-gray bg-gray-200 shadow-md p-5 rounded-md">
        <header className="flex lg:flex-row flex-col justify-between lg:items-center w-full gap-3 lg:gap-10">
          <section className="flex gap-3">
            {logo}
            <section className="flex flex-col">
              <h1 className="text-cm-black dark:text-cm-white font-bold text-4xl">
                {title}
              </h1>
              <span className="text-gray-600 italic text-xl dark:text-gray-300">
                {subtitle}
              </span>
            </section>
          </section>
          <a
            href={btnHref}
            target={btnTarget}
            className="flex justify-center items-center text-cm-white bg-blue-700 font-medium rounded-lg h-min py-2 px-5 hover:bg-blue-600 transition-all delay-75"
          >
            {btnText}
            <ArrowUpRight />
          </a>
        </header>
        <p className="dark:text-gray-400 text-gray-600 w-full break-words">
          {children}
        </p>
      </article>
    </div>
  );
}
