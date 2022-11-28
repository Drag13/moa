import { ClassAttributes, LabelHTMLAttributes } from "react";
import { join } from "../css";
import styles from "./label.module.css";

type AppLabelProps = { text: string } & JSX.IntrinsicAttributes &
  ClassAttributes<HTMLLabelElement> &
  LabelHTMLAttributes<HTMLLabelElement>;

export const AppLabel = (props: AppLabelProps) => {
  const className = join(styles.label, props.className);
  return (
    <label {...props} className={className}>
      {props.text}
    </label>
  );
};
