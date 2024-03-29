/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState, useRef, useDeferredValue } from "react";
import logo from "assets/img/logo.png";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SeriesSubHaeder from "components/common/seriesSubHeader";
import HeaderProfileBox from "components/common/headerProfileBox";

function Header({ path }) {

  const [yoffsetState, setOffset] = useState(0);
  const yoffset = useDeferredValue(yoffsetState);
  const [searchBar, setSearchBar] = useState(false);

  const inputFocus = useRef();
  const { isModal } = useSelector((state) => state.episodeModalReducer);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // 마운트 해제됬을때 없애줘야지 메모리 누수 X
    // 이벤트 리스너 중첩을 방지하는 듯?
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <HeaderContainer
        mode={path}
        style={
            yoffset === 0
            ? {
                backgroundColor: "transparent",
                transition: "background-color 500ms",
              }
            : {
                backgroundColor: "rgb(20, 20, 20)",
                transition: "background-color 500ms",
              }
        }
      >
        <Link aria-label="넷플릭스" to="/main">
          <img
            id="logo"
            alt="logoImage"
            style={{ height: "27px" }}
            src={logo}
          />
        </Link>
        <PrimaryNavigation>
          <li>
            <Link to="/main">
              {path === "/main" ? <SelectNow> 홈 </SelectNow> : "홈"}
            </Link>
          </li>
          <li>
            <Link to="/series">
                {path === "/series" ? <SelectNow> 시리즈 </SelectNow> : "시리즈"}
            </Link>
          </li>
          <li>
            <Link to="/movie">
                {path === "/movie" ? <SelectNow> 영화 </SelectNow> : "영화"}
            </Link>
          </li>
          <li>
            <Link to="/main">NEW! 요즘 대세 콘텐츠</Link>
          </li>
          <li>
            <Link to="/favorites">
              {path === "/favorites" ? (
                <SelectNow> 내가 찜한 콘텐츠 </SelectNow>
              ) : (
                "내가 찜한 콘텐츠"
              )}
            </Link>
          </li>
        </PrimaryNavigation>

        <SecondaryNavigation>
          <div style={{ marginRight: "10px" }}>
            {/* <div className="searchBox"> */}
            <SearchTab
              onClick={() => setSearchBar(true)}
              style={
                searchBar === true
                  ? { display: "none" }
                  : { display: "inline-block" }
              }
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z"
                  fill="white"
                />
              </svg>
            </SearchTab>

            <SearchInputContainer
              onBlur={() => setSearchBar(false)}
              style={
                searchBar === true ? { display: "flex" } : { display: "none" }
              }
            >
              <svg
                style={{ marginLeft: "10px" }}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="search-icon"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z"
                  fill="currentColor"
                />
              </svg>
              {/* You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. */}
              <SearchInput
                type="text"
                ref={inputFocus}
                id="searchInput"
                name="searchInput"
                placeholder="제목, 사람, 장르"
                data-search-input="true"
                dir="ltr"
                maxLength="80"
                value=""
              />
              <span role="button" tabIndex="0" className="icon-close" />
            </SearchInputContainer>
          </div>

          <div style={{ marginRight: "10px" }}>
            <span>
              <button
                type="button"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  fontSize: "1.5em",
                  lineHeight: "1",
                  marginTop: "0.2em",
                  padding: "2px 6px 3px",
                  position: "relative",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
                    fill="white"
                  />
                </svg>
                <NotificationsFill>7</NotificationsFill>
              </button>
            </span>
          </div>

          <div style={{ marginRight: "10px" }}>
            <div
              style={{
                display: "block",
                position: "relative",
                fontSize: "12px",
                zIndex: "0",
              }}
            >
              <HeaderProfileBox />
            </div>
          </div>
        </SecondaryNavigation>
      </HeaderContainer>

      {path === "/favorites" ? (
        <SubHeader type={isModal}>
          <div>내가 찜한 콘텐츠</div>
        </SubHeader>
      ) : (
        ""
      )}

      {path === "/series" ? (
        <SeriesSubHaeder yoffset={yoffset} />
      ) : (
        ""
      )}

{path === "/movie" ? (
        <SeriesSubHaeder yoffset={yoffset} />
      ) : (
        ""
      )}
    </>
  );
}

const SubHeader = styled.div`
  z-index: 1;
  height: 68px;
  top: 0px;
  position: sticky;
  background: #141414;
  position: ${(props) => (props.type === true ? "relative" : "-webkit-stick")};

  & div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    padding: 0 4%;
    height: 68px;
    font-size: 3.1rem;
    font-weight: 500;
  }
`;

const NotificationsFill = styled.span`
  font-size: 0.5em;
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


const HeaderContainer = styled.div`
  height: 70px;
  flex-direction: row;
  align-items: center;
  left: 0;
  top: 0;
  display: flex;
  font-size: 1.2rem;
  right: 0;
  position: ${(props) => (props.mode === "/main" ? "fixed" : "relative")};
  padding: 0 4%;
  z-index: 2;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
`;

const PrimaryNavigation = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 10px;
  & li a {
    margin-left: 18px;
    font-weight: 400;
    font-size: 1.2rem;
    color: #e5e5e5;
    &:hover {
      color: #b3b3b3;
    }
  }
`;

const SelectNow = styled.span`
  font-size: 1.2rem;
  color: #fff;
  font-weight: 700;
  cursor: default;
  &:hover {
    color: #fff;
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
  background: rgba(0, 0, 0, 0.75);
  border: solid 1px rgba(255, 255, 255, 0.85);
  display: none;
`;

const SearchInput = styled.input`
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
  &:hover {
    backgound-color: #000;
  }
  &:-webkit-autofill-selected {
    background-color: rgb(0, 0, 0) !important;
    background-image: none !important;
    color: rgb(0, 0, 0) !important;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 50px black inset; /* Change the color to your own background color */
    -webkit-text-fill-color: #fff;
  }

  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 50px black inset; /*your box-shadow*/
    -webkit-text-fill-color: #fff;
  }
`;

export default Header;
