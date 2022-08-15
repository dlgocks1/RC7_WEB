import styled from "styled-components"
import React, { useEffect, useState } from "react";
import FavoriteSliderItem from "./FavoriteSliderItem";


function FavoriteViewContainer({ contentList }) {

    return (
        <LolomoRow>
            <div style={{ display: "flex",paddingBottom: "1px" }}>
                {contentList.map((value) => (<FavoriteSliderItem id={value.id} imgURL={value.imgURL} />))} 
            </div>
        </LolomoRow>
    );
}

const LolomoRow = styled.div`
    position: relative;
    margin: 5vw 0;
    padding: 0 4%;
    line-height: 1.3;
`;

export default FavoriteViewContainer;