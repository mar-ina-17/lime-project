import { EmojiProps } from "types/properties";

export function PunkEmoji({ label, symbol }: EmojiProps) {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </span>
  );
}
