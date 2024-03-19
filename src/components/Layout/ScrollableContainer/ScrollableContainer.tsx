import { scrollCss } from "@/assets";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { ParentProps } from "types/properties";

export function PunkScrollableContainer({ children }: ParentProps) {
  const numberOfChildren = React.Children.count(children);
  const justifyContentStyle =
    numberOfChildren < 3 ? "space-evenly" : "space-between";

  return (
    <Box
      height="70vh"
      margin="10"
      overflowY={
        numberOfChildren < 6 && window.innerWidth > 786 ? "hidden" : "scroll"
      }
      className={scrollCss}
    >
      <Flex flexWrap="wrap" justifyContent={justifyContentStyle}>
        {children}
      </Flex>
    </Box>
  );
}
