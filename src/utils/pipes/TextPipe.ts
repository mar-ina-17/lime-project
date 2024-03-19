export function truncateText(text: string, maxLenth: number = 100): string {
  if (text) {
    return text.length <= maxLenth ? text : text.substring(0, maxLenth) + "...";
  } else return "";
}
