import { PunkCard, PunkScrollableContainer } from "@/components";
import { addToFavourites } from "@/store";
import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Brewery } from "types/interfaces";
import { CatalogueProps } from "types/properties";
import { PunkStar } from "./Star";
//@ts-ignore
import beerSound from "../assets/beerSound.mp3";
import brewery from "../assets/brewery.png";

export function PunkCatalogue({ breweries }: CatalogueProps) {
  const dispatch = useDispatch();

  const playSound = () => {
    const audio = new Audio(beerSound);
    audio.play();
  };

  const addBrewery = (brewery: Brewery) => {
    dispatch(addToFavourites({ brewery }));
  };

  return (
    <PunkScrollableContainer>
      {breweries.map((item: any) => (
        <Box
          key={item.id}
          width={{
            base: "100%",
            sm: "calc(50% - 8px)",
            md: "calc(33.33% - 8px)",
          }}
          marginBottom={{ base: "4", sm: "4", md: "4" }}
        >
          <PunkCard
            heading={item.name}
            text={item.description}
            img={brewery}
            websiteUrl={item.website_url}
            id={item.id}
            imgClick={playSound}
          >
            <PunkStar onStarClick={() => addBrewery(item)} />
          </PunkCard>
        </Box>
      ))}
    </PunkScrollableContainer>
  );
}
