import styled from "styled-components";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import PreViewModalContent from "./PreviewModalContent";
import { setPreviewModalOff } from "reducers/previewModalReducer";

function PreViewModal(){
    
    const [opacity,setOpacity] = useState(0);
    const [itemscale,setItemscale] = useState(1);
    const {id,name,imgUrl,x,y,width,transfromorigin,hoverstyle} = useSelector((state) => state.previewModalReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        setOpacity(0)
        setItemscale(1);
        return(
            rendering()
        );        
    },[]);

    const rendering = ()=>{
        setTimeout(() => {
             setOpacity(1)
             setItemscale(1.3);
        }, 100);
    }

    const previewModalOff = () =>{
        setOpacity(0)
        dispatch(
            setPreviewModalOff()
        )
    }

    return(
        <ItemHover style={hoverstyle}>
            <SetPosition width={width} x={x} y={y} transfromorigin = {transfromorigin}
                style={Object.assign({opacity:`${opacity}`,transform:`scale(${itemscale})`, transition:"all 0.5s"})}
                // onMouseOut={()=>{console.log("나가짐")}}
                onMouseLeave={()=>{previewModalOff()}}
                >
                <PreViewModalContent id={id} name={name} imgUrl ={imgUrl} />
            </SetPosition>
        </ItemHover>
    );
}

const SetPosition = styled.div`
    position: absolute;
    top : ${(props)=>(`${props.y}px`)};
    left : ${(props)=>(`${props.x}px`)};
    width: ${(props)=>(`${props.width}px`)};
    /* 기본 transfrom-origin Setting */
    transform-origin: center center;
    transform-origin:  ${(props)=>(`${props.transfromorigin}`)};

    z-index: 3;
    box-shadow: rgb(0 0 0 / 75%) 0px 3px 10px;
    opacity : 1;
    background-color: #181818;
    border-radius: 6px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    will-change: transform;
`;

const ItemHover = styled.div`
    position: absolute;
    top : 0;
    z-index: 2;
    display : flex;
    justify-content:center;
    background-color: black;
`;

export default PreViewModal;