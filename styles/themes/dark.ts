import { DefaultTheme } from "styled-components";

const dark: DefaultTheme = {
  borderRadius: "10px",

  colors: {
    main: "#3F88C5",
    secondary: "#EA7317",
    red: "#C33C54",
    yellow: "#FFBE0B",
    "text-100": "#F7F7F7",
    "background-100": "#222222",
    "card-100": "#353535",
    "card-200": "#252525",
  },
} as const;

export { dark };
