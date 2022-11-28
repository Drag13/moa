import { PropsWithChildren } from "react";
import { join } from "../css";
import styles from "./form-group.module.css";

type FormGroupProps = { className?: string } & Required<PropsWithChildren>;

export const FormGroup = ({ children, className }: FormGroupProps) => {
  const groupClassName = join(styles.group, className);
  return <div className={groupClassName}>{children}</div>;
};
