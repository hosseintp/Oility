import Layout from "../components/Layout";
import "../styles/global.css";
import "../styles/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout title="Oility | Shoping App">
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
