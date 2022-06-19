// img를 추가하는 방법
import Header from "../Header";
import HomeContent from "./HomeContent";
import Footer from "../Footer";
import styled from "styled-components"

function MainHome() {
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