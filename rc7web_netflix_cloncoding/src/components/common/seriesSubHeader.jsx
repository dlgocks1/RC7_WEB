/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React,{ useState, useEffect }  from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function SeriesSubHeader({yoffset}) {

  const [gernehover, setGernehover] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(){
        setGernehover(false)
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Header yoffset={yoffset}>
      <div>
        <TitleText>{location.pathname === "/series" ? "시리즈" : "영화"} </TitleText>
        <Genre>
            <div onClick={()=>{setGernehover(!gernehover)}}>
                장르
                <span />
            </div>
            {gernehover && 
            
            <DropDownMenu>
                <ul>
                    <li>한국 드라마</li>
                    <li>미국 드라마</li>
                    <li>영국 드라마</li>
                    <li>아시아 드라마</li>
                    <li>전 세계 예능이 한곳에!</li>
                    <li>애니</li>
                </ul>
                <ul>
                    <li>코미디</li>
                    <li>로맨스</li>
                    <li>드라마 장르</li>
                    <li>액션</li>
                    <li>스릴러</li>
                    <li>SF & 판타지</li>
                </ul>
                <ul>
                    <li>호러</li>
                    <li>키즈</li>
                    <li>청소년</li>
                    <li>다큐시리즈</li>
                </ul>
            </DropDownMenu>
            }
        </Genre>
      </div>
    </Header>
  );
}

const DropDownMenu =styled.div`
    font-size: 14px;
    left: 0;
    margin: 0;
    overflow-x: hidden;
    padding: 0;
    top: 2.5rem;
    z-index: 2;
    background-color: rgba(0,0,0,.9);
    border: 1px solid hsla(0,0%,100%,.15);
    box-sizing: border-box;
    color: #fff;
    cursor: default;
    font-size: 13px;
    line-height: 21px;
    /* opacity: 0; */
    position: absolute;
    & ul{
        display: table-cell;
        height: auto;
        margin: 0;
        padding: 5px 0;
        & li{
            display: block;
            line-height: 24px;
            padding: 1px 20px 1px 10px;
            width: 100%;
            white-space: nowrap;
            cursor: pointer;
            &:hover{
                text-decoration:underline;
            }
        }
    }
`;

const Genre = styled.div`
    position: relative;
    text-align: left;
    cursor: pointer;

    & div:first-child{
        appearance: none;
        background-color: #000;
        border: 1px solid hsla(0,0%,100%,.9);
        border-radius: 0;
        box-sizing: border-box;
        color: #fff;
        display: inline-block;
        font-size: 1.25rem;
        font-weight: 700;
        height: 20px;
        letter-spacing: 1px;
        line-height: 25px;
        padding-left: 10px;
        padding-right: 50px;
        position: relative;
        &:hover{
            background-color: hsla(0,0%,100%,.1);
        }
    }

    & span {
        border-color: #fff transparent transparent;
        border-style: solid;
        border-width: 5px 5px 0;
        height: 0;
        position: absolute;
        right: 10px;
        top: 44%;
        width: 0;
    }
`;

const Header = styled.div`
  z-index: 1;
  height: 68px;
  top: 0px;
  position: sticky;
  background: transparent;
  background-color : ${props => props.yoffset === 0 ? "transparent" : "#141414"};
  /* position: ${(props) => (props.type === true ? "relative" : "-webkit-stick")}; */
  & div:first-child {
    position: sticky;
    display: flex;
    align-items: center;
  }
`;

const TitleText = styled.div`
    padding: 0 4%;
    height: 68px;
    font-size: 38px;
    font-weight: 700;
    line-height: 38px;
    margin-right: 15px;
`

export default SeriesSubHeader;
