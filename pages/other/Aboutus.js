import Layout from "../../components/Layout";
import SubHeader from "../../components/SubHeader";
import Image from "next/image";
import Table from "../../public/images/worktable.jpg";
import styles from "../../styles/Aboutus.module.css";
import { ImPencil } from "react-icons/im";
import {
  FaFacebook,
  FaInstagram,
  FaLayerGroup,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import team1 from "../../public/images/team1.jpg";
import team2 from "../../public/images/team2.jpg";
import team3 from "../../public/images/team3.jpg";
import team4 from "../../public/images/team4.jpg";
import Fetures from "../../components/Fetures";
import Slider from "../../components/Slider";
const Aboutus = () => {
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
        className="container-fluid my-5 py-5"
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
        <div className="container">
          <div className="row justify-content-center align-items-center m-auto">
            <div className="col-12 col-md-6 col-lg-4 my-3 my-lg-0">
              <div
                className={`d-flex flex-column align-items-center ${styles.box}`}
              >
                <div className={styles.icon}>
                  <ImPencil />
                </div>
                <h3>طراحی خلاقانه</h3>
                <p>
                  تعداد زیادی از معابر Lorem Ipsum در دسترس است ، اما اکثر آنها
                  به نوعی دچار تغییر شده اند
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 my-3 my-lg-0">
              <div
                className={`d-flex flex-column align-items-center ${styles.box}`}
              >
                <div className={styles.icon}>
                  <AiOutlineMail />
                </div>
                <h3>بازاریابی ایمیلی</h3>
                <p>
                  تعداد زیادی از معابر Lorem Ipsum در دسترس است ، اما اکثر آنها
                  به نوعی دچار تغییر شده اند
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 my-3 my-lg-0">
              <div
                className={`d-flex flex-column align-items-center ${styles.box}`}
              >
                <div className={styles.icon}>
                  <FaLayerGroup />
                </div>
                <h3>طرح بندی های انعطاف پذیر</h3>
                <p>
                  تعداد زیادی از معابر Lorem Ipsum در دسترس است ، اما اکثر آنها
                  به نوعی دچار تغییر شده اند
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row text-center">
          <div className="col-12 m-auto text-gray text-center">
            <h2 className="fw-bolder">اعضای تیم ما</h2>
            <p className="my-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم
              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className={styles.team__box}>
              <div className={styles.team__box_image}>
                <Image src={team2} />
                <ul className={styles.team__box_socials}>
                  <li>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className={styles.team__box}>
              <div className={styles.team__box_image}>
                <Image src={team3} />
                <ul className={styles.team__box_socials}>
                  <li>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className={styles.team__box}>
              <div className={styles.team__box_image}>
                <Image src={team4} />
                <ul className={styles.team__box_socials}>
                  <li>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className={styles.team__box}>
              <div className={styles.team__box_image}>
                <Image src={team1} />
                <ul className={styles.team__box_socials}>
                  <li>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slider />
      <Fetures />
    </Layout>
  );
};
export default Aboutus;
