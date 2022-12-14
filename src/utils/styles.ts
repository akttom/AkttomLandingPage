import { ReactElement } from "react";
import { Classes } from "jss";
import { createUseStyles } from "react-jss";

export function createStyles(classes: { [name: string]: Partial<CSSStyleDeclaration | any> }) {
  return createUseStyles(classes as any);
}

export function Styles<T extends string | number | symbol>(props: { styles: () => Classes<T>, children: (classes: Classes<T>) => ReactElement }) {
  const classes = props.styles();
  return props.children(classes);
}