import { PunkButton, PunkEmoji, PunkMessage, PunkSpinner } from "@/components";
import { AppDispatch, getRandomBrewery, removeRandomBrewery } from "@/store";
import { MESSAGE } from "@/types/enums";
import { truncateText } from "@/utils";
import {
  Center,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { PunkRandomBreweryDetails } from "./RandomBreweryDetails";

export function PunkRandom() {
  const dispatch = useDispatch<AppDispatch>();
  const randomBreweryState = useSelector((state: any) => state.randomBrewery);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleButtonClick = () => {
    dispatch(getRandomBrewery());
    onOpen();
  };
  const handleClose = () => {
    dispatch(removeRandomBrewery());
    onClose();
  };
  const isBreweryLoading = () => {
    return Object.keys(randomBreweryState.randomBrewery).length > 0 ? (
      <PunkRandomBreweryDetails brewery={randomBreweryState.randomBrewery} />
    ) : !randomBreweryState.error ? (
      <Center height="auto">
        <PunkSpinner />
      </Center>
    ) : (
      <PunkMessage
        type={MESSAGE.ERROR}
        text="It seems like there is a problem getting a random brewery..."
      />
    );
  };
  return (
    <>
      <PunkButton size="xs" onButtonClick={handleButtonClick}>
        <PunkEmoji label="sparkles" symbol="✨" />
        Get Random Brewery
        <PunkEmoji label="sparkles" symbol="✨" />
      </PunkButton>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Wow! You got
            {truncateText(randomBreweryState.randomBrewery.name, 15)}
            <PunkEmoji label="wow-face" symbol="🤩" />
          </ModalHeader>
          <ModalCloseButton />
          {isBreweryLoading()}
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
