import { ReactNode } from "react";

interface Props {
  leftSide: ReactNode;
  cards: ReactNode[];
}

export function Card({ leftSide, cards }: Props) {
  if (cards.length > 3)
    throw new Error(
      "this component doesnt suppont more than 3 cards, please remove " +
        (cards.length - 3) +
        "card"
    );
  return (
    <article className="flex justify-center items-start gap-14 w-full min-h-[600px] bg-white border border-gray-200 rounded-2xl dark:bg-neutral-800 dark:border-neutral-600 p-20 relative shadow-2xl shadow-neutral-950/20">
      <div className="w-2/4 h-full flex flex-col justify-center items-center">
        {/* top left  */}
        <figure className="bg-orange-500/40 w-24 h-24 absolute top-24 left-20 blur-3xl ounded-full select-none z-0" />
        <figure className="bg-blue-500/40 w-24 h-24 absolute top-0 left-0 blur-3xl ounded-full select-none z-0" />

        {/* middle left */}
        <figure className="bg-orange-500/40 w-24 h-24 absolute top-72 left-64 blur-3xl ounded-full select-none z-0" />
        <figure className="bg-blue-500/40 w-24 h-24 absolute top-72 left-80 blur-3xl rounded-full select-none z-0" />

        <figure className="bg-orange-500/40 w-24 h-24 absolute top-14 right-20 blur-3xl ounded-full select-none z-0" />
        <figure className="bg-blue-500/40 w-24 h-24 absolute top-0 right-0 blur-3xl rounded-full select-none z-0" />
        <div className="z-10 h-full w-full flex justify-center items-center">
          {leftSide}
        </div>
      </div>
      <div className="w-3/4 h-full flex justify-center items-center relative">
        <ul className="w-full h-full relative -top-5">
          {cards.map((card, index) => {
            const leftValue =
              index === 0 ? "left-0" : index === 1 ? "left-32" : "left-64";
            const rotateValue =
              index === 0
                ? "-rotate-12"
                : index === 1
                ? "-rotate-[9deg]"
                : "-rotate-[4deg]";

            return (
              <li
                key={index}
                className={`w-80 h-80 absolute ${rotateValue} ${leftValue} hover:-translate-y-8 delay-75 duration-500 transition-all hover:z-40 overflow-auto shadow-left-bottom dark:shadow-neutral-950/40 shadow-neutral-950/20`}
              >
                <MiniCard>{card}</MiniCard>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
function MiniCard({ children }: { children?: ReactNode }) {
  return (
    <article className="flex justify-start items-start flex-col bg-white rounded-lg dark:bg-neutral-800 p-8 w-full h-full border-2 border-neutral-600">
      {children}
    </article>
  );
}
