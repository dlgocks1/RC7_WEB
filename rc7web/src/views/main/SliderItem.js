import { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import SliderItemHoverDetail from "./SliderItemHoverDetail";

function SliderItem({ imgURL }) {

    const [isItemHover, setIsItemHover] = useState(false);
    const [hoverStyle, sethoverStyle] = useState(``);
    const hoverRef = useRef();

    function setHoverPosition(event){
        // 좌표 가져오기
        const browserwidth = window.innerWidth; 
        const itemPositionX = hoverRef.current.getBoundingClientRect().x;
        // console.log(hoverRef.current.getBoundingClientRect().y);
        // 비율 계산
        if(browserwidth*0.6 < itemPositionX){
            sethoverStyle({transformOrigin:"center right",right:"0",marginRight:"4%"});
            return ;
        }
        
        if(browserwidth*0.4 < itemPositionX){
            sethoverStyle(``);
            return ;
        }
        
        if(browserwidth*0.2 < itemPositionX){
            sethoverStyle(``);
            return ;
        }

        sethoverStyle({transformOrigin:"center left",left : "0%", marginLeft:"4%" });
        return ;
    }

    useEffect(()=>{
        // console.log(hoverStyle);

    },[isItemHover]);

    return (
        <SliderItemStyle 
            ref={hoverRef}
            onMouseOver={(event)=>{
                // 적용되는 순서? 비동기? 동기?
                setHoverPosition(event);
                setIsItemHover(true)}}
            onMouseOut={()=>{setIsItemHover(false)}}
        >
            {isItemHover ? <SliderItemHoverDetail hoverStyle={hoverStyle}/>:
            ""}
            
            <a href="" role="link">
                <BoxartSize16x9>
                    <BoxartImageInPaddedContainer
                        src={imgURL}
                        alt="" />
                        {imgURL}
                </BoxartSize16x9>
            </a>
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
    z-index: 0;
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