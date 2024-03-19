import { truncateText } from "@/utils";
import { Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useAccount, useEnsName } from "wagmi";

export function Account() {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const personalData = (): string => {
    return (ensName ? `${ensName} (${address})` : address) ?? "";
  };
  return (
    <Wrap>
      <WrapItem>
        {address && (
          <Text>
            Welcome,
            <Text as="b">
              {window.innerWidth <= 768
                ? truncateText(personalData(), 20)
                : personalData()}
            </Text>
            !
          </Text>
        )}
      </WrapItem>
    </Wrap>
  );
}
