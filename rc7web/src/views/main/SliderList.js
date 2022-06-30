import Slider_Item from "./SliderItem";
import styled from "styled-components"
import { useEffect, useState } from "react";


function ViewContainer({ name, imgURLList }) {

    const [slideArray, setSlideArray] = useState(imgURLList);
    const [arrowhover, setArrowhover] = useState(false);
    const [sliderType, setSliderType] = useState("NotYet");
    const [hasSlide, setHasSlide] = useState(false);


   useEffect(() =>{
        if(hasSlide===true){
            const testvar = setTimeout(() => {setSliderType("Base")}, 750);
            return()=>{
                clearTimeout(testvar);
            }
        }
        
   },[sliderType]);

    const setSliderBehavor = (type) => {
        if(sliderType === "NotYet"){
            // 맨처음
            setSliderType(type);
        }else{
            if(type === "Right"){
                setSliderType("DoubleRight");
                let tempArray = Object.values(slideArray);
                for(let i = 0; i <4; i++){
                    tempArray.push(tempArray.shift());
                }
                setTimeout(() => {
                    setSlideArray(tempArray);}, 750);
            }else{
                setSliderType("Left");
                let tempArray = Object.values(slideArray);
                for(let i = 0; i <4; i++){
                    tempArray.unshift(tempArray.pop());
                }
                setTimeout(() => {
                    setSlideArray(tempArray);}, 750);
            }
        }
    }

    return (
        <LolomoRow>
            <RowHeader>
                <a href="">
                    <RowHeaderTitle>{name}</RowHeaderTitle>
                </a>
            </RowHeader>
            <div style={{zIndex:"1"}}>
                <Slider>
                    <div style={{paddingBottom: "1px" }}>
                        <SliderContent 
                            slideBehavior = {sliderType}
                            hasSlide = {hasSlide}
                            style={{ display: "flex" }}>
                            {slideArray.map((value) => {
                                return (<Slider_Item imgURL={value} />);
                            })}
                        </SliderContent>

                    </div>
                    <HandlePrev 
                        onMouseOver={()=>{setArrowhover(true)}}
                        onMouseOut={()=>{setArrowhover(false)}}
                        onClick={()=>{setSliderBehavor("Left")
                        setHasSlide(true)}}
                        aria-label="이전 콘텐츠 보기">

                        <ArrowLeft 
                        style={{visibility: (arrowhover === true ? "visible" : "hidden")}}/>
                   
                    </HandlePrev>
                    <HandleNext 
                        onMouseOver={()=>{setArrowhover(true)}}
                        onMouseOut={()=>{setArrowhover(false)}}
                        onClick={()=>{setSliderBehavor("Right")
                                setHasSlide(true)}}
                        >
                        <ArrowRight 
                        style={{visibility: (arrowhover === true ? "visible" : "hidden")}}/>
                    </HandleNext>
                </Slider>
            </div>
        </LolomoRow>
    );
}


const ArrowLeft = styled.b`
    align-self: center;
    font-size: 2.5vw;
    color: #fff;
    margin : 0 auto;
    font-weight: 700;
    transform: scale(1.25);
    height: auto;
    cursor: pointer;
    &:before {
        content : "<" ;
    }
    transition: transform .1s ease-out 0s;
`;

const ArrowRight = styled.b`
    align-self: center;
    font-size: 2.5vw;
    color: #fff;
    margin : 0 auto;
    font-weight: 700;
    transform: scale(1.25);
    height: auto;
    cursor: pointer;
    &:before {
        content : ">" ;
    }
    transition: transform .1s ease-out 0s;
`;

const SliderContent = styled.div`
    position: relative;
    /* z-index: 0 ; */
    transform: ${(props)=>(props.slideBehavior==="Base"? "translate3d(-100%, 0px, 0px);":"")};
    transform: ${(props)=>(props.slideBehavior==="Right"? "translate3d(-100%, 0px, 0px);":"")};
    transform: ${(props)=>(props.slideBehavior==="DoubleRight"? "translate3d(-200%, 0px, 0px);":"")};
    
    transition: transform 0.75s;
    transition: ${(props)=>(props.slideBehavior==="Base"? "transform 0s":"")};
`;

const LolomoRow = styled.div`
    margin: 3vw 0;
    line-height: 1.3;
    max-width:100%;
`;

const RowHeader = styled.h2`
    font-weight: bold;
    padding: 0 4%;
    vertical-align: bottom;
    line-height: 1.25vw;
    margin-bottom: 0.4em;
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


export default ViewContainer;