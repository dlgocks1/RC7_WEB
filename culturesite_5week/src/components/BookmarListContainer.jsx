import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CampingItem from './CampingItem';

function BookmarListContainer() {

    const {isLogin} = useSelector((state)=>state.LoginReducer);
    const { itemList } = useSelector((state) => state.BookmarkReducer);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLogin){
            navigate('/');
        }
    },[isLogin])

    return (
        <>
            <ListContainer>
                {itemList.length===0 && <InfoText>북마크가 없어요.</InfoText>}
                {
                    itemList.map((value, index) => {
                        return (<CampingItem
                            key={value.facltNm}
                            resveUrl={value.resveUrl}
                            firstImageUrl={value.firstImageUrl}
                            facltNm={value.facltNm}
                            addr1={value.addr1}
                            lineIntro={value.lineIntro}
                            intro={value.intro}
                            themaEnvrnCl={value.themaEnvrnCl}
                        />)
                    })
                }
            </ListContainer>
        </>
    );
}

const InfoText = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 50px;
    font-size: 25px;
`;
const ListContainer = styled.div`
    padding: 0 2%;
    display : flex;
    flex-wrap: wrap;
    margin-top: 1.5rem;
`;

export default BookmarListContainer;