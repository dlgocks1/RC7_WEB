import React from "react";
import { useDispatch } from "react-redux";
import { setEpisdoeModalOff } from "store/action/episodemodal";
import styled from "styled-components"

function PreViewModelClose(){

    const dispatch = useDispatch();    
    
    const closeModalAction = () =>{
        dispatch(
            setEpisdoeModalOff()
        );
    }

    return(
        <CloseContainer onClick={closeModalAction}>
            <CloseSVG viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard" data-uia="previewModal-closebtn" role="button" aria-label="close" tabindex="0"><path fillRule="evenodd" clipRule="evenodd" d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z" fill="currentColor"/></CloseSVG>
        </CloseContainer>
    );
}

const CloseSVG = styled.svg`
    width: 20px;
    height: 20px;
    background-color: #181818;
    border-radius: 50%;
    padding: 8px;
`;

const CloseContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    cursor: pointer;
    margin: 3em;
`;

export default PreViewModelClose;