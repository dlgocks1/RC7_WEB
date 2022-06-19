import styles from  "./HomeStyles.module.css"
import classNames from 'classnames/bind'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

function Header() {

    const navigate = useNavigate();
    const goprofile = () =>{
        navigate("/profile");
        // history.push("/");
    }

    const [movie, setMovie] = useState([]);
    const [password, setPassword] = useState('');
    const [valid, serValid] = useState('');

    // userEffect는 컴포넌트의 리턴된 후, 렌더링 된후에 실행된다.
    useEffect(()=>{
        // 화면이 렌더링 됬을 때 
        console.log("화면 렌더링");
        // json으로 데이터를 만들고 렌더링하는 연습 할개너무많은데
        setTimeout(()=>{
            // 화면을 나갈때는 비동기 함수를 모두 끝내줘야한다.
            // axios도 모두 해제
            const movieAsync = setMovie(()=>[
                '어벤져스',
                '오징어게임',
                '킹덤',
                'DP'
            ])
            // return ()=>{
            //     console.log("화면 사라짐");
            //     // 화면이 사라질 때

            //     // 화면을 나갈때는 비동기 함수를 모두 끝내줘야한다.
            //     clearTimeout();
            // }
        },2000)

        // if(password.leng)

    // dependency 배열 의존성 배열 -> state가 변화했을 때
    // 변화를 감지하고싶은 state를 넣어주면 된다.
    },[password]);


    

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
                <a href="" className={cx("authLinks", "redButton")} data-uia="header-login-link">로그인</a>
            </div>
            {/* 링크태그와 A태그의 차이점 : 새로고침을 해주지 않는다. */}
            {/* state초기화 되버림 */}
            <Link style={{zIndex:"5"}} to="/profile">프로필로 이동</Link>
            {
                movie.length > 0 ? movie.map((item,index) =>{
                    return(<p>{item}</p>);
                }) : <p>로딩중</p>
            }
            <input placeholder="비밀번호 입력해주세요." onChange={(e)=>{setPassword(e.target.value)}}/>
            <p style={{color:"red"}}>5글자 이상</p>
        </div>
    );
}

export default Header;