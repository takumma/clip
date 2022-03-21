// import '../styles/globals.css'
import type { AppProps } from "next/app";
import { globalStyles } from "../styles/globals";
import { ThemeProvider } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={globalStyles}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
