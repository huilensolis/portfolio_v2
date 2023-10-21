import { ReactNode } from "react";

interface props {
  children: ReactNode;
  href: string;
}

export function PrimaryBtn({ children, href }: props) {
  return (
    <a
      href={href}
      className="py-2 px-8 bg-neutral-800 border border-[#F79E31] text-[#F79E31] rounded-sm hover:border-[#FABE65] hover:text-[#FABE65] delay-75 transition-all"
    >
      {children}
    </a>
  );
}
