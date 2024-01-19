import { ReactNode } from "react";

export function Chip({
  children,
  bgColor,
  textColor,
}: {
  children: ReactNode;
  bgColor: `bg-${string}-${number}`;
  textColor: `text-${string}-${number}`;
}) {
  return (
    <span
      className={`${bgColor} ${textColor} font-medium rounded-full px-3 py-1`}
    >
      {children}
    </span>
  );
}
