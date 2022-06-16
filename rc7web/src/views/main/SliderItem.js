import styled from "styled-components"

function SliderItem({ imgURL }) {
    return (
        <SliderItemStyle>
            <a href="" role="link">
                <BoxartSize16x9>
                    <BoxartImageInPaddedContainer
                        src={imgURL}
                        alt="" />
                        {imgURL}
                </BoxartSize16x9>
            </a>
        </SliderItemStyle>
    );
}

const SliderItemStyle = styled.div`
    box-sizing: border-box;
    padding: 0 0.2vw;
    width: 25%;
`;

const BoxartSize16x9 = styled.div`
    width: 100%;
    height: 0;
    position: relative;
    overflow: hidden;
    padding: 28.125% 0;
`;

const BoxartImageInPaddedContainer = styled.img`
    top: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
`;

export default SliderItem;