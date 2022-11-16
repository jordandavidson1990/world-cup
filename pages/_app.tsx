import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { SoulsProvider } from "../components/context";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  const darkTheme = createTheme({
    palette: {
      // mode: "",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title>World Cup 🏆</title>
      </Head>
      <CssBaseline />
      <SoulsProvider>
        <Component {...pageProps} />
      </SoulsProvider>
    </ThemeProvider>
  );
}
