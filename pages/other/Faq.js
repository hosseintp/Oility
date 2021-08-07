import React from "react";
import Accordion from "../../components/Accordion";
import Layout from "../../components/Layout";
import SubHeader from "../../components/SubHeader";

export default function Faq() {
  return (
    <Layout title="FAQ">
      <SubHeader title="سوالات متداول" />
      <div className="container my-4">
        <div className="row">
          <div className="col-12 col-md-6 my-4">
            <div className="row">
              <div className="col-12">
                <h3>سوالات کلی</h3>
              </div>
              <div className="col-12">
                <Accordion />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 my-4">
            <div className="row">
              <div className="col-12">
                <h3>سوالات دیگر</h3>
              </div>
              <div className="col-12">
                <Accordion />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
