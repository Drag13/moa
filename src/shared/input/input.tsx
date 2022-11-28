import { ClassAttributes, InputHTMLAttributes } from "react";
import styles from "./input.module.css";

import { join } from "../css";

type AppInputProps = JSX.IntrinsicAttributes &
  ClassAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement>;

export const AppInput = (props: AppInputProps) => {
  const className = join(styles.input, props.className);
  return <input {...props} className={className} />;
};
