import { cardImageCss } from "@/assets";
import { truncateText } from "@/utils";
import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { CardProps } from "types/properties";

export function PunkCard({
  heading,
  websiteUrl,
  id,
  img,
  children,
  imgClick,
}: CardProps) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      maxW={{ base: "100%", sm: "auto" }}
      height={{ base: "100%", sm: "230px" }}
    >
      {children}
      <Image
        margin="auto"
        marginTop={{ base: "10" }}
        maxW={{ base: "100%", sm: "100px" }}
        maxH={{ base: "200px", sm: "150px" }}
        src={img}
        alt={heading}
        onClick={imgClick}
        className={cardImageCss}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{heading}</Heading>

          <Text py="2">{websiteUrl}</Text>
          <Text py="2">{id}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
}
