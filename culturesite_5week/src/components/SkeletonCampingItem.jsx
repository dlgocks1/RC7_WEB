import React from 'react';
import styled from 'styled-components';

function SkeletonCampingItem(props) {
    return (
        <ItemConatiner>
                <div style={{padding: "0 0.4rem 3.5rem 0.4rem"}}>
                    <ImgContainer>
                        <FirstImgLoading />
                    </ImgContainer>
                    <Title>  </Title>
                    <LocationText> </LocationText>
                    <LocationText> </LocationText>
                </div> 
        </ItemConatiner>
    );
}


const ImgContainer = styled.div`
    padding-top: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
`

const FirstImgLoading = styled.div`
    position: absolute;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 100%;
    min-height: 100%;
`

const LocationText = styled.div`
    color : gray;
    height: 0.8rem;
    width: 100%;
    margin: 0.2rem 0;
    border-radius: 5px;
    animation: skeleton-gradient 1.8s infinite ease-in-out;

`;

const Title = styled.div`
    width: 100%;
    height: 1.15rem;
    border-radius: 5px;
    background-color: gray;
    margin: 0.8rem 0;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
`;

const ItemConatiner = styled.div`
    @media screen and (min-width: 1000px) {
        width: 25%;
    }
    @media screen and (min-width: 700px) and (max-width: 999px){
        width: 33%;
    }
    @media screen and (min-width: 1px) and (max-width :699px){
        width: 50%;
    }
    position: relative;
`;

export default SkeletonCampingItem;