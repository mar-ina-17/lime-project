import { ReactNode } from "react";
import { HashMap, sizes } from "types";
import { Brewery } from "./interfaces";

export interface ButtonProps {
  children?: ReactNode;
  size?: sizes;
  color?: string;
  bgColor?: string;
  className?: string;
  onButtonClick?: () => void;
}

export interface CardProps {
  heading: string;
  img: string;
  websiteUrl: string;
  id: string;
  imgClick?: () => void;
  children?: ReactNode;
}

export interface EmojiProps {
  label: string;
  symbol: string;
}

export interface MessageProps {
  type: string;
  text: string;
}

export interface TextProps {
  text: string;
  heading: string;
  link?: string;
}

export interface InputProps {
  size?: sizes;
  borderColor?: string;
  focusBorderColor?: string;
  placeholder?: string;
  onInputChange?: (value: string) => void;
}

export interface MenuProps {
  links: { home: string; favourites: string; beer: string };
}

export interface ParentProps {
  children: ReactNode;
}

export interface ItemProps {
  brewery: Brewery;
  breweryKey: string;
  changed: boolean;
}

export interface ListProps {
  breweries: HashMap<Brewery>;
  changed: string[];
}

export interface CatalogueProps {
  breweries: Brewery[];
}

export interface StarProps {
  onStarClick: () => void;
}

export interface DetailsProps {
  brewery: Brewery;
}

export interface ImageProps {
  url: string;
}
