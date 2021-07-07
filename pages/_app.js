import Header from "../components/Header";
import "../styles/global.css";
import "../styles/bootstrap.min.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
