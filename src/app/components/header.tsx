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
    <header className="w-screen flex justify-between items-center h-20 fixed top-0 left-0 sm:px-20 px-3 bg-cm-black border-b-2 border-gray-700 z-50">
      <nav className="w-max">
        <ul className="w-max flex justify-start gap-5">
          <li>
            <Link href={"/"}>
              <Logo />
            </Link>
          </li>
          {navigationItems.map((navItem) => (
            <li key={navItem.href} className="flex justify-center items-center">
              <Link
                href={navItem.href}
                className={`${
                  isLinkTheCurrentPage(navItem.href, path)
                    ? "font-medium"
                    : "font-normal"
                } ${
                  isLinkTheCurrentPage(navItem.href, path)
                    ? "text-cm-orange"
                    : "text-gray-400"
                } hover:font-medium hover:text-cm-orange cursor-pointer`}
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
