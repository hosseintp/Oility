import { BsFillPersonFill } from "react-icons/bs";
import {
  MdFavorite,
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { BiGitCompare, BiMobileAlt, BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import Logo from "../public/logo.png";
import Router from "next/router";
import Link from "next/link";

const Header = () => {
  const location = () => {};
  return (
    <header>
      <div className="container-fluid">
        <div className="container d-none d-lg-block">
          <div className="row justify-content-between my-3">
            <div className="col-6 border-bottom">
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
                    <Link href="/other/Login">
                      <a>
                        <span>
                          <BsFillPersonFill />
                        </span>
                        <span>ورود</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 border-bottom">
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
      </div>
      <nav>
        <div className="container d-none d-lg-block">
          <div className="row py-2">
            <div className="col-10">
              <div className="d-flex jstify-content-center justify-md-content-end">
                <ul className="nav">
                  <li>
                    <Link href="/">
                      <a>
                        <span>خانه</span>
                        <span>
                          <MdKeyboardArrowDown />
                        </span>
                      </a>
                    </Link>
                    <div className="drop-menu">
                      <ul>
                        <li>
                          <Link href="/">
                            <a>foashion Home 1</a>
                          </Link>
                        </li>
                        <li>
                          <a href="#">foashion Home 2</a>
                        </li>
                        <li>
                          <a href="#">foashion Home 3</a>
                        </li>
                        <li>
                          <a href="#">foashion Home 4</a>
                        </li>
                        <li>
                          <a href="#">foashion Home 5</a>
                        </li>
                        <li>
                          <a href="#">foashion Home 6</a>
                        </li>
                      </ul>
                    </div>
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
                    <div className="drop-menu">
                      <ul>
                        <li>
                          <Link href="/other/About-us">
                            <a>در مورد ما</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/other/Contact-us">
                            <a>ارتباط با ما</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/other/Faq">
                            <a>سوالات متداول</a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/other/Not-found">
                            <a>error 404</a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/other/Sign-up">
                            <a>ثبت نام</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/other/Login">
                            <a>ورود</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/other/Conditions">
                            <a>شرایط وظوابط</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <span>وبلاگ</span>
                      <span>
                        <MdKeyboardArrowDown />
                      </span>
                    </a>
                    <div className="drop-menu">
                      <ul>
                        <li className="position-relative layer-2">
                          <a href="#">
                            Grids
                            <span className="position-absolute arr-left">
                              <MdKeyboardArrowLeft />
                            </span>
                          </a>
                          <div className="drop-menu-2">
                            <ul>
                              <li>
                                <a href="#">three columns</a>
                              </li>
                              <li>
                                <a href="#">Four columns</a>
                              </li>
                              <li>
                                <a href="#">left sidebar</a>
                              </li>
                              <li>
                                <a href="#">Right sidebar</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="position-relative">
                          <a href="#">
                            Lists
                            <span className="position-absolute arr-left">
                              <MdKeyboardArrowLeft />
                            </span>
                          </a>
                          <div className="drop-menu-2">
                            <ul>
                              <li>
                                <a href="#">left sidebar</a>
                              </li>
                              <li>
                                <a href="#">Right sidebar</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="position-relative">
                          <a href="#">
                            Single Post
                            <span className="position-absolute arr-left">
                              <MdKeyboardArrowLeft />
                            </span>
                          </a>
                          <div className="drop-menu-2">
                            <ul>
                              <li>
                                <a href="#">three columns</a>
                              </li>
                              <li>
                                <a href="#">Four columns</a>
                              </li>
                              <li>
                                <a href="#">left sidebar</a>
                              </li>
                              <li>
                                <a href="#">Right sidebar</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link href="other/Contact-us">
                      <a>
                        <span>ارتباط با ما</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-center">
                        <BiSearch />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-center">
                        <FiShoppingCart className="flip" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className="d-flex text-center">
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
