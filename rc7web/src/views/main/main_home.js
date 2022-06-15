// img를 추가하는 방법
import logo from "../src/logo.png"
import mainvedio from "../src/dummyVedio.mp4"

function Main_home() {
    return (
        <div className="appMountPoint">
            <div className="dark-background">
                {/* <!-- Header --> */}
                <header className="pinning-header-container flex">
                    <a aria-label="넷플릭스" className="logo" href="">
                        <img id="logo" alt="logoImage" src={logo} />
                        {/* <img id="logo" alt="logoimagetest" src="http://www.gnnews.co.kr/news/photo/201811/343582_102326_2141.jpg" /> */}
                    </a>
                    <ul className="tabbed-primary-navigation flex">
                        <li className="navigation-tab">
                            <a className="current-active">홈</a>
                        </li>
                        <li className="navigation-tab">
                            <a>시리즈</a>
                        </li>
                        <li className="navigation-tab">
                            <a>영화</a>
                        </li>
                        <li className="navigation-tab">
                            <a>NEW! 요즘 대세 콘텐츠</a>
                        </li>
                        <li className="navigation-tab">
                            <a>내가 찜한 콘텐츠</a>
                        </li>
                    </ul>

                    <div className="secondary-navigation flex">
                        <div className="nav-element">
                            <div className="searchBox">
                                <button className="searchTab"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clopRule="evenodd"
                                        d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z"
                                        fill="white"></path>
                                </svg></button>
                                <div className="searchInput">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon">
                                        <path fillRule="evenodd" clopRule="evenodd" d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z" fill="currentColor"></path></svg>
                                    {/* You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. */}
                                    <input type="text" id="searchInput" name="searchInput" placeholder="제목, 사람, 장르" data-search-input="true" dir="ltr" maxLength="80" value="" className="" />
                                    <span role="button" tabIndex="0" aria-label="입력 내용 삭제" className="icon-close empty"></span>
                                </div>

                            </div>


                        </div>
                        <div className="nav-element">
                            <span className="notifications"><button className="notifications-menu">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clopRule="evenodd"
                                        d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
                                        fill="white"></path>
                                </svg><span className="notification-pill">7</span></button></span>
                        </div>
                        <div className="nav-element">
                            <div className="account-menu-item">
                                <div className="account-dropdown-button">
                                    <a href="" role="button"
                                        aria-label="&amp;#xC774;&amp;#xC9C4;&amp;#xD559;&nbsp;- 계정 &amp; 설정"><span
                                            role="presentation"><img className="profile-icon"
                                                src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVc8CzKPARNHEu1d2nkiTr1bk5uJcQLbLWko8foPeu9HwFWx7Ewwq_7Kz2tnkQvnDaIgnEJY7eQYmdelii9HOzmKPKGAoTY.png?r=a41"
                                                alt="" /></span></a><span className="caret" role="presentation"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


                {/* <!-- 메인뷰 --> */}
                <main className="mainView">
                    <div className="billboard-row" aria-label="특별 소개 콘텐츠">
                        <div className="billboard-motion">
                            <div>
                                <img className="static-image" src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABb7C4UlDhubk3rfm5SJ4NuuPd98JH1afMwZhHseSNmYhA0rp78O7DbFsHcNxlz4-RxrwD0km-uR-nf39H7b703tpeekybKqg_w9X.webp?r=9d1" alt=""/>
                                    {/* <!-- <div className="tr/ailer-vignette vignette-layer"></div> --> */}
                                    {/* <!-- <div className="hero-vignette vignette-layer"></div> --> */}
                                    {/* <!-- <div className="embedded-components button-layer"></div> --> */}
                            </div>
                            <div style={{position: "relative", width: "100%", overflow: "hidden"}}>
                                <video id="vedio" src={mainvedio} autoPlay muted={true}></video>
                                <div className="player-timedtext" style={{display: "none", direction: "ltr"}}>
                                </div>
                            </div> 
                            <div className="embedded-components flex">
                                <button aria-label="다시 재생" className="color-supplementary" type="button">
                                    <div className="play-icon" role="presentation"><svg width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clopRule="evenodd"
                                            d="M13.1747 3.07702C11.01 2.79202 8.81537 3.30372 6.99988 4.51679C5.18439 5.72987 3.8718 7.56158 3.30668 9.67065C2.74155 11.7797 2.96243 14.0223 3.92815 15.9806C4.89388 17.9389 6.53859 19.4794 8.55586 20.3149C10.5731 21.1505 12.8254 21.2242 14.893 20.5224C16.9606 19.8205 18.7025 18.391 19.7942 16.5L18.0622 15.5C17.2131 16.9708 15.8582 18.0826 14.2501 18.6285C12.642 19.1744 10.8902 19.1171 9.32123 18.4672C7.75224 17.8173 6.47302 16.6192 5.7219 15.096C4.97078 13.5729 4.79899 11.8287 5.23853 10.1883C5.67807 8.5479 6.69897 7.12324 8.11102 6.17973C9.52307 5.23623 11.23 4.83824 12.9137 5.05991C14.5974 5.28158 16.1432 6.10778 17.2629 7.3846C18.1815 8.43203 18.762 9.7241 18.9409 11.0921L17.5547 10.168L16.4453 11.8321L19.4453 13.8321C19.7812 14.056 20.2188 14.056 20.5547 13.8321L23.5547 11.8321L22.4453 10.168L20.9605 11.1578C20.784 9.27909 20.0201 7.49532 18.7666 6.06591C17.3269 4.42429 15.3395 3.36202 13.1747 3.07702Z"
                                            fill="currentColor"></path>
                                    </svg></div>
                                </button>
                                <span className="maturity-rating"><span className="maturity-number">15+</span></span>
                            </div>
                        </div>

                       
                        {/* <!-- 자막 및 내용 --> */}
                        <div className="fill-container">
                            <div className="info flex">
                                <div>
                                    <div className="billboard-title">
                                        <img alt="나의 해방일지" className="title-logo"
                                            src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVm-dRGTkKI4oxsIPQExuwkOt3BNrq2rDNu3O3e4W6fBNOjLWAW14sQ11qVz29r_qDz9PqlKWvMZTXNObquvFbsjpEvyg9rcAp4Lot0HU9kB.webp?r=f61"
                                            title="나의 해방일지"/>
                                    </div>

                                    <div>
                                        <div className="supplemental-message flex">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-top-10-badge"
                                                style={{color:"#E50914"}}>
                                                <path fillRule="evenodd" clopRule="evenodd"
                                                    d="M3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2H3ZM17.2299 10.8934C16.6125 10.4971 15.8913 10.2996 15.0673 10.2996C14.2444 10.2996 13.5231 10.4971 12.9056 10.8934C12.2881 11.2905 11.8114 11.8536 11.4762 12.5839C11.1411 13.3149 10.9735 14.1695 10.9735 15.1493C10.9735 16.1383 11.1411 16.9957 11.4762 17.7221C11.8114 18.4478 12.2881 19.0091 12.9056 19.4052C13.5231 19.8014 14.2444 20 15.0673 20C15.8913 20 16.6125 19.8014 17.2299 19.4052C17.8475 19.0091 18.3242 18.4478 18.6594 17.7221C18.9945 16.9957 19.1612 16.1383 19.1612 15.1493C19.1612 14.1695 18.9945 13.3149 18.6594 12.5839C18.3242 11.8536 17.8475 11.2905 17.2299 10.8934ZM9.47922 19.7994V10.3263L4.92658 11.4351V13.2656L7.20991 12.6774V19.7994H9.47922ZM13.7606 12.9513C14.0767 12.4298 14.5117 12.1701 15.0673 12.1701C15.6239 12.1701 16.0589 12.4298 16.3751 12.9513C16.6913 13.4718 16.8489 14.2058 16.8489 15.1493C16.8489 16.0938 16.6913 16.8268 16.3751 17.3473C16.0589 17.8688 15.6239 18.1296 15.0673 18.1296C14.5117 18.1296 14.0767 17.8688 13.7606 17.3473C13.4442 16.8268 13.2868 16.0938 13.2868 15.1493C13.2868 14.2058 13.4442 13.4718 13.7606 12.9513ZM13.0737 4.19939C12.7285 4.06677 12.3485 4 11.9344 4C11.5194 4 11.1405 4.06677 10.7952 4.19939C10.4521 4.33122 10.1518 4.51771 9.89848 4.75622C9.64404 4.99367 9.44963 5.27379 9.312 5.59396C9.17437 5.91504 9.10556 6.26299 9.10556 6.63872C9.10556 7.01446 9.17437 7.36241 9.312 7.68349C9.44963 8.00352 9.64404 8.28286 9.89848 8.52136C10.1518 8.75974 10.4521 8.9453 10.7952 9.07792C11.1405 9.20976 11.5194 9.27745 11.9344 9.27745C12.3485 9.27745 12.7285 9.20976 13.0737 9.07792C13.4168 8.9453 13.7161 8.75974 13.9704 8.52136C14.2239 8.28286 14.4194 8.00352 14.557 7.68349C14.6947 7.36241 14.7635 7.01446 14.7635 6.63872C14.7635 6.26299 14.6947 5.91504 14.557 5.59396C14.4194 5.27379 14.2239 4.99367 13.9704 4.75622C13.7161 4.51771 13.4168 4.33122 13.0737 4.19939ZM8.75526 5.30869V4.12288H4V5.30869H5.63894V9.15457H7.11632V5.30869H8.75526ZM18.9904 4.3469C18.6683 4.19847 18.2893 4.12327 17.8484 4.12327H15.5101V9.15392H16.9855V7.70838H17.8484C18.2893 7.70838 18.6683 7.63318 18.9904 7.48384C19.3117 7.33541 19.5601 7.12483 19.7366 6.85484C19.9132 6.58578 20 6.26931 20 5.90845C20 5.55682 19.9132 5.24587 19.7366 4.97602C19.5601 4.70683 19.3117 4.49624 18.9904 4.3469ZM11.2392 5.39166C11.4387 5.27379 11.6701 5.21545 11.9344 5.21545C12.1988 5.21545 12.4302 5.27379 12.6297 5.39166C12.8292 5.50954 12.9849 5.67653 13.0955 5.89001C13.2072 6.10521 13.2632 6.35386 13.2632 6.63872C13.2632 6.92267 13.2072 7.17224 13.0955 7.38651C12.9849 7.60092 12.8292 7.76791 12.6297 7.88565C12.4302 8.00352 12.1988 8.062 11.9344 8.062C11.6701 8.062 11.4387 8.00352 11.2392 7.88565C11.0397 7.76791 10.8841 7.60092 10.7724 7.38651C10.6617 7.17224 10.6057 6.92267 10.6057 6.63872C10.6057 6.35386 10.6617 6.10521 10.7724 5.89001C10.8841 5.67653 11.0397 5.50954 11.2392 5.39166ZM16.9855 5.27195H17.6149C17.9252 5.27195 18.1515 5.32845 18.2913 5.43895C18.4309 5.54931 18.5017 5.70616 18.5017 5.90845C18.5017 6.11535 18.4309 6.27589 18.2913 6.38902C18.1515 6.50228 17.9252 6.55878 17.6149 6.55878H16.9855V5.27195Z"
                                                    fill="currentColor"></path>
                                            </svg>오늘 TV 프로그램 순위 2위
                                        </div>
                                        {/* <!-- <div className="episode-title-container"></div> --> */}
                                        <div>
                                            <div className="synopsis">
                                                <div className="ptrack-content"
                                                    data-ui-tracking-context="%7B%22evidenceKey%22:%22web_synopsis%7C81568411_INFORMATIVE%7Cko%7C_IFD_%22,%22video_id%22:1,%22track_id%22:254015180,%22request_id%22:%22e1080f98-a137-4347-83c6-c40545297c7a-356514262%22,%22list_id%22:%22GPS_BE81BB61212E515BD7A27BC64989E2-332B50E1F27340-FE32E827A3_p_1654519522173%22,%22row%22:0,%22rank%22:0,%22appView%22:%22synopsisEvidence%22,%22usePresentedEvent%22:true%7D"
                                                    data-tracking-uuid="3f2f9d4b-b3ef-4df8-b6f8-c204402c6bb9">어른이 된 후
                                                    매일매일 되풀이되는 단조로운 일상에 지친 세 남매. 한없이 평범한 삶 속에서 특별한 성취와 자유를 찾아 나선다.</div>
                                            </div>
                                        </div>

                                        <div className="billboard-links">
                                            <a aria-label="재생" className="playLink flex"
                                                href="/watch/81572832?trackId=254015180&amp;tctx=0%2C0%2Ce1080f98-a137-4347-83c6-c40545297c7a-356514262%2CGPS_BE81BB61212E515BD7A27BC64989E2-332B50E1F27340-FE32E827A3_p_1654519522173%2CGPS_BE81BB61212E515BD7A27BC64989E2_p_1654519522173%2C%2C%2C%2C">
                                                <button className="flex play-button-wrapper" tabIndex="-1" type="button">
                                                    <div className="play-icon-wrapper">
                                                        <div className="play-icon" role="presentation">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="play-icon Hawkins-Icon Hawkins-Icon-Standard">
                                                                <path
                                                                    d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                                                                    fill="currentColor"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div style={{width:"1rem"}}></div><span className="play-text">재생</span>
                                                </button></a>

                                            <button className="more-infobt-wrapper flex" type="button">
                                                <div className="play-icon-wrapper">
                                                    <div className="play-icon" role="presentation">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clopRule="evenodd"
                                                                d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div style={{width:"1rem"}}></div>
                                                <span className="more-info-text">상세 정보</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="lolomoRow">
                        <h2 className="rowHeader">
                            <a href="">
                                <div className="row-header-title">평단의 찬사를 받은 시리즈</div>
                            </a>
                        </h2>
                        <div className="rowContainer">
                            <div className="slider">
                                <span className="handle handlePrev active" tabIndex="0" role="button" aria-label="이전 콘텐츠 보기"><b
                                    className="indicator-icon"></b></span>

                                <div className="showPeek">
                                    <div className="flex">
                                        <div className="slider-item">
                                            <a href="" role="link" aria-label="기묘한 이야기">
                                                <div className="boxart-size-16x9">
                                                    <img className="boxart-image-in-padded-container"
                                                        src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQenisw5aCqp5wMDYxQOOEzwKDlAtsh4Kpihxvgnc2YbuwySNe5bdX6fkpN0aeuvaieYMZis_rdJJ0QjGGar3wucebsIbyqj1GakkpgClHa9ktq5yRJEE4aacuboksTUnRgE_vQsXTLGo2uyXxpkc3GzbqN3Xuj6phIHDF5RZLjQ37bqS567Ls8MaVeqp9cPY2iQX7trGeJrXACRwAO5I8D1Oy5ICKtS.jpg?r=b6b"
                                                        alt=""/>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="slider-item">
                                            <a href="" role="link" aria-label="기묘한 이야기">
                                                <div className="boxart-size-16x9">
                                                    <img className="boxart-image-in-padded-container"
                                                        src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf0TQHSEkFWs5o4yxLpxECOd0LLz8jYSVSPfYTGUqeobbo47v3ZtLUlHy0_iB902i_Qkaym_5xqtBmrbSC-SA3IGiFEBqHB60ws.webp?r=e21"
                                                        alt=""/>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="slider-item">
                                            <a href="" role="link" aria-label="기묘한 이야기">
                                                <div className="boxart-size-16x9">
                                                    <img className="boxart-image-in-padded-container"
                                                        src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTWRRUVNdeUq7N7MR1Yy5tRYxzjUGFS9tUV6Y5FdyNTKqWh_psKOWNugvxp3dijnVmi4OSjkoCP0dWFc-id-AXOg1dpiV-B_AAI.webp?r=016"
                                                        alt=""/>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="slider-item">
                                            <a href="" role="link" aria-label="기묘한 이야기">
                                                <div className="boxart-size-16x9">
                                                    <img className="boxart-image-in-padded-container"
                                                        src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeCe-kvmuDkecOXPKIE8a_TqHhxJJVGe3QBNm6lXk_JLgAm_auorhMHjb-btjetwACpRfm7gP0_9NuFQglcSsJ-P5hSFO1eypgk.webp?r=d9d"
                                                        alt=""/>
                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <span className="handleNext active" tabIndex="0" role="button" aria-label="콘텐츠 더 보기"><b
                                    className="indicator-icon"></b></span>
                            </div>
                        </div>
                    </div>
                    <div className="lolomoRow">
                        <h2 className="rowHeader">
                            <a href="">
                                <div className="row-header-title">지금 뜨는 콘텐츠</div>
                            </a>
                        </h2>
                        <div className="rowContainer">
                            <div className="slider">

                                <span className="handlePrev active" tabIndex="0" role="button" aria-label="이전 콘텐츠 보기"><b
                                    className="indicator-icon icon-leftCaret"></b></span>

                                <div className="showPeek">
                                    <div className="flex">
                                        <div className="slider-item">
                                            <a href="" role="link" aria-label="나의 해방일지">
                                                <div className="boxart-size-16x9">
                                                    <img className="boxart-image-in-padded-container"
                                                        src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABanlrB92Q2s-4Be1dSAajm8zPIsHDjpTTgKfVEDZGapkFjCAp62nLKMobyFSD_cjuQCJNM55N8uhW47-79Yn_GUDH2Ak-wzA6lqIcwsjrffdFBWlhpx01hrDDgfQNjJUfdJpPkNDxnYrSVH8RsEG5s7kTTBGnT_g9vAfj1yj0_7kzOYuw07PLtePvvuS_Vnvl89q.webp?r=ebb"
                                                        alt=""/>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="slider-item">
                                            <a href="" role="link" aria-label=" ">
                                                <div className="boxart-size-16x9">
                                                    <img className="boxart-image-in-padded-container"
                                                        src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYgWJ6sza5wAeAXUIQQjnhcB27IvrAodRxKEZLtIg6nKsw8UjQT0Fdr1_mdMvVnIsM3upB8DViSzFW3aaaxz2-q1NXHW2xSjiC7BKMkwq7Zr9e31DXc3RxmYfixuzS356Zn_zmfsbkwi9Vw3CYJu3pXntR-5OcFzCltupe30B4GknJ30sJrg_PpSOc0uZ01T2H2O.webp?r=7ff"
                                                        alt=""/>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="slider-item">
                                            <a href="" role="link" aria-label=" ">
                                                <div className="boxart-size-16x9">
                                                    <img className="boxart-image-in-padded-container"
                                                        src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTEQ1GwQn8S9RcEkeDMYX_fIhoWmZftrdrBe1CujDLAcbeTJJtvKSM3etfA65xJoGVPME5NgagPAeQLLzc7ZR7TktdbDyu4UnJFG4G03R4XdfE8w5yVjsmrdHYjyNqKrcY23ZPNHYJjj3NPFgN4O7fvgOoxbujXeYKXMmGhlgWA4JUsl0UnUquExUT0ZtCmtYNiK.webp?r=8db"
                                                        alt=""/>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="slider-item">
                                            <a href="" role="link" aria-label="마이네임">
                                                <div className="boxart-size-16x9">
                                                    <img className="boxart-image-in-padded-container"
                                                        src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWeiSrZWZgvuaDNJFPiWNtQ0AKzHpCyAIpHrXoDgExcCERBSL4vDL_tF5vJfeE3Xt8pO3sSZgBFdh6K4LvVugR-mwJ3aVQilZGsAhVzwNkbFer6ECkGHJNFsgl2x_wJnRTyJ.jpg?r=33c"
                                                        alt=""/>
                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <span className="handle handleNext active" tabIndex="0" role="button" aria-label="콘텐츠 더 보기"><b
                                    className="indicator-icon icon-rightCaret"></b></span>
                            </div>
                        </div>


                    </div>
                    <div className="lolomoRow">
                        <h2 className="rowHeader">
                            <a href="">
                                <div className="row-header-title">오늘 한국의 TOP 10 시리즈</div>
                            </a>
                        </h2>
                        <div className="rowContainer">
                            <div className="slider">

                                <span className="handlePrev active" tabIndex="0" role="button" aria-label="이전 콘텐츠 보기"><b
                                    className="indicator-icon icon-leftCaret"></b></span>

                                <div className="showPeek">
                                    <div className="sliderContent flex">
                                        <div className="slider-item">
                                            <a href="" role="link" aria-label="나의 해방일지">
                                                <div className="boxart-size-7x10">
                                                    <svg id="rank-1" width="100%" height="100%" viewBox="-20 0 70 154"
                                                        className="svg-icon svg-icon-rank-1 top-10-rank">
                                                        <path stroke="#595959" strokeLinejoin="square" strokeWidth="4"
                                                            d="M35.377 152H72V2.538L2 19.362v30.341l33.377-8.459V152z">
                                                        </path>
                                                    </svg>
                                                    <img className="boxart-image-in-padded-container"
                                                        src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSLDza8YZJDtaNG2BJZsLD1HffFaFg2Vv2HSQtjwNlOrpiVQMCnjeEqs3Jzm0mla47cuip1MhRBAzlp5nMmeTqFVw5Knh_CnDSk_bO5YwbWAQMgjbx1WvFXb-GM_GZP1G31EeGOtHT2dsZLYLqu0dQ.webp?r=40a"
                                                        alt=""/>

                                                </div>
                                            </a>
                                        </div>

                                        <div className="slider-item">
                                            <a href="" role="link" aria-label="나의 해방일지">
                                                <div className="boxart-size-7x10">
                                                    <svg id="rank-2" width="100%" height="100%" viewBox="0 0 80 154"
                                                        className="svg-icon svg-icon-rank-2 top-10-rank">
                                                        <path stroke="#595959" strokeLinejoin="square" strokeWidth="4"
                                                            d="M3.72 152H113v-30.174H50.484l4.355-3.55 29.453-24.012c5.088-4.124 9.748-8.459 13.983-13.004 4.16-4.464 7.481-9.339 9.972-14.629 2.449-5.203 3.678-11.113 3.678-17.749 0-9.428-2.294-17.627-6.875-24.645-4.597-7.042-10.941-12.494-19.07-16.376C77.803 3.957 68.496 2 58.036 2 47.591 2 38.37 4.023 30.347 8.06c-8.015 4.032-14.457 9.578-19.352 16.654-4.492 6.493-7.389 13.803-8.693 21.952h34.055c1.236-3.52 3.398-6.52 6.459-8.97 3.54-2.834 8.277-4.224 14.147-4.224 5.93 0 10.552 1.537 13.76 4.681 3.181 3.12 4.791 7.024 4.791 11.594 0 4.151-1.16 7.934-3.468 11.298-2.192 3.194-5.987 7.124-11.405 11.84L3.72 122.465V152z">
                                                        </path>
                                                    </svg>
                                                    <img className="boxart-image-in-padded-container"
                                                        src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeFWAmEvhDQEfoeHAWwuHk7-xRz9cDKbisxbAAQhr6_8T0YNaoZanrJZ-eMQDLyx6U9psuc329qnqp4TbAdq1lnxbJvda5En5y9xQwo4wMIJolXvrl-tDyyZjrVCPoIZflnw6AWeSNk.webp?r=c64"
                                                        alt=""/>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="slider-item">
                                            <a href="" role="link" aria-label="나의 해방일지">
                                                <div className="boxart-size-7x10">
                                                    <svg id="rank-3" width="100%" height="100%" viewBox="0 0 80 154"
                                                        className="svg-icon svg-icon-rank-3 top-10-rank">
                                                        <path stroke="#595959" strokeLinejoin="square" strokeWidth="4"
                                                            d="M3.809 41.577h33.243c1.3-2.702 3.545-4.947 6.674-6.72 3.554-2.015 7.83-3.01 12.798-3.01 5.555 0 10.14 1.11 13.723 3.376 3.839 2.427 5.782 6.283 5.782 11.315 0 4.553-1.853 8.395-5.473 11.38-3.547 2.926-8.18 4.37-13.821 4.37H41.44v28.366h16.77c5.572 0 10.275 1.227 14.068 3.711 4.02 2.633 6.071 6.581 6.071 11.616 0 5.705-1.943 9.975-5.853 12.562-3.658 2.42-8.292 3.61-13.863 3.61-5.205 0-9.82-.94-13.827-2.836-3.698-1.75-6.32-4.272-7.785-7.529H2.33c2.096 12.089 7.761 21.65 17.028 28.78C29.242 148.175 42.594 152 59.476 152c10.706 0 20.175-1.783 28.42-5.337 8.185-3.528 14.575-8.486 19.208-14.884 4.595-6.346 6.896-13.938 6.896-22.837 0-6.952-1.93-13.494-5.81-19.666-3.815-6.07-9.68-10.367-17.683-12.908l-5.46-1.735 5.353-2.04c6.659-2.538 11.667-6.338 15.083-11.412 3.431-5.096 5.142-10.806 5.142-17.181 0-8.471-2.262-15.778-6.787-21.985-4.574-6.275-10.7-11.17-18.408-14.696C77.683 3.775 69.109 2 59.687 2 44.084 2 31.515 5.816 21.91 13.415c-9 7.119-15.025 16.486-18.101 28.162z">
                                                        </path>
                                                    </svg>
                                                    <img className="boxart-image-in-padded-container"
                                                        src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeNLQhPdRDA6AbyqSpavIYmr29vXcHeCXt1RDqWZAjSeCsMNRyGX9tR8dwEUhjDX4aOaOmnRliW155R3Zk2Pmmt01j-HfC5eZDY-p_GtFo6nBqFFfmgCRSZXHoXEzEN48oc9IOhw2DOQqOyGdoBLX5Qkhsv7_tH_5N2kmy0.jpg?r=7fc"
                                                        alt=""/>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="slider-item">
                                            <a href="" role="link" aria-label="나의 해방일지">
                                                <div className="boxart-size-7x10">
                                                    <svg id="rank-4" width="100%" height="100%" viewBox="0 0 81 154"
                                                        className="svg-icon svg-icon-rank-4 top-10-rank">
                                                        <path stroke="#595959" strokeLinejoin="square" strokeWidth="4"
                                                            d="M72 152h35.333v-30.977H128V92.497h-20.667V2H69.89L2 92.712v28.311h70V152zM36.202 92.188l35.93-47.998v47.998h-35.93z">
                                                        </path>
                                                    </svg>
                                                    <img className="boxart-image-in-padded-container"
                                                        src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABW0yu_A_A_I2_UZseR9c2jJE5v2LqETLLrGoeJ_KsEs29tZZPKotxObl_Atyoyj121l1lZ2iKlLYfrZ6-ciLXLcJ00jUnQhPxey08iH_pEWX39eWKYk1CRiW8UlmtdEJkHfcRDL5KmK-Y-SCdvoIiQ.webp?r=405"
                                                        alt=""/>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <span className="handle handleNext active" tabIndex="0" role="button" aria-label="콘텐츠 더 보기"><b
                                    className="indicator-icon icon-rightCaret"></b></span>
                            </div>
                        </div>
                    </div>

                </main>

                <footer role="contentinfo" className="member-footer">
            <div className="social-links">
                <a className="social-link" href="https://www.facebook.com/NetflixKR" target="_blank"
                    aria-label="facebook">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-facebook-logo">
                        <path fillRule="evenodd" clopRule="evenodd"
                            d="M13.9868 13.1621V21.9841H10.0418V13.1621H6.8418V9.51207H10.0468V6.73207C10.0468 3.56707 11.9318 1.82007 14.8148 1.82007C15.7616 1.83321 16.7061 1.91577 17.6408 2.06707V5.17307H16.0448C15.4952 5.10007 14.9422 5.28088 14.5419 5.66447C14.1415 6.04807 13.9373 6.59284 13.9868 7.14507V9.51207H17.4868L16.9278 13.1621H13.9868Z"
                            fill="currentColor"></path>
                    </svg></a>
                <a className="social-link" href="https://www.instagram.com/netflixkr/" target="_blank"
                    aria-label="instagram"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-instagram-logo">
                        <path fillRule="evenodd" clopRule="evenodd"
                            d="M21.9302 16.1229C21.9586 17.6764 21.3791 19.1796 20.3152 20.3119C19.1853 21.3804 17.68 21.9606 16.1252 21.9269C14.4742 22.0209 9.52524 22.0209 7.87524 21.9269C6.32151 21.955 4.81816 21.3756 3.68524 20.3119C2.61778 19.1818 2.03769 17.6772 2.07024 16.1229C1.97724 14.4719 1.97724 9.52294 2.07024 7.87294C2.03979 6.3188 2.61957 4.8146 3.68524 3.68294C4.81792 2.61946 6.32187 2.04157 7.87524 2.07294C9.52624 1.97894 14.4752 1.97894 16.1252 2.07294C17.6791 2.04388 19.1828 2.62347 20.3152 3.68794C21.3827 4.81807 21.9628 6.32272 21.9302 7.87694C22.0232 9.52794 22.0232 14.4719 21.9302 16.1229ZM20.2002 11.9999C20.2002 10.5449 20.3202 7.42194 19.8002 6.10594C19.4575 5.23672 18.7695 4.54869 17.9002 4.20594C16.5882 3.68894 13.4612 3.80594 12.0062 3.80594C10.5512 3.80594 7.42824 3.68494 6.11224 4.20594C5.24322 4.54899 4.55529 5.23693 4.21224 6.10594C3.69524 7.41794 3.81224 10.5449 3.81224 11.9999C3.81224 13.4549 3.69124 16.5779 4.21224 17.8939C4.5556 18.7628 5.24343 19.4506 6.11224 19.7939C7.42424 20.3109 10.5522 20.1939 12.0062 20.1939C13.4602 20.1939 16.5842 20.3149 17.9002 19.7939C18.7693 19.4509 19.4572 18.763 19.8002 17.8939C20.3192 16.5819 20.2002 13.4549 20.2002 11.9999ZM17.1302 11.9999C17.1302 14.8311 14.8354 17.1264 12.0042 17.1269C9.17307 17.1275 6.87734 14.8331 6.87624 12.0019C6.87513 9.17077 9.16907 6.8746 12.0002 6.87293C13.361 6.87028 14.6668 7.40953 15.6292 8.37155C16.5916 9.33356 17.1314 10.6392 17.1292 11.9999H17.1302ZM15.3362 11.9999C15.3362 10.1596 13.8446 8.66749 12.0042 8.66694C10.1639 8.66639 8.67134 10.1576 8.67024 11.9979C8.66914 13.8383 10.1599 15.3313 12.0002 15.3329C13.8409 15.3318 15.333 13.8406 15.3352 11.9999H15.3362ZM17.3362 7.85895C16.6735 7.85895 16.1362 7.32168 16.1362 6.65894C16.1362 5.9962 16.6735 5.45894 17.3362 5.45894C17.999 5.45894 18.5363 5.9962 18.5363 6.65894C18.5381 6.97725 18.4127 7.28311 18.1879 7.50847C17.9631 7.73383 17.6576 7.86001 17.3392 7.85895H17.3362Z"
                            fill="currentColor"></path>
                    </svg></a>
                <a className="social-link" href="https://twitter.com/netflixkr" target="_blank"
                    aria-label="twitter"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-twitter-logo">
                        <path fillRule="evenodd" clopRule="evenodd"
                            d="M20.7679 8.20699C20.7912 11.5932 19.4564 14.8475 17.0619 17.242C14.6674 19.6365 11.4131 20.9713 8.02688 20.948C5.58911 20.9544 3.2014 20.2564 1.15088 18.938C1.50985 18.9771 1.87079 18.9955 2.23188 18.993C4.24756 18.9984 6.20627 18.3245 7.79188 17.08C5.87426 17.0472 4.18959 15.799 3.59988 13.974C3.8797 14.0187 4.16251 14.0421 4.44588 14.044C4.84342 14.0428 5.23922 13.9914 5.62388 13.891C3.53625 13.4666 2.03658 11.6303 2.03788 9.49999V9.44099C2.65823 9.78763 3.35178 9.98261 4.06188 10.01C2.08967 8.6933 1.48213 6.06953 2.67488 4.01999C4.9496 6.82015 8.30584 8.52335 11.9089 8.70599C11.8373 8.36899 11.8008 8.0255 11.7999 7.68099C11.8012 5.84293 12.9247 4.19202 14.634 3.51624C16.3433 2.84045 18.292 3.27679 19.5499 4.61699C20.552 4.4234 21.513 4.0573 22.3899 3.53499C22.0555 4.56892 21.3554 5.44537 20.4209 5.99999C21.3101 5.89964 22.1793 5.66707 22.9999 5.30999C22.3865 6.20227 21.6272 6.98488 20.7539 7.62499C20.7679 7.81999 20.7679 8.01399 20.7679 8.20699Z"
                            fill="currentColor"></path>
                    </svg></a>
                <a className="social-link"
                    href="https://www.youtube.com/channel/UCiEEF51uRAeZeCo8CJFhGWw/featured" target="_blank"
                    aria-label="youtube"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-youtube-logo">
                        <path fillRule="evenodd" clopRule="evenodd"
                            d="M22.5401 6.67C22.2881 5.71873 21.5491 4.97331 20.6001 4.713C18.8801 4.25 12.0001 4.25 12.0001 4.25C12.0001 4.25 5.12009 4.25 3.40009 4.713C2.45106 4.97331 1.71211 5.71873 1.46009 6.67C1.14277 8.42869 0.988785 10.213 1.00009 12C0.988785 13.787 1.14277 15.5713 1.46009 17.33C1.71301 18.2825 2.45414 19.0282 3.40509 19.287C5.12009 19.75 12.0051 19.75 12.0051 19.75C12.0051 19.75 18.8851 19.75 20.6001 19.287C21.5491 19.0267 22.2881 18.2813 22.5401 17.33C22.8574 15.5713 23.0114 13.787 23.0001 12C23.0114 10.213 22.8574 8.42869 22.5401 6.67ZM9.75009 15.27V8.729L15.5001 12L9.75009 15.27Z"
                            fill="currentColor"></path>
                    </svg></a></div>
            <ul className="member-footer-links">
                <li className="member-footer-link-wrapper">
                    <a className="member-footer-link" href="/browse/subtitles"><span
                            className="member-footer-link-content">자막 및 음성</span></a></li>
                <li className="member-footer-link-wrapper">
                    <a className="member-footer-link"
                        href="/browse/audio-description"><span className="member-footer-link-content">화면 해설</span></a>
                </li>
                <li className="member-footer-link-wrapper">
                    <a className="member-footer-link"
                        href="https://help.netflix.com/"><span className="member-footer-link-content">고객 센터</span></a>
                </li>
                <li className="member-footer-link-wrapper">
                        <a className="member-footer-link" href="/redeem"><span
                            className="member-footer-link-content">기프트카드</span></a></li>
                <li className="member-footer-link-wrapper"><a className="member-footer-link"
                        href="https://media.netflix.com/"><span className="member-footer-link-content">미디어 센터</span></a>
                </li>
                <li className="member-footer-link-wrapper"><a className="member-footer-link" href="http://ir.netflix.com/"><span
                            className="member-footer-link-content">투자 정보(IR)</span></a>
                </li>
                <li className="member-footer-link-wrapper"><a className="member-footer-link"
                        href="https://jobs.netflix.com/"><span className="member-footer-link-content">입사 정보</span></a>
                </li>
                <li className="member-footer-link-wrapper"><a className="member-footer-link"
                        href="https://help.netflix.com/legal/termsofuse"><span className="member-footer-link-content">이용
                            약관</span></a></li>
                <li className="member-footer-link-wrapper"><a className="member-footer-link"
                        href="https://help.netflix.com/legal/privacy"><span
                            className="member-footer-link-content">개인정보</span></a></li>
                <li className="member-footer-link-wrapper"><a className="member-footer-link"
                        href="https://help.netflix.com/legal/notices"><span className="member-footer-link-content">법적
                            고지</span></a></li>
                <li className="member-footer-link-wrapper"><a className="member-footer-link" href="/Cookies"><span
                            className="member-footer-link-content">쿠키 설정</span></a></li>
                <li className="member-footer-link-wrapper"><a className="member-footer-link"
                        href="https://help.netflix.com/legal/corpinfo"><span className="member-footer-link-content">회사
                            정보</span></a></li>
                <li className="member-footer-link-wrapper"><a className="member-footer-link"
                        href="https://help.netflix.com/contactus"><span
                            className="member-footer-link-content">문의하기</span></a></li>
            </ul>
            <div>
                <button className="service-code">서비스 코드</button></div>
            <div className="member-footer-copyright">
                <div className="copy-text">
                    <div className="copy-text-block">넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587
                    </div>
                    <div className="copy-text-block">대표: 레지널드 숀 톰프슨</div>
                    <div className="copy-text-block">이메일 주소: korea@netflix.com</div>
                    <div className="copy-text-block">주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</div>
                    <div className="copy-text-block">사업자등록번호: 165-87-00119</div>
                    <div className="copy-text-block">클라우드 호스팅: Amazon Web Services Inc.</div>
                    <div id="" className="copy-text-block" data-uia=""><a
                            href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1658700119">공정거래위원회 웹사이트</a></div>
                </div>
                {/* <span className="member-footer-copyright-instance">{29b99209-a4d4-467d-b820-4ef92c1f8853}</span> */}
            </div>
            </footer>

            </div>
        </div>
    );
}

export default Main_home;