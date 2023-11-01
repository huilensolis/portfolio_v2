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
    <article className="flex justify-center items-start cm-2xl:items-center gap-14 w-full min-h-[600px] cm-2xl:h-full cm-2xl:flex-col bg-white border border-gray-200 rounded-2xl dark:bg-neutral-800 dark:border-neutral-600 p-20 cm-1xl:p-2 relative shadow-2xl shadow-neutral-950/20 cm-1xl:bg-transparent cm-1xl:dark:bg-transparent cm-1xl:border-transparent cm-1xl:dark:border-transparent">
      <div className="w-full h-full flex flex-col justify-center items-center">
        {/* top left  */}
        <figure className="bg-orange-500/60 w-24 h-24 absolute top-24 left-20 blur-3xl ounded-full select-none z-0 cm-1xl:hidden" />
        <figure className="bg-rose-500/40 w-24 h-24 absolute top-16 left-60 blur-3xl ounded-full select-none z-0 cm-1xl:hidden" />

        {/* middle left */}
        <figure className="bg-orange-500/60 w-24 h-24 absolute top-72 left-64 cm-1xl:left-2 blur-3xl ounded-full select-none z-0 cm-1xl:hidden" />
        <figure className="bg-blue-500/60 w-24 h-24 absolute top-72 left-80  cm-1xl:left-2 blur-3xl rounded-full select-none z-0 cm-1xl:hidden" />

        <figure className="bg-orange-500/40 w-24 h-24 absolute top-14 right-20 cm-1xl:right-2 blur-3xl ounded-full select-none z-0 cm-1xl:hidden" />
        <figure className="bg-emerald-500/40 w-36 h-36 absolute bottom-16 right-16 cm-1xl:right-2 blur-3xl rounded-full select-none z-0 cm-1xl:hidden" />
        <div className="z-10 w-full flex justify-center items-center">
          {leftSide}
        </div>
      </div>
      <div className="w-1/2 cm-2xl:w-3/4 cm-1xl:w-full h-full flex justify-center items-center">
        <ul className="flex cm-1xl:flex-col cm-1xl:gap-4 cm-1xl:justify-center items-center w-full overflow-visible">
          {cards.map((card, index) => {
            const leftValue =
              index === 0
                ? "translate-x-0 cm-1xl:translate-y-0 cm-1xl:-translate-x-0"
                : index === 1
                ? "-translate-x-56 cm-1xl:-translate-y-0 cm-1xl:-translate-x-0"
                : "-translate-x-[27rem] cm-1xl:-translate-y-[0] cm-1xl:-translate-x-0";
            const rotateValue =
              index === 0 && cards.length > 1
                ? "-rotate-[12deg] hover:-rotate-[8deg] cm-1xl:-rotate-0"
                : index === 1 && cards.length > 1
                ? "-rotate-[8deg] hover:-rotate-[4deg] cm-1xl:-rotate-0"
                : "-rotate-[4deg] hover:-rotate-0 cm-1xl:-rotate-0";

            const zIndex = index === 0 ? "z-10" : index === 1 ? "z-20" : "z-30";

            return (
              <li
                key={index}
                className={`min-w-[20rem] max-w-[20rem] h-80 ${zIndex} ${rotateValue} ${leftValue} cm-1xl:static hover:-translate-y-8 cm-1xl:hover:-translate-y-0 delay-75 duration-500 transition-all hover:z-50 cm-1xl:hover:${zIndex} hover:cm-1xl:scale-100 cm-1xl:contents rounded-lg overflow-hidden shadow-left-bottom dark:shadow-neutral-950/30 shadow-neutral-950/20 animate-cm-fade-in-left [animation-timeline:view();] [animation-range:0px_50vh] cm-2xl:[animation-range:0px_200px] cm-1xl:[animation-range:0px_0px]`}
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
    <article className="flex justify-start items-start flex-col bg-cm-white rounded-lg dark:bg-neutral-800 cm-1xl:bg-transparent w-full  h-full">
      {children}
    </article>
  );
}
