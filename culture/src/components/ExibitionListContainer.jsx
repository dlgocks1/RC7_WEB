import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import KaKaoMap from './KakaoMap';
import XMLParser from "react-xml-parser";
import SkeletonKakaoMap from './SkeletonKakaoMap';
import styled from 'styled-components';
import SkeletonCampingItem from './SkeletonCampingItem';
import CampingItem from './CampingItem';

function ExibitionListContainer(props) {

    const [exibitionData, setExibitionData] = useState([]);
    const [nowLoading, setNowLoading] = useState(false);
    const { longitude, latitude } = useSelector((state) => state.GeoLocationReducer);
    const tempArr = new Array(10).fill(0);

    function parseStr(dataSet) {
        const dataArr = new XMLParser().parseFromString(dataSet).children;
        let tempArr = [];
        dataArr[1].children.map((value) => {
            if (value.name === "perforList") {
                tempArr.push({
                    title: value.children[1].value,
                    place: value.children[4].value,
                    mapX: value.children[8].value,
                    mapY: value.children[9].value,
                    imgUrl: value.children[7].value,
                    startDate: value.children[2].value,
                    endDate: value.children[3].value
                })
            }
        })
        return tempArr;
    }

    useEffect(() => {
        let isCompleted = false;
        const getCampingData = async () => {
            try {
                const url =
                    `https://cors-anywhere.herokuapp.com/http://www.culture.go.kr/openapi/rest/publicperformancedisplays/area?serviceKey=uQEBqklQ8iRzL1OLrXwjYa6xIfWCRrOLfyo2HAr4hI8RvzDnTeWL5VqVJCYcIOYy%2BJqQBZSuD7hd86jJzep6%2FQ%3D%3D&from=20220601&to=20220701&gpsxfrom=${longitude - 5}&gpsyfrom=${latitude - 5}&gpsxto=${longitude + 5}&gpsyto=${latitude + 5}&cPage=1&rows=30&sortStdr=1`;

                const res = await axios({
                    method: "get",
                    url: url,
                });
                if (!isCompleted) {
                    setExibitionData(parseStr(res.data));
                    setNowLoading(true);
                }
            } catch (error) {
                throw new Error("Error");
                console.log(error);
            }
        };
        getCampingData();

        return () => {
            isCompleted = true;
        };

    }, []);

    return (
        <>
            {nowLoading ?
                <KaKaoMap itemData={exibitionData} type={"EXIBITION"} /> :
                <SkeletonKakaoMap />
            }

            <ListContainer>
                {nowLoading ?
                    exibitionData.map((value, index) => {
                        return (<CampingItem
                            key={index}
                            resveUrl={"/"}
                            firstImageUrl={value.imgUrl}
                            facltNm={value.title}
                            addr1={value.place}
                            lineIntro={""}
                            intro={""}
                            themaEnvrnCl={""}
                        />)
                    }) :
                    tempArr.map(() => {
                        return (<SkeletonCampingItem />)
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

export default ExibitionListContainer;