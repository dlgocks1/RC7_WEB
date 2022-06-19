import Header from "../Header";
import HomeContent from "../home/HomeContent";
import Footer from "../Footer";
import styled from "styled-components"

function Series() {
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

export default Series;