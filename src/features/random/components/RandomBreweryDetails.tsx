import { PunkText } from "@/components";
import { Box, Container, Heading } from "@chakra-ui/react";
import { DetailsProps } from "types/properties";

export function PunkRandomBreweryDetails({ brewery }: DetailsProps) {
  return (
    <Container padding={7}>
      <Box key={brewery.id} width="100%">
        <Box overflowY="scroll" height="30vh">
          <Heading as="h6" size="xs">
            Name: {brewery.name}
          </Heading>
          <PunkText link={brewery.website_url} heading="Website:" />
          <PunkText text={brewery.country} heading="Country:" />
          <PunkText text={brewery.address_1} heading="Address:" />
        </Box>
      </Box>
    </Container>
  );
}
