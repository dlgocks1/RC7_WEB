import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./HomeStyles.module.css";

const cx = classNames.bind(styles);

function Header() {

  const logoName = "넷플릭스";

  return (
    <div className={cx("header-wrapper")}>
      <div className={cx("our-story-container", "flex")}>
        <Link aria-label={logoName} className={cx("logo")} to="/">
          <img
            id={styles.logo}
            src="http://www.gnnews.co.kr/news/photo/201811/343582_102326_2141.jpg"
            alt = "Logo"
          />
        </Link>
        <div className={cx("lang-selection-container")}>
          <div className={cx("select-arrow")}>
            <select
              className={cx("ui-select")}
              tabIndex="0"
              placeholder="lang-switcher"
            >
              <option
                selected=""
                lang="ko"
                value="/kr/"
                data-language="ko"
                data-country="KR"
              >
                한국어
              </option>
              <option
                lang="en"
                value="/kr-en/"
                data-language="en"
                data-country="KR"
              >
                English
              </option>
            </select>
          </div>
        </div>
        <Link to="/login" className={cx("authLinks", "redButton")}>
          로그인
        </Link>
      </div>
    </div>
  );
}

export default Header;
