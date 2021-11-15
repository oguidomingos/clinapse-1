import { Button, Text } from "./style";

interface Props {
  title: string;
  href: string;
  variant?: string;
  color?: string;
}

export default function LinkButton({
  title,
  href,
  variant = "contained",
  color = "#fafafa",
}: Props) {
  return (
    <Button variant={variant} color={color} href={href}>
      <Text variant={variant} color={color}>
        {title}
      </Text>
    </Button>
  );
}
