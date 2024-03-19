import { Button } from "@chakra-ui/react";
import { ButtonProps } from "types/properties";

export function PunkButton({
  children,
  size,
  color,
  bgColor,
  className,
  onButtonClick,
}: ButtonProps) {
  return (
    <Button
      size={size}
      color={color}
      bg={bgColor}
      onClick={onButtonClick}
      className={className}
    >
      {children}
    </Button>
  );
}
