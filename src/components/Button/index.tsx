import { HTMLProps, ReactNode } from "react";

import { ButtonBase } from "./style";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  variant?: "contained" | "outlined";
  color?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
}

export default function Button({
  variant = "contained",
  color = "#fafafa",
  type = "button",
  children,
}: ButtonProps) {
  return (
    <ButtonBase type={type} variant={variant} color={color}>
      {children}
    </ButtonBase>
  );
}
