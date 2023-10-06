"use client";

import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";
import { usePathname } from "next/navigation";
import { Logo } from "./icons";

export function Header() {
  const path = usePathname();
  const navigationItems = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "blog",
      href: "/blog",
    },
  ];
  return (
    <header className="w-screen flex justify-between items-center h-20 fixed top-0 left-0 sm:px-20 px-3 bg-cm-white dark:bg-cm-black border-b-2 border-gray-300 dark:border-gray-700">
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
                  path === navItem.href ? "font-bold" : "font-normal"
                } ${
                  path === navItem.href
                    ? "text-cm-black dark:text-cm-white"
                    : "text-gray-600 dark:text-gray-400"
                } hover:font-semibold hover:text-cm-black dark:hover:text-cm-white cursor-pointer`}
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
