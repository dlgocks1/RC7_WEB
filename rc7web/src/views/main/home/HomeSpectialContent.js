import mainvedio from "../../src/dummyVedio.mp4"
import {React, useState} from "react";
import styled from "styled-components";

function HomeSpectialContent() {
    const [isPlaying, setPlaying] = useState(true);

    return (
        <BillboardRow aria-label="특별 소개 콘텐츠">
            <div>
                <div>
                    <StaticImage src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABb7C4UlDhubk3rfm5SJ4NuuPd98JH1afMwZhHseSNmYhA0rp78O7DbFsHcNxlz4-RxrwD0km-uR-nf39H7b703tpeekybKqg_w9X.webp?r=9d1" alt="" />
                </div>
                <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
                    <video onEnded={()=>
                        setPlaying(false)
                    } src={mainvedio} autoPlay muted={true} style={isPlaying===false ? {visibility : "hidden",position:"relative",left:"0",right:"0",top:"0",width:"100%"} : {visibility : "visible",position:"relative",left:"0",right:"0",top:"0",width:"100%"}}></video>
                </div>
                <EmbeddedComponents>
                    <ColorSupplementary>
                        <div className="play-icon" role="presentation">
                            <svg width="16" style={{width:"100%",height:"100%"}} height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clopRule="evenodd"
                                d="M13.1747 3.07702C11.01 2.79202 8.81537 3.30372 6.99988 4.51679C5.18439 5.72987 3.8718 7.56158 3.30668 9.67065C2.74155 11.7797 2.96243 14.0223 3.92815 15.9806C4.89388 17.9389 6.53859 19.4794 8.55586 20.3149C10.5731 21.1505 12.8254 21.2242 14.893 20.5224C16.9606 19.8205 18.7025 18.391 19.7942 16.5L18.0622 15.5C17.2131 16.9708 15.8582 18.0826 14.2501 18.6285C12.642 19.1744 10.8902 19.1171 9.32123 18.4672C7.75224 17.8173 6.47302 16.6192 5.7219 15.096C4.97078 13.5729 4.79899 11.8287 5.23853 10.1883C5.67807 8.5479 6.69897 7.12324 8.11102 6.17973C9.52307 5.23623 11.23 4.83824 12.9137 5.05991C14.5974 5.28158 16.1432 6.10778 17.2629 7.3846C18.1815 8.43203 18.762 9.7241 18.9409 11.0921L17.5547 10.168L16.4453 11.8321L19.4453 13.8321C19.7812 14.056 20.2188 14.056 20.5547 13.8321L23.5547 11.8321L22.4453 10.168L20.9605 11.1578C20.784 9.27909 20.0201 7.49532 18.7666 6.06591C17.3269 4.42429 15.3395 3.36202 13.1747 3.07702Z"
                                fill="currentColor"></path>
                        </svg></div>
                    </ColorSupplementary>
                    <MaturityRating>
                        <span>15+</span>
                    </MaturityRating>
                </EmbeddedComponents>
            </div>

            {/* <!-- 자막 및 내용 --> */}
            <div style={{top : "0",bottom:"0",right:"0",left:"0",position:"absolute"}}>
                <Info>
                    <div>
                        <div style={{minHeight:"13.2vw",position:"relative",marginBottom:"1.2vw"}}>
                            <img alt="나의 해방일지" style={{width:"100%",transfromOrigin:"bottom left"}} src="https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVm-dRGTkKI4oxsIPQExuwkOt3BNrq2rDNu3O3e4W6fBNOjLWAW14sQ11qVz29r_qDz9PqlKWvMZTXNObquvFbsjpEvyg9rcAp4Lot0HU9kB.webp?r=f61"
                                title="나의 해방일지" />
                        </div>
                        <div>
                            <div style={{fontSize:"1.6vw",color:"white",margin:"1vw 0",alignItems:"center",fontWeight:"700"}}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" style={{ color: "#E50914", marginRight:"0.5em",width:"1.5em",height:"1.5em" }}>
                                    <path fillRule="evenodd" clopRule="evenodd"
                                        d="M3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2H3ZM17.2299 10.8934C16.6125 10.4971 15.8913 10.2996 15.0673 10.2996C14.2444 10.2996 13.5231 10.4971 12.9056 10.8934C12.2881 11.2905 11.8114 11.8536 11.4762 12.5839C11.1411 13.3149 10.9735 14.1695 10.9735 15.1493C10.9735 16.1383 11.1411 16.9957 11.4762 17.7221C11.8114 18.4478 12.2881 19.0091 12.9056 19.4052C13.5231 19.8014 14.2444 20 15.0673 20C15.8913 20 16.6125 19.8014 17.2299 19.4052C17.8475 19.0091 18.3242 18.4478 18.6594 17.7221C18.9945 16.9957 19.1612 16.1383 19.1612 15.1493C19.1612 14.1695 18.9945 13.3149 18.6594 12.5839C18.3242 11.8536 17.8475 11.2905 17.2299 10.8934ZM9.47922 19.7994V10.3263L4.92658 11.4351V13.2656L7.20991 12.6774V19.7994H9.47922ZM13.7606 12.9513C14.0767 12.4298 14.5117 12.1701 15.0673 12.1701C15.6239 12.1701 16.0589 12.4298 16.3751 12.9513C16.6913 13.4718 16.8489 14.2058 16.8489 15.1493C16.8489 16.0938 16.6913 16.8268 16.3751 17.3473C16.0589 17.8688 15.6239 18.1296 15.0673 18.1296C14.5117 18.1296 14.0767 17.8688 13.7606 17.3473C13.4442 16.8268 13.2868 16.0938 13.2868 15.1493C13.2868 14.2058 13.4442 13.4718 13.7606 12.9513ZM13.0737 4.19939C12.7285 4.06677 12.3485 4 11.9344 4C11.5194 4 11.1405 4.06677 10.7952 4.19939C10.4521 4.33122 10.1518 4.51771 9.89848 4.75622C9.64404 4.99367 9.44963 5.27379 9.312 5.59396C9.17437 5.91504 9.10556 6.26299 9.10556 6.63872C9.10556 7.01446 9.17437 7.36241 9.312 7.68349C9.44963 8.00352 9.64404 8.28286 9.89848 8.52136C10.1518 8.75974 10.4521 8.9453 10.7952 9.07792C11.1405 9.20976 11.5194 9.27745 11.9344 9.27745C12.3485 9.27745 12.7285 9.20976 13.0737 9.07792C13.4168 8.9453 13.7161 8.75974 13.9704 8.52136C14.2239 8.28286 14.4194 8.00352 14.557 7.68349C14.6947 7.36241 14.7635 7.01446 14.7635 6.63872C14.7635 6.26299 14.6947 5.91504 14.557 5.59396C14.4194 5.27379 14.2239 4.99367 13.9704 4.75622C13.7161 4.51771 13.4168 4.33122 13.0737 4.19939ZM8.75526 5.30869V4.12288H4V5.30869H5.63894V9.15457H7.11632V5.30869H8.75526ZM18.9904 4.3469C18.6683 4.19847 18.2893 4.12327 17.8484 4.12327H15.5101V9.15392H16.9855V7.70838H17.8484C18.2893 7.70838 18.6683 7.63318 18.9904 7.48384C19.3117 7.33541 19.5601 7.12483 19.7366 6.85484C19.9132 6.58578 20 6.26931 20 5.90845C20 5.55682 19.9132 5.24587 19.7366 4.97602C19.5601 4.70683 19.3117 4.49624 18.9904 4.3469ZM11.2392 5.39166C11.4387 5.27379 11.6701 5.21545 11.9344 5.21545C12.1988 5.21545 12.4302 5.27379 12.6297 5.39166C12.8292 5.50954 12.9849 5.67653 13.0955 5.89001C13.2072 6.10521 13.2632 6.35386 13.2632 6.63872C13.2632 6.92267 13.2072 7.17224 13.0955 7.38651C12.9849 7.60092 12.8292 7.76791 12.6297 7.88565C12.4302 8.00352 12.1988 8.062 11.9344 8.062C11.6701 8.062 11.4387 8.00352 11.2392 7.88565C11.0397 7.76791 10.8841 7.60092 10.7724 7.38651C10.6617 7.17224 10.6057 6.92267 10.6057 6.63872C10.6057 6.35386 10.6617 6.10521 10.7724 5.89001C10.8841 5.67653 11.0397 5.50954 11.2392 5.39166ZM16.9855 5.27195H17.6149C17.9252 5.27195 18.1515 5.32845 18.2913 5.43895C18.4309 5.54931 18.5017 5.70616 18.5017 5.90845C18.5017 6.11535 18.4309 6.27589 18.2913 6.38902C18.1515 6.50228 17.9252 6.55878 17.6149 6.55878H16.9855V5.27195Z"
                                        fill="currentColor"></path>
                                </svg>
                                오늘 TV 프로그램 순위 2위
                            </div>
                            {/* <div> */}
                            <Synopsis>
                                어른이 된 후 매일매일 되풀이되는 단조로운 일상에 지친 세 남매. 한없이 평범한 삶 속에서 특별한 성취와 자유를 찾아 나선다.
                            </Synopsis>
                            {/* </div> */}

                            <BillboardLinks>
                                <a aria-label="재생" style={{flexShrink :"0", alignItems:"center"}} href="">
                                    <PlayButtonWrapper tabIndex="-1" type="button">
                                        <div style={{height:"2.4rem",width:"2.4rem"}}>
                                            <div role="presentation">
                                                <svg style={{width:"100%", height:"100%"}} width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                    <path
                                                        d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div style={{ width: "1rem" }}></div>
                                        <PlayText>재생</PlayText>
                                    </PlayButtonWrapper>
                                </a>

                                <MoreInfobtWrapper type="button">
                                    <div  style={{height:"2.4rem",width:"2.4rem"}}>
                                        <div role="presentation">
                                            <svg style={{width:"100%", height:"100%"}} width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clopRule="evenodd"
                                                    d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div style={{ width: "1rem" }}></div>
                                    <span className="more-info-text">상세 정보</span>
                                </MoreInfobtWrapper>
                            </BillboardLinks>
                        </div>
                    </div>
                </Info>
            </div>
        </BillboardRow>
    );
}


const BillboardRow = styled.div`
    top: 0;
    right: 0;
    left: 0;
    user-select: none;
    background-color: #000;
    position: relative;
    z-index: -1;
    height: 0;
    padding-bottom: 40%;
    margin-bottom: 40px;
`;

const StaticImage = styled.img`
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    position: absolute;
    opacity: 1;
    background-size: cover;
    z-index: 0;
`;

const EmbeddedComponents = styled.div`
    position: absolute;
    bottom: 10%;
    right: 0%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    display : flex;
`;

const ColorSupplementary =styled.button`
    margin-right: 1.1vw;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.7);
    color: white;
    border-radius: 50%;
    cursor: pointer;
    padding: 5px;
    z-index: 2;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    & > .play-icon{
        width: 16px;
        height: 16px;
    }`
;

const MaturityRating = styled.span`
    border: solid 3px #dcdcdc;
    border-style: none none none solid;
    background-color: rgba(51,51,51,.6);
    font-size: 1.1vw;
    padding: 0.5vw 3.5vw 0.5vw 0.8vw;
    display: flex;
    align-items: center;
    height: 2.4vw;
    box-sizing: border-box;
`;

const Info = styled.div`
    position: absolute;
    top: 100%;
    bottom: 35%;
    left: 4%;
    width: 36%;
    z-index: 10;
    justify-content: flex-end;
    flex-direction: column;
    display: flex;
`;

const Synopsis = styled.div`
    font-weight: 400;
    line-height: normal;
    width: 100%;
    font-size: 1.2vw;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
    margin-top: 0.1vw;
`;

const BillboardLinks = styled.div`
    margin-top: 1.5vw;
    white-space: nowrap;
    display: flex;
    line-height: 88%;
`;

const PlayButtonWrapper = styled.button`
    align-items: center;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    justify-content: center;
    padding: 0.8rem 2.4rem 0.8rem 2rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    display : flex;
    &:hover{
        background-color: rgba(255, 255, 255, 0.7);
    }
`;

const PlayText = styled.span`
    font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-weight: normal;
    display: block;
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 2.4rem;
`;

const MoreInfobtWrapper = styled.div`
    cursor: pointer;
    flex-shrink: 0;
    padding: 0.8rem 2.4rem 0.8rem 2rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    border: 0;
    background-color: rgba(109,109,110,0.7);
    color: white;
    opacity: 1;
    justify-content: center;
    align-items: center;
    display : flex;
    &:hover{
        background-color: rgba(0,0,0, 0.4);
    }
`;

export default HomeSpectialContent;