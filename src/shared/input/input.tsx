import { ClassAttributes, InputHTMLAttributes } from "react";

type AppInputProps = JSX.IntrinsicAttributes &
  ClassAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement>;

export const AppInput = (props: AppInputProps) => {
  return (
    <input
      {...props}
      className={`pt-6 w-full pb-2 border-b-2 text-white border-white bg-transparent outline-none peer focus:border-yellow-500 ${
        props.className ?? ""
      }`}
    />
  );
};
