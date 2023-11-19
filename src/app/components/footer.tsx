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
    <footer className="w-full flex justify-center items-center bg-cm-black px-5 sm:px-20 cm-1xl:px-2 pt-36 pb-12">
      <div className="w-full flex flex-col xl:flex-row justify-center items-center gap-4 lg:max-w-5xl md:justify-between">
        <span className="text-lg text-neutral-300 gap-x-2  text-center sm:text-start">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Huilen Solis.
          </a>{" "}
          All Rights Reserved.
        </span>
        <ul className="w-full lg:w-auto cm-1xl:grid grid-cols-2 max-w-[22rem] gap-4 flex items-center justify-center text-lg font-medium text-neutral-300">
          {SOCIALNETWORKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-lg hover:underline flex items-center justify-center group "
              >
                {link.name}
                <div className="flex justify-center items-center">
                  <ArrowUpRight classes="w-5 h-5 text-neutral-300" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
