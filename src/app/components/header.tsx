"use client";

import Link from "next/link";
import { ThemeSwitcher } from "@components/theme-switcher";
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
    <header className="w-screen flex justify-between items-center h-20 fixed top-0 left-0 sm:px-20 px-3 bg-cm-white dark:bg-cm-black border-b-2 border-gray-300 dark:border-gray-700 z-20">
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
                    ? "text-blue-500 dark:text-blue-500"
                    : "text-gray-600 dark:text-gray-400"
                } hover:font-medium hover:text-blue-500 dark:hover:text-blue-500 cursor-pointer`}
              >
                {navItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <section className="w-max flex justify-end gap-5 items-center">
        <ThemeSwitcher />
      </section>
    </header>
  );
}
