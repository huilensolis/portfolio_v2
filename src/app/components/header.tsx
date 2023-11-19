"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@icons";

function isLinkTheCurrentPage(href: string, path: string): boolean {
  if (path.length === 1 && href === path) return true; // case it is home
  if (href.length === 1) {
    return false;
  }

  if (path.startsWith(href)) return true;

  return false;
}

export function Header() {
  const path = usePathname();
  const navigationItems = [
    {
      name: "Portfolio",
      href: "/",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];
  return (
    <header className="w-screen flex justify-center items-center h-20 fixed top-0 left-0 supports-no-scroll-driven-animations:bg-cm-black border-b-[1px] transition-colors animate-cm-add-border-bottom [animation-timeline:view()] md:[animation-range:130%] supports-no-scroll-driven-animations:animate-none supports-no-scroll-driven-animations:border-neutral-700 border-transparent delay-75 border-neutral-700 z-50 sm:px-20 px-5 cm-1xl:px-2">
      <nav className="max-w-5xl w-full">
        <ul className="w-max flex justify-start gap-5">
          <li>
            <Link href={"/"} aria-label="Home">
              <Logo />
            </Link>
          </li>
          {navigationItems.map((navItem) => (
            <li key={navItem.href} className="flex justify-center items-center">
              <Link
                href={navItem.href}
                className={`
                   ${
                     isLinkTheCurrentPage(navItem.href, path)
                       ? "text-orange-300"
                       : "text-gray-400"
                   } hover:text-orange-300 cursor-pointer`}
              >
                {navItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
