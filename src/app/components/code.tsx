import { Code as CodeBlock, BrightProps } from "bright";
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
  console.log({ language, theme, children });
  return (
    <CodeBlock lang={language} theme={theme as any}>
      {children ?? ""}
    </CodeBlock>
  );
}
