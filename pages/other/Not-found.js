import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import SubHeader from "../../components/SubHeader";
import styles from "../../styles/Home.module.css";
import { AiOutlineSearch } from "react-icons/ai";

export default function Notfound() {
  return (
    <Layout title="Not Found">
      <SubHeader tittle="Not Found " />
      <div className="contaier my-3 text-center">
        <div className="row  mx-auto">
          <div className="col-12 col-md-6 m-auto">
            <div className="fw-bolder display-5">404</div>
            <div className="explain">
              oops! The page you requested was not found!
            </div>
            <p className="text-info my-3">
              .The page you are looking for was moved, removed, renamed or might
              never existed
            </p>
            <div className="d-flex p-3 m-auto justify-content-around align-items-center ">
              <form action="post" className="position-relative">
                <input
                  type="text"
                  placeholder="جست و جو"
                  className={`${styles.inputy}`}
                  style={inputStyles}
                />
                <button
                  type="submit"
                  style={btnStyles}
                  className="position-absolute"
                >
                  <AiOutlineSearch />
                </button>
              </form>
            </div>
            <Link href="/">
              <a className={`${styles.hvr} my-3`}>بازگشت به خانه</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
const btnStyles = {
  border: "none",
  verticalAlign: "center",
  textAlign: "center",
  padding: "5px",
  top: "50%",
  transform: "translateY(-50%)",
  left: "10px",
  background: "transparent",
  borderRight: "1px solid gray",
};
const inputStyles = {
  padding: "10px 3rem",

  border: "1px solid gray",
};
