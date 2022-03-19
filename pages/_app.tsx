// import '../styles/globals.css'
import type { AppProps } from "next/app";
import { globalStyles } from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={globalStyles}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
