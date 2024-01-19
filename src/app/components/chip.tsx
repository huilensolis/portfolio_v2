import { ReactNode } from "react";

export function Chip({
  children,
  bgColor,
  textColor,
}: {
  children: ReactNode;
  bgColor: string;
  textColor: string;
}) {
  return (
    <span
      className={`${bgColor} ${textColor} font-medium rounded-full px-3 py-1`}
    >
      {children}
    </span>
  );
}
