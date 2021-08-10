import React, { useState } from "react";
import Layout from "../../components/Layout";
import SubHeader from "../../components/SubHeader";
import Styles from "../../styles/Sign.module.css";
import { useFormik, Formik } from "formik";
import Link from "next/link";
const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "قسمت نام باید پرشود";
  } else if (values.firstName.length > 15) {
    errors.firstName = "تعداد حروف باید 15 یا کمتر باشد";
  }

  if (!values.lastName) {
    errors.lastName = "قسمت نام خانوادگی باید پرشود";
  } else if (values.lastName.length > 20) {
    errors.lastName = "تعداد حروف باید 20 یا کمتر باشد";
  }

  if (!values.email) {
    errors.email = "ایمیل را وارد کنید";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "آدرس ایمیل نامعتبر";
  }
  if (!values.password) {
    errors.password = "رمز خود را وارد کنید";
  }
  if (!(values.password === values.cpassword)) {
    errors.cpassword = "رمز ها مطابقت ندارند";
  }

  return errors;
  // else if (
  //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.password)
  // ) {
  //   errors.password = "رمز شما ضعیف است";
  // }
};
const Signup = () => {
  const [on, setOn] = useState(true);
  const [onval, setOnval] = useState("unchecked");
  const checkHandler = () => {
    setOn(!on);
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Layout title="ثبت نام">
      <SubHeader title="ثبت نام" />
      <form onSubmit={formik.handleSubmit}>
        <div className={`${Styles.form_container} my-5`}>
          <h3 className="text-right">ساخت حساب</h3>
          <div className={Styles.form_body}>
            <div className={`${Styles.inputs}`}>
              <input
                className={Styles.inputs}
                type="text"
                name="firstName"
                placeholder="نام"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className={Styles.error_message} style={{ opacity: "1" }}>
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>
            <div className={`${Styles.inputs}`}>
              <input
                className={Styles.inputs}
                type="text"
                name="lastName"
                placeholder="نام خانوادگی"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lasttName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className={Styles.error_message} style={{ opacity: "1" }}>
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>
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
            <div className={`${Styles.inputs}`}>
              <input
                className={Styles.inputs}
                type="password"
                name="cpassword"
                placeholder="تایید رمز"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cpassword}
              />
              {formik.touched.cpassword && formik.errors.cpassword ? (
                <div className={Styles.error_message} style={{ opacity: "1" }}>
                  {formik.errors.cpassword}
                </div>
              ) : null}
            </div>

            <div className={`${Styles.inputs}`}>
              <label htmlFor="checkbox">
                تمامی قوانین ومقررات را قبول دارم
              </label>
              <input
                type="checkbox"
                name="checkbox"
                onChange={checkHandler}
                value={onval}
                className={Styles.checkbox}
              />
            </div>
            <div className={`${Styles.inputs} ${Styles.checkbox}`}>
              {formik.errors.firstName ? (
                <div className={Styles.error_message}>
                  {formik.errors.firstName}
                </div>
              ) : null}
              <button
                type="submit"
                className={`${Styles.hvr} btn`}
                disabled={on}
              >
                ثبت نام
              </button>
            </div>
            <div className="col-12">
              <div className={Styles.or}>
                <span>یا</span>
              </div>
            </div>
            <div className="col-12">
              <span className={Styles.last}>
                در حال حاضر حساب دارید؟
                <span>
                  <Link href="/other/Login">
                    <a>ورود</a>
                  </Link>
                </span>
              </span>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Signup;
