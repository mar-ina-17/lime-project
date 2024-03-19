import {
  Box,
  Heading,
  Link,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { TextProps } from "types/properties";

export function PunkText({ text, heading, link }: TextProps) {
  return (
    <Box padding="3">
      <Stack divider={<StackDivider />} spacing="4">
        <Heading size="xs">{heading}</Heading>
        {text && <Text fontSize="sm">{text}</Text>}
        {link && <Link href={link}>{link}</Link>}
      </Stack>
    </Box>
  );
}
