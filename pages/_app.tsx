import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { dark } from "../styles/themes/dark";
import { light } from "../styles/themes/light";
import { GlobalStyle } from "../styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
