import styles from "./HomeStyles.module.css"
import styled from "styled-components";
import classNames from 'classnames/bind'
import FooterCopyright from "./FooterCopyright";
const cx = classNames.bind(styles);

function Footer({ type }) {
    function FooterCustom() {
        if (type === "login") {
            return <LoginFooter>
                <p style={{ fontSize:"16px", padding:"30px 0",margin: "0", color: "#757575" }}>질문이 있으신가요? 문의 전화: &nbsp;
                    <a className={cx("footer-top-a")} href="tel:080-001-9587">080-001-9587</a>
                </p>
                <Memberfooterlinks>
                    <li><a href="/">
                        <span>자주 묻는 질문</span></a>
                    </li>
                    <li><a href="/">
                        <span>고객 센터</span></a>
                    </li>
                    <li><a href="/">
                        <span>이용 약관</span></a>
                    </li>
                    <li><a href="/">
                        <span>개인정보</span></a>
                    </li>
                    <li><a href="/">
                        <span>쿠키 설정</span></a>
                    </li>
                    <li><a href="/">
                        <span>회사 정보</span></a>
                    </li>
                </Memberfooterlinks>
                <FooterCopyright />
            </LoginFooter>;
        } else {
            return 
            <div role="contentinfo" className={cx("member-footer")}>
                <p style={{ margin: "16px 0" }} className={cx("footer-top")}>질문이 있으신가요? 문의 전화: &nbsp;<a className={cx("footer-top-a")} href="tel:080-001-9587">080-001-9587</a></p>
                <ul className={cx("member-footer-links")}>
                    <li className={cx("member-footer-link-wrapper")}>
                        <a className={cx("member-footer-link")} href="/browse/subtitles"><span className={cx("member-footer-link-content")}>자막 및 음성</span></a></li>
                    <li className={cx("member-footer-link-wrapper")}><a className={cx("member-footer-link")} href="/browse/audio-description"><span className={cx("member-footer-link-content")}>화면 해설</span></a>
                    </li>
                    <li className={cx("member-footer-link-wrapper")}><a className={cx("member-footer-link")} href="https://help.netflix.com/"><span className={cx("member-footer-link-content")}>고객 센터</span></a>
                    </li>
                    <li className={cx("member-footer-link-wrapper")}><a className={cx("member-footer-link")} href="/redeem"><span className={cx("member-footer-link-content")}>기프트카드</span></a></li>
                    <li className={cx("member-footer-link-wrapper")}><a className={cx("member-footer-link")} href="https://media.netflix.com/"><span className={cx("member-footer-link-content")}>미디어 센터</span></a>
                    </li>
                    <li className={cx("member-footer-link-wrapper")}><a className={cx("member-footer-link")} href="http://ir.netflix.com/"><span className={cx("member-footer-link-content")}>투자 정보(IR)</span></a>
                    </li>
                    <li className={cx("member-footer-link-wrapper")}><a className={cx("member-footer-link")} href="https://jobs.netflix.com/"><span className={cx("member-footer-link-content")}>입사 정보</span></a>
                    </li>
                    <li className={cx("member-footer-link-wrapper")}><a className={cx("member-footer-link")} href="https://help.netflix.com/legal/termsofuse"><span className={cx("member-footer-link-content")}>이용
                        약관</span></a></li>
                    <li className={cx("member-footer-link-wrapper")}><a className={cx("member-footer-link")} href="https://help.netflix.com/legal/privacy"><span className={cx("member-footer-link-content")}>개인정보</span></a></li>
                    <li className={cx("member-footer-link-wrapper")}><a className={cx("member-footer-link")} href="https://help.netflix.com/legal/notices"><span className={cx("member-footer-link-content")}>법적
                        고지</span></a></li>
                    <li className={cx("member-footer-link-wrapper")}><a className={cx("member-footer-link")} href="/Cookies"><span className={cx("member-footer-link-content")}>쿠키 설정</span></a></li>
                    <li className={cx("member-footer-link-wrapper")}><a className={cx("member-footer-link")} href="https://help.netflix.com/legal/corpinfo"><span className={cx("member-footer-link-content")}>회사
                        정보</span></a></li>
                    <li className={cx("member-footer-link-wrapper")}><a className={cx("member-footer-link")} href="https://help.netflix.com/contactus"><span className={cx("member-footer-link-content")}>문의하기</span></a></li>
                </ul>
                <FooterCopyright />
            </div>;
        }
    }

    return (
        <FooterCustom />
    );
}

const Memberfooterlinks = styled.ul`
    font-size: 13px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 0 0 14px 0;
    padding: 0;
    & li {
        list-style-type: none;
        flex: 0 0 50%;
        margin-bottom: 16px;
        flex-basis: 25%;
        box-sizing: border-box;
    }

    & li a{
        color: grey;
        text-decoration: none;
    }
    & li a:hover{
        text-decoration: underline;
    }
`;

const LoginFooter = styled.div`
    /* margin: 0; */
    /* width: 100%; */
    /* bottom: 0px; */
    padding: 0 4%;
    color: #757575;
    background: rgba(0,0,0,0.7);
`;

export default Footer;