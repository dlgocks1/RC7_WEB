/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-use-before-define */
import styled from "styled-components";
import mainvedio from "assets/dummyVedio.mp4";
import iconPlay from "assets/icon/icon_play.svg";
import iconCheck from "assets/icon/icon_check_white.svg";
import iconThumb from "assets/icon/icon_thumb_white.svg";
import iconArrow from "assets/icon/icon_arrow_white.svg";
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { setEpisdoeModalOn } from "store/action/episodemodal";

function SliderItemHoverDetail({hoverStyle}){
    
    const [opacity,setOpacity] = useState(0);
    const [itemscale,setItemscale] = useState(1);
    const [liketooltop,setLikeTooltip] = useState(false);
    const [dtbookmarktooltip,setDtbookmarktooltip] = useState(false);

    useEffect(()=>{
        setOpacity(0)
        setItemscale(1);
        return(
            testfun()
        );        
    },[]);

    const testfun = ()=>{
        setTimeout(() => {
             setOpacity(1)
             setItemscale(1.3);
        }, 100);
    }

    const dispatch = useDispatch();
    const setModalOn = () =>{
        dispatch(
            setEpisdoeModalOn(
            )
        );
    }
    
    return(
        <ItemHover
                 // 여러개 오브젝트 스타일 합치기
                style={Object.assign(hoverStyle,{opacity:`${opacity}`,transform:`scale(${itemscale})`, transition:"all 0.5s"})}
            >
            <div>
                <ShortVedio src={mainvedio} autoPlay muted />
                <div style={{display:"flex",alignItems:"center",flexDirection:"row", marginLeft:"20px"}}>
                    <div style={{flexGrow:"1"}}>
                        <PlayIcon width="20px" src={iconPlay}/>
                        <SubIcon 
                            onMouseOver={()=>{setDtbookmarktooltip(true)}}
                            onMouseOut={()=>{setDtbookmarktooltip(false)}}
                            width="20px" 
                            src={iconCheck}/>
                        
                        {dtbookmarktooltip?(<DtBookmarktooltip>
                            내가 찜한 콘텐츠에서 삭제
                        </DtBookmarktooltip>):
                        ""}

                        <SubIcon 
                            onMouseOver={()=>{setLikeTooltip(true)}}
                            onMouseOut={()=>{setLikeTooltip(false)}}
                            width="20px" 
                            src={iconThumb}/>
                        {liketooltop?(<IsLikeTooltop>
                            좋아용
                        </IsLikeTooltop>):
                        ""}

                    </div>
                    <MorinfoIcon onClick={setModalOn} width="20px" src={iconArrow}/>
                    
                </div>
                <p style={{fontSize:"13px", fontWeight:"600", margin:"10px 15px" }}>1화</p>
                <div style={{display:"grid",gridGap:"5px", alignItems:"center",paddingBottom:"20px",gridTemplateColumns:"4fr 3fr"}}>
                    <ProgressContainer >
                        <Progress width="100%"/>
                    </ProgressContainer>

                    <span style={{textAlign:"center",color:"rgba(255,255,255,0.8)",fontWeight:"600",fontSize:"12px"}}>총 63분 중 10분</span>
                </div>
                
            </div>
        </ItemHover>
    );
}

const DtBookmarktooltip = styled.div`
    background-color: rgba(211,211,211,1);
    border: rgba(211,211,211,1) solid 1px;
    border-radius: 3px;
    color: black;
    font-size: 8px;
    font-weight: 600;
    height: auto;
    line-height: 80%;
    padding: 5px 11px;
    top: 44%;
    left : -15px;
    position: absolute;
    width: fit-content;
    z-index: 5;

    &::after {
        border-color: rgba(211,211,211,1) transparent;
        border-style: solid;
        border-width: 8px 6px 0 6.5px;
        content: '';
        display: block;
        bottom: -7px;
        left : 75px;
        position: absolute;
        width: 0;
        z-index: 1;
    }
`

const IsLikeTooltop = styled.div`
    background-color: rgba(211,211,211,1);
    border: rgba(211,211,211,1) solid 1px;
    border-radius: 3px;
    color: black;
    font-size: 8px;
    font-weight: 600;
    height: auto;
    line-height: 80%;
    padding: 5px 11px;
    top: 44%;
    left : 77px;
    position: absolute;
    width: fit-content;
    z-index: 5;

    &::after {
        border-color: rgba(211,211,211,1) transparent;
        border-style: solid;
        border-width: 8px 6px 0 6.5px;
        content: '';
        display: block;
        bottom: -7px;
        right : 21px;
        position: absolute;
        width: 0;
        z-index: 1;
    }
`

const ProgressContainer = styled.div`
    margin: 10px 15px;
    background-color: rgba(255,255,255,0.2);
    width: 95%;
    height: 4px;
    display: flex;
    align-items: center;
    border-radius: 5px;
`;

const Progress = styled.div`
    background-color: rgba(255,0,0,0.6);
    height: 100%;
    width: 20%;
`;

const MorinfoIcon = styled.img`
    margin-right: 20px;
    transform: rotate(90deg);
    max-width: 13px;
    max-height: 13px;
    padding: 7px;
    border: 2px solid rgba(255,255,255,0.5);
    border-radius: 50%;
    background-color: rgba(255,255,255,0.1);
    &:hover{
     border: 2px solid rgba(255,255,255,0.9);
    }
`

const SubIcon = styled.img`
    max-width: 13px;
    max-height: 13px;
    padding: 7px;
    margin-left: 5px;
    border: 2px solid rgba(255,255,255,0.5);
    border-radius: 50%;

    &:hover{
        border: 2px solid rgba(255,255,255,0.8);
        cursor: pointer;
    }
`;

const PlayIcon = styled.img`
    max-width: 13px;
    max-height: 13px;
    padding: 7px;

    background-color: white;
    border-radius: 50%;
`;

const ShortVedio = styled.video`
    width: 100%;
`

const ItemHover = styled.div`
    position: absolute;
    width: 25%;
    top : -10%;
    z-index: 2;

    background-color: black;
`;

const BoxartImageInPaddedContainer = styled.img`
    top: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
`;

export default SliderItemHoverDetail;