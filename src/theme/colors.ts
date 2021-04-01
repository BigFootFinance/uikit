import { Colors } from "./types";

export const baseColors = {
  failure: "#e02f58",
  primary: "#d86c08",
  primaryBright: "#dd831c",
  primaryDark: "#c25e00",
  secondary: "#c2b721",
  success: "#dace31",
  warning: "#e68327",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ffffff",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#424f3e",
  textDisabled: "#BDC2C4",
  textSubtle: "#62815c",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  nav: "#f9fdf9",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#c9b71b",
  background: "#18170c",
  backgroundDisabled: "#424037",
  contrast: "#FFFFFF",
  invertedContrast: "#262513",
  input: "#5a583f",
  inputSecondary: "#8d8857",
  primaryDark: "#8f8104",
  tertiary: "#474735",
  text: "#fcfae2",
  textDisabled: "#717161",
  textSubtle: "#d4cf8b",
  borderColor: "#61634b",
  card: "#2c2c26",
  nav: "#2c2c26",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #4b4225 0%, #8e9100 100%)",
  },
};
