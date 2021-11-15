import styled from "styled-components";

interface Props {
  href: string;
  variant?: string;
  color?: string;
}

export const Text = styled.span<{ color: string; variant: string }>`
  color: ${(props) => (props.variant !== "outlined" ? "#333333" : props.color)};
  font-size: 16px !important;
`;

export const Button = styled.a<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) =>
    props.variant === "outlined" ? "none" : props.color};
  color: ${(props) => (props.variant !== "outlined" ? "#333333" : props.color)};
  border: ${(props) =>
    props.variant !== "outlined" ? "none" : `solid 1px ${props.color}`};
  border-radius: 8px;
  padding: 12px 16px;
  transition: filter 0.2s;
  text-transform: uppercase;
  font-weight: 700;

  &:hover {
    filter: brightness(0.6);
  }
`;
