import styles from "../styles/Home.module.css";
import Image from "next/image";
import solo from "../public/images/solo.jpg";
import per2 from "../public/images/2per.jpg";
import Tabs from "../components/Tabs";

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
    </>
  );
}
