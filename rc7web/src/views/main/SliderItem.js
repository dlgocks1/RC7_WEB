import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPreviewModalOff, setPreviewModalOn } from "reducers/previewModalReducer";
import styled from "styled-components"
import SliderItemHoverDetail from "./SliderItemHoverDetail";

function SliderItem({id ,name, imgURL }) {

    const [isItemHover, setIsItemHover] = useState(false);
    // const [hoverStyle, sethoverStyle] = useState(``);
    const hoverRef = useRef();
    const {previewVisible} = useSelector((state)=> state.previewModalReducer)

    function setHoverPosition(event){
        let hoverStyle = {};
        let transfromorigin =  {};
        const browserwidth = window.innerWidth; 
        const itemPositionX = hoverRef.current.getBoundingClientRect().x;
        const x = ((hoverRef.current.getBoundingClientRect().left));
        const y = ((window.scrollY+hoverRef.current.getBoundingClientRect().top));
        const width = (hoverRef.current.getBoundingClientRect().width);
        
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
        if(!previewVisible){
            previewModalOn({
                id:id,
                name:name,
                imgUrl:imgURL, 
                x:x,
                width:width,
                y:y,
                transfromorigin:transfromorigin,
                hoverstyle:hoverStyle});
        }
    }

    const dispatch = useDispatch();
    const previewModalOn = (data) =>{
        dispatch(
            setPreviewModalOn(data)
        )
    }


    useEffect(()=>{
        // console.log(hoverStyle);
    },[isItemHover]);

    
    const previewModalOff = () =>{
        dispatch(
            setPreviewModalOff()
        )
    }


    return (
        <SliderItemStyle 
            ref={hoverRef}
            onMouseOver={(event)=>{
                // 적용되는 순서? 비동기? 동기?
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