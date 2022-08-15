import styled from "styled-components"
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { setFaveriteDataAction } from "store/favoriteDataReducer";
import FavoritsContent from "./favorites/FavoritsContent";
import Footer from "./Footer";
import HomeContent from "./home/HomeContent";
import Header from "./Header";

function Main(){
    const location = useLocation();

    const [yoffset, setOffset] = useState(0);
    const [yposition, setYposition] = useState(0);
    const {isModal} = useSelector((state)=>(state.episodeModalReducer));
    const dispatch = useDispatch();

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
                    {location.pathname === "/main" ? <HomeContent /> : ""}
                    {location.pathname === "/favorites" ? <FavoritsContent /> :""}
                <Footer />
            </DarkBackground>
        </TopContainer>
    );
}

const TopContainer = styled.div`
    position : ${(props) => (props.type ===true ? "fixed" : "static")};
    top : ${(props) => `-${(props.Ypos)}px`}; 
    overflow-x : clip;
`
const DarkBackground = styled.div`
    background-color: #141414;
    z-index: 0;
    width: 100%;
`;

export default Main;