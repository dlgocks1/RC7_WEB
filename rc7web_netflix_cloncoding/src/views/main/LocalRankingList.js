/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components"
import LocalRankingItem from "./LocalRankingItem";

function LocalRankingList({ imgURLList }) {
    return (
        <LolomoRow>
            <RowHeader>
                <a href="">
                    <RowHeaderTitle>오늘 한국의 TOP 10 시리즈</RowHeaderTitle>
                </a>
            </RowHeader>
            <div>
                <Slider>
                    <HandlePrev tabIndex="0" role="button" aria-label="이전 콘텐츠 보기"><b
                        className="indicator-icon icon-leftCaret"></b>
                    </HandlePrev>
                    <div className="showPeek">
                        <div style={{display : "flex"}}>
                            <LocalRankingItem svg={<Top10Rank id="rank-1" width="100%" height="100%" viewBox="-20 0 70 154">
                                <path stroke="#595959" strokeLinejoin="square" strokeWidth="4"
                                    d="M35.377 152H72V2.538L2 19.362v30.341l33.377-8.459V152z">
                                </path>
                            </Top10Rank>} img={imgURLList[0]} />

                            <LocalRankingItem svg={<Top10Rank id="rank-2" width="100%" height="100%" viewBox="0 0 80 154"
                                >
                                <path stroke="#595959" strokeLinejoin="square" strokeWidth="4"
                                    d="M3.72 152H113v-30.174H50.484l4.355-3.55 29.453-24.012c5.088-4.124 9.748-8.459 13.983-13.004 4.16-4.464 7.481-9.339 9.972-14.629 2.449-5.203 3.678-11.113 3.678-17.749 0-9.428-2.294-17.627-6.875-24.645-4.597-7.042-10.941-12.494-19.07-16.376C77.803 3.957 68.496 2 58.036 2 47.591 2 38.37 4.023 30.347 8.06c-8.015 4.032-14.457 9.578-19.352 16.654-4.492 6.493-7.389 13.803-8.693 21.952h34.055c1.236-3.52 3.398-6.52 6.459-8.97 3.54-2.834 8.277-4.224 14.147-4.224 5.93 0 10.552 1.537 13.76 4.681 3.181 3.12 4.791 7.024 4.791 11.594 0 4.151-1.16 7.934-3.468 11.298-2.192 3.194-5.987 7.124-11.405 11.84L3.72 122.465V152z">
                                </path>
                            </Top10Rank>} img={imgURLList[1]} />
                            <LocalRankingItem svg={<Top10Rank id="rank-3" width="100%" height="100%" viewBox="0 0 80 154"
                                >
                                <path stroke="#595959" strokeLinejoin="square" strokeWidth="4"
                                    d="M3.809 41.577h33.243c1.3-2.702 3.545-4.947 6.674-6.72 3.554-2.015 7.83-3.01 12.798-3.01 5.555 0 10.14 1.11 13.723 3.376 3.839 2.427 5.782 6.283 5.782 11.315 0 4.553-1.853 8.395-5.473 11.38-3.547 2.926-8.18 4.37-13.821 4.37H41.44v28.366h16.77c5.572 0 10.275 1.227 14.068 3.711 4.02 2.633 6.071 6.581 6.071 11.616 0 5.705-1.943 9.975-5.853 12.562-3.658 2.42-8.292 3.61-13.863 3.61-5.205 0-9.82-.94-13.827-2.836-3.698-1.75-6.32-4.272-7.785-7.529H2.33c2.096 12.089 7.761 21.65 17.028 28.78C29.242 148.175 42.594 152 59.476 152c10.706 0 20.175-1.783 28.42-5.337 8.185-3.528 14.575-8.486 19.208-14.884 4.595-6.346 6.896-13.938 6.896-22.837 0-6.952-1.93-13.494-5.81-19.666-3.815-6.07-9.68-10.367-17.683-12.908l-5.46-1.735 5.353-2.04c6.659-2.538 11.667-6.338 15.083-11.412 3.431-5.096 5.142-10.806 5.142-17.181 0-8.471-2.262-15.778-6.787-21.985-4.574-6.275-10.7-11.17-18.408-14.696C77.683 3.775 69.109 2 59.687 2 44.084 2 31.515 5.816 21.91 13.415c-9 7.119-15.025 16.486-18.101 28.162z">
                                </path>
                            </Top10Rank>} img={imgURLList[2]} />

                            <LocalRankingItem svg={<Top10Rank id="rank-4" width="100%" height="100%" viewBox="0 0 81 154"
                                >
                                <path stroke="#595959" strokeLinejoin="square" strokeWidth="4"
                                    d="M72 152h35.333v-30.977H128V92.497h-20.667V2H69.89L2 92.712v28.311h70V152zM36.202 92.188l35.93-47.998v47.998h-35.93z">
                                </path>
                            </Top10Rank>} img={imgURLList[3]} />
                        </div>
                    </div>
                    <HandleNext tabIndex="0" role="button" aria-label="콘텐츠 더 보기"><b
                        className="indicator-icon icon-rightCaret"></b></HandleNext>
                </Slider>
            </div>
        </LolomoRow>

    );
}

const LolomoRow = styled.div`
    margin: 3vw 0;
    line-height: 1.3;
`;

const RowHeader = styled.h2`
    font-weight: bold;
    padding: 0 4%;
    vertical-align: bottom;
    line-height: 1.25vw;
    font-size: 1.4vw;
`;

const RowHeaderTitle = styled.div`
    display: table-cell;
    vertical-align: bottom;
    line-height: 1.25vw;
    font-size: 1.4vw;
`;

const Slider = styled.div`
    position: relative;
    margin: 0;
    padding: 0 4%;
    touch-action: pan-y;
    overflow-x: visible;
`;

const HandlePrev = styled.span`
    background: rgba(20,20,20,.5);
    left: -2px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4%;
    display: flex;
    color: #fff;
`;
const Top10Rank = styled.svg`
    width: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: auto;
    left: 0;
`;
const HandleNext = styled.span`
    background: rgba(20,20,20,.5);
    right: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4%;
    display: flex;
    color: #fff;
`;
export default LocalRankingList;