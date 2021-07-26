import Head from "next/head";
import "../styles/global.css";
import "../styles/bootstrap.min.css";
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
