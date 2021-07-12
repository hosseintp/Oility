import classes from "../styles/Tabs.module.css";
import { useState } from "react";

const Tabs = () => {
  const [toggle, setToggle] = useState(0);
  const tabs = ["پیشنهاد ویژه", "خاص", "بهترین فروش", "جدید"];
  const toggleTab = (e, index) => {
    e.preventDefault();
    setToggle(index);
  };
  return (
    <div className="container mb-3">
      <div className="row text-center">
        <div className="col-12 mb-3">
          <h2 className="text-bold">محصولات فوق العاده</h2>
        </div>
        <div className={`col-12 ${classes.tablist}`}>
          {tabs.map((tab, index) => {
            return (
              <div key={index + 1}>
                <a
                  href="#"
                  onClick={(e) => toggleTab(e, index)}
                  className={toggle === index ? classes.activeTab : classes.tab}
                >
                  {tab}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Tabs;
