import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { setPosition, setVisible } from "../store/PreViewReducer";

const { kakao } = window;

const KaKaoMap = ({itemData,type}) => {

    // 사용자 위치
    const {longitude,latitude} = useSelector((state)=>state.GeoLocationReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        if(type === "CAMPING"){
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(latitude,longitude),
                // 지도 확대 레밸
                level: 13
            };
            const map = new kakao.maps.Map(container, options);
            // map.setDraggable(false);

            itemData.map((value)=>{
                const markerPosition  = new kakao.maps.LatLng(value.mapY,value.mapX); 
                const marker = new kakao.maps.Marker({
                    position: markerPosition,
                    clickable: true
                });
                marker.setMap(map);
                kakao.maps.event.addListener(marker, 'click', function() {
                    dispatch(setVisible(
                        {
                            firstImageUrl : value.firstImageUrl,
                            addr1 : value.addr1,
                            tel : value.tel,
                            facltNm : value.facltNm,
                        }
                    ))
                });
                kakao.maps.event.addListener(marker, 'mouseout', function() {
                     
                });
            })
        }
        if(type === "TOURISM"){
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(latitude,longitude),
                // 지도 확대 레밸
                level: 8
            };
            const map = new kakao.maps.Map(container, options);
            // map.setDraggable(false);

            itemData.map((value)=>{
                const markerPosition  = new kakao.maps.LatLng(value.mapy,value.mapx); 
                const marker = new kakao.maps.Marker({
                    position: markerPosition,
                    clickable: true
                });
                marker.setMap(map);

                kakao.maps.event.addListener(marker, 'click', function() {
                    dispatch(setVisible(
                        {
                            firstImageUrl : value.firstimage,
                            addr1 : value.addr1,
                            tel : value.tel,
                            facltNm : value.title,
                        }
                    ))
                });
                kakao.maps.event.addListener(marker, 'mouseout', function() {
                     
                });
            })
        }
        if(type === "EXIBITION"){
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(latitude,longitude),
                // 지도 확대 레밸
                level: 8
            };
            const map = new kakao.maps.Map(container, options);
            // map.setDraggable(false);

            itemData.map((value)=>{
                const markerPosition  = new kakao.maps.LatLng(value.mapY,value.mapX); 
                const marker = new kakao.maps.Marker({
                    position: markerPosition,
                    clickable: true
                });
                marker.setMap(map);
                kakao.maps.event.addListener(marker, 'click', function() {
                    dispatch(setVisible(
                        {
                            firstImageUrl : value.imgUrl,
                            addr1 : value.place,
                            tel : value.endDate,
                            facltNm : value.title,
                        }
                    ))
                });
                kakao.maps.event.addListener(marker, 'mouseout', function() {
                     
                });
            })
        }
   
    }, [longitude,latitude])

    const getMousePosition = (e) =>{
        dispatch(
            setPosition({
                x : e.clientX,
                y : e.clientY+window.scrollY,
            })
        )
    }

    return (
        <>
            <KakaoMapContent
                onClick={getMousePosition}
                id="map"></KakaoMapContent>
        </>
    )
};

const KakaoMapContent = styled.div`
    min-height: 400px;
    max-height: 400px;
`

export default KaKaoMap;