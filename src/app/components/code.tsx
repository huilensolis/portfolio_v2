import { ReactNode } from "react";
import { Code as CodeBlock } from "bright";
export function Code({ children }: { children: any }) {
  let code = children.props.children;
  return (
    <CodeBlock lang="ts" theme={"github-dark"}>
      {code}
    </CodeBlock>
  );
}
