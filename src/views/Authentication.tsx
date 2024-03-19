import { PunkEmoji } from "@/components";
import { Account, WalletOptions } from "@/features";
import { Center, Container, Text } from "@chakra-ui/react";
import { useAccount } from "wagmi";

export function PunkAuthentication() {
  const { isConnected } = useAccount();

  return (
    <Container mt="20" maxW="md">
      <Center>
        {!isConnected ? (
          <Text fontSize="2xl" as="b">
            Hi, there! To use this app, you have to connect to your
            <WalletOptions />
            account. If you don't have one yet, you can create it here by
            downloading their browser extension or using another method that
            works for you. {"\t"}
            <PunkEmoji label="fox" symbol="🦊" />
          </Text>
        ) : (
          <Account />
        )}
      </Center>
    </Container>
  );
}
