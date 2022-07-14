import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

function HeaderProfileBox() {

  const [isHover, setHover] = useState(false);

  return (
    <Container 
      onMouseEnter={()=>{setHover(true)}}
      onMouseLeave={()=>{setHover(false)}}
      >
      <Link to="/" role="button">
        <span>
          <img
            style={{
              verticalAlign: "middle",
              height: "32px",
              width: "32px",
              borderRadius: "4px",
            }}
            src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVc8CzKPARNHEu1d2nkiTr1bk5uJcQLbLWko8foPeu9HwFWx7Ewwq_7Kz2tnkQvnDaIgnEJY7eQYmdelii9HOzmKPKGAoTY.png?r=a41"
            alt=""
          />
        </span>
      </Link>
      <Caret isHover={isHover} />
      {isHover &&
      <>
      <CaretContainer>
          <CaretMenu/>
      </CaretContainer>
      <Menu>
        <ul>
            <li>
                <div>
                    <img alt="" src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"/>
                    <span> 아부지 </span>
                </div>
            </li>
            <li>
                <div>
                    <img alt="" src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AcxNaDoqDXUhqZb55oN5Dxt1m-Zdn_z5rn_hIq9m8dA8JB2xdcPmrY3yXnlVWYKPXnOrbv2QN4aEVU28dESJg.png?r=1d4"/>
                    <span> 어무이 </span>
                </div>
            </li>
            <li>
                <div>
                    <img alt="" src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQnOnMxhb19v9lQZScL86ZpnI21__HC3fseri3xG_4k-rYBafycfVvfsw_SqXVYXJJrelgRPF-eed5E69w1GQ3rq-CxZLW0.png?r=a4b"/>
                    <span> 형 </span>
                </div>
            </li>
            <li>
                <div>
                    <img alt="" src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"/>
                    <span> 해찬 </span>
                </div>
            </li>
            <li>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z" fill="currentColor"></path></svg>                    
                    <span> 프로필 관리 </span>
                </div>
            </li>
        </ul>
        <ul/>
        <ul>
             <li>
                <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.00011 8C9.00011 6.34315 10.3433 5 12.0001 5C13.657 5 15.0001 6.34315 15.0001 8C15.0001 9.65685 13.657 11 12.0001 11C10.3433 11 9.00011 9.65685 9.00011 8ZM12.0001 3C9.23869 3 7.00011 5.23858 7.00011 8C7.00011 10.7614 9.23869 13 12.0001 13C14.7615 13 17.0001 10.7614 17.0001 8C17.0001 5.23858 14.7615 3 12.0001 3ZM5.98069 21.1961C6.46867 18.7563 8.61095 17 11.0991 17H12.9011C15.3893 17 17.5316 18.7563 18.0195 21.1961L19.9807 20.8039C19.3057 17.4292 16.3426 15 12.9011 15H11.0991C7.65759 15 4.69447 17.4292 4.01953 20.8039L5.98069 21.1961Z" fill="currentColor"></path></svg>                    <span> 계정 </span>
                </div>
            </li>
            <li>
                <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" clipRule="evenodd" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 8.5C10.6831 8.5 10 9.24303 10 10H8C8 7.75697 10.0032 6.5 12 6.5C13.9968 6.5 16 7.75697 16 10C16 11.3487 14.9191 12.2679 13.8217 12.68C13.5572 12.7793 13.3322 12.9295 13.1858 13.0913C13.0452 13.2467 13 13.383 13 13.5V14H11V13.5C11 12.0649 12.1677 11.1647 13.1186 10.8076C13.8476 10.5339 14 10.1482 14 10C14 9.24303 13.3169 8.5 12 8.5ZM13.5 16.5C13.5 17.3284 12.8284 18 12 18C11.1716 18 10.5 17.3284 10.5 16.5C10.5 15.6716 11.1716 15 12 15C12.8284 15 13.5 15.6716 13.5 16.5Z" fill="currentColor"></path></svg>                    <span> 고객센터 </span>
                </div>
            </li>
        </ul>
        <ul>
            <li>
                <div>
                    <span>넷플릭스에서 로그아웃</span>
                </div>
            </li>
        </ul>
      </Menu>
      </>
      }
      
    </Container>
  );
}

const CaretContainer = styled.div`
  position: absolute;
  top: 15px;
  right : 0px;
  z-index: 1;
  width: 35px;
  height: 35px;
  padding: 30px 10px 0px 10px;
`;

const CaretMenu = styled.span`
  border-style: solid;
  border-width: 7px 7px 0px;
  border-color: rgb(255, 255, 255) transparent transparent;
  transform : rotate(180deg);
`;

const Menu = styled.div`
    margin-left: 0;
    padding: 0;
    position: absolute;
    right: 0;
    top: 52px;
    width: 181px;
    background-color: rgba(0,0,0,.9);
    border: 1px solid hsla(0,0%,100%,.15);
    box-sizing: border-box;
    color: #fff;
    cursor: default;
    font-size: 13px;
    line-height: 21px;

    ul{
        padding : 10px 0 5px;
        border-top: 1px solid hsla(0,0%,100%,.25);
    }
    ul li {
        display: block;
        font-size: 13px;
        line-height: 16px;
        padding: 5px 10px;
        line-height: 32px;
        div{
            display: flex;
            align-items: center;
            span {
                cursor: pointer;
                :hover{
                    text-decoration: underline;
                }
            }
            svg {
                color: #b3b3b3;
                padding: 0 13px 0 5px;
            }
        }
        div img{
            border-radius: 4px;
            height: 32px;
            margin-right: 10px;
            vertical-align: middle;
            width: 32px;
        }
    }
`;

const Container = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  z-index: 5;
  align-items: center;
`;

const Caret = styled.span`
  margin-left: 10px;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 5px 5px 0px;
  border-color: rgb(255, 255, 255) transparent transparent;

  transform : ${props => props.isHover ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1) 0s,
    -webkit-transform 367ms cubic-bezier(0.21, 0, 0.07, 1) 0s,
    -moz-transform 367ms cubic-bezier(0.21, 0, 0.07, 1) 0s,
    -o-transform 367ms cubic-bezier(0.21, 0, 0.07, 1) 0s;
`;

export default HeaderProfileBox;
