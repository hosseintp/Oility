import { useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import solo from "../public/images/solo.jpg";
import per2 from "../public/images/2per.jpg";
import Tabs from "../components/Tabs";
import girls from "../public/images/girls.png";
import sally from "../public/images/sally.jpg";
import Layout from "../components/Layout";
import Fetures from "../components/Fetures";

export default function Home() {
  const [value, setvalue] = useState(0);
  const swipeHandler = (values) => {
    setvalue((prev) => prev + values);
    alert(value);
  };
  return (
    <Layout title="Oility | Shopping App">
      <div className="container">
        <div className="row my-5">
          <div className="col-12 col-md-6">
            <div className="d-flex cardy">
              <div className="img-holder">
                <Image src={solo} />
              </div>
              <div className="content">
                <h6>فروش فوق العاده</h6>
                <h3>مجموعه جدید</h3>
                <a href="#" className={styles.hvr}>
                  خرید
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex cardy mt-3 mt-md-0">
              <div className="img-holder">
                <Image src={per2} />
              </div>
              <div className="content">
                <h6>فصل جدید</h6>
                <h3>فروش 40% تخفیف</h3>
                <a href="#" className={styles.hvr}>
                  خرید
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tabs />
      <div className="container-fluid">
        <div className="row align-items-center justify-content-sm-center justify-content-md-between">
          <div className="col-12 col-md-6 mb-sm-5 mb-md-0 text-center text-md-start">
            <span style={{ color: "red", textAlign: "right" }}>
              داغ های فصل جدید
            </span>
            <h2 className="my-3"> بهترین مجموعه تابستان</h2>
            <h5>با بیش از 50% تخفیف</h5>
            <a href="#" className={styles.hvr}>
              خرید
            </a>
          </div>
          <div className="col-12 col-md-6 mt-5 mt-md-0">
            <Image src={girls} />
          </div>
        </div>
      </div>
      <div className="container-fluid position-relative">
        <div
          className={`${styles.arrow} ${styles.arrow_left}`}
          onClick={() => swipeHandler(-100)}
        >
          ^
        </div>
        <div
          className={`${styles.arrow} ${styles.arrow_right}`}
          onClick={() => swipeHandler(100)}
        >
          ^
        </div>
        <div className={`row ${styles.redonbg}`}>
          <div
            className="col-12 text-center mb-5"
            style={{ left: `${value}%` }}
          >
            <h3 className="mt-5">گفته های مشتری</h3>
            <div className={`${styles.content} ${styles.active_content}`}>
              <p className="w-75 m-auto my-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،.
              </p>
              <div className={`${styles.client_container}`}>
                <div className={`${styles.client_info}`}>
                  <span>Sally Jeferson</span>
                  <span style={{ color: "red" }}>job</span>
                </div>
                <div className={`${styles.client_img}`}>
                  <Image src={sally} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fetures />
    </Layout>
  );
}
