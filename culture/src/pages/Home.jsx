import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import Header from '../components/Header';
import HomeArticleCamping from '../components/HomeArticleCamping';
import HomeArticleTourism from '../components/HomeArticleTourism';

function Home(props) {

    const [target, setTarget] = useState(null);
    const [popupStyle, setPopupStyle] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting && !isLoaded) {
        //   observer.unobserve(entry.target);
        //   observer.observe(entry.target);
            console.log(entry.target);
            setPopupStyle({transform: "translate3d(0px, 0px, 0px)"})
        }
    };

    useEffect(() => {
        let observer;
        if (target) {
            observer = new IntersectionObserver(onIntersect, {
                threshold: 0.7,
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
        <>
            <Header />
            <Article>
                <ContentInfo>
                    <h1>
                        문화의 대한 모든 것 
                        <br/>
                        쉽고 간편하게
                    </h1>
                    <h2>
                        CCFM에서 확인하세요.
                    </h2>
                </ContentInfo>
                
                <BackgroundImg src="https://t1.daumcdn.net/cfile/tistory/995247335A2C914815"/>
                <BackgorundCover />
            </Article>

            <Article style={{height:'50vh'}}>
                <ContentInfo
                ref={setTarget}
                    >
                        <PopupText
                            style={popupStyle}>
                            헬스장 말고 갈곳 없는 당신을 위해 준비했어요. 
                            <br/>
                            밖에도 좀 나가
                        </PopupText>
                    </ContentInfo>
                    <BackgroundImg style={{opacity:'0.3'}} src="https://img.insight.co.kr/static/2020/09/03/700/60m24nihvwho6727vi29.jpg"/>
                    <BackgorundCover />
            </Article>

            <HomeArticleCamping/>
            <HomeArticleTourism/>
            
        </>
    );
}



const PopupText = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 50px;
    margin-top: 110px;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.4;
    transform: translate3d(0px, 150px, 0px);
    transition: all 0.9s;
    color: rgba(46, 45, 45, 0.9);
    font-family: 'Roboto', sans-serif;  
`;

const ContentInfo = styled.div`
    z-index : 1;
    margin-top: 170px;
    align-items: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    & h1 {
        margin-left: 10%;
        font-size: 4rem;
        font-weight: 700;
        line-height: 1.4;
        color: rgba(255, 255, 255, 0.9);
        font-family: 'Roboto', sans-serif;  
    }
    & h2 {
        margin-left: 11%;
        font-size: 2rem;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.9);
        font-family: 'Roboto', sans-serif;  
    }
`;

const BackgorundCover=styled.div`
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 500px;
    background: linear-gradient(180deg, white 0%, white 59px, rgba(255, 255, 255, 0) 100%);
`;

const BackgroundImg=styled.img`
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
    margin : 0 0 100px 0;
    position: relative;
    flex-direction: column;
`;

export default Home;