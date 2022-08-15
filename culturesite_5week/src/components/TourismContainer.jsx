import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import KaKaoMap from './KakaoMap';
import CampingItem from './CampingItem';
import SkeletonKakaoMap from './SkeletonKakaoMap';
import SkeletonCampingItem from './SkeletonCampingItem';
import useGetData from '../hoc/useGetData';

function TourismContainer() {
    const [tourismData, setTourismData] = useState([]);
    const tempArr = new Array(10).fill(0);
    const {data, error, isLoading} = useGetData(`http://api.visitkorea.or.kr/openapi/service/rest/KorService/locationBasedList?serviceKey=uQEBqklQ8iRzL1OLrXwjYa6xIfWCRrOLfyo2HAr4hI8RvzDnTeWL5VqVJCYcIOYy%2BJqQBZSuD7hd86jJzep6%2FQ%3D%3D&numOfRows=25&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&contentTypeId=15&mapX=126.981611&mapY=37.568477&radius=10000&listYN=Y`);
    const [nowLoading, setNowLoading] = useState(false);
    useEffect(() => {
        if(isLoading){
            setTourismData(data.response.body.items.item);
            setNowLoading(true);
        }
    }, [isLoading]);

    return (
        <>
         {nowLoading ?
            <KaKaoMap itemData={tourismData} type={"TOURISM"} />:
            <SkeletonKakaoMap/>
        }
        
        <ListContainer>
            {nowLoading ? 
            tourismData.map((value,index)=>{
                return(<CampingItem
                    key = {index}
                    resveUrl = {"/"}
                    firstImageUrl={value.firstimage}
                    facltNm={value.title}
                    addr1={value.addr1}
                    lineIntro={""}
                    intro={""}
                    themaEnvrnCl={""}
                 />)
            }):
            tempArr.map(()=>{
                return(<SkeletonCampingItem/>)
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

export default TourismContainer;