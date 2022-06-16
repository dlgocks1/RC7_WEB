import styled from "styled-components"

function LocalRankingItem({ svg,img }) {
    return (
        <SliderItemStyle>
            <a href="" role="link">
                <BoxartSize7x10>
                    {svg}
                    <BoxartImageInPaddedContainer src={img} />
                </BoxartSize7x10>
            </a>
        </SliderItemStyle>
    );
}

const SliderItemStyle = styled.div`
    box-sizing: border-box;
    padding: 0 0.2vw;
    width: 25%;
`;

const BoxartSize7x10 = styled.div`
    width: 100%;
    height: 0;
    position: relative;
    overflow: hidden;
    padding: 35.714285714% 0;
`;

const BoxartImageInPaddedContainer = styled.img`
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: auto;
    width: 50%;
`;

const Top10Rank = styled.svg`
    width: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: auto;
    left: 0;
`;


export default LocalRankingItem;