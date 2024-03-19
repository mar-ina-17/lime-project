import { Image } from "@chakra-ui/react";
import { ImageProps } from "types/properties";

export function PunkImage({ url }: ImageProps) {
  return (
    <Image
      src={url}
      marginRight={{ base: "5" }}
      maxW={{ base: "100%", sm: "100px" }}
      maxH={{ base: "200px", sm: "150px" }}
    />
  );
}
