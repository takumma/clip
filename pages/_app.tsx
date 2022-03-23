// import '../styles/globals.css'
import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/globals";
import { CustomThemeProvider } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <CustomThemeProvider>
        <Component {...pageProps} />
      </CustomThemeProvider>
    </>
  );
}

export default MyApp;
