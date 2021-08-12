import React, { useState } from "react";
import Layout from "../../components/Layout";
import SubHeader from "../../components/SubHeader";
import Styles from "../../styles/Sign.module.css";
import Link from "next/link";
import { useFormik } from "formik";
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "ایمیل را وارد کنید";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "آدرس ایمیل نامعتبر";
  }
  if (!values.password) {
    errors.password = "رمز خود را وارد کنید";
  }
  return errors;
};

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Layout title="ورود">
      <SubHeader title="ورود" />
      <form onSubmit={formik.handleSubmit}>
        <div className={`${Styles.form_container} my-5`}>
          <h3 className="text-right">ورود</h3>
          <div className={Styles.form_body}>
            <div className={`${Styles.inputs}`}>
              <input
                className={Styles.inputs}
                type="text"
                name="email"
                placeholder="ایمیل"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className={Styles.error_message} style={{ opacity: "1" }}>
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className={`${Styles.inputs}`}>
              <input
                className={Styles.inputs}
                type="password"
                name="password"
                placeholder="رمز"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className={Styles.error_message} style={{ opacity: "1" }}>
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <div className="row">
              <div className="col-6">
                <a href="#">رمز عبور را فراموش کرده اید؟</a>
              </div>
              <div className="col-6 d-felx align-items-center">
                <span className="mx-2">مرا بخاطر بسپار</span>
                <input type="checkbox" />
              </div>
            </div>

            <div className={`${Styles.inputs} ${Styles.checkbox}`}>
              {formik.errors.firstName ? (
                <div className={Styles.error_message}>
                  {formik.errors.firstName}
                </div>
              ) : null}
              <button type="submit" className={`${Styles.hvr} btn`}>
                ورود
              </button>
            </div>
            {/* <div className="col-12">
              <div className={Styles.or}>
                <span>یا</span>
              </div>
            </div> */}
            <div className="col-12 my-4">
              <span className={Styles.last}>
                در حال حاضر حسابی ندارید؟
                <span>
                  <Link href="/other/Sign-up">
                    <a>حالا حساب بسازید</a>
                  </Link>
                </span>
              </span>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}
