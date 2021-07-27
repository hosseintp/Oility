import React, { useState } from "react";
import sally from "../public/images/sally.jpg";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Slider() {
  const [value, setvalue] = useState(0);
  const swipeHandler = (values) => {
    setvalue((prev) => prev + values);
    alert(value);
  };
  return (
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
        <div className="col-12 text-center mb-5" style={{ left: `${value}%` }}>
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
  );
}
