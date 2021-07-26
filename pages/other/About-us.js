import Layout from "../../components/Layout";
import SubHeader from "../../components/SubHeader";
import Image from "next/image";
import Table from "../../public/images/worktable.jpg";
import styles from "../../styles/Aboutus.module.css";
import { ImPencil } from "react-icons/im";
import { FaLayerGroup } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const About = () => {
  return (
    <Layout title="About us">
      <SubHeader title="در مورد ما" />
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-12 col-md-6 mb-3">
            <div className="img-fluid">
              <Image src={Table} />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h2 className="fw-bolder">ما که هستیم؟</h2>
            <p className="my-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم
              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </p>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم
              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </p>
          </div>
        </div>
      </div>
      <div
        className="container-fluid my-5"
        style={{ backgroundColor: "#f7f8fb" }}
      >
        <div className="row text-sm-center py-5">
          <div className="col-12 m-auto text-gray">
            <h2 className="fw-bolder">چرا انتخاب ما؟</h2>
            <p className="my-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم
              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </p>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم
              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </p>
          </div>
        </div>
        <div className="row justify-content-center align-items-center m-auto">
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className={`d-flex flex-column align-items-center ${styles.box}`}
            >
              <div className={styles.icon}>
                <ImPencil />
              </div>
              <h3>طراحی خلاقانه</h3>
              <p>
                تعداد زیادی از معابر Lorem Ipsum در دسترس است ، اما اکثر آنها به
                نوعی دچار تغییر شده اند
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className={`d-flex flex-column align-items-center ${styles.box}`}
            >
              <div className={styles.icon}>
                <AiOutlineMail />
              </div>
              <h3>طراحی خلاقانه</h3>
              <p>
                تعداد زیادی از معابر Lorem Ipsum در دسترس است ، اما اکثر آنها به
                نوعی دچار تغییر شده اند
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className={`d-flex flex-column align-items-center ${styles.box}`}
            >
              <div className={styles.icon}>
                <FaLayerGroup />
              </div>
              <h3>طراحی خلاقانه</h3>
              <p>
                تعداد زیادی از معابر Lorem Ipsum در دسترس است ، اما اکثر آنها به
                نوعی دچار تغییر شده اند
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default About;
