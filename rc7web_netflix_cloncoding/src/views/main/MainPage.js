import styled from "styled-components"
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { setFaveriteDataAction } from "store/action/favoriteData";
import FavoritsContent from "./favorites/FavoritsContent";
import Footer from "./Footer";
import HomeContent from "./home/HomeContent";
import Header from "./Header";

function MainPage(){
    const location = useLocation();
    // console.log(location.pathname);
    // const [searchParams, setSearchParams] = useSearchParams();
    // const age = searchParams.get('age');
    // const mode = searchParams.get('mode');
    // console.log(typeof(age),typeof(age));
    
    // const {username} = useParams();
    // console.log(username);

    const [yoffset, setOffset] = useState(0);
    const [yposition, setYposition] = useState(0);
    const {isModal} = useSelector((state)=>(state.episodeModalReducer));
    const dispatch = useDispatch();

    useEffect(() => {
        // userFavorites.map((value)=>{
        //     if(value.id === localStorage.getItem("userKey")){
        //         dispatch(
        //             setFaveriteDataAction(
        //                 value.itemList
        //             )
        //         )
        //     }
        // })
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
                <HomeContent />
                <Footer />
            </DarkBackground>
        </TopContainer>
    );
}

const TopContainer = styled.div`
    position : ${(props) => (props.type ===true ? "fixed" : "static")};
    top : ${(props) => `-${(props.Ypos)}px`}; 
    overflow : hidden;
`

const DarkBackground = styled.div`
    background-color: #141414;
    z-index: 0;
    width: 100%;
`;

export default MainPage;