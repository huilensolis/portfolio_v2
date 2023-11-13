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
    <article className="flex justify-center items-start cm-2xl:items-center gap-14 w-full min-h-[600px] cm-2xl:h-full cm-2xl:flex-col bg-white dark:bg-[#1F2124] border border-neutral-300 rounded-2xl dark:border-neutral-700 p-20 cm-1xl:p-2 relative shadow-2xl shadow-neutral-950/20 cm-1xl:bg-transparent cm-1xl:dark:bg-transparent cm-1xl:border-transparent cm-1xl:dark:border-transparent">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <figure className="[background-image:radial-gradient_at_center,_#8C5CF64D,_#F9741600)] w-64 h-64 absolute top-24 right-20 select-none z-0 cm-1xl:hidden blur-[80px] opacity-100" />
          <figure className="[background-image:radial-gradient(at_center,_#F974164D,_#F9741600)] opacity-60 w-64 h-64 absolute top-16 right-60 select-none z-0 cm-1xl:hidden blur-[80px]" />

          <figure className="[background-image:radial-gradient(at_center,_#F974164D,_#F9741600)] opacity-60 w-64 h-64 absolute top-48 right-80 cm-1xl:left-2 select-none z-0 cm-1xl:hidden blur-[80px]" />
          <figure className="[background-image:radial-gradient(at_center,_#F974164D,_#F9741600)] opacity-60 w-64 h-64 absolute top-32 right-80  cm-1xl:left-2 select-none z-0 cm-1xl:hidden blur-[80px]" />

          <figure className="[background-image:radial-gradient(at_center,_#8C5CF64D,_#F9741600)] w-64 h-64 absolute top-14 right-20 cm-1xl:right-2 select-none z-0 cm-1xl:hidden blur-[80px] opacity-100" />
          <figure className="[background-image:radial-gradient(at_center,_#8C5CF64D,_#F9741600)] w-64 h-64 absolute bottom-16 right-16 cm-1xl:right-2 select-none z-0 cm-1xl:hidden blur-[80px] opacity-100" />
        </div>

        <div
          className={`z-10 w-full flex justify-center items-center before:[background-image:url(/square-pattern.png)] before:[background-size:1200px] before:[background-position:center] relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-[1]`}
        >
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
                className={`min-w-[20rem] max-w-[20rem] h-80 ${zIndex} ${rotateValue} ${leftValue} cm-1xl:static hover:-translate-y-8 cm-1xl:hover:-translate-y-0 delay-75 duration-500 transition-all hover:z-50 cm-1xl:hover:${zIndex} hover:cm-1xl:scale-100 cm-1xl:contents overflow-hidden shadow-left-bottom dark:shadow-neutral-950/30 shadow-neutral-950/20 rounded-xl animate-cm-fade-in-left [animation-timeline:view();] [animation-range:0px_50vh] cm-2xl:[animation-range:0px_200px] cm-1xl:[animation-range:0px_0px]`}
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
    <article className="flex justify-start items-start flex-col rounded-xl bg-cm-white dark:bg-neutral-800 cm-1xl:bg-transparent w-full h-full">
      {children}
    </article>
  );
}
