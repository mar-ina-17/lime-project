import { PunkEmoji, PunkMessage } from "@/components";
import { MESSAGE } from "@/types/enums";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { ListProps } from "types/properties";
import { PunkBreweryItem } from "./BreweryItem";

export function PunkFavList({ breweries, changed }: ListProps) {
  const listOfBreweries = () => {
    return Object.keys(breweries).length > 0 ? (
      Object.keys(breweries).map((key) => {
        const hasChanged = changed.includes(key);
        return (
          <PunkBreweryItem
            key={key}
            brewery={breweries[key]}
            breweryKey={key}
            changed={hasChanged}
          />
        );
      })
    ) : (
      <PunkMessage
        type={MESSAGE.ERROR}
        text="Oh, it looks like you don't have any favourite breweries added to your list... Go explore some!"
      />
    );
  };
  return (
    <Card bg="purple.100">
      <CardHeader bg="#7643B6" color="white">
        <Heading size="md">
          My Favourite Breweries
          <PunkEmoji label="beer" symbol="🍺" />
          <PunkEmoji label="heart-sparkling" symbol="💖" />
        </Heading>
      </CardHeader>

      <CardBody>
        <Container
          overflowY={Object.keys(breweries).length > 2 ? "scroll" : "hidden"}
          height="40vh"
        >
          <Stack divider={<StackDivider />} spacing="4">
            {listOfBreweries()}
          </Stack>
        </Container>
      </CardBody>
    </Card>
  );
}
