/* eslint-disable no-use-before-define */

import React, { useEffect,useState } from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
import { useSelector } from "react-redux";
import styled from "styled-components"
import FavoriteViewContainer from "./FavoriteViewContainer"

function FavoritsContent() {

    const [width, setWidth] = useState(window.innerWidth);
    const [contentList, setContentList] = useState([]);
    const [ratioMode, setRatioMode] = useState(0);
    const {itemList} = useSelector((state) => state.favoriteDataReducer);

    // debounce 처리
    const updateWidth = _.debounce(() => {
        setWidth(window.innerWidth);
    }, 15);

    const onResize = () =>{
        updateWidth();
    }

    useEffect(()=>{
        renderScreen();
    }
    ,[itemList]);

    useEffect(()=>{
        window.removeEventListener("resize", onResize);
        window.addEventListener("resize", onResize);
        return () =>{
             window.removeEventListener("resize", onResize);
        }
    },[]);

    useEffect(()=>{
        renderScreen();
    },[ratioMode]);

    function renderScreen() {
        let tempdata = [];
        let prev = 0;
        // 안에서 Setcontent 하면 적용 X
        if (ratioMode === 0) {
            for (let i = 5; i < itemList.length + 5; i += 5) {
                tempdata = [...tempdata, itemList.slice(prev, i)];
                setContentList([...contentList, itemList.slice(prev, i)]);
                prev = i;
            }
        } else if (ratioMode === 1) {
            for (let i = 4; i < itemList.length + 4; i += 4) {
                tempdata = [...tempdata, itemList.slice(prev, i)];
                prev = i;
            }
        } else if (ratioMode === 2) {
            for (let i = 3; i < itemList.length + 3; i += 3) {
                tempdata = [...tempdata, itemList.slice(prev, i)];
                prev = i;
            }
        }
        setContentList(tempdata);
    }
    // width 800~1090 사이면 4개
    // 500~799 사이면 3개
    // 1100이상 5개
    useEffect(()=>{
        if(width >= 1100 && ratioMode !== 0){
            setRatioMode(0);

        }else if(width <= 1099  && width >= 800  && ratioMode !== 1){
            setRatioMode(1);

        }else if(width <= 799 && width >= 100 && ratioMode !== 2){
            setRatioMode(2);
        }
    },[width]);

    
    return(
        <Container>
            {contentList.map((value,index) => (<FavoriteViewContainer key={value.id} id={value.id} contentList={value} />)) }
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
`

export default FavoritsContent;