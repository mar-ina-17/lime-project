import { SMART_CONTRACT_HASH, WALLET_HASH } from "@/config";
import { fetchBreweries, setBreweriesFromContract } from "@/store";
import { abi } from "@/web3/abi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ParentProps } from "types/properties";
import { useAccount, useReadContract } from "wagmi";

export function AppContainer({ children }: ParentProps) {
  const dispatch = useDispatch();
  const { isConnected } = useAccount();
  const breweryState = useSelector((state: any) => state.breweries);

  const { data } = useReadContract({
    abi,
    address: SMART_CONTRACT_HASH,
    functionName: "beers",
    args: [],
    account: WALLET_HASH,
  });

  useEffect(() => {
    if (breweryState.fetchMode === "api") {
      if (!breweryState.isDataFetched && isConnected) {
        dispatch(fetchBreweries());
      }
    } else {
      dispatch(setBreweriesFromContract({ breweries: data }));
    }
  }, [breweryState.fetchMode, breweryState.isDataFetched, isConnected]);

  return <div className="app">{children}</div>;
}
