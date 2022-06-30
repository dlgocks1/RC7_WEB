import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEpisdoeModalOff } from "reducers/episodemodalReducer";
import styled from "styled-components"
import PreViewModelClose from "./PreViewModelClose";
import PreViewModelInfo from "./PreViewModelInfo";
import VedioPlayerContainer from "./VedioPlayerContainer";

function Dialog(){

    const dispatch = useDispatch();
    function CloseModalAction(){
        dispatch(
            setEpisdoeModalOff()
        )
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
    })

    return(
        <>
        <PreViewModel>
            <DialogContainer>

                <VedioPlayerContainer/>
                <PreViewModelClose/>

                <PreViewModelInfo />

            </DialogContainer>
        </PreViewModel>
        <PreviewModelBackDrop onClick={CloseModalAction}/>
        </>
    );
}

const PreviewModelBackDrop = styled.div`
    position: fixed;
    top: 0;
    z-index: 1;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.7;
    background-color: #000;
`;

const PreViewModel = styled.div`
    width: 100%;
    height : 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    /* background-color: rgba(0,0,0,0.7); */
    display: flex;
    justify-content: center;
`

const DialogContainer = styled.div`
    width: 850px;
    top: 18px;
    left: auto;
    z-index: 2;
    position: absolute;
    transform-origin: center top;
    transform: translateX(0px) translateY(calc(-18px + 2em)) scaleX(1) scaleY(1) translateZ(0px);
    opacity: 1;
    box-shadow: rgb(0 0 0 / 75%) 0px 3px 10px;
    margin-bottom: 2em;
    min-width: 850px;

    border-radius: 6px;
    height: 100%;
`
export default Dialog;