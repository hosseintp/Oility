import Header from "../components/Header";
import "../styles/global.css";
import "../styles/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
