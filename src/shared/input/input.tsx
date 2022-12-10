import { ClassAttributes, InputHTMLAttributes } from "react";

type AppInputProps = JSX.IntrinsicAttributes &
  ClassAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement>;

export const AppInput = (props: AppInputProps) => {
  return <input {...props} className={props.className ?? ""} />;
};
