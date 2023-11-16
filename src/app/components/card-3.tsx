import { ReactNode } from "react";
export function Card3({ children }: { children: ReactNode }) {
  return (
    <div className="h-full w-full xl:p-28 md:p-10 p-5 relative overflow-hidden bg-[#232227] border-neutral-700 border">
      {children}
    </div>
  );
}
