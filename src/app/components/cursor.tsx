"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const cursor = useRef(null);
  useEffect(() => {
    if (document && window && window.innerWidth >= 1280) {
      const body = document.querySelector("body");

      body?.addEventListener("mousemove", handleMouseOver);
    }
    function handleMouseOver(e: MouseEvent) {
      const x = e.clientX - 22;
      const y = e.clientY - 21;

      if (cursor.current) {
        (cursor.current as HTMLElement).style.setProperty(
          "--mouse-x",
          `${x}px`
        );
        (cursor.current as HTMLElement).style.setProperty(
          "--mouse-y",
          `${y}px`
        );
      }

      if (cursor.current) {
        (cursor.current as HTMLElement).style.setProperty(
          "--mouse-width",
          "2.5rem"
        );
        (cursor.current as HTMLElement).style.setProperty(
          "--mouse-height",
          "2.5rem"
        );
      }
    }
    return () => {
      const body = document.querySelector("body");
      body?.removeEventListener("mousemove", handleMouseOver);
    };
  }, []);
  return (
    <div
      className="fixed [width:var(--mouse-width)] [height:var(--mouse-height)] rounded-full bg-cm-white pointer-events-none mix-blend-difference z-[99999] [top:var(--mouse-y)] [left:var(--mouse-x)] duration-75 ease-in-out "
      ref={cursor}
    />
  );
}
