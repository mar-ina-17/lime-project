import { PunkInput } from "@/components";
import { searchBrewery } from "@/store";
import { Container } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

export function PunkSearchBar() {
  const dispatch = useDispatch();

  const handleInputChange = (searchValue: string) => {
    dispatch(searchBrewery({ searchValue }));
  };

  return (
    <Container mt={5}>
      <PunkInput
        borderColor="#7643B6"
        focusBorderColor="#538A68"
        placeholder="Search any brewery..."
        onInputChange={handleInputChange}
      />
    </Container>
  );
}
