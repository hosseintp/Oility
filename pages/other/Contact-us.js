import Layout from "../../components/Layout";
import SubHeader from "../../components/SubHeader";
import styles from "../../styles/Contactus.module.css";

const contactus = () => {
  return (
    <Layout title="Contact-Us">
      <SubHeader title="ارتباط با ما" />
      <div className="container">
        <div className="row text-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className={styles.contact__box}>div</div>
          </div>
          <div className="col-12 col-md-6 col-lg-4"></div>
          <div className="col-12 col-md-6 col-lg-4"></div>
        </div>
      </div>
    </Layout>
  );
};
export default contactus;
