import { Input, InputGroup } from "@chakra-ui/react";
import { useState } from "react";
import { InputProps } from "types/properties";

export function PunkInput({
  borderColor,
  focusBorderColor,
  placeholder,
  onInputChange,
}: InputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onInputChange) {
      onInputChange(event.target.value);
    }
  };

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        placeholder={placeholder}
        variant="filled"
        borderColor={borderColor}
        focusBorderColor={focusBorderColor}
        value={inputValue}
        onChange={handleInputChange}
      />
    </InputGroup>
  );
}
