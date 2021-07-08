import React from "react";
import styles from "../styles/Slider.module.css";
import Image from "next/image";
import site1 from "../public/images/site1.jpg";
import site2 from "../public/images/site2.jpg";
import site3 from "../public/images/site3.jpg";
import site4 from "../public/images/site4.jpg";
import site5 from "../public/images/site5.jpg";
export default function SlideShow() {
  return (
    <div className={styles.slidercontainer}>
      <div className="imgholder">
        <Image src={site1} alt="" />
      </div>
      <div className="imgholder">
        <Image src={site2} alt="" />
      </div>
      <div className="imgholder">
        <Image src={site3} alt="" />
      </div>
      <div className="imgholder">
        <Image src={site4} alt="" />
      </div>
      <div className="imgholder">
        <Image src={site5} alt="" />
      </div>
    </div>
  );
}
