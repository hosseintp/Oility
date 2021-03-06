import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import Subscribe from "./Subscribe";

const Layout = ({ children, description, title, keywords }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {children}
      <Subscribe />
      <Footer />
    </>
  );
};
Layout.defaultProps = {
  title: "Oility shop",
  description: "Shoping Website",
  keywords: "Shop Shirt Shoes",
};
export default Layout;
