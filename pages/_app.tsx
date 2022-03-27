import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";
import { GlobalStyles } from "../styles/globals";
import { CustomThemeProvider } from "../styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomThemeProvider>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CustomThemeProvider>
    </>
  );
}

export default App;
