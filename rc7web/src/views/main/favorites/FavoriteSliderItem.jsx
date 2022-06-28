import { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import FavoriteSliderItemHoverDetail from "./FavoriteSliderItemHoverDetail";

function FavoriteSliderItem({ id, imgURL }) {

    const [isItemHover, setIsItemHover] = useState(false);
    const [hoverStyle, sethoverStyle] = useState(``);
    const hoverRef = useRef();

    function setHoverPosition(event){
        // 좌표 가져오기
        const browserwidth = window.innerWidth; 
        const itemPositionX = hoverRef.current.getBoundingClientRect().x;
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

    return (
        <SliderItemStyle 
            ref={hoverRef}
            onMouseOver={(event)=>{
                // 적용되는 순서? 비동기? 동기?
                setHoverPosition(event);
                setIsItemHover(true)}}
            onMouseOut={()=>{setIsItemHover(false)}}
        >
            {isItemHover ? <FavoriteSliderItemHoverDetail id={id} hoverStyle={hoverStyle}/>:
            ""}
            
            {/* <a href="" role="link"> */}
                <BoxartSize16x9>
                    <BoxartImageInPaddedContainer
                        src={imgURL}
                        alt="" />
                        {imgURL}
                </BoxartSize16x9>
            {/* </a> */}
        </SliderItemStyle>
    );
}


const SliderItemStyle = styled.div`
    box-sizing: border-box;
    padding: 0 0.2vw;
    cursor: pointer;
    
    @media screen and (min-width: 800px) and (max-width: 1099px){
        width: 25%;
    }
    
    @media screen and (min-width: 500px) and (max-width: 799px){
        width: 33.333333%;
    }

    @media screen and (min-width: 1100px){
        width: 20%;
    }
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

export default FavoriteSliderItem;