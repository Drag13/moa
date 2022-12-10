import { PropsWithChildren } from "react";

type FormGroupProps = { className?: string } & Required<PropsWithChildren>;

export const FormGroup = ({ children, className }: FormGroupProps) => (
  <div className={`${className ?? ""}`}>{children}</div>
);
