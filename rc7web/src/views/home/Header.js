import styles from  "./HomeStyles.module.css"
import classNames from 'classnames/bind'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import loginReducer, { loginAction } from "reducers/loginReducer";

const cx = classNames.bind(styles);

function Header() {

    const navigate = useNavigate();

    const goprofile = () =>{
        navigate("/profile");
        // history.push("/");
    }

    const dispatch = useDispatch();    
    
    const ChangeRedux = (testname) =>{
        dispatch(
            loginAction({
                name : testname,
                email :"평창보리@naver.com"
            })
        );
    }

    return (
        <div className={cx("header-wrapper")}>
            <div className={cx("our-story-container","flex")}>
                <a aria-label="넷플릭스" className={cx("logo")} href="">
                    <img id={styles.logo} src="http://www.gnnews.co.kr/news/photo/201811/343582_102326_2141.jpg" />
                </a>
                <div className={cx("lang-selection-container")}>
                    <div className={cx("select-arrow")}>
                        <select className={cx("ui-select")} tabindex="0" placeholder="lang-switcher">
                            <option selected="" lang="ko" value="/kr/" data-language="ko" data-country="KR">한국어
                            </option>
                            <option lang="en" value="/kr-en/" data-language="en" data-country="KR">English
                            </option>
                        </select>
                    </div>
                </div>
                <Link to="/login" className={cx("authLinks", "redButton")} >로그인</Link>
            </div>

        </div>
    );
}

export default Header;