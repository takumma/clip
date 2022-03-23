// import '../styles/globals.css'
import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/globals";
import { CustomThemeProvider } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomThemeProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </CustomThemeProvider>
    </>
  );
}

export default MyApp;
