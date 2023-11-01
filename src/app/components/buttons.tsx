import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

export function PrimaryBtn({ children }: props) {
  return (
    <div className="py-2 px-8 dark:bg-[#2C2523] border dark:border-[#F4B038] dark:text-[#F4B038] bg-blue-600 border-blue-600 text-neutral-200 dark:font-normal font-semibold rounded-sm hover:brightness-105 delay-75 transition-all flex justify-center items-center gap-1">
      {children}
    </div>
  );
}

export function SecondaryBtn({ children }: props) {
  return (
    <div className="py-2 px-8 bg-neutral-800 border border-neutral-500 text-neutral-300 rounded-sm hover:brightness-105 delay-75 transition-all flex justify-center items-center gap-1">
      {children}
    </div>
  );
}
