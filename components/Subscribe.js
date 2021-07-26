import React from "react";
import styles from "../styles/Home.module.css";

export default function Subscribe() {
  return (
    <div className={`container-fluid ${styles.redbg} py-5`}>
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-12 col-md-6">
          <h3>در خبرنامه ما عضو شوید</h3>
        </div>
        <div className="col-12 col-md-6">
          <div className="position-relative w-75">
            <input type="text" className={styles.inputy} />
            <button className={`btn ${styles.form_btn}`}>اشتراک</button>
          </div>
        </div>
      </div>
    </div>
  );
}
