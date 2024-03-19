import { starCss } from "@/assets";
import { searchBrewery } from "@/store";
import { StarIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { StarProps } from "types/properties";

export function PunkStar({ onStarClick }: StarProps) {
  const dispatch = useDispatch();

  const handleStar = () => {
    onStarClick();
    dispatch(searchBrewery({}));
  };
  return (
    <span>
      <Tooltip
        hasArrow
        label="Add to favourites"
        placement="right"
        bg="gray.300"
      >
        <StarIcon
          className={starCss}
          color="green.200"
          onClick={handleStar}
          aria-label="add to favourites"
        />
      </Tooltip>
    </span>
  );
}
