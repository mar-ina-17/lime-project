import { abi } from "@/web3/abi";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { SMART_CONTRACT_HASH } from "@/config";
import { useWriteContract } from "wagmi";

export function PunkAddBeer() {
  const { data: hash, writeContract } = useWriteContract();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const imageUrl = formData.get("imageUrl");
    const brewery = formData.get("brewery");
    const alcoholPercentage = formData.get("alcoholPercentage");
    const beerType = formData.get("beerType");
    const price = formData.get("price");

    writeContract({
      address: SMART_CONTRACT_HASH,
      abi,
      functionName: "addBeer",
      args: [name, imageUrl, brewery, alcoholPercentage, beerType, price],
    });
  };
  return (
    <Center mt={8}>
      <Box
        width="lg"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="#E9D8FD"
        p={4}
        boxShadow="lg"
      >
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input name="name" placeholder="Beer Name" />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel>Image URL</FormLabel>
            <Input name="imageUrl" placeholder="Image URL" />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel>Brewery</FormLabel>
            <Input name="brewery" placeholder="Brewery" />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel>Alcohol Percentage</FormLabel>
            <Input
              name="alcoholPercentage"
              type="number"
              placeholder="Alcohol Percentage"
            />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel>Beer Type</FormLabel>
            <Input name="beerType" placeholder="Beer Type" />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel>Price</FormLabel>
            <Input name="price" type="number" placeholder="Price" />
          </FormControl>
          <Button mt={4} bg="#32D2B2" type="submit">
            Add Beer
          </Button>
        </form>
        {hash && (
          <Center mt={4}>
            <Text fontSize="sm">Transaction Hash: {hash}</Text>
          </Center>
        )}
      </Box>
    </Center>
  );
}
