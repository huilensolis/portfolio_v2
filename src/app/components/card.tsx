import { ReactNode } from "react";

export function Card() {
  return (
    <article className="flex justify-center items-start gap-14 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-20">
      <div className="w-2/4 h-full">
        <h3 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Culinary Alchemy
        </h3>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          A recipe social network, build in cooperation with{" "}
          <a href="https://www.linkedin.com/in/jesus-oyola-b9b530284/">
            Jesus Oyola
          </a>
          , my role consisted on creating the backend api, creating routes,
          controllers, providers, connecting to a database and manageing images
          hosted in third party services, interacting through an api.
        </p>
      </div>
      <div className="w-3/4 h-fit flex justify-center items-center">
        <ul className="w-full h-full relative top-0">
          <li className="w-80 h-80 z-30 absolute -rotate-[8deg] left-28 hover:-translate-y-14 delay-75 duration-500 transition-all hover:z-40">
            <MiniCard>
              <h4 className="text-gray-400 font-semibold text-4xl text-start">
                title example
              </h4>
              <span className="text-gray-400 text-2xl">
                idem quae voluptatibus nisi qui ratione nobis nulla, unde minima
                lauda
              </span>
            </MiniCard>
          </li>
          <li className="w-80 h-80 z-20 absolute -rotate-[16deg] left-14 hover:-translate-y-14 delay-75 duration-500 transition-all hover:z-40">
            <MiniCard>
              <h4 className="text-gray-400 font-semibold text-4xl text-start">
                title example
              </h4>
              <span className="text-gray-400 text-2xl">
                consectetur fuga pariatur autem nostrum quis eius beatae optio d
              </span>
            </MiniCard>
          </li>
          <li className="w-80 h-80 z-10 absolute -rotate-[22deg] left-0 hover:-translate-y-14 delay-75 duration-500 transition-all hover:z-40">
            <MiniCard>
              <h4 className="text-gray-400 font-semibold text-4xl text-start">
                title example
              </h4>
              <span className="text-gray-400 text-2xl">
                subititle Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Eum eveniet iste vero
              </span>
            </MiniCard>
          </li>
        </ul>
      </div>
    </article>
  );
}
function MiniCard({ children }: { children?: ReactNode }) {
  return (
    <article className="flex justify-center items-center flex-col gap-14 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8 w-full h-full">
      {children}
    </article>
  );
}
