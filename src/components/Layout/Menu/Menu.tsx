import { disconnectCss, menuLinks, menuList, randomBreweryCss } from "@/assets";
import { PunkRandom } from "@/features";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MenuProps } from "types/properties";
import { useDisconnect } from "wagmi";

export function PunkMenu({ links }: MenuProps) {
  const { disconnect } = useDisconnect();

  return (
    <UnorderedList className={menuList}>
      <ListItem className={randomBreweryCss}>
        <PunkRandom></PunkRandom>
      </ListItem>
      <ListItem className={menuLinks}>
        <Link to={links.home}>Home</Link>
      </ListItem>
      <ListItem className={menuLinks}>
        <Link to={links.favourites}>Favouritess</Link>
      </ListItem>
      <ListItem className={menuLinks}>
        <Link to={links.beer}>Add Beer</Link>
      </ListItem>
      <ListItem className={disconnectCss} onClick={() => disconnect()}>
        Disconnect
      </ListItem>
    </UnorderedList>
  );
}
