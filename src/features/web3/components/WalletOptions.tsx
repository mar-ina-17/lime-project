import { PunkButton } from "@/components";
import { useConnect } from "wagmi";

export function WalletOptions() {
  const { connectors, connect } = useConnect();

  return connectors.map((connector) => (
    <PunkButton
      size="md"
      key={connector.uid}
      onButtonClick={() => connect({ connector })}
      bgColor="transparent"
      color="#00d2b2"
    >
      {connector.name}
    </PunkButton>
  ));
}
