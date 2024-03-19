import { navbarCss, navbarTitleCss } from "@/assets";
import { NAV_LINKS } from "@/config";
import { useAccount } from "wagmi";
import { PunkMenu, PunkMobileMenu } from "../Menu";

export function PunkNavbar() {
  const { isConnected } = useAccount();

  return (
    isConnected && (
      <nav className={navbarCss} title="Navigation">
        <span className={navbarTitleCss}>Beans Love Breweries</span>
        <PunkMenu links={NAV_LINKS} />
        <PunkMobileMenu links={NAV_LINKS} />
      </nav>
    )
  );
}
