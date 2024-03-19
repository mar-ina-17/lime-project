import { rowStyles } from "@/assets";
import { PunkButton } from "@/components";
import { removeFromFavourites } from "@/store";
import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { ItemProps } from "types/properties";

export function PunkBreweryItem({ brewery, breweryKey, changed }: ItemProps) {
  const dispatch = useDispatch();

  const removeBrewery = () => {
    dispatch(removeFromFavourites({ key: brewery.name }));
  };

  return (
    <Box key={breweryKey}>
      <Heading size="xs" textTransform="uppercase" className={rowStyles}>
        {brewery.name}
        <Icon viewBox="0 0 200 200" color={changed ? "red.400" : "green.500"}>
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
      </Heading>
      <Box key={brewery.name} className={rowStyles}>
        <Text pt="2" fontSize="sm">
          {brewery.id}
        </Text>
        <PunkButton
          onButtonClick={removeBrewery}
          size="sm"
          bgColor="transparent"
        >
          <DeleteIcon color="purple.700" />
        </PunkButton>
      </Box>
    </Box>
  );
}
