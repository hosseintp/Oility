import { BsFillPersonFill } from "react-icons/bs";
import { MdFavorite, MdKeyboardArrowDown } from "react-icons/md";
import { BiGitCompare, BiMobileAlt } from "react-icons/bi";
const Header = () => {
  return (
    <header>
      <div className="container d-none d-lg-block">
        <div className="row justify-content-between py-3">
          <div className="col-6">
            <ul className="header-list  text-right">
              <li>
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
                  <span>شماره</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 text-left">
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
      </div>
    </header>
  );
};
export default Header;
