/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPreviewModalOff, setPreviewModalOn } from "store/action/previewModal";
import styled from "styled-components"
import SliderItemHoverDetail from "./SliderItemHoverDetail";

function SliderItem({id ,name, imgURL }) {

    const [isItemHover, setIsItemHover] = useState(false);
    const hoverRef = useRef();
    const dispatch = useDispatch();

    const {previewVisible} = useSelector((state)=> state.previewModalReducer)
   
    const previewModalOn = (data) =>{
        dispatch(
            setPreviewModalOn(data)
        )
    }

    const previewModalOff = () =>{
        dispatch(
            setPreviewModalOff()
        )
    }

    function setHoverPosition(event){
        let hoverStyle = {};
        let transfromorigin =  {};
        const browserwidth = window.innerWidth; 
        const itemPositionX = hoverRef.current.getBoundingClientRect().x;
        const x = ((hoverRef.current.getBoundingClientRect().left));
        const y = ((window.scrollY+hoverRef.current.getBoundingClientRect().top));
        const {width} = hoverRef.current.getBoundingClientRect();
        
        // 비율 계산
        if(browserwidth*0.6 < itemPositionX){
            hoverStyle = {marginRight:"2%",right:`${(hoverRef.current.getBoundingClientRect().right)*1.02}px`};
            transfromorigin = "center right";
        }else if(browserwidth*0.4 < itemPositionX){
            hoverStyle = {marginRight:"0%"};
        }else if(browserwidth*0.2 < itemPositionX){
            hoverStyle = {marginRight:"0%"};
        }else {
            transfromorigin = "center left";
            hoverStyle = {marginLeft:"0%"};
        } 
        // 이미 모달창이 켜저있다면 작동 X
        if(!previewVisible){
            previewModalOn({
                id,
                name,
                imgUrl:imgURL, 
                x,
                width,
                y,
                transfromorigin,
                hoverstyle:hoverStyle});
        }
    }

    useEffect(()=>{
        // console.log(hoverStyle);
    },[isItemHover]);

    return (
        <SliderItemStyle 
            ref={hoverRef}
            onMouseOver={(event)=>{
                // 적용되는 순서? 비동기? 동기?
                // JS는 싱글쓰레드로 작동함 -> 즉 위에서부터 차근차근 소스를 동기 실행
                setHoverPosition(event);
            }}
            >
            <a href="" role="link">
                <BoxartSize16x9>
                    <BoxartImageInPaddedContainer
                        src={imgURL}
                        alt="" />
                        {imgURL}
                </BoxartSize16x9>
            </a>

            {/* {isItemHover ? <SliderItemHoverDetail hoverStyle={hoverStyle}/>:
            ""}
         */}
            
        </SliderItemStyle>
    );
}


const SliderItemStyle = styled.div`
    box-sizing: border-box;
    padding: 0 0.2vw;
    width: 25%;
`;

const BoxartSize16x9 = styled.div`
    width: 100%;
    height: 0;
    position: relative;
    overflow: hidden;
    padding: 28.125% 0;
`;

const BoxartImageInPaddedContainer = styled.img`
    top: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
`;

export default SliderItem;