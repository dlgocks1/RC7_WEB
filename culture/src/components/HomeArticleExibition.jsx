import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import performanceVedio from "../assets/video/performance.mp4"

function HomeArticleExibition(props) {
    const [target, setTarget] = useState(null);
    const [popupStyle, setPopupStyle] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting && !isLoaded) {
        //   observer.unobserve(entry.target);
        //   observer.observe(entry.target);
            console.log(entry.target);
            setPopupStyle({opacity : "1",transform: "translate3d(0px, 0px, 0px)"})
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

    // useEffect(() => {
    //     return()=>{
    //         setIsLoaded(false);
    //     }
    // },[]);

    return (
        <Article>
            <CampintContetnInfo
                style={popupStyle}
                ref={setTarget}>
                <CampingText>공연</CampingText>
                <h2>생각을 버리고</h2>
                <h2>뛰어보는 경험을 위해</h2>
                <button>내 주변의 공연 정보 얻기</button>
            </CampintContetnInfo>
            <BackgroundImg src={performanceVedio} muted={true} autoPlay={true} loop={true}/>
            {/* <BackgroundImg src="https://post-phinf.pstatic.net/MjAxOTAxMjhfMjY4/MDAxNTQ4NjYzNTQ5MDIy.RVauZx3wuSFw0dsKXPKPL2yLp9LW0IldT-niEgCLefUg.54yKXMDu0_c6RkXWKlMgxqfbNT-gdoj9q5h-TuAFKRAg.JPEG/GettyImages-jv11322346-2.jpg?type=w1200"/> */}
        </Article>
    );
}

const BackgroundImg=styled.video`
    position: absolute;
    left: 0;
    right: 0;
    object-fit: cover;
    opacity: 0.8;
    height: 100%;
    width: 100%;
`;

const Article= styled.div`
    display: flex;
    min-height: 500px;
    height: 70vh;
    margin : 100px 0;
    position: relative;
    flex-direction: column;
`;

const CampintContetnInfo = styled.div`
    z-index: 1;
    opacity: 0;
    margin-right: 10%;
    margin-top: 10rem;
    transform: translate3d(0px, 150px, 0px);
    transition: all 0.9s;
    text-align: center;
    & h2{
        font-size : 2.5rem;
        color : rgba(255,255,255,1);
        font-weight: 600;
        line-height: 3rem;
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
            background-color: rgba(0,0,0,0.3);
        }
    }
`;

const CampingText = styled.div`
    font-size : 3.5rem;
    color : white;
    font-weight: 700;
    margin-bottom: 50px;
`;
export default HomeArticleExibition;