import styles from "../styles/Home.module.css";
import Image from "next/image";
import solo from "../public/images/solo.jpg";
import per2 from "../public/images/2per.jpg";
import Tabs from "../components/Tabs";
import girls from "../public/images/girls.png";

export default function Home() {
  return (
    <>
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
      <div className={`container-fluid ${styles.lightbg}`}>
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
    </>
  );
}
