import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import campingVedio from "../assets/video/camping.mp4";

function HomeArticleCamping() {
    const [target, setTarget] = useState(null);
    const [popupStyle, setPopupStyle] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting && !isLoaded) {
        //   observer.unobserve(entry.target);
        //   observer.observe(entry.target);
            console.log(entry.target);
            setPopupStyle({opacity:"1",transform: "translate3d(0px, 0px, 0px)"})
        }
    };

    useEffect(() => {
        let observer;
        if (target) {
            observer = new IntersectionObserver(onIntersect, {
                threshold: 0.5,
            });
            observer.observe(target);
        }
        return () => observer && observer.disconnect();
      }, [target]);

    useEffect(() => {
        return()=>{
            setIsLoaded(false);
        }
    },[]);

    return (
        <Article>
            <CampintContetnInfo
            style={popupStyle}
            ref={setTarget}>
                <CampingText>캠핑</CampingText>
                <h2>혼자 떠나도, 같이 떠나도 좋아요</h2>
                <h2>일단 출발해보자고요.</h2>
                <button>내 주변의 캠핑 정보 얻기</button>
            </CampintContetnInfo>
            <BackgroundImg src={campingVedio} muted={true} autoPlay={true} loop={true}/>

            {/* <BackgroundImg src="https://www.10wallpaper.com/wallpaper/1366x768/1607/Tent_camping_mountains_sunset-High_Quality_HD_Wallpaper_1366x768.jpg"/> */}
        </Article>
    );
}

const BackgroundImg=styled.video`
    position: absolute;
    left: 0;
    right: 0;
    object-fit: cover;
    opacity: 0.7;
    height: 100%;
    width: 100%;
`;

const Article= styled.div`
    display: flex;
    min-height: 600px;
    height: 70vh;
    margin : 100px 0;
    position: relative;
    flex-direction: column;
`;

const CampintContetnInfo = styled.div`
    z-index: 1;
    margin-left: 10%;
    margin-top: 15%;
    opacity : 0;
    transform: translate3d(0px, 150px, 0px);
    transition: all 0.9s;
    & h2{
        font-size : 2.5rem;
        color : rgba(255,255,255,1);
        font-weight: 600;
        line-height: 
        3rem;
    }
    & button{
        font-size: 1.5rem;
        background-color: transparent;
        border: 1px solid white;
        border-radius: 50px;
        color: white;
        margin-top: 20px;
        cursor: pointer;
        padding: 10px 30px;
        &:hover{
            background-color: rgba(0,0,0,0.2);
        }
    }
`;

const CampingText = styled.div`
    font-size : 3.5rem;
    color : white;
    font-weight: 700;
    margin-bottom: 50px;
`;


export default HomeArticleCamping;