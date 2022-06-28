import Header from "./Header";
import HomeContent from "./home/HomeContent";
import Footer from "./Footer";
import styled from "styled-components"
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import FavoritsContent from "./favorites/FavoritsContent";

function Main(){
    const location = useLocation();
    // console.log(location.pathname);
    // const [searchParams, setSearchParams] = useSearchParams();
    // const age = searchParams.get('age');
    // const mode = searchParams.get('mode');
    // console.log(typeof(age),typeof(age));
    
    // const {username} = useParams();
    // console.log(username);

    return (
        <DarkBackground>
            <Header path={location.pathname} />
            {location.pathname === "/main" ? <HomeContent /> : ""}
            {location.pathname === "/favorites" ? <FavoritsContent /> :""}

            <Footer />
        </DarkBackground>
    );
}

const DarkBackground = styled.div`
    background-color: #141414;
    z-index: 0;
    width: 100%;
`;

export default Main;