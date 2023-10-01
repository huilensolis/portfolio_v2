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
    <header className="w-screen flex justify-between items-center h-20 fixed top-0 left-0 sm:px-20 px-3">
      <nav className="w-full">
        <ul className="w-full flex justify-around">
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
      <section className="w-full flex justify-around items-center">
        <ThemeSwitcher />
      </section>
    </header>
  );
}
