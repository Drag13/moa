import { ClassAttributes, LabelHTMLAttributes } from "react";

type AppLabelProps = { text: string } & JSX.IntrinsicAttributes &
  ClassAttributes<HTMLLabelElement> &
  LabelHTMLAttributes<HTMLLabelElement>;

export const AppLabel = (props: AppLabelProps) => {
  return (
    <label
      {...props}
      className={`text-xl text-white absolute top-6 left-0 peer-focus:text-xs peer-focus:top-0 peer-valid:text-xs peer-valid:top-0 ${
        props.className ?? ""
      }`}
    >
      {props.text}
    </label>
  );
};
