import styled from "styled-components"
import dummyvedio from "assets/dummyVedio.mp4"
import { useState } from "react";
import iconCheck from "assets/icon/icon_check_white.svg";
import iconThumb from "assets/icon/icon_thumb_white.svg";
import ReactTooltip from "react-tooltip";

function VedioPlayerContainer(){

    const [dtbookmarktooltip,setDtbookmarktooltip] = useState(false);
    const [liketooltop,setLikeTooltip] = useState(false);
    const [isPlaying, setPlaying] = useState(false);

    return(
        <PreViewModel>
            <VedioContainer>
                <video onEnded={()=>
                        setPlaying(false)} 
                        style={isPlaying===false ? {visibility : "hidden"} : {visibility : "visible"}}
                        src={dummyvedio} autoPlay></video>
            </VedioContainer>

            <ImgContainer>
                <img src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABZbVJV4TTlebZXyVIz1uynnmoRh_7Cp0L1vSHyJ_4yQtglDKpKcdhFL7LIq5DO9i7apdvdUBHWeuKHpJw1hcS31L_0UoF6QJ80i6.webp?r=450" alt="SPYxFAMILY 스파이 패밀리" class="playerModel--player__storyArt detail-modal has-smaller-buttons" />
            </ImgContainer>

            <PreViewModelInfo>
                <TitleContainer>
                    <img src={"https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfckc9vjUDZDDb51BIkxA4HvHTnlLBfgluBzpzNdE5bEGKWmpnVi0tt7i1emKTiSBEs9GnzbYQ6lHxhkhCefhR62xBj-GCQiF8FS36aS4PM.webp?r=50e"} style={{width: "100%", opacity: 1,marginBottom:"2.5em"}}/>
                    <ButtonContainer>

                        <PlayButtonWrapper type="button">
                                <div style={{height:"2.4rem",width:"2.4rem"}}>
                                    <div role="presentation">
                                        <svg style={{width:"100%", height:"100%"}} width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <path
                                                d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div style={{ width: "1rem" }}></div>
                                <PlayText>재생</PlayText>
                        </PlayButtonWrapper>

                        <div style={{position : "relative" }}>
                            {dtbookmarktooltip?(
                                    <DtBookmarktooltip>
                                            내가 찜한 콘텐츠에서 삭제
                                    </DtBookmarktooltip>):
                                ""}

                            <SubIcon  
                            onMouseOver={()=>{setDtbookmarktooltip(true)}}
                            onMouseOut={()=>{setDtbookmarktooltip(false)}}
                            src={iconCheck}
                            />

                        </div>
                        <div style={{position : "relative" }}>
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

                    </ButtonContainer>
                </TitleContainer>

                <MuteIconConatiner>
                    <button type="button">
                        <div style={{width:"1.6em",height:"1.6em",display:"flex",alignItems:"center",justifyContent:"center",}}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z" fill="currentColor"></path></svg>
                        </div>
                    </button>
                </MuteIconConatiner>
            </PreViewModelInfo>

        </PreViewModel>
    );
}
const ImgContainer = styled.div`
    width: 100%;
    overflow: hidden;
`;

const MuteIconConatiner = styled.div`
    right: 3em;
    bottom: 10%;
    margin-bottom: 1em;
    display: block;
    position: absolute;

    & button{
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 32px;
        min-height: 32px;
        max-width: 42px;
        max-height: 42px;
        background-color: rgba(42,42,42,1);
        color: white;
        opacity: 0.4;
        border: 2px solid rgba(255, 255, 255, 0.7);
        border-radius: 50%;

        &:hover{
            opacity: 0.7;
            transition: opacity 0.5s;
        }
    }

    
`;

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
    bottom : 50px;
    right : -10px;
    position: absolute;
    width: 30px;
    z-index: 5;

    &::after {
        border-color: rgba(211,211,211,1) transparent;
        border-style: solid;
        border-width: 8px 6px 0 6.5px;
        content: '';
        display: block;
        bottom: -35%;
        right : 21px;
        position: absolute;
        width: 0;
        z-index: 1;
    }
`
const TootipText = styled.span`
    position: absolute;
    border: 1px solid;
    border-radius: 5px;
    font-size: 0.8em;
    color: white;
`

const DtBookmarktooltip = styled.div`
    background-color: rgb(211, 211, 211);
    border: rgba(211,211,211,1) solid 1px;
    border-radius: 3px;
    color: black;
    font-size: 8px;
    font-weight: 600;
    bottom : 50px;
    right : -45px;
    position: absolute; 
    line-height: 80%;
    padding: 5px 11px;
    width: 119px;
    z-index: 5;
    &::after {
        border-color: rgba(211,211,211,1) transparent;
        border-style: solid;
        border-width: 8px 6px 0 6.5px;
        content: '';
        bottom: -35%;
        left : 75px;
        position: absolute;
        width: 0;
        z-index: 1;
    } 
`

const SubIcon = styled.img`
    min-width: 15px;
    max-width: 20px;
    min-height: 15px;
    max-height: 20px;
    padding: 7px;
    margin-left: 5px;
    border: 2px solid rgba(255,255,255,0.5);
    border-radius: 50%;

    &:hover{
        border: 2px solid rgba(255,255,255,0.8);
        cursor: pointer;
    }
   
`;

const PlayText = styled.span`
    font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-weight: normal;
    display: block;
    font-size: 1.8rem;
    font-weight: bold;
`;

const PlayButtonWrapper = styled.button`
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    justify-content: center;
    min-height: 32px;
    max-height: 42px;
    padding: 1rem 2.7rem 1rem 2.2rem;
    margin-right: 1rem;
    display : flex;
    &:hover{
        background-color: rgba(255, 255, 255, 0.7);
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    min-height: 2em;
`;

const TitleContainer = styled.div`
    width: 40%;
    position: absolute;
    bottom: 8%;
    left: 7em;
`;

const PreViewModelInfo = styled.div`
    opacity: 1;
`

const VedioContainer = styled.div`
    position: absolute;
    width: 100%;
    height : 100%;
    background: linear-gradient(to top,#181818,transparent 50%);
    
`;
const PreViewModel = styled.div`
    position : relative ;
    min-height: 480px;
    border-top-left-radius: 6px;;
    border-top-right-radius: 6px;;
    background-color: #000;
    overflow: hidden;

    & div video{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export default VedioPlayerContainer;