import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { setinVisible } from '../store/PreViewReducer';
import img_notReady from '../assets/img/imgnotReady.jpg';

function PreView(props) {

    const {x,y,firstImageUrl,addr1,tel,facltNm} = useSelector((state)=>state.PreViewReducer);
    const dispatch = useDispatch();

    const [imgUrl, setImage] = useState("");

    useEffect(() =>{
        if(firstImageUrl !== undefined){
            setImage(firstImageUrl);
        }else{
            setImage(img_notReady);
        }
    })

    const invisibleHover = () =>{
        dispatch(
            setinVisible()
        );
    }

    return (
        <Container
            onMouseLeave={invisibleHover}>
            <SetPosition x={x} y={y} >
                <ImageContainer>
                    <img 
                        style={{objectFit:'cover', width: '100%', height: '100%', borderTopLeftRadius:'10%', borderTopRightRadius:`10%`}}
                    src={imgUrl}/>
                </ImageContainer>
                <div style={{margin: '10px 0 0 20px'}}>
                    <p>{facltNm}</p>
                    <p>{tel}</p>
                    <p>{addr1}</p>
                </div>
            </SetPosition>
        </Container>
    );
}

const ImageContainer = styled.div`
    width: 100%;
    position: relative;
    height: 70%;
`

const SetPosition = styled.div`
    position : absolute;
    overflow: hidden;
    top : ${props=>props.y-100+"px"};
    left : ${props=>props.x-100+"px"};
    border-radius: 10%;
    width: 280px;
    background-color: white;
    height: 230px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
`;

const Container = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
`

export default PreView;