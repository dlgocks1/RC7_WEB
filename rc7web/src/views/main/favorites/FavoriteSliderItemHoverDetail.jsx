import styled from "styled-components";
import mainvedio from "assets/dummyVedio.mp4";
import iconPlay from "assets/icon/icon_play.svg";
import iconCheck from "assets/icon/icon_check_white.svg";
import iconThumb from "assets/icon/icon_thumb_white.svg";
import iconArrow from "assets/icon/icon_arrow_white.svg";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addFaveriteDataAction,subFaveriteDataAction } from "reducers/favoriteReducer";

function FavoriteSliderItemHoverDetail({id, hoverStyle}){
    
    const [opacity,setOpacity] = useState(0);
    const [itemscale,setItemscale] = useState(1);
    const [liketooltop,setLikeTooltip] = useState(false);
    const [dtbookmarktooltip,setDtbookmarktooltip] = useState(false);
    const favoriteDataReducer = useSelector((state) => state.favoriteDataReducer);

    const dispatch = useDispatch();    
    const addFaveriteData = () =>{
        dispatch(
            addFaveriteDataAction(
                {
                    id: 13,
                    imgURL: "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbmgjlBWB_YKM8RB8S8rcoPhBU4mAmhZzckx-x52dGUeHFQBNGmF6HUyHbHrQgi8vlaHxXW4e74pT6y6G9sRoIkkECndOTuD6aE.webp?r=2ad"
                }
            )
        );
    }

    const subFaveriteData = () =>{
        dispatch(
            subFaveriteDataAction(
                {id : id}
            )
        );
        setOpacity(0);
    }

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
             setItemscale(1.2);
        }, 100);
    }

    return(
        <ItemHover
                 // 여러개 오브젝트 스타일 합치기
                style={Object.assign(hoverStyle,{opacity:`${opacity}`,transform:`scale(${itemscale})`, transition:"all 0.5s"})}
            >
            <div>
                <ShortVedio src={mainvedio} autoPlay muted={true}></ShortVedio>
                <div style={{display:"flex",alignItems:"center",flexDirection:"row", marginLeft:"20px"}}>
                    <div style={{flexGrow:"1"}}>
                        <PlayIcon width="20px" src={iconPlay}/>
                        <SubIcon  
                            onClick={() => {subFaveriteData()}}
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
                    <MorinfoIcon width="20px" src={iconArrow}/>
                    
                </div>
                <p style={{fontSize:"13px", fontWeight:"600", margin:"10px 15px" }}>"1화"</p>
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
    top: 107px;
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
    top: 107px;
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
    top : -10%;
    z-index: 1;
    background-color: black;
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

const BoxartImageInPaddedContainer = styled.img`
    top: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
`;

export default FavoriteSliderItemHoverDetail;