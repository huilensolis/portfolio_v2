import { ArrowUpRight } from "./icons";

interface link {
  name: string;
  href: string;
}

export function Footer() {
  const SOCIALNETWORKS: link[] = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/huilensolis",
    },
    {
      name: "Email",
      href: "mailto:huilensolis@skiff.com",
    },
    {
      name: "Github",
      href: "https://github.com/Huilensolis",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/solishuilen",
    },
  ];
  return (
    <footer className="w-full flex justify-center items-center dark:bg-cm-black bg-cm-white sm:px-20 px-5 cm-1xl:px-2 py-12">
      <div className="md:flex md:items-center md:justify-between">
        <span className="text-lg dark:text-neutral-300 text-neutral-700 sm:text-center mr-6 flex flex-wrap gap-x-2">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Huilen Solis.
          </a>
          All Rights Reserved.
        </span>
        <ul className="w-max flex flex-wrap items-center text-lg font-medium sm:mt-0 dark:text-neutral-300 text-neutral-700">
          {SOCIALNETWORKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="mr-4 text-lg hover:underline md:mr-6 flex items-center group"
              >
                {link.name}
                <ArrowUpRight classes="w-4 h-4 dark:text-neutral-300 text-neutral-700 group-hover:h-6 group-hover:w-6 delay-75 transition-all" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
