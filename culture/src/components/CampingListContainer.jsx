import React, { useEffect, useState } from 'react';
import CampingItem from './CampingItem';
import styled from 'styled-components';
import { campingMockdata } from '../utils/mockData';
import axios from 'axios';
import KaKaoMap from './KakaoMap';
import SkeletonKakaoMap from './SkeletonKakaoMap';
import SkeletonCampingItem from './SkeletonCampingItem';
import useGetData from '../hoc/useGetData';

function CampingListContainer(props) {
    const [campingData, setCampingData] = useState([]);
    // const [nowLoading, setNowLoading] = useState(false);
    const tempArr = new Array(10).fill(0);
    const {data, error, isLoading} = useGetData('http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/locationBasedList?serviceKey=uQEBqklQ8iRzL1OLrXwjYa6xIfWCRrOLfyo2HAr4hI8RvzDnTeWL5VqVJCYcIOYy%2BJqQBZSuD7hd86jJzep6%2FQ%3D%3D&pageNo=1&numOfRows=10&MobileOS=ETC&MobileApp=AppTest&mapX=127.1791616&mapY=37.5652352&radius=150000');
    const [nowLoading, setNowLoading] = useState(false);
    useEffect(() => {
        if(isLoading){
            setCampingData(data.response.body.items.item);
            setNowLoading(true);
        }
    }, [isLoading]);

    return (
        <>
        {nowLoading ?
            <KaKaoMap itemData={campingData} type={"CAMPING"} />:
            <SkeletonKakaoMap/>
        }
        <ListContainer>
            {nowLoading ? 
                campingData.map((value,index)=>{
                    return(<CampingItem
                        key = {index}
                        resveUrl = {value.resveUrl}
                        firstImageUrl={value.firstImageUrl}
                        facltNm={value.facltNm}
                        addr1={value.addr1}
                        lineIntro={value.lineIntro}
                        intro={value.intro}
                        themaEnvrnCl={value.themaEnvrnCl}
                    />)
                }) :
                tempArr.map((value,index)=>{
                    return(<SkeletonCampingItem key = {index}/>)
                })
            }

        </ListContainer>
        </>

    );
}
const ListContainer = styled.div`
    padding: 0 2%;
    display : flex;
    flex-wrap: wrap;
    margin-top: 1.5rem;
`;

export default CampingListContainer;