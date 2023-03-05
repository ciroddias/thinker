import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { dark } from "../../styles/themes/dark";
import { light } from "../../styles/themes/light";
import { GlobalStyle } from "../../styles/global";
import { Layout } from "../../src/components/Layout";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { AuthProvider } from "../../src/contexts/authContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
dayjs.extend(relativeTime);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
}
