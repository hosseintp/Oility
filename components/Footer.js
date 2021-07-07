import Image from "next/image";
import { RiMapPin2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BiMobileAlt } from "react-icons/bi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaHeart,
} from "react-icons/fa";
import Footerlogo from "../public/logo-transparent.png";
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid dark-bg py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <ul className="footer-ul">
                <li className="footer-logo">
                  <Image src={Footerlogo} />
                </li>
                <li>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                  </p>
                </li>
                <li>
                  <ul className="media">
                    <li>
                      <a href="#" className="text-white">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        <FaYoutube />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        <FaTelegram />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <h5 className="footer-title">لینک های مفید</h5>
              <ul className="footer-ul">
                <li>
                  <a href="#">درباره ما</a>
                </li>
                <li>
                  <a href="#">سوالات متداول</a>
                </li>
                <li>
                  <a href="#">موقعیت</a>
                </li>
                <li>
                  <a href="#">ارتباط</a>
                </li>
                <li>
                  <a href="#">ارتباط</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <h5 className="footer-title">دسته بندی</h5>
              <ul className="footer-ul">
                <li>
                  <a href="#">مردان</a>
                </li>
                <li>
                  <a href="#">زنان</a>
                </li>
                <li>
                  <a href="#">کودکان</a>
                </li>
                <li>
                  <a href="#">بهترین فروش</a>
                </li>
                <li>
                  <a href="#">مد روز</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <h5 className="footer-title">حساب من</h5>
              <ul className="footer-ul">
                <li>
                  <a href="#">حساب من</a>
                </li>
                <li>
                  <a href="#">پاک کردن حساب</a>
                </li>
                <li>
                  <a href="#">مرجوعی ها</a>
                </li>
                <li>
                  <a href="#">تاریخچه سفارش ها</a>
                </li>
                <li>
                  <a href="#">ردیابی سفارش ها</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <h5 className="footer-title">اطلاعات تماس</h5>
              <ul className="footer-ul">
                <li>
                  <span>
                    <RiMapPin2Fill />
                  </span>
                  <a href="#">ایران تهران میدان آزادی پلاک یک</a>
                </li>
                <li>
                  <span>
                    <MdEmail />
                  </span>
                  <a href="#">HosseinTalebpour.tp@gmail.com</a>
                </li>
                <li>
                  <span>
                    <BiMobileAlt />
                  </span>
                  <a href="#">09210800359</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid dark-bg border-gray">
        <div className="row py-3">
          <div className="col-12 text-center">
            <p>
              copyright &copy; 2021 with
              <span className="px-1">
                <FaHeart />
              </span>
              by HosseinTp
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
