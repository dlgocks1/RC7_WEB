import { Link } from "react-router-dom";
import styled from "styled-components"
import EpisodeSelector from "./EpisodeSelector";

function PreViewModelInfo(){
    return(
        <Container>
            <ModelDetail>
                <div style={{paddingBottom: "0.5em"}}>
                    <div style={{display: 'flex', flexDirection: 'row', margin:"0.8em 0"}}>
                        <span style={{fontSize:"16px", marginRight:"0.5em", fontWeight:"700"}}>2022</span>
                        <SpanBox>15+</SpanBox>
                        <span  style={{fontSize:"16px", marginRight:"0.5em", fontWeight:"700"}}>에피소드 12개</span>
                        <SpanBox>HD</SpanBox>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', margin:"0.8em 0",alignItems:"center"}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon svg-icon-top-10-badge" style={{color: "rgb(229, 9, 20)", marginRight:"0.5em"}}><path fill-rule="evenodd" clip-rule="evenodd" d="M3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2H3ZM17.2299 10.8934C16.6125 10.4971 15.8913 10.2996 15.0673 10.2996C14.2444 10.2996 13.5231 10.4971 12.9056 10.8934C12.2881 11.2905 11.8114 11.8536 11.4762 12.5839C11.1411 13.3149 10.9735 14.1695 10.9735 15.1493C10.9735 16.1383 11.1411 16.9957 11.4762 17.7221C11.8114 18.4478 12.2881 19.0091 12.9056 19.4052C13.5231 19.8014 14.2444 20 15.0673 20C15.8913 20 16.6125 19.8014 17.2299 19.4052C17.8475 19.0091 18.3242 18.4478 18.6594 17.7221C18.9945 16.9957 19.1612 16.1383 19.1612 15.1493C19.1612 14.1695 18.9945 13.3149 18.6594 12.5839C18.3242 11.8536 17.8475 11.2905 17.2299 10.8934ZM9.47922 19.7994V10.3263L4.92658 11.4351V13.2656L7.20991 12.6774V19.7994H9.47922ZM13.7606 12.9513C14.0767 12.4298 14.5117 12.1701 15.0673 12.1701C15.6239 12.1701 16.0589 12.4298 16.3751 12.9513C16.6913 13.4718 16.8489 14.2058 16.8489 15.1493C16.8489 16.0938 16.6913 16.8268 16.3751 17.3473C16.0589 17.8688 15.6239 18.1296 15.0673 18.1296C14.5117 18.1296 14.0767 17.8688 13.7606 17.3473C13.4442 16.8268 13.2868 16.0938 13.2868 15.1493C13.2868 14.2058 13.4442 13.4718 13.7606 12.9513ZM13.0737 4.19939C12.7285 4.06677 12.3485 4 11.9344 4C11.5194 4 11.1405 4.06677 10.7952 4.19939C10.4521 4.33122 10.1518 4.51771 9.89848 4.75622C9.64404 4.99367 9.44963 5.27379 9.312 5.59396C9.17437 5.91504 9.10556 6.26299 9.10556 6.63872C9.10556 7.01446 9.17437 7.36241 9.312 7.68349C9.44963 8.00352 9.64404 8.28286 9.89848 8.52136C10.1518 8.75974 10.4521 8.9453 10.7952 9.07792C11.1405 9.20976 11.5194 9.27745 11.9344 9.27745C12.3485 9.27745 12.7285 9.20976 13.0737 9.07792C13.4168 8.9453 13.7161 8.75974 13.9704 8.52136C14.2239 8.28286 14.4194 8.00352 14.557 7.68349C14.6947 7.36241 14.7635 7.01446 14.7635 6.63872C14.7635 6.26299 14.6947 5.91504 14.557 5.59396C14.4194 5.27379 14.2239 4.99367 13.9704 4.75622C13.7161 4.51771 13.4168 4.33122 13.0737 4.19939ZM8.75526 5.30869V4.12288H4V5.30869H5.63894V9.15457H7.11632V5.30869H8.75526ZM18.9904 4.3469C18.6683 4.19847 18.2893 4.12327 17.8484 4.12327H15.5101V9.15392H16.9855V7.70838H17.8484C18.2893 7.70838 18.6683 7.63318 18.9904 7.48384C19.3117 7.33541 19.5601 7.12483 19.7366 6.85484C19.9132 6.58578 20 6.26931 20 5.90845C20 5.55682 19.9132 5.24587 19.7366 4.97602C19.5601 4.70683 19.3117 4.49624 18.9904 4.3469ZM11.2392 5.39166C11.4387 5.27379 11.6701 5.21545 11.9344 5.21545C12.1988 5.21545 12.4302 5.27379 12.6297 5.39166C12.8292 5.50954 12.9849 5.67653 13.0955 5.89001C13.2072 6.10521 13.2632 6.35386 13.2632 6.63872C13.2632 6.92267 13.2072 7.17224 13.0955 7.38651C12.9849 7.60092 12.8292 7.76791 12.6297 7.88565C12.4302 8.00352 12.1988 8.062 11.9344 8.062C11.6701 8.062 11.4387 8.00352 11.2392 7.88565C11.0397 7.76791 10.8841 7.60092 10.7724 7.38651C10.6617 7.17224 10.6057 6.92267 10.6057 6.63872C10.6057 6.35386 10.6617 6.10521 10.7724 5.89001C10.8841 5.67653 11.0397 5.50954 11.2392 5.39166ZM16.9855 5.27195H17.6149C17.9252 5.27195 18.1515 5.32845 18.2913 5.43895C18.4309 5.54931 18.5017 5.70616 18.5017 5.90845C18.5017 6.11535 18.4309 6.27589 18.2913 6.38902C18.1515 6.50228 17.9252 6.55878 17.6149 6.55878H16.9855V5.27195Z" fill="currentColor"></path></svg>
                        <span style={{fontSize:"15px", marginRight:"0.5em", fontWeight:"700"}}>
                            오늘 시리즈 순위 8위
                        </span>
                    </div>
                    <div style={{lineHeight: "24px", fontSize: "14px"}}>
                        스파이, 암살자 그리고 초능력자, 각자 다른 사정이 있는 세사람이 서로에게 정체를 숨기고 가상 가족을 결성한다.
                    </div>
                </div>
                <div >
                    <TagInfo>
                        <span style={{color:"#777"}}>출연 : </span>
                        <TagItem> 에구치 타쿠야 </TagItem>
                        <TagItem> 타네자키 아츠미 </TagItem>
                        <TagItem> 하야미 사오리, </TagItem>
                        <TagItem> 더보기 </TagItem>
                    </TagInfo>

                    <TagInfo>
                        <span style={{color:"#777"}}>장르 : </span>
                        <TagItem> 일본작품, </TagItem>
                        <TagItem> 망가 원작 시리즈, </TagItem>
                        <TagItem> 일본 소년 만화를 만나다 </TagItem>
                    </TagInfo>

                    <TagInfo>
                        <span style={{color:"#777"}}>시리즈 특징 : </span>
                        <TagItem> 색다른, </TagItem>
                        <TagItem> 흥미진진, </TagItem>
                    </TagInfo>
                </div>
            </ModelDetail>

            <EpisodeSelector/>
        </Container>
    );
}

const TagItem = styled.a`
    color: #ddd;
    cursor: pointer;
    :hover{
        border-bottom: 1px solid white;
    }
`;

const SpanBox = styled.span`
    font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
    text-transform: uppercase;
    border: solid 1px rgba(255,255,255,.4);
    padding: 0 0.4em;
    unicode-bidi: normal;
    margin-right: 0.5em;
    text-overflow: ellipsis;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
`;

const TagInfo = styled.div`
    font-size: 14px;
    line-height: 20px;
    margin: 0.5em;
    margin-left: 0;
    word-break: break-word;
`

const ModelDetail = styled.div`
    grid-template-columns: minmax(0,2fr) minmax(0,1fr);
    column-gap: 2em;
    position: relative;
    width: 100%;
    background-color: #181818;
    display: grid;
`;

const Container = styled.div`
    background-color: #181818;
    position: relative; 
    color : #fff;
    
    font-size: 16px;
    padding: 0 3em;
`;
export default PreViewModelInfo;