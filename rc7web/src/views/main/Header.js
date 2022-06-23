import React from "react";
import logo from "../src/logo.png";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

function Header() {
    const [yoffset, setOffset] = useState(0);
    const [searchBar, setSearchBar] = useState(false);
    // Ref Dom참조
    const inputFocus = useRef();

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // 마운트 해제됬을때 없애줘야지 메모리 누수 X
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        inputFocus.current.focus();
    }, []);

    const headerpinningstyle = {
        top : yoffset === 0 ? 0 : "-68px",
        position : yoffset === 0 ? "relative" : "fixed",
        backgroundColor : yoffset === 0 ? "transparent" : "rgb(20, 20, 20)",
        left : "0",
        zIndex : "1",
        right : "0",
    };

    return (
        // <div style={headerpinningstyle}>
            <HeaderContainer style={yoffset === 0 ? { backgroundColor: "transparent", transition: "background-color 500ms" } : { backgroundColor: "rgb(20, 20, 20)",transition: "background-color 500ms" }}>
                <a aria-label="넷플릭스" className="logo" href="">
                    <img id="logo" alt="logoImage" style={{height:"27px"}} src={logo} />
                </a>
                <PrimaryNavigation>
                    <li>
                        <NavigationTab className="Active">홈</NavigationTab>
                    </li>
                    <li>
                        <NavigationTab>시리즈</NavigationTab>
                    </li>
                    <li>
                        <NavigationTab>영화</NavigationTab>
                    </li>
                    <li>
                        <NavigationTab>NEW! 요즘 대세 콘텐츠</NavigationTab>
                    </li>
                    <li>
                        <NavigationTab>내가 찜한 콘텐츠</NavigationTab>
                    </li>
                </PrimaryNavigation>

                <SecondaryNavigation>
                    <div style={{marginRight : "10px"}}>
                        {/* <div className="searchBox"> */}
                            <SearchTab onClick={() => setSearchBar(true)} style={searchBar === true ? { display: "none" } : { display: "inline-block" }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clopRule="evenodd"
                                        d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z"
                                        fill="white"></path>
                                </svg>
                            </SearchTab>

                            <SearchInputContainer onBlur={() => setSearchBar(false)} style={searchBar === true ? { display: "flex" } : { display: "none" }}>
                                <svg style={{marginLeft:"10px"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon">
                                    <path fillRule="evenodd" clopRule="evenodd" d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z" fill="currentColor"></path></svg>
                                {/* You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. */}
                                <SearchInput type="text" ref={inputFocus} id="searchInput" name="searchInput" placeholder="제목, 사람, 장르" data-search-input="true" dir="ltr" maxLength="80" value="" className="" />
                                <span role="button" tabIndex="0" className="icon-close"></span>
                            </SearchInputContainer>

                        {/* </div> */}
                    </div>

                    <div style={{marginRight:"10px"}}>
                        <span>
                            <button style={{backgroundColor: "transparent", border: "none", fontSize : "1.5em", lineHeight : "1", marginTop: "0.2em",padding:"2px 6px 3px"
                            ,position : "relative"}}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clopRule="evenodd" d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
                                        fill="white"></path>
                                </svg>
                                <NotificationsFill>7</NotificationsFill>
                            </button>
                        </span>
                    </div>

                    <div style={{marginRight:"10px"}}>
                        <div style={{display:"block", position:"relative", fontSize : "12px", zIndex : "0"}}>
                            <div style={{width:"100%",cursor:"pointer",display:"flex",alignItems:"center"}}>
                                <a href="" role="button"
                                    aria-label="&amp;#xC774;&amp;#xC9C4;&amp;#xD559;&nbsp;- 계정 &amp; 설정">
                                        <span>
                                            <img style={{verticalAlign:"middle",height : "32px", width:"32px", borderRadius:"4px"}}
                                            src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVc8CzKPARNHEu1d2nkiTr1bk5uJcQLbLWko8foPeu9HwFWx7Ewwq_7Kz2tnkQvnDaIgnEJY7eQYmdelii9HOzmKPKGAoTY.png?r=a41"
                                            alt="" />
                                        </span>
                                </a>
                                <Caret></Caret>
                            </div>
                        </div>
                    </div>

                </SecondaryNavigation>
            </HeaderContainer>

            // {/* <SubHeader>
            //     <div>
            //         <SubHeaderWrapper>
            //             <SeriseGalleryHeader>
            //                 시리즈
            //             </SeriseGalleryHeader>
            //         </SubHeaderWrapper>
            //     </div>
            // </SubHeader> 
            // */}
        // </div>
    );
}



const SeriseGalleryHeader=styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
    min-height: 0;
    padding: 0;
    flex-grow: 1;
`

const SubHeaderWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    padding: 0 4%;
    height: 68px;
`;

const SubHeader = styled.div`
    z-index : 1;
    height : 68px;
    position : relative;
`

const NotificationsFill = styled.span`
    font-size: .5em;
    line-height: 1;
    z-index: 2;
    position: absolute;
    top: -0.25em;
    right: -0.1em;
    background-color: #b9090b;
    border: none;
    color: #fff;
    display: inline-block;
    font-weight: 700;
    min-width: 1em;
    padding: 0.3em;
    text-align: center;
    border-radius: 1000px;
`;

const Caret = styled.span`
    margin-left: 10px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 5px 5px 0px;
    border-color: rgb(255, 255, 255) transparent transparent;
    transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1) 0s, -webkit-transform 367ms cubic-bezier(0.21, 0, 0.07, 1) 0s, -moz-transform 367ms cubic-bezier(0.21, 0, 0.07, 1) 0s, -o-transform 367ms cubic-bezier(0.21, 0, 0.07, 1) 0s;
`;

const HeaderContainer = styled.div`
    height: 70px;
    flex-direction: row;
    align-items: center;
    left: 0;
    top: 0;
    display : flex;
    font-size: 1.2rem;
    right: 0;
    position: fixed;
    padding: 0 4%;
    z-index: 1;
    background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
`;

const PrimaryNavigation = styled.ul`
    display: flex;
    align-items: center;
    margin-left: 10px;
`;

const NavigationTab = styled.a`
    margin-left: 18px;
    font-weight: 700;
    color: #e5e5e5;
    &:hover {
        color: #B3B3B3;
    }
`;

const SecondaryNavigation = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: flex-end;
    position: absolute;
    right: 4%;
    top: 0px;
    height: 100%;
`;

const SearchTab = styled.button`
    display: inline-block;
    cursor: pointer;
    border: none;
    background-color: 0 0;
    background: transparent;
`;

const SearchInputContainer = styled.div`
    display: flex;
    width: 273px;
    align-items: center;
    flex-direction: row;
    background: rgba(0,0,0,.75);
    border: solid 1px rgba(255,255,255,.85);
    display: none;
`;

const SearchInput =styled.input`
    color: #000;
    display: inline-block;
    background: 0 0;
    border: none;
    flex-grow: 1;
    box-sizing: border-box;
    padding: 7px 14px 7px 7px;
    font-size: 14px;
    width: 212px;
    outline: 0;
    &:hover{
        backgound-color: #000;
    }
    &:-webkit-autofill-selected{
        background-color: rgb(0, 0, 0) !important;
        background-image: none !important;
        color: rgb(0, 0, 0) !important;
    }
    &:-webkit-autofill {
        -webkit-box-shadow:0 0 0 50px black inset; /* Change the color to your own background color */
        -webkit-text-fill-color: #fff;
    }
    
    &:-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0 50px black inset;/*your box-shadow*/
        -webkit-text-fill-color: #fff;
    } 
    ;

// const Notifications = styled.span`
//     font-size: .5em;
//     line-height: 1;
//     z-index: 2;
//     position: absolute;
//     top: -0.25em;
//     right: -0.1em;
// `;

export default Header;