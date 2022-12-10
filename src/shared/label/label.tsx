import { ClassAttributes, LabelHTMLAttributes } from "react";

type AppLabelProps = { text: string } & JSX.IntrinsicAttributes &
  ClassAttributes<HTMLLabelElement> &
  LabelHTMLAttributes<HTMLLabelElement>;

export const AppLabel = (props: AppLabelProps) => {
  return (
    <label {...props} className={props.className ?? ""}>
      {props.text}
    </label>
  );
};
