import { mobileMenuList, randomBreweryCss } from "@/assets";
import { PunkRandom } from "@/features";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MenuProps } from "types/properties";
import { useDisconnect } from "wagmi";

export function PunkMobileMenu({ links }: MenuProps) {
  const { disconnect } = useDisconnect();

  return (
    <div className={mobileMenuList}>
      <Menu>
        <MenuButton as={Button} size="sm">
          <HamburgerIcon />
        </MenuButton>
        <MenuList>
          <Link to={links.home}>
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to={links.favourites}>
            <MenuItem>Favouritess</MenuItem>
          </Link>
          <Link to={links.beer}>
            <MenuItem>Add Beer</MenuItem>
          </Link>
          <section className={randomBreweryCss}>
            <PunkRandom></PunkRandom>
          </section>
          <MenuItem onClick={() => disconnect()}>Disconnect</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
