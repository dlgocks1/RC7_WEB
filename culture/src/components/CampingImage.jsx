import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import img_notReady from '../assets/img/imgnotReady.jpg';

function CampingImage({resveUrl,firstImageUrl}) {

    const [hover,sethover] = useState(false);
    const [imgUrl, setImage] = useState("");

    useEffect(() =>{
        if(firstImageUrl !== undefined){
            setImage(firstImageUrl);
        }else{
            setImage(img_notReady);
        }
    })

    return (
        <ImgContainer
            onMouseEnter={()=>{ sethover(true) }}
            onMouseLeave={()=>{ sethover(false) }}>
          
            <FirstImgLoading />
            <FirstImg 
                 src={imgUrl} />
            {hover ? <OnHover >
                <a
                target={'_blank'}
                href={resveUrl} 
                style={{
                    margin:'auto auto',
                    backgroundColor:'transparent',
                    border: '1px solid white',
                    color: 'white',
                    borderRadius: '5px',
                    fontSize:'1.1rem',
                    padding:'0.8rem',
                    cursor: 'pointer',
                    letterSpacing:'0.2rem',
                    textDecoration: 'none',
                    }}> 예약하기 </a>
            </OnHover> : ""}
            
        </ImgContainer>
    );
}

const OnHover = styled.div`
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const ImgContainer = styled.div`
    padding-top: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
`
const FirstImgLoading = styled.div`
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    object-fit: cover;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 100%;
    min-height: 100%;
`


const FirstImg = styled.img`
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 100%;
    min-height: 100%;
`

export default CampingImage;