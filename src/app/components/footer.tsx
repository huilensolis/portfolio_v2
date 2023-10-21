import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";

interface link {
  name: string;
  href: string;
  icon: JSX.Element;
}

export function Footer() {
  const socialNetworks: link[] = [
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/huilensolis",
      icon: <IconBrandLinkedin className="dark:text-cm-white text-cm-black" />,
    },
    {
      name: "Email",
      href: "mailto:huilensolis@skiff.com",
      icon: <IconMail className="dark:text-cm-white text-cm-black" />,
    },
    {
      name: "Github",
      href: "https://github.com/Huilensolis",
      icon: <IconBrandGithub className="dark:text-cm-white text-cm-black" />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/solishuilen",
      icon: <IconBrandX className="dark:text-cm-white text-cm-black" />,
    },
  ];
  return (
    <footer className="w-full px-5 py-20 sm:px-20 flex flex-col justify-center items-center bg-cm-white dark:bg-cm-black relative">
      <ul className="flex gap-5 flex-wrap">
        {socialNetworks.map((link) => (
          <li key={link.href} className="flex">
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-cm-black dark:text-cm-white flex justify-center items-center gap-1 hover:font-semibold transition-all delay-75"
            >
              {link.icon}
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
