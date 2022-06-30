import Body from "./Body";
import Footer from "../home/Footer";
import styled from "styled-components"

function Login(){
    return(
        <DarkBackground>
            <LoginBackGround>
                <img style={{ minHeight: "100%", width: "100%"}} src="https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/afb43404-fad1-4652-b371-7cb7456e539a/KR-ko-20220613-popsignuptwoweeks-perspective_alpha_website_small.jpg"/>
                <ImgBackground/>
            </LoginBackGround>
            <Body />
            <Footer type="login"/>
            
        </DarkBackground>
    );
}

const DarkBackground = styled.div`
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    position: relative;

`;


const ImgBackground = styled.div`
    background: rgba(0,0,0,.4);
    position : absolute;
    left : 0;
    bottom : 0;
    top : 0;
    right : 0;
`;

const LoginBackGround = styled.div`
    /* background-color : #000; */
    background-size: cover;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    display: block;
    height: 100%;
    min-height: 100vh;
     /* opacity: .5; */
`;


export default Login;