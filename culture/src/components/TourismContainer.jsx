import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import KaKaoMap from './KakaoMap';

function TourismContainer() {
    const [hotelData, setHotelData] = useState([]);
    const [nowLoading, setNowLoading] = useState(false);

    useEffect(() => {
        let isCompleted = false;
        const getCampingData = async () => {
                try {
                    const url =
                    `http://api.visitkorea.or.kr/openapi/service/rest/KorService/locationBasedList?serviceKey=uQEBqklQ8iRzL1OLrXwjYa6xIfWCRrOLfyo2HAr4hI8RvzDnTeWL5VqVJCYcIOYy%2BJqQBZSuD7hd86jJzep6%2FQ%3D%3D&numOfRows=25&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&contentTypeId=15&mapX=126.981611&mapY=37.568477&radius=10000&listYN=Y`;

                    const res = await axios({
                        method: "get",
                        url: url,
                    });
                    console.log(res.data.response.body.items.item);
                    if (!isCompleted) {
                        setHotelData(res.data.response.body.items.item);
                        setNowLoading(true);
                    }
                } catch (error) {
                    console.log(error);
                }
        };
        getCampingData();

        // const data = setTimeout(() =>{
        //     setHotelData(campingMockdata);
        //     setNowLoading(true);
        // },1000);

        return () => {
            isCompleted = true;
        };

    }, []);

    return (
        <>
         {nowLoading &&
            <KaKaoMap itemData={hotelData} type={"TOURISM"} />
        }
        {/*
        <ListContainer>
            {nowLoading && 
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
            })}

        </ListContainer> */}
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