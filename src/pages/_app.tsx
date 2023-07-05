import NavProvider from "@/context/NavContext";
import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gregorio Magno</title>
        <meta name="description" content="Portifólio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
      <NavProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </NavProvider>
      </ThemeProvider>
    </>
  );
}
