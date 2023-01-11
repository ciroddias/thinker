import { DefaultTheme } from "styled-components";

const light: DefaultTheme = {
  borderRadius: "10px",

  colors: {
    main: "#3F88C5",
    secondary: "#EA7317",
    red: "#C33C54",
    yellow: "#FFBE0B",
    "text-100": "#22222",
    "background-100": "#E0E0E0",
    "card-100": "#F7F7F7",
    "card-200": "#FFF",
  } as const,
};

export { light };
