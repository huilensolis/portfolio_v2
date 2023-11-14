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
    <footer className="w-full flex justify-center items-center bg-cm-black px-5 cm-1xl:px-2 pt-36 pb-12">
      <div className="md:flex md:items-end md:justify-between">
        <span className="text-lg text-neutral-300 sm:text-center mr-6 flex flex-wrap gap-x-2 font-geistSans">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Huilen Solis.
          </a>
          All Rights Reserved.
        </span>
        <ul className="w-max flex flex-wrap items-center text-lg font-medium sm:mt-0 text-neutral-300">
          {SOCIALNETWORKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="mr-4 text-lg hover:underline md:mr-6 flex items-end justify-start group font-geistSans"
              >
                {link.name}
                <div className="w-full h-8 flex justify-center items-center pt-2 pb-1 group-hover:pt-0 delay-75 transition-all will-change-transform">
                  <ArrowUpRight classes="w-full h-full text-neutral-300" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
