import "../styles/globals.css";
import GlobalStyle from "../pages/api/globals";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
