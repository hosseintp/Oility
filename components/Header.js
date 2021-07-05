import { BsFillPersonFill } from "react-icons/bs";
import { MdFavorite, MdKeyboardArrowDown } from "react-icons/md";
import { BiGitCompare, BiMobileAlt, BiSearch } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Logo from "../public/logo.png";
const Header = () => {
  return (
    <header>
      <div className="container d-none d-lg-block my-3">
        <div className="row justify-content-between">
          <div className="col-6">
            <div className="d-flex justify-content-start justify-md-content-end">
              <ul className="header-list">
                <li>
                  <a href="#">
                    <span>
                      <BiGitCompare />
                    </span>
                    <span>مقایسه ها</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <MdFavorite />
                    </span>
                    <span>علاقه مندی ها</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <BsFillPersonFill />
                    </span>
                    <span>ورود</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-end justify-md-content-end">
              <ul className="header-list">
                <li className="d-flex jusify-content-end">
                  <a href="#">
                    <span>
                      <MdKeyboardArrowDown />
                    </span>
                    <span>زبان</span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <span>
                      <BiMobileAlt />
                    </span>
                    <span>0921-0800359</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <nav>
        <div className="container">
          <div className="row py-2">
            <div className="col-10">
              <div className="d-flex jstify-content-center justify-md-content-end">
                <ul className="nav">
                  <li>
                    <a href="#">
                      <span>خانه</span>
                      <span>
                        <MdKeyboardArrowDown />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>خرید</span>
                      <span>
                        <MdKeyboardArrowDown />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>محصولات</span>
                      <span>
                        <MdKeyboardArrowDown />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>صفحات</span>
                      <span>
                        <MdKeyboardArrowDown />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>وبلاگ</span>
                      <span>
                        <MdKeyboardArrowDown />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>ارتباط با ما</span>
                      <span>
                        <MdKeyboardArrowDown />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <BiSearch />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <FaShoppingCart />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className="d-flex justify-content-end justify-md-content-end">
                <Image src={Logo} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
