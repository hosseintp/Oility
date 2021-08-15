import "../styles/global.css";
import "../styles/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  // const scrollTop = () => {

  // }
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
