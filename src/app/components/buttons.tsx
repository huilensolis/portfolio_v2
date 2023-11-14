import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

export function PrimaryBtn({ children }: props) {
  return (
    <div className="py-2 px-8 bg-[#2C2523] border border-[#F4B038] text-[#F4B038] font-normal rounded-sm hover:brightness-105 delay-75 transition-all flex justify-center items-center gap-1">
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
