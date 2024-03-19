import { PunkFavList } from "@/features/favourites/components";
import { Container } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export function PunkFavourites() {
  const breweryState = useSelector((state: any) => state.breweries);

  return (
    <Container mt="20" maxW="xl">
      <PunkFavList
        breweries={breweryState.favourites}
        changed={breweryState.changedBreweries}
      />
    </Container>
  );
}
