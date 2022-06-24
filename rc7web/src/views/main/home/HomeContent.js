import { useDebugValue, useEffect, useState } from "react";
import ViewContainer from "../SliderList";
import LocalRankingList from "../LocalRankingList";
import HomeSpectialContent from "./HomeSpectialContent";
import styled, { css } from 'styled-components';
import Loading from '../Loading';
import {useInView} from "react-intersection-observer";

function makeError(){
    throw new Error("임의 에러 발생");
}

function MainHomeContent() {

    const [page, setpage]= useState(1);
    const [ContainerList, setListContent] = useState([]);
    const [ref,inView,entry] = useInView();

    const [scrollList, setscrollList] = useState([
        {
            id: 1,
            name: "평단의 찬사를 받은 시리즈",
            imgURLList: ["https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQenisw5aCqp5wMDYxQOOEzwKDlAtsh4Kpihxvgnc2YbuwySNe5bdX6fkpN0aeuvaieYMZis_rdJJ0QjGGar3wucebsIbyqj1GakkpgClHa9ktq5yRJEE4aacuboksTUnRgE_vQsXTLGo2uyXxpkc3GzbqN3Xuj6phIHDF5RZLjQ37bqS567Ls8MaVeqp9cPY2iQX7trGeJrXACRwAO5I8D1Oy5ICKtS.jpg?r=b6b",
                "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf0TQHSEkFWs5o4yxLpxECOd0LLz8jYSVSPfYTGUqeobbo47v3ZtLUlHy0_iB902i_Qkaym_5xqtBmrbSC-SA3IGiFEBqHB60ws.webp?r=e21",
                "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTWRRUVNdeUq7N7MR1Yy5tRYxzjUGFS9tUV6Y5FdyNTKqWh_psKOWNugvxp3dijnVmi4OSjkoCP0dWFc-id-AXOg1dpiV-B_AAI.webp?r=016",
                "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeCe-kvmuDkecOXPKIE8a_TqHhxJJVGe3QBNm6lXk_JLgAm_auorhMHjb-btjetwACpRfm7gP0_9NuFQglcSsJ-P5hSFO1eypgk.webp?r=d9d"]
        },
        ]
    );

    const [nowLoading, setLoading] = useState(true);

    // 로딩중인지;
    useEffect(() =>{
        if(ContainerList.length>=3){
            setLoading(false);
        }
    },[ContainerList]);

    // 서버에서 가져오는거 가상으로 3초
    useEffect(() => {
        const ContainerList = setTimeout(() => {
            setListContent([
                {
                    id: 1,
                    name: "평단의 찬사를 받은 시리즈",
                    imgURLList: ["https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQenisw5aCqp5wMDYxQOOEzwKDlAtsh4Kpihxvgnc2YbuwySNe5bdX6fkpN0aeuvaieYMZis_rdJJ0QjGGar3wucebsIbyqj1GakkpgClHa9ktq5yRJEE4aacuboksTUnRgE_vQsXTLGo2uyXxpkc3GzbqN3Xuj6phIHDF5RZLjQ37bqS567Ls8MaVeqp9cPY2iQX7trGeJrXACRwAO5I8D1Oy5ICKtS.jpg?r=b6b",
                        "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf0TQHSEkFWs5o4yxLpxECOd0LLz8jYSVSPfYTGUqeobbo47v3ZtLUlHy0_iB902i_Qkaym_5xqtBmrbSC-SA3IGiFEBqHB60ws.webp?r=e21",
                        "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTWRRUVNdeUq7N7MR1Yy5tRYxzjUGFS9tUV6Y5FdyNTKqWh_psKOWNugvxp3dijnVmi4OSjkoCP0dWFc-id-AXOg1dpiV-B_AAI.webp?r=016",
                        "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeCe-kvmuDkecOXPKIE8a_TqHhxJJVGe3QBNm6lXk_JLgAm_auorhMHjb-btjetwACpRfm7gP0_9NuFQglcSsJ-P5hSFO1eypgk.webp?r=d9d"]
                },
                {
                    id: 2,
                    name: "지금 뜨는 콘텐츠",
                    imgURLList: ["https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABanlrB92Q2s-4Be1dSAajm8zPIsHDjpTTgKfVEDZGapkFjCAp62nLKMobyFSD_cjuQCJNM55N8uhW47-79Yn_GUDH2Ak-wzA6lqIcwsjrffdFBWlhpx01hrDDgfQNjJUfdJpPkNDxnYrSVH8RsEG5s7kTTBGnT_g9vAfj1yj0_7kzOYuw07PLtePvvuS_Vnvl89q.webp?r=ebb",
                        "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYgWJ6sza5wAeAXUIQQjnhcB27IvrAodRxKEZLtIg6nKsw8UjQT0Fdr1_mdMvVnIsM3upB8DViSzFW3aaaxz2-q1NXHW2xSjiC7BKMkwq7Zr9e31DXc3RxmYfixuzS356Zn_zmfsbkwi9Vw3CYJu3pXntR-5OcFzCltupe30B4GknJ30sJrg_PpSOc0uZ01T2H2O.webp?r=7ff",
                        "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTEQ1GwQn8S9RcEkeDMYX_fIhoWmZftrdrBe1CujDLAcbeTJJtvKSM3etfA65xJoGVPME5NgagPAeQLLzc7ZR7TktdbDyu4UnJFG4G03R4XdfE8w5yVjsmrdHYjyNqKrcY23ZPNHYJjj3NPFgN4O7fvgOoxbujXeYKXMmGhlgWA4JUsl0UnUquExUT0ZtCmtYNiK.webp?r=8db",
                        "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWeiSrZWZgvuaDNJFPiWNtQ0AKzHpCyAIpHrXoDgExcCERBSL4vDL_tF5vJfeE3Xt8pO3sSZgBFdh6K4LvVugR-mwJ3aVQilZGsAhVzwNkbFer6ECkGHJNFsgl2x_wJnRTyJ.jpg?r=33c"]
                },
                {
                    id: 3,
                    name: "해찬이 님이 시청 중인 콘텐츠",
                    imgURLList: ["https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTMkcviwSLSw9FGXhReam6Elgwr_F6LkrE4na_6eW13blPQJKBj3ipTE1NHipezeHctQCEdGAyhf-6k5-pz2kbov8cPhusVy71hogWfnTgioawAE55Sh1R3DdErijUeeFMD1.jpg?r=345",
                        "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW4RkRTEU9jz1qMac65SvUjMBgK9FrryIBMAdrLD9pvR60c0hup34i8HHpG74IWLg8dEI2SQQlRJYU1suG7fzWAg87g5BbuYqt8XOPuUHjslPFps254MgEMtvWuOp5r0pOSt.jpg?r=6d9",
                        "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ8IJybJ9GS7QGCRg-f9vrqAF4fo15lfZ0jI9xlcecE1oqvm0frkT6JC5suQOEtHmc6uUrmEeuZil_ByaZQHyN7PvnX7UsyezWcyj6t9_Iv7MJd9zXK9wSg7AAcltc-GtycJ0JcC95dXQTtt62j_UpHLYtC8PBeHTm7Irg.jpg?r=367",
                        "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQuG8a6WuuGupkvVbjud_JpY0HfLTGWI-l5Kz9HRfmw292vhkoFeK2yTIMk6nXs4vM-pEJAJdNvvUq8kcgApet9mWIN69jYeTOw.webp?r=ce6"]
                },
            ]);
        }, 3000);

        return () => {
            clearTimeout(ContainerList);
        };
    }, []);

    // 스크롤리스트에 아이템 추가
    useEffect(() => {
        if(inView && page<=4){
            const scrollItem = [{
                id: 4,
                name: "평단의 찬사를 받은 시리즈",
                imgURLList: ["https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQenisw5aCqp5wMDYxQOOEzwKDlAtsh4Kpihxvgnc2YbuwySNe5bdX6fkpN0aeuvaieYMZis_rdJJ0QjGGar3wucebsIbyqj1GakkpgClHa9ktq5yRJEE4aacuboksTUnRgE_vQsXTLGo2uyXxpkc3GzbqN3Xuj6phIHDF5RZLjQ37bqS567Ls8MaVeqp9cPY2iQX7trGeJrXACRwAO5I8D1Oy5ICKtS.jpg?r=b6b",
                    "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf0TQHSEkFWs5o4yxLpxECOd0LLz8jYSVSPfYTGUqeobbo47v3ZtLUlHy0_iB902i_Qkaym_5xqtBmrbSC-SA3IGiFEBqHB60ws.webp?r=e21",
                    "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTWRRUVNdeUq7N7MR1Yy5tRYxzjUGFS9tUV6Y5FdyNTKqWh_psKOWNugvxp3dijnVmi4OSjkoCP0dWFc-id-AXOg1dpiV-B_AAI.webp?r=016",
                    "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeCe-kvmuDkecOXPKIE8a_TqHhxJJVGe3QBNm6lXk_JLgAm_auorhMHjb-btjetwACpRfm7gP0_9NuFQglcSsJ-P5hSFO1eypgk.webp?r=d9d"]
            },
            {
                id: 4,
                name: "평단의 찬사를 받은 시리즈",
                imgURLList: ["https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQenisw5aCqp5wMDYxQOOEzwKDlAtsh4Kpihxvgnc2YbuwySNe5bdX6fkpN0aeuvaieYMZis_rdJJ0QjGGar3wucebsIbyqj1GakkpgClHa9ktq5yRJEE4aacuboksTUnRgE_vQsXTLGo2uyXxpkc3GzbqN3Xuj6phIHDF5RZLjQ37bqS567Ls8MaVeqp9cPY2iQX7trGeJrXACRwAO5I8D1Oy5ICKtS.jpg?r=b6b",
                    "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf0TQHSEkFWs5o4yxLpxECOd0LLz8jYSVSPfYTGUqeobbo47v3ZtLUlHy0_iB902i_Qkaym_5xqtBmrbSC-SA3IGiFEBqHB60ws.webp?r=e21",
                    "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTWRRUVNdeUq7N7MR1Yy5tRYxzjUGFS9tUV6Y5FdyNTKqWh_psKOWNugvxp3dijnVmi4OSjkoCP0dWFc-id-AXOg1dpiV-B_AAI.webp?r=016",
                    "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeCe-kvmuDkecOXPKIE8a_TqHhxJJVGe3QBNm6lXk_JLgAm_auorhMHjb-btjetwACpRfm7gP0_9NuFQglcSsJ-P5hSFO1eypgk.webp?r=d9d"]
            }];
            // const tempList = ;
            setscrollList(scrollList.concat(scrollItem));
            console.log(scrollList);
            setpage(page+1);
        }
        console.log(inView);
        
    },[inView]);
    

    return (
        <MainView>
             {!nowLoading ? 
            <>
                <HomeSpectialContent />
                {ContainerList.map((value) => {
                    // Virtual DOM 에서 자식 노드 체크할때 키값으로 할때 그거가 이 키값
                    return (<ViewContainer key={value.id} name={value.name} imgURLList={value.imgURLList} />);
                }) }
                <LocalRankingList imgURLList={
                    ["https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSLDza8YZJDtaNG2BJZsLD1HffFaFg2Vv2HSQtjwNlOrpiVQMCnjeEqs3Jzm0mla47cuip1MhRBAzlp5nMmeTqFVw5Knh_CnDSk_bO5YwbWAQMgjbx1WvFXb-GM_GZP1G31EeGOtHT2dsZLYLqu0dQ.webp?r=40a",                
                    "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeFWAmEvhDQEfoeHAWwuHk7-xRz9cDKbisxbAAQhr6_8T0YNaoZanrJZ-eMQDLyx6U9psuc329qnqp4TbAdq1lnxbJvda5En5y9xQwo4wMIJolXvrl-tDyyZjrVCPoIZflnw6AWeSNk.webp?r=c64",
                    "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeNLQhPdRDA6AbyqSpavIYmr29vXcHeCXt1RDqWZAjSeCsMNRyGX9tR8dwEUhjDX4aOaOmnRliW155R3Zk2Pmmt01j-HfC5eZDY-p_GtFo6nBqFFfmgCRSZXHoXEzEN48oc9IOhw2DOQqOyGdoBLX5Qkhsv7_tH_5N2kmy0.jpg?r=7fc",
                    "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABW0yu_A_A_I2_UZseR9c2jJE5v2LqETLLrGoeJ_KsEs29tZZPKotxObl_Atyoyj121l1lZ2iKlLYfrZ6-ciLXLcJ00jUnQhPxey08iH_pEWX39eWKYk1CRiW8UlmtdEJkHfcRDL5KmK-Y-SCdvoIiQ.webp?r=405"]
                } />

                {scrollList.map((value, idx) => (
                    <>
                        <ViewContainer key={idx} name={value.name} imgURLList={value.imgURLList} />
                    </>
                ))}
                {/* 좀더 나이스한 방법이 있을 듯 */}
                <div ref={ref}>
                </div>
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