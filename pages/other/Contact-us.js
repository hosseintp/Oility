import { FiMap } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsPhone } from "react-icons/bs";
import Layout from "../../components/Layout";
import SubHeader from "../../components/SubHeader";
import styles from "../../styles/Contactus.module.css";
import Maps from "../../components/Maps";
import classes from "../../styles/Home.module.css";

const contactus = () => {
  const mapStyles = {
    color: "red",
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Layout title="Contact-Us">
      <SubHeader title="ارتباط با ما" />
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-12 col-md-6 col-lg-4 py-4 py-lg-0">
            <div className={styles.contact__box}>
              <div className={styles.icon__holder}>
                <FiMap />
              </div>
              <div className={styles.content}>
                <h5>آدرس</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 py-4 py-lg-0">
            <div className={styles.contact__box}>
              <div className={styles.icon__holder}>
                <HiOutlineMailOpen />
              </div>
              <div className={styles.content}>
                <h5> آدرس ایمیل</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 py-4 py-lg-0 m-auto">
            <div className={styles.contact__box}>
              <div className={styles.icon__holder}>
                <BsPhone />
              </div>
              <div className={styles.content}>
                <h5>تلفن</h5>
                <p>09210800359</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className={styles.title}>
              <h2>در تماس باشید</h2>
              <p className="my-3">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است،
              </p>
            </div>
            <form>
              <div className="row">
                <div className="col-12 col-md-6">
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="نام راوارد کنید *"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    className={styles.input}
                    type="email"
                    placeholder="ایمیل را وارد کنید *"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    className={styles.input}
                    type="phone"
                    placeholder="شماره را وارد کنید *"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    className={styles.input}
                    type="subject"
                    placeholder="موضوع را وارد کنید *"
                  />
                </div>
                <a
                  className={classes.hvr}
                  type="submit"
                  onClick={(e) => submitHandler(e)}
                  style={{
                    display: "inline",
                    textAlign: "center",
                    width: "30%",
                  }}
                >
                  ارسال پیام
                </a>
              </div>
            </form>
          </div>

          <div className="col-12 col-md-6">
            <Maps />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default contactus;
