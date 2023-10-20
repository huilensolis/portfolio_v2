import { Code as CodeBlock } from "bright";
import { ReactNode } from "react";
export function Code({
  children,
  language,
  theme = "github-dark",
}: {
  children: ReactNode;
  language: string;
  theme: string;
}) {
  return (
    <CodeBlock lang={language} theme={theme as any}>
      {children ?? ""}
    </CodeBlock>
  );
}
