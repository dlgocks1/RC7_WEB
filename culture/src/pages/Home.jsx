import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import Header from '../components/Header';
import HomeArticleCamping from '../components/HomeArticleCamping';
import HomeArticleTourism from '../components/HomeArticleTourism';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import arrowIcon from "../assets/icon/navigation_right_icon_white.png";
import HomeArticleExibition from '../components/HomeArticleExibition';
function Home(props) {

    const [target, setTarget] = useState(null);
    const [popupStyle, setPopupStyle] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    // 콜백함수로 IntersectionObserverEntry 및 IntersectionObserver 인자가
    // IntersectionObserver함수에 의해 들어간다.
    const onIntersect = ([entry], observer) => {
        if (entry.isIntersecting && !isLoaded) {
            // 서버로부터 아이템을 받아오거나, 시간이 걸리는 작업 수행 시
            // observing 잠시 해제하기.
            //   observer.unobserve(entry.target);
            //   observer.observe(entry.target);
            setPopupStyle({transform: "translate3d(0px, 0px, 0px)"})
        }
    };

    useEffect(() => {
        let observer;
        if (target) {
            observer = new IntersectionObserver(onIntersect, {
                // 화면의 몇 %까지 올라왔는지 Threshhold 지정
                threshold: 0.7,
            });
            // state로 지정한 target을 observe하겠다.
            observer.observe(target);
        }
        return () => observer && observer.disconnect();
      }, [target]);
    // target이 바뀔때 마다 새로운 observer을 달아준다.

    // 초기 렌더링될 때 target의 state가 지정되면서 observing이 실행되는 것 방지
    // useEffect(() => {
    //     return()=>{
    //         setIsLoaded(false);
    //     }
    // },[]);

    const settings = {
        dots: false,  // 점은 안 보이게
        infinite: true, // 무한으로
        speed: 500,
        slidesToShow: 1, //4장씩 보이게 해주세요
        slidesToScroll: 1, //1장씩 넘어가게
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        arrows : true, // arrow 안보이게
        autoplay: true,
        autoplaySpeed: 3000,
      };

    return (
        <>
            <Header />
            <MainSliderContainer>
                <ContentInfo style={{marginTop:'10%'}}>
                    <h1>
                        문화의 대한 모든 것 
                        <br/>
                        쉽고 간편하게
                    </h1>
                    <h2>
                        CCFM에서 확인하세요.
                    </h2>
                </ContentInfo>
                <Slider {...settings}>
                    <BackgroundImg src="https://t1.daumcdn.net/cfile/tistory/995247335A2C914815"/>
                    <BackgroundImg src="https://t1.daumcdn.net/cfile/tistory/9924E7335A2C914718"/>
                    <BackgroundImg src="https://t1.daumcdn.net/cfile/tistory/994EBE335A2C914B02"/>
                    <BackgroundImg src="https://t1.daumcdn.net/cfile/tistory/992986335A2C914D07"/>
                </Slider>
                <BackgorundCover />
            </MainSliderContainer>
            

            {/* <Article>
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
            </Article> */}

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
            <HomeArticleExibition/>
            
        </>
    );
}

const MainSliderContainer= styled.div`
    height: 80vh;
    min-height: 500px;
    /* min-width: 700px; */
    width: 100%;
    overflow: hidden;
    position: relative;
`

const SamplePrevArrow =styled.div`
    position: absolute;
    color: white;
    top: 45%;
    margin-left: 2%;
    z-index: 1;
    ::before{
        content: "<";
        font-size: 3rem;
        opacity: 0.7;
    }
`;

const SampleNextArrow =styled.div`
 position: absolute;
    color: white;
    top: 45%;
    right: 0;
    margin-right: 2%;
    z-index: 1;
    ::before{
        content: ">";
        font-size: 3rem;
        opacity: 0.7;
    }
`;

const SliderContent= styled.div`
    color: white;
    display: block;
    position: relative;
    border: 1px solid white;
    z-index: 4;
`;

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
    margin-top: 15%;
    align-items: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    left: 0;
    right: 0;
    & h1 {
        margin-left: 10%;
        margin-top: 150px;
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
    background-color: rgba(0,0,0,0.5);
    background: linear-gradient(180deg, white 0%, white 59px, rgba(255, 255, 255, 0) 100%);
`;

const BackgroundImg=styled.img`
    object-fit: cover;
    position: relative;
    height: 70vh;
    opacity: 1;
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