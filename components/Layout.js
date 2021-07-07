import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ childern, content, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {childern}
      <Footer />
    </>
  );
};
export default Layout;
