export const statics = {
  size: (times: number): string => times * 12 + "px",
  column: (times: number): string => 100 / 12 * times + "%"
}