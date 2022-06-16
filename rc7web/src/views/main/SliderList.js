import Slider_Item from "./SliderItem";
import styled from "styled-components"


function ViewContainer({ name, imgURLList }) {
    return (
        <LolomoRow>
            <RowHeader>
                <a href="">
                    <RowHeaderTitle>{name}</RowHeaderTitle>
                </a>
            </RowHeader>
            <div>
                <Slider>
                    <HandlePrev tabIndex="0" role="button" aria-label="이전 콘텐츠 보기"><b
                        className="indicator-icon"></b>
                    </HandlePrev>

                    <div className="showPeek" style={{ paddingBottom: "1px" }}>
                        <div style={{ display: "flex" }}>
                            {imgURLList.map((value) => {
                                return (<Slider_Item imgURL={value} />);
                            })}
                        </div>
                    </div>

                    <HandleNext tabIndex="0" role="button" aria-label="콘텐츠 더 보기"><b
                        className="indicator-icon"></b>
                    </HandleNext>
                </Slider>
            </div>
        </LolomoRow>
    );
}

const LolomoRow = styled.div`
    margin: 3vw 0;
    z-index: 1;
    line-height: 1.3;
`;

const RowHeader = styled.h2`
    font-weight: bold;
    padding: 0 4%;
    vertical-align: bottom;
    line-height: 1.25vw;
    font-size: 1.4vw;
`;

const RowHeaderTitle = styled.div`
    display: table-cell;
    vertical-align: bottom;
    line-height: 1.25vw;
    font-size: 1.4vw;
`;

const Slider = styled.div`
    z-index: 2;
    position: relative;
    margin: 0;
    padding: 0 4%;
    touch-action: pan-y;
    overflow-x: visible;
`;

const HandlePrev = styled.span`
    background: rgba(20,20,20,.5);
    left: -2px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4%;
    display: flex;
    color: #fff;
`;

const HandleNext = styled.span`
    background: rgba(20,20,20,.5);
    right: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4%;
    display: flex;
    color: #fff;
`;


export default ViewContainer;