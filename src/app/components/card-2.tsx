"use client";

import { ReactNode, MouseEvent, useState } from "react";

function isWindowWIdthLargerThan1280() {
  return window.innerWidth >= 1280;
}
export function SingleCard({ children }: { children: ReactNode }) {
  const [isMouseOnCard, setIsMouseOnCard] = useState(false);

  function setCssVariantsForCard(e: MouseEvent<HTMLElement>) {
    setIsMouseOnCard(true);
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();

    const y = e.clientY - rect.top;
    const x = e.clientX - rect.left;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  function setCssVariantsForBorder(e: MouseEvent<HTMLElement>) {
    setIsMouseOnCard(true);
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();

    const y = e.clientY - rect.top;
    const x = e.clientX - rect.left;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }
  return (
    <div
      className={`w-full h-full bg-[rgba(255,_255,_255,0.1)] flex justify-center items-center relative p-[2px] xl:before:[background-image:radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),_rgba(255,_255,_255,_0.30),_transparent_40%)] before:absolute before:top-0 before:left-0 before:h-full before:w-full ${
        isMouseOnCard ? "before:opacity-100" : "before:opacity-0"
      }`}
      onMouseMove={(e) =>
        isWindowWIdthLargerThan1280() && setCssVariantsForBorder(e)
      }
      onMouseLeave={(e) =>
        isWindowWIdthLargerThan1280() && setIsMouseOnCard(false)
      }
    >
      <article
        className={`max-w-5xl w-full h-full bg-[#232227] flex flex-col items-start justify-center relative overflow-hidden gap-4 z-[1] xl:before:[background-image:radial-gradient(1200px_circle_at_var(--mouse-x)_var(--mouse-y),_rgba(255,_254,_241,_0.06),_transparent_60%)] before:backdrop-blur-md before:absolute before:top-0 before:left-0 before:h-full before:w-full before:z-[0] ${
          isMouseOnCard ? "before:opacity-100" : "before:opacity-0"
        }`}
        onMouseMove={(e) =>
          isWindowWIdthLargerThan1280() && setCssVariantsForCard(e)
        }
        onMouseLeave={(e) =>
          isWindowWIdthLargerThan1280() && setIsMouseOnCard(false)
        }
      >
        <div className="z-[1] w-full h-full">{children}</div>
      </article>
    </div>
  );
}
