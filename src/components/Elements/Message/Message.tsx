import { rowStyles } from "@/assets";
import { MESSAGE } from "@/types/enums";
import { WarningIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import { MessageProps } from "types/properties";

export function PunkMessage({ text, type }: MessageProps) {
  return (
    <Container mt="20" maxW="sm">
      <Card
        variant="filled"
        bg={type === MESSAGE.ERROR ? "red.300" : "yellow.300"}
      >
        <CardHeader className={rowStyles}>
          <Heading size="md">
            {type === MESSAGE.ERROR ? "Uh-oh!" : "Ooops..!"}
          </Heading>
          <WarningIcon
            w={8}
            h={8}
            color={type === MESSAGE.ERROR ? "red.500" : "yellow.700"}
          />
        </CardHeader>

        <CardBody>
          <Text pt="2" fontSize="sm">
            {text}
          </Text>
        </CardBody>
      </Card>
    </Container>
  );
}
