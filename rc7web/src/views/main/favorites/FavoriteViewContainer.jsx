import FavoriteSliderItem from "./FavoriteSliderItem";
import styled from "styled-components"
import { useEffect, useState } from "react";


function FavoriteViewContainer({ contentList }) {

    return (
        <LolomoRow>
            <Slider>
                <div className="showPeek" style={{ paddingBottom: "1px" }}>
                    <div style={{ display: "flex" }}>
                        {contentList.map((value) => {
                            return (<FavoriteSliderItem id={value.id} imgURL={value.imgURL} />);
                        })} 
                    </div>
                </div>
            </Slider>
        </LolomoRow>
    );
}

const LolomoRow = styled.div`
    margin: 5vw 0;
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


export default FavoriteViewContainer;