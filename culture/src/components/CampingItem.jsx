import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import CampingImage from './CampingImage';
import CampingTag from './CampingTag';

function CampingItem({resveUrl,firstImageUrl, facltNm, addr1, lineIntro, intro, themaEnvrnCl}) {

    const [introText, setIntroText] = useState("");

    useEffect(() =>{
        if(intro !== undefined){
            setIntroText(intro?.substr(0,100)+"...");
        }else{
            setIntroText("관련 정보가 없습니다.");
        }
    })

    return (
        <ItemConatiner>
                <div style={{padding: "0 0.4rem 3.5rem 0.4rem"}}>
                    <CampingImage resveUrl={resveUrl} firstImageUrl={firstImageUrl}/>
                    <a href='/campingDetail' style={{color :'#141414',textDecoration:'none'}}>
                        <Title> {facltNm} </Title>
                        <LocationText> {addr1} </LocationText>
                        <IntroLineText> {lineIntro} </IntroLineText>
                        <p> {introText} </p>
                        <CampingTag tags={themaEnvrnCl}/>
                    </a>
                </div> 
        </ItemConatiner>
    );
}

const IntroLineText = styled.div`
    font-size: 1rem;
    color : gray;
    font-weight: 400;
    margin: 0.4rem 0;
`

const LocationText = styled.div`
    font-size: 0.8rem;
    color : gray;
    font-weight: 400;
    margin: 0.2rem 0;
`

const Title = styled.div`
    font-size: 1.15rem;
    font-weight: 600;
    margin: 0.8rem 0;
`


const ItemConatiner = styled.div`
    @media screen and (min-width: 1000px) {
        width: 25%;
    }
    @media screen and (min-width: 700px) and (max-width: 999px){
        width: 33%;
    }
    @media screen and (min-width: 1px) and (max-width :699px){
        width: 50%;
    }
    position: relative;
`;

export default CampingItem;