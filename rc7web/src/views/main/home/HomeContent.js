/* eslint-disable no-shadow */
import React,{ useDebugValue, useEffect, useState } from "react";
import styled, { css } from 'styled-components';
import {useInView} from "react-intersection-observer";
import { useSelector } from "react-redux";
import Viewcontainer2 from "components/common/viewcontainer2";
import ViewContainer from "../ViewContainer";
import LocalRankingList from "../LocalRankingList";
import HomeSpectialContent from "./HomeSpectialContent";
import Loading from '../Loading';

function makeError(){
    throw new Error("임의 에러 발생");
}

function MainHomeContent() {

    const [page, setpage]= useState(1);
    const [ContainerList, setListContent] = useState([]);
    const [ref,inView,entry] = useInView();

    const [scrollList, setscrollList] = useState([
        {
            id: 3,
            name: "평단의 찬사를 받은 시리즈",
            contentList: [
                        {
                            id : 13,
                            name : `이상한 변호사 우영우`,
                            imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeGq6o5YLXt9MxC3uhvBUsgA6n9-Yzm39kQlBzmnbNsu0pRUtdAf8IEfwIKGIdmxgX8MPD9GKvwAy3XV1QlOoNoM_LtOzI1LwcwVUkEK1JaYnHo6I8Ekd_btOU5FHJehjtHZCqCLkw.webp?r=54c",
                        },
                        {
                            id : 14,
                            name : `종이의 집`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQed0pzYjovSxIuwwRC1EPKEnK8iPzUX2cmqSQujjKXBiKl7SrZ7kV8uuuWvL9q-8vacAS0hfHnmJiTT3Y2DTWnZJ1J13XPyfSwpYN8O5RHtTsrXdZDaI345Oyv0wpg8ckXLF5MB9VRem9S-_CLa_OydW291zG3JVzRCmgpAUCmaugNNL6fwlxUuakSXZ6k.jpg?r=8eb`,
                        },
                        {
                            id : 5,
                            name : `나의해방일지`,
                            imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABanlrB92Q2s-4Be1dSAajm8zPIsHDjpTTgKfVEDZGapkFjCAp62nLKMobyFSD_cjuQCJNM55N8uhW47-79Yn_GUDH2Ak-wzA6lqIcwsjrffdFBWlhpx01hrDDgfQNjJUfdJpPkNDxnYrSVH8RsEG5s7kTTBGnT_g9vAfj1yj0_7kzOYuw07PLtePvvuS_Vnvl89q.webp?r=ebb",
                        },
                        {
                            id : 15,
                            name : `미남당`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc2mV8K-3aRDDDOPv2e_y4rh9HJaD42ITEosiWFCGDs3ssSDfjSmX5J4GGdIq9zRJMtoB8n0Eww2VeOmVOndK5AeDrem5fQTjd6I7B8u0BFw3vnrg5TFuiDBlwNWiXQMbXL7Kb0mMAYv03d9gqGSBh-S649zOc4RnpYVncQKN9jw3WCcX084OZQhLqiUU8xeS21C.webp?r=8c7`,
                        },
                        {
                            id : 6,
                            name : `우리들의 블루스`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYkWYPbdQKyiDEtw-1ZdWpNatp0EzIdzn2l9kGiYnRw9vQpVKgZdDbVBIxXtg5ajhuXWNzPoKXhHmsdfSzR7Rtk6u09R0Lhoi60mcSVaefD1_54X8to_qnfFbITgxFYqsbuIHHMoPkQIP8BG5L-RdYh42WCnD97kwoBUkBsElJxT6SWgyXIZhHD-BNeNKWZlYu6X.webp?r=f62`,
                        },
                        {
                            id : 16,
                            name : `이상한 나라의 수학자`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa8QHr_J2yLIIm9n6PfR0ut4YuEb9PdhVH8F_gI69vhnMWq9VFbtkf0odJ_w5LFERL6TPwV7PfkmuqCS49-J_GR0rAQ3UdsHQDhIVrkRD_ybTBL8fvFIb9Pq95Sf75ao51GhaOef9QcXQiPUQ6FXyPnGrvl1Jq8Ib04.webp?r=92f`,
                        },
                        {
                            id : 17,
                            name : `스프리건`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUxS0zDxvyoa-X5zi_9CRqJyR_eaaiEK1kNh8ALh-S0ol3ZGxVHgqjknxXWKz-je5LhF4LB7JTD5wgNdP2gfBpX6oPI46epiLOC5w0NzwCRApC9pVS1yCMmCZm9999qZHYjL.jpg?r=eb8`,
                        },
                        {
                            id : 18,
                            name : `전생했더니 슬라임이 였던 건에 관하여`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXdhPKPX99ih7PXXjk21y_sEPXjOM0ODyhnuoWO1csqH9bYFpqlqW_HLdZPeAHuouzM6akQg8fvVkaJAfxwBT1YRcSSoz3MpgwB4F5oQjj3UgKlaIubHUg8G8rPwfqnUOH2NAVYZWg.webp?r=385`,
                        },
                        {
                            id : 1,
                            name : `기묘한 이야기`,
                            imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQenisw5aCqp5wMDYxQOOEzwKDlAtsh4Kpihxvgnc2YbuwySNe5bdX6fkpN0aeuvaieYMZis_rdJJ0QjGGar3wucebsIbyqj1GakkpgClHa9ktq5yRJEE4aacuboksTUnRgE_vQsXTLGo2uyXxpkc3GzbqN3Xuj6phIHDF5RZLjQ37bqS567Ls8MaVeqp9cPY2iQX7trGeJrXACRwAO5I8D1Oy5ICKtS.jpg?r=b6b",
                        },
                        {
                            id : 19,
                            name : `엄브렐러 아카데미`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWx-2Ha9gulJYi0tbVEX0sBOUSOQ7f9Z-P4nY10l_YO6saADZZ2F2YIfsd_zPVsi2kbG9zHl8DM4c6Mq2h1Uuw22Inr7_meWSml-tWF9w6RrukfaM5QNWKwPeaLkGlJOqu1B-ZFmnA6ZLGECDEnZMu5KWGGzyD5QadWo6A.jpg?r=847`,
                        },
                        {
                            id : 20,
                            name : `귀멸의 칼날`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUduQgEzN40hhJ8zE78F4xjGOxzhZJc4R7zcUsySHPCVD6V1s2wF9YQvf-OAWREf0Ggnn40VlYNzouatVkha9zUQHNddqvzJjuw.webp?r=7c1`,
                        },
                        {
                            id : 21,
                            name : `갯마을 차차차`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABacmF4WDryr9UR0o8YmWr0Tkw9Fin4rsoVMzq5XwN19JtJRC5MvmlxWWfDRvzPiKjiJyEnn2jaXfKJz5yRL0DmlAK2smVAzOQws.webp?r=180`,
                        },
                    ]
        },
        ]
    );

    const [nowLoading, setLoading] = useState(true);
    const {isModal} = useSelector((state)=>(state.episodeModalReducer));

    // 로딩중인지;
    useEffect(() =>{
        if(ContainerList.length>=1){
            setLoading(false);
        }
    },[ContainerList]);

    // 서버에서 가져오는거 가상으로 3초
    useEffect(() => {
        const ContainerList = setTimeout(() => {
            setListContent([
                {
                    id: 1,
                    name: "내가 찜한 콘텐츠",
                    contentList: [
                        {
                            id : 1,
                            name : `기묘한 이야기`,
                            imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQenisw5aCqp5wMDYxQOOEzwKDlAtsh4Kpihxvgnc2YbuwySNe5bdX6fkpN0aeuvaieYMZis_rdJJ0QjGGar3wucebsIbyqj1GakkpgClHa9ktq5yRJEE4aacuboksTUnRgE_vQsXTLGo2uyXxpkc3GzbqN3Xuj6phIHDF5RZLjQ37bqS567Ls8MaVeqp9cPY2iQX7trGeJrXACRwAO5I8D1Oy5ICKtS.jpg?r=b6b",
                        },
                        {
                            id : 2,
                            name : `별에서온 그대`,
                            imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf0TQHSEkFWs5o4yxLpxECOd0LLz8jYSVSPfYTGUqeobbo47v3ZtLUlHy0_iB902i_Qkaym_5xqtBmrbSC-SA3IGiFEBqHB60ws.webp?r=e21",
                        },
                        {
                            id : 3,
                            name : `시그널`,
                            imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTWRRUVNdeUq7N7MR1Yy5tRYxzjUGFS9tUV6Y5FdyNTKqWh_psKOWNugvxp3dijnVmi4OSjkoCP0dWFc-id-AXOg1dpiV-B_AAI.webp?r=016",
                        },
                        {
                            id : 4,
                            name : `도깨비`,
                            imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeCe-kvmuDkecOXPKIE8a_TqHhxJJVGe3QBNm6lXk_JLgAm_auorhMHjb-btjetwACpRfm7gP0_9NuFQglcSsJ-P5hSFO1eypgk.webp?r=d9d",
                        },
                        {
                            id : 5,
                            name : `나의해방일지`,
                            imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABanlrB92Q2s-4Be1dSAajm8zPIsHDjpTTgKfVEDZGapkFjCAp62nLKMobyFSD_cjuQCJNM55N8uhW47-79Yn_GUDH2Ak-wzA6lqIcwsjrffdFBWlhpx01hrDDgfQNjJUfdJpPkNDxnYrSVH8RsEG5s7kTTBGnT_g9vAfj1yj0_7kzOYuw07PLtePvvuS_Vnvl89q.webp?r=ebb",
                        },
                        {
                            id : 6,
                            name : `우리들의 블루스`,
                            imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYgWJ6sza5wAeAXUIQQjnhcB27IvrAodRxKEZLtIg6nKsw8UjQT0Fdr1_mdMvVnIsM3upB8DViSzFW3aaaxz2-q1NXHW2xSjiC7BKMkwq7Zr9e31DXc3RxmYfixuzS356Zn_zmfsbkwi9Vw3CYJu3pXntR-5OcFzCltupe30B4GknJ30sJrg_PpSOc0uZ01T2H2O.webp?r=7ff",
                        },
                        {
                            id : 7,
                            name : `그린마더스클럽`,
                            imgUrl :  "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTEQ1GwQn8S9RcEkeDMYX_fIhoWmZftrdrBe1CujDLAcbeTJJtvKSM3etfA65xJoGVPME5NgagPAeQLLzc7ZR7TktdbDyu4UnJFG4G03R4XdfE8w5yVjsmrdHYjyNqKrcY23ZPNHYJjj3NPFgN4O7fvgOoxbujXeYKXMmGhlgWA4JUsl0UnUquExUT0ZtCmtYNiK.webp?r=8db",
                        },
                        {
                            id : 8,
                            name : `마이네임`,
                            imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWeiSrZWZgvuaDNJFPiWNtQ0AKzHpCyAIpHrXoDgExcCERBSL4vDL_tF5vJfeE3Xt8pO3sSZgBFdh6K4LvVugR-mwJ3aVQilZGsAhVzwNkbFer6ECkGHJNFsgl2x_wJnRTyJ.jpg?r=33c",
                        },
                        {
                            id : 9,
                            name : `인간수업`,
                            imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTMkcviwSLSw9FGXhReam6Elgwr_F6LkrE4na_6eW13blPQJKBj3ipTE1NHipezeHctQCEdGAyhf-6k5-pz2kbov8cPhusVy71hogWfnTgioawAE55Sh1R3DdErijUeeFMD1.jpg?r=345",
                        },
                        {
                            id : 10,
                            name : `솔로지옥`,
                            imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW4RkRTEU9jz1qMac65SvUjMBgK9FrryIBMAdrLD9pvR60c0hup34i8HHpG74IWLg8dEI2SQQlRJYU1suG7fzWAg87g5BbuYqt8XOPuUHjslPFps254MgEMtvWuOp5r0pOSt.jpg?r=6d9",
                        },
                        {
                            id : 11,
                            name : `러브 데스+ 로봇`,
                            imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ8IJybJ9GS7QGCRg-f9vrqAF4fo15lfZ0jI9xlcecE1oqvm0frkT6JC5suQOEtHmc6uUrmEeuZil_ByaZQHyN7PvnX7UsyezWcyj6t9_Iv7MJd9zXK9wSg7AAcltc-GtycJ0JcC95dXQTtt62j_UpHLYtC8PBeHTm7Irg.jpg?r=367",
                        },
                        {
                            id : 12,
                            name : `미생`,
                            imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQuG8a6WuuGupkvVbjud_JpY0HfLTGWI-l5Kz9HRfmw292vhkoFeK2yTIMk6nXs4vM-pEJAJdNvvUq8kcgApet9mWIN69jYeTOw.webp?r=ce6",
                        },
                    ]
                },
                {
                    id: 2,
                    name: "지금 뜨는 콘텐츠",
                    contentList: [
                        {
                            id : 13,
                            name : `이상한 변호사 우영우`,
                            imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeGq6o5YLXt9MxC3uhvBUsgA6n9-Yzm39kQlBzmnbNsu0pRUtdAf8IEfwIKGIdmxgX8MPD9GKvwAy3XV1QlOoNoM_LtOzI1LwcwVUkEK1JaYnHo6I8Ekd_btOU5FHJehjtHZCqCLkw.webp?r=54c",
                        },
                        {
                            id : 14,
                            name : `종이의 집`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQed0pzYjovSxIuwwRC1EPKEnK8iPzUX2cmqSQujjKXBiKl7SrZ7kV8uuuWvL9q-8vacAS0hfHnmJiTT3Y2DTWnZJ1J13XPyfSwpYN8O5RHtTsrXdZDaI345Oyv0wpg8ckXLF5MB9VRem9S-_CLa_OydW291zG3JVzRCmgpAUCmaugNNL6fwlxUuakSXZ6k.jpg?r=8eb`,
                        },
                        {
                            id : 5,
                            name : `나의해방일지`,
                            imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABanlrB92Q2s-4Be1dSAajm8zPIsHDjpTTgKfVEDZGapkFjCAp62nLKMobyFSD_cjuQCJNM55N8uhW47-79Yn_GUDH2Ak-wzA6lqIcwsjrffdFBWlhpx01hrDDgfQNjJUfdJpPkNDxnYrSVH8RsEG5s7kTTBGnT_g9vAfj1yj0_7kzOYuw07PLtePvvuS_Vnvl89q.webp?r=ebb",
                        },
                        {
                            id : 15,
                            name : `미남당`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc2mV8K-3aRDDDOPv2e_y4rh9HJaD42ITEosiWFCGDs3ssSDfjSmX5J4GGdIq9zRJMtoB8n0Eww2VeOmVOndK5AeDrem5fQTjd6I7B8u0BFw3vnrg5TFuiDBlwNWiXQMbXL7Kb0mMAYv03d9gqGSBh-S649zOc4RnpYVncQKN9jw3WCcX084OZQhLqiUU8xeS21C.webp?r=8c7`,
                        },
                        {
                            id : 6,
                            name : `우리들의 블루스`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYkWYPbdQKyiDEtw-1ZdWpNatp0EzIdzn2l9kGiYnRw9vQpVKgZdDbVBIxXtg5ajhuXWNzPoKXhHmsdfSzR7Rtk6u09R0Lhoi60mcSVaefD1_54X8to_qnfFbITgxFYqsbuIHHMoPkQIP8BG5L-RdYh42WCnD97kwoBUkBsElJxT6SWgyXIZhHD-BNeNKWZlYu6X.webp?r=f62`,
                        },
                        {
                            id : 16,
                            name : `이상한 나라의 수학자`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa8QHr_J2yLIIm9n6PfR0ut4YuEb9PdhVH8F_gI69vhnMWq9VFbtkf0odJ_w5LFERL6TPwV7PfkmuqCS49-J_GR0rAQ3UdsHQDhIVrkRD_ybTBL8fvFIb9Pq95Sf75ao51GhaOef9QcXQiPUQ6FXyPnGrvl1Jq8Ib04.webp?r=92f`,
                        },
                        {
                            id : 17,
                            name : `스프리건`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUxS0zDxvyoa-X5zi_9CRqJyR_eaaiEK1kNh8ALh-S0ol3ZGxVHgqjknxXWKz-je5LhF4LB7JTD5wgNdP2gfBpX6oPI46epiLOC5w0NzwCRApC9pVS1yCMmCZm9999qZHYjL.jpg?r=eb8`,
                        },
                        {
                            id : 18,
                            name : `전생했더니 슬라임이 였던 건에 관하여`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXdhPKPX99ih7PXXjk21y_sEPXjOM0ODyhnuoWO1csqH9bYFpqlqW_HLdZPeAHuouzM6akQg8fvVkaJAfxwBT1YRcSSoz3MpgwB4F5oQjj3UgKlaIubHUg8G8rPwfqnUOH2NAVYZWg.webp?r=385`,
                        },
                        {
                            id : 1,
                            name : `기묘한 이야기`,
                            imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQenisw5aCqp5wMDYxQOOEzwKDlAtsh4Kpihxvgnc2YbuwySNe5bdX6fkpN0aeuvaieYMZis_rdJJ0QjGGar3wucebsIbyqj1GakkpgClHa9ktq5yRJEE4aacuboksTUnRgE_vQsXTLGo2uyXxpkc3GzbqN3Xuj6phIHDF5RZLjQ37bqS567Ls8MaVeqp9cPY2iQX7trGeJrXACRwAO5I8D1Oy5ICKtS.jpg?r=b6b",
                        },
                        {
                            id : 19,
                            name : `엄브렐러 아카데미`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWx-2Ha9gulJYi0tbVEX0sBOUSOQ7f9Z-P4nY10l_YO6saADZZ2F2YIfsd_zPVsi2kbG9zHl8DM4c6Mq2h1Uuw22Inr7_meWSml-tWF9w6RrukfaM5QNWKwPeaLkGlJOqu1B-ZFmnA6ZLGECDEnZMu5KWGGzyD5QadWo6A.jpg?r=847`,
                        },
                        {
                            id : 20,
                            name : `귀멸의 칼날`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUduQgEzN40hhJ8zE78F4xjGOxzhZJc4R7zcUsySHPCVD6V1s2wF9YQvf-OAWREf0Ggnn40VlYNzouatVkha9zUQHNddqvzJjuw.webp?r=7c1`,
                        },
                        {
                            id : 21,
                            name : `갯마을 차차차`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABacmF4WDryr9UR0o8YmWr0Tkw9Fin4rsoVMzq5XwN19JtJRC5MvmlxWWfDRvzPiKjiJyEnn2jaXfKJz5yRL0DmlAK2smVAzOQws.webp?r=180`,
                        },
                    ]
                },
                {
                    id: 2,
                    name: "넷플릭스 인기 콘텐츠",
                    contentList: [
                        {
                            id : 21,
                            name : `갯마을 차차차`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABacmF4WDryr9UR0o8YmWr0Tkw9Fin4rsoVMzq5XwN19JtJRC5MvmlxWWfDRvzPiKjiJyEnn2jaXfKJz5yRL0DmlAK2smVAzOQws.webp?r=180`,
                        },
                        {
                            id : 16,
                            name : `이상한 나라의 수학자`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa8QHr_J2yLIIm9n6PfR0ut4YuEb9PdhVH8F_gI69vhnMWq9VFbtkf0odJ_w5LFERL6TPwV7PfkmuqCS49-J_GR0rAQ3UdsHQDhIVrkRD_ybTBL8fvFIb9Pq95Sf75ao51GhaOef9QcXQiPUQ6FXyPnGrvl1Jq8Ib04.webp?r=92f`,
                        },
                        {
                            id : 17,
                            name : `스프리건`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUxS0zDxvyoa-X5zi_9CRqJyR_eaaiEK1kNh8ALh-S0ol3ZGxVHgqjknxXWKz-je5LhF4LB7JTD5wgNdP2gfBpX6oPI46epiLOC5w0NzwCRApC9pVS1yCMmCZm9999qZHYjL.jpg?r=eb8`,
                        },
                        {
                            id : 22,
                            name : `빈센조`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc0sVmxcQrKeYhFMmP0cdojzWi2OOKAGJnHGVN_Q88hzNhgK6yKdGc71XGqWzOLJtBezXphSvPNF0ocF4YXOphCos0ogkhmQycg.webp?r=ae4`,
                        },
                        {
                            id : 5,
                            name : `나의해방일지`,
                            imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABanlrB92Q2s-4Be1dSAajm8zPIsHDjpTTgKfVEDZGapkFjCAp62nLKMobyFSD_cjuQCJNM55N8uhW47-79Yn_GUDH2Ak-wzA6lqIcwsjrffdFBWlhpx01hrDDgfQNjJUfdJpPkNDxnYrSVH8RsEG5s7kTTBGnT_g9vAfj1yj0_7kzOYuw07PLtePvvuS_Vnvl89q.webp?r=ebb",
                        },
                        {
                            id : 15,
                            name : `미남당`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc2mV8K-3aRDDDOPv2e_y4rh9HJaD42ITEosiWFCGDs3ssSDfjSmX5J4GGdIq9zRJMtoB8n0Eww2VeOmVOndK5AeDrem5fQTjd6I7B8u0BFw3vnrg5TFuiDBlwNWiXQMbXL7Kb0mMAYv03d9gqGSBh-S649zOc4RnpYVncQKN9jw3WCcX084OZQhLqiUU8xeS21C.webp?r=8c7`,
                        },
                        {
                            id : 6,
                            name : `우리들의 블루스`,
                            imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYkWYPbdQKyiDEtw-1ZdWpNatp0EzIdzn2l9kGiYnRw9vQpVKgZdDbVBIxXtg5ajhuXWNzPoKXhHmsdfSzR7Rtk6u09R0Lhoi60mcSVaefD1_54X8to_qnfFbITgxFYqsbuIHHMoPkQIP8BG5L-RdYh42WCnD97kwoBUkBsElJxT6SWgyXIZhHD-BNeNKWZlYu6X.webp?r=f62`,
                        },
                        {
                            id : 11,
                            name : `러브 데스+ 로봇`,
                            imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ8IJybJ9GS7QGCRg-f9vrqAF4fo15lfZ0jI9xlcecE1oqvm0frkT6JC5suQOEtHmc6uUrmEeuZil_ByaZQHyN7PvnX7UsyezWcyj6t9_Iv7MJd9zXK9wSg7AAcltc-GtycJ0JcC95dXQTtt62j_UpHLYtC8PBeHTm7Irg.jpg?r=367",
                        },
                        {
                            id : 12,
                            name : `미생`,
                            imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQuG8a6WuuGupkvVbjud_JpY0HfLTGWI-l5Kz9HRfmw292vhkoFeK2yTIMk6nXs4vM-pEJAJdNvvUq8kcgApet9mWIN69jYeTOw.webp?r=ce6",
                        },
                    ]
                }
            ]);
        }, 1000);

        return () => {
            clearTimeout(ContainerList);
        };
    }, []);

    // 스크롤리스트에 아이템 추가
    useEffect(() => {
        if(inView && page<=6){
            const scrollItem = {
                id: 4,
                name: "테스트용",
                contentList: [
                    {
                        id : 21,
                        name : `갯마을 차차차`,
                        imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABacmF4WDryr9UR0o8YmWr0Tkw9Fin4rsoVMzq5XwN19JtJRC5MvmlxWWfDRvzPiKjiJyEnn2jaXfKJz5yRL0DmlAK2smVAzOQws.webp?r=180`,
                    },
                    {
                        id : 16,
                        name : `이상한 나라의 수학자`,
                        imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa8QHr_J2yLIIm9n6PfR0ut4YuEb9PdhVH8F_gI69vhnMWq9VFbtkf0odJ_w5LFERL6TPwV7PfkmuqCS49-J_GR0rAQ3UdsHQDhIVrkRD_ybTBL8fvFIb9Pq95Sf75ao51GhaOef9QcXQiPUQ6FXyPnGrvl1Jq8Ib04.webp?r=92f`,
                    },
                    {
                        id : 17,
                        name : `스프리건`,
                        imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUxS0zDxvyoa-X5zi_9CRqJyR_eaaiEK1kNh8ALh-S0ol3ZGxVHgqjknxXWKz-je5LhF4LB7JTD5wgNdP2gfBpX6oPI46epiLOC5w0NzwCRApC9pVS1yCMmCZm9999qZHYjL.jpg?r=eb8`,
                    },
                    {
                        id : 22,
                        name : `빈센조`,
                        imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc0sVmxcQrKeYhFMmP0cdojzWi2OOKAGJnHGVN_Q88hzNhgK6yKdGc71XGqWzOLJtBezXphSvPNF0ocF4YXOphCos0ogkhmQycg.webp?r=ae4`,
                    },
                    {
                        id : 5,
                        name : `나의해방일지`,
                        imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABanlrB92Q2s-4Be1dSAajm8zPIsHDjpTTgKfVEDZGapkFjCAp62nLKMobyFSD_cjuQCJNM55N8uhW47-79Yn_GUDH2Ak-wzA6lqIcwsjrffdFBWlhpx01hrDDgfQNjJUfdJpPkNDxnYrSVH8RsEG5s7kTTBGnT_g9vAfj1yj0_7kzOYuw07PLtePvvuS_Vnvl89q.webp?r=ebb",
                    },
                    {
                        id : 15,
                        name : `미남당`,
                        imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc2mV8K-3aRDDDOPv2e_y4rh9HJaD42ITEosiWFCGDs3ssSDfjSmX5J4GGdIq9zRJMtoB8n0Eww2VeOmVOndK5AeDrem5fQTjd6I7B8u0BFw3vnrg5TFuiDBlwNWiXQMbXL7Kb0mMAYv03d9gqGSBh-S649zOc4RnpYVncQKN9jw3WCcX084OZQhLqiUU8xeS21C.webp?r=8c7`,
                    },
                    {
                        id : 6,
                        name : `우리들의 블루스`,
                        imgUrl : `https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYkWYPbdQKyiDEtw-1ZdWpNatp0EzIdzn2l9kGiYnRw9vQpVKgZdDbVBIxXtg5ajhuXWNzPoKXhHmsdfSzR7Rtk6u09R0Lhoi60mcSVaefD1_54X8to_qnfFbITgxFYqsbuIHHMoPkQIP8BG5L-RdYh42WCnD97kwoBUkBsElJxT6SWgyXIZhHD-BNeNKWZlYu6X.webp?r=f62`,
                    },
                    {
                        id : 11,
                        name : `러브 데스+ 로봇`,
                        imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ8IJybJ9GS7QGCRg-f9vrqAF4fo15lfZ0jI9xlcecE1oqvm0frkT6JC5suQOEtHmc6uUrmEeuZil_ByaZQHyN7PvnX7UsyezWcyj6t9_Iv7MJd9zXK9wSg7AAcltc-GtycJ0JcC95dXQTtt62j_UpHLYtC8PBeHTm7Irg.jpg?r=367",
                    },
                    {
                        id : 12,
                        name : `미생`,
                        imgUrl : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQuG8a6WuuGupkvVbjud_JpY0HfLTGWI-l5Kz9HRfmw292vhkoFeK2yTIMk6nXs4vM-pEJAJdNvvUq8kcgApet9mWIN69jYeTOw.webp?r=ce6",
                    },
                ]
                }
            setscrollList(scrollList.concat(scrollItem));
            setpage(page+1);
        }
    },[inView]);
    

    return (
        <MainView type={isModal}>
             {!nowLoading ? 
            <>
                <HomeSpectialContent />
                
                <Viewcontainer2/>

                {ContainerList.map((value) => 
                    // Virtual DOM 에서 자식 노드 체크할때 키값으로 할때 그거가 이 키값
                     (<ViewContainer name={value.name} contentList={value.contentList} />)
                ) }
                
                <LocalRankingList imgURLList={
                    ["https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSLDza8YZJDtaNG2BJZsLD1HffFaFg2Vv2HSQtjwNlOrpiVQMCnjeEqs3Jzm0mla47cuip1MhRBAzlp5nMmeTqFVw5Knh_CnDSk_bO5YwbWAQMgjbx1WvFXb-GM_GZP1G31EeGOtHT2dsZLYLqu0dQ.webp?r=40a",                
                    "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeFWAmEvhDQEfoeHAWwuHk7-xRz9cDKbisxbAAQhr6_8T0YNaoZanrJZ-eMQDLyx6U9psuc329qnqp4TbAdq1lnxbJvda5En5y9xQwo4wMIJolXvrl-tDyyZjrVCPoIZflnw6AWeSNk.webp?r=c64",
                    "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeNLQhPdRDA6AbyqSpavIYmr29vXcHeCXt1RDqWZAjSeCsMNRyGX9tR8dwEUhjDX4aOaOmnRliW155R3Zk2Pmmt01j-HfC5eZDY-p_GtFo6nBqFFfmgCRSZXHoXEzEN48oc9IOhw2DOQqOyGdoBLX5Qkhsv7_tH_5N2kmy0.jpg?r=7fc",
                    "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABW0yu_A_A_I2_UZseR9c2jJE5v2LqETLLrGoeJ_KsEs29tZZPKotxObl_Atyoyj121l1lZ2iKlLYfrZ6-ciLXLcJ00jUnQhPxey08iH_pEWX39eWKYk1CRiW8UlmtdEJkHfcRDL5KmK-Y-SCdvoIiQ.webp?r=405"]
                } />

                {scrollList.map((value, idx) => (
                    <ViewContainer name={value.name} contentList={value.contentList} />
                ))}
                {/* 좀더 나이스한 방법이 있을 듯 */}
                <div ref={ref} />
            </>
            : (
                <Loading />
            )}
            

        </MainView>
    );
}

// css in js 형식
const MainView = styled.div`
    position: relative;
    min-height: 1000px;
    z-index: 0;
`;

export default MainHomeContent;