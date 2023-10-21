import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

export function PrimaryBtn({ children }: props) {
  return (
    <div className="py-2 px-8 dark:bg-[#2C2523] border dark:border-[#F4B038] dark:text-[#F4B038] bg-blue-600 border-transparent text-neutral-200 dark:font-normal font-semibold rounded-sm hover:brightness-105 delay-75 transition-all flex justify-center items-center gap-1">
      {children}
    </div>
  );
}

export function SecondaryBtn({ children }: props) {
  return (
    <div className="py-2 px-8 dark:bg-neutral-800 bg-transparent border dark:border-neutral-500 border-neutral-800 dark:text-neutral-300 text-neutral-800 rounded-sm hover:brightness-105 delay-75 transition-all flex justify-center items-center gap-1">
      {children}
    </div>
  );
}
