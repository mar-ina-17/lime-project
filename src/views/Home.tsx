import { PunkMessage, PunkSpinner } from "@/components";
import { PunkCatalogue, PunkSearchBar } from "@/features";
import { setFetchMode } from "@/store";
import { MESSAGE } from "@/types/enums";
import { Center, Switch, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

export function PunkHome() {
  const breweryState = useSelector((state: any) => state.breweries);
  const dispatch = useDispatch();
  return (
    <div>
      <PunkSearchBar />
      <Center mt="2">
        <Text fontSize="xs">
          Fetch from API or from smart contrcat? You choose:
        </Text>
        <Switch
          colorScheme="purple"
          id="fetch-mode"
          onChange={(e) => dispatch(setFetchMode({ mode: e.target.checked }))}
        />
      </Center>

      {breweryState.isLoading ? (
        <Center height="70vh">
          <PunkSpinner />
        </Center>
      ) : breweryState.isDataFetched ? (
        breweryState.results.length > 0 ? (
          <PunkCatalogue breweries={breweryState.results} />
        ) : (
          <PunkMessage
            type={MESSAGE.WARNING}
            text="We couldn't find any breweries that contain this search term :("
          />
        )
      ) : (
        <PunkMessage
          type={MESSAGE.ERROR}
          text="Sorry, but we couldn't fetch the breweries..."
        />
      )}
    </div>
  );
}
