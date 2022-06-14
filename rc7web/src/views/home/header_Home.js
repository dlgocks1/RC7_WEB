import './home.css';

function Header_Home() {
    return (
        <div className="header-wrapper">
            <div className="our-story-container flex">
                <a aria-label="넷플릭스" className="logo" href="">
                    <img id="logo" src="http://www.gnnews.co.kr/news/photo/201811/343582_102326_2141.jpg" />
                </a>

                <div className="lang-selection-container ">
                    <div className="select-arrow">
                        <select className="ui-select " tabindex="0" placeholder="lang-switcher">
                            <option selected="" lang="ko" value="/kr/" data-language="ko" data-country="KR">한국어
                            </option>
                            <option lang="en" value="/kr-en/" data-language="en" data-country="KR">English
                            </option>
                        </select>
                    </div>
                </div>

                <a href="" className="authLinks redButton" data-uia="header-login-link">로그인</a>
            </div>
        </div>
    );
}

export default Header_Home;