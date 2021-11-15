import styled from "styled-components";

type ButtonBaseProps = {
  variant: string;
  color: string;
  type?: "button" | "submit" | "reset" | undefined;
};

export const ButtonBase = styled.button<ButtonBaseProps>`
  background: ${(props) =>
    props.variant === "outlined" ? "none" : props.color};
  color: ${(props) => (props.variant !== "outlined" ? "#333333" : props.color)};
  border: ${(props) =>
    props.variant !== "outlined" ? "none" : `solid 1px ${props.color}`};
  border-radius: 8px;
  padding: 12px 16px;
  transition: filter 0.2s;
  text-transform: uppercase;

  &:hover {
    filter: brightness(0.6);
  }

`;
