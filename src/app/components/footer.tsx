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
    <footer className="w-full py-16 cm-1xl:p-2 cm-1xl:py-12 cm-lg:p-0 cm-lg:py-8 flex justify-center items-center dark:bg-cm-black bg-cm-white">
      <div className="md:flex md:items-center md:justify-between">
        <span className="text-lg text-gray-500 sm:text-center dark:text-gray-400 mr-6 flex flex-wrap gap-x-2">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Huilen Solis.
          </a>
          All Rights Reserved.
        </span>
        <ul className="w-max flex flex-wrap items-center text-lg font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {SOCIALNETWORKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="mr-4 text-lg hover:underline md:mr-6"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
