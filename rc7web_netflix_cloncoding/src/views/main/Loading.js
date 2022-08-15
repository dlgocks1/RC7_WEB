/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unstable-nested-components */
import styled from "styled-components"
import LoadingItem from "./LoadingItem";

function Loading(){
    function LodingContent(time) {
        return(
        <SliderItemStyle>
            <BoxartSize16x9 >
                <LoadingItem delaytime = {time} />
            </BoxartSize16x9>
        </SliderItemStyle>
        );
    }

    const repeateLoadingContent = () =>{
        const rows = [];
        for (let i = 0; i < 4; i+=1) {
            rows.push(LodingContent(i*30));
        }
        return rows;
    };

    return(
        <LolomoRow >
            <Slider>
                <div style={{ display: "flex" }} datalabel="Loading">
                    {
                        repeateLoadingContent()
                    }
                </div>
            </Slider>
        </LolomoRow>
    );
}

const BoxartSize16x9 = styled.div`
    width: 100%;
    height: 0;
    z-index: 0;
    position: relative;
    overflow: hidden;
    padding: 28.125% 0;
`;

const BoxartImageInPaddedContainer = styled.div`
    top: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;

`;

const SliderItemStyle = styled.div`
    box-sizing: border-box;
    padding: 0 0.2vw;
    height: 150px;
    width: 25%;
`;

const LolomoRow = styled.div`
    padding-top: 10%;
`;

const Slider = styled.div`
    position: relative;
    margin: 0;
    padding: 0 4%;
    touch-action: pan-y;
    padding-bottom: 1px;
    overflow-x: visible;
    /* background-color: blue; */
`;

export default Loading;