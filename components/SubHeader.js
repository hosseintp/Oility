import Link from "next/link";
import styles from "../styles/Subheader.module.css";
const SubHeader = ({ title }) => {
  return (
    <div className={`container-fluid py-5 ${styles.sub_bg}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h2>{title}</h2>
          </div>
          <div className="col-12 col-md-6 text-md-start">
            <Link href="/">
              <a className={styles.link}>خانه</a>
            </Link>
            <span className={styles.rotate}>&#62;</span>
            <span className="p-2">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubHeader;
