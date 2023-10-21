import { ReactNode } from "react";
import cssModules from "./styles.module.css";

export function BoxPattern({ children }: { children: ReactNode }) {
  return (
    <div className={cssModules.container}>
      <div className={cssModules.pattern} />
      {children}
    </div>
  );
}
