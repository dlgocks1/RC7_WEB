import FavoriteSliderItem from "./FavoriteSliderItem";
import styled from "styled-components"
import { useEffect, useState } from "react";


function FavoriteViewContainer({ contentList }) {

    return (
        <LolomoRow>
            <div style={{ display: "flex",paddingBottom: "1px" }}>
                {contentList.map((value) => {
                    return (<FavoriteSliderItem id={value.id} imgURL={value.imgURL} />);
                })} 
            </div>
        </LolomoRow>
    );
}

const LolomoRow = styled.div`
    position: relative;
    margin: 5vw 0;
    padding: 0 4%;
    line-height: 1.3;
    touch-action: pan-y;
    overflow-x: visible;
`;



export default FavoriteViewContainer;