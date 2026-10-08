import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section";
};

export function Container({ as: Element = "div", className = "", ...props }: ContainerProps) {
  return <Element className={`container ${className}`.trim()} {...props} />;
}
