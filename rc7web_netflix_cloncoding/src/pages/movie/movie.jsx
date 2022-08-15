import styled from "styled-components"
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { setFaveriteDataAction } from "store/action/favoriteData";
import Header from "views/main/Header";
import Footer from "views/main/Footer";
import HomeSpectialContent from "views/main/home/HomeSpectialContent";
import SeriesContent from "pages/series/seriesContent";

function Movie() {

    const location = useLocation();
    const [yoffset, setOffset] = useState(0);
    const [yposition, setYposition] = useState(0);
    const {isModal} = useSelector((state)=>(state.episodeModalReducer));

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(()=>{
        if(isModal){
            setYposition(yoffset);
        }else{
            window.scrollTo(0,yposition);
        }
    },[isModal])

    return (
        <TopContainer Ypos={yposition} type={isModal}>
            <DarkBackground>
                <Header path={location.pathname} />
                <SeriesContent/>
                <div style={{backgroundColor:'#141414' ,flexDirection:'column',display: 'flex',justifyContent:'space-between'}}>
                    <Footer />
                </div>
            </DarkBackground>
        </TopContainer>
    );
}

const TopContainer = styled.div`
    position : ${(props) => (props.type ===true ? "fixed" : "static")};
    top : ${(props) => `-${(props.Ypos)}px`};
    background-color: #141414;
`;

const DarkBackground = styled.div`
    background-color: #141414;
    z-index: 0;
    width: 100%;
`;

export default Movie;