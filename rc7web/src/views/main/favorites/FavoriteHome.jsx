import styled from "styled-components"
import Header from "./Header";
import Footer from "../Footer";
import FavoritsContent from "./FavoritsContent";

const FavoritHome = () => {
    return(
        <DarkBackground>
            <Header />
            <FavoritsContent />
            <Footer />
        </DarkBackground>
    );
}

const DarkBackground = styled.div`
    background-color: #141414;
    z-index: 0;
    width: 100%;
`;
export default FavoritHome;