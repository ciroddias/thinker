import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
      red: string;
      yellow: "#FFBE0B";
      "text-100": string;
      "background-100": string;
      "card-100": string;
      "card-200": string;
    };
  }
}
