import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { dark } from "../styles/themes/dark";
import { light } from "../styles/themes/light";
import { GlobalStyle } from "../styles/global";
import { Layout } from "../src/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
}
