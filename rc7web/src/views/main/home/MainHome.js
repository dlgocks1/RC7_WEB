// img를 추가하는 방법
import Header from "../Header";
import HomeContent from "./HomeContent";
import Footer from "../Footer";
import styled from "styled-components"
import { useLocation, useParams } from "react-router-dom";

function MainHome() {
    const location = useLocation();
    const state =location.state; 
    console.log(state);

    const {username} = useParams();
    console.log(username);


    return (
        <DarkBackground>
            <Header />
             <HomeContent />
            <Footer />
        </DarkBackground>
    );
}

const DarkBackground = styled.div`
    background-color: #141414;
    z-index: 0;
    width: 100%;
`;

export default MainHome;