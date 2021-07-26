import React from "react";
import { BiSupport } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";
import { RiTruckLine } from "react-icons/ri";
import styles from "../styles/Home.module.css";

export default function Fetures() {
  return (
    <div className="container py-5">
      <div className="row text-center align-items-center py-5">
        <div className="col-12 col-md-6 col-lg-4 my-5 my-md-0">
          <div className={styles.icon}>
            <RiTruckLine />
          </div>

          <h4 className="my-4">حمل رایگان</h4>
          <p className={styles.caption}>
            If you are going to use of Lorem, you need to be sure there anything
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 my-5 my-md-0">
          <div className={styles.icon}>
            <GiReturnArrow />
          </div>
          <h4 className="my-4 text-bold">بازگشت 30 روزه</h4>
          <p className={styles.caption}>
            If you are going to use of Lorem, you need to be sure there anything
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 my-5 my-md-0">
          <div className={styles.icon}>
            <BiSupport />
          </div>
          <h4 className="my-4">پشتیبانی 24 ساعته</h4>
          <p className={styles.caption}>
            If you are going to use of Lorem, you need to be sure there anything
          </p>
        </div>
      </div>
    </div>
  );
}
