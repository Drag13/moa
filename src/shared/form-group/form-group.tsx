import { PropsWithChildren } from "react";

type FormGroupProps = { className?: string } & Required<PropsWithChildren>;

export const FormGroup = ({ children, className }: FormGroupProps) => {
  return <div className={`relative mb-4 ${className ?? ""}`}>{children}</div>;
};
