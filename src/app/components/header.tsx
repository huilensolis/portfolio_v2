import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

export function Header() {
  const navigationItems = [
    {
      name: "blog",
      href: "/blog",
    },
    {
      name: "home",
      href: "/",
    },
  ];
  return (
    <header className="w-screen flex justify-between items-center h-20 fixed top-0 left-0 sm:px-20 px-3 bg-cm-white dark:bg-cm-black border-b-2 border-gray-300 dark:border-gray-700">
      <nav className="w-max">
        <ul className="w-max flex justify-start gap-5">
          {navigationItems.map((navItem) => (
            <li key={navItem.href}>
              <Link
                href={navItem.href}
                className="text-cm-black dark:text-cm-white font-medium"
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
