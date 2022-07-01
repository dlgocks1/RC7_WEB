import styled from "styled-components"
import Episode from "./Episode";

const SPYxFAMILY = [
    {
        index : "1",
        img : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXv5d0NNs57Mc_FcCDfPSVBsfz9QnPTiPX7B-VPKHKV5xTgW4a75CHCULnNvaXSzJdIYsFSe7cbGWpLHD_cBxOAro1tpL0wv4830aLfcVUneXkH4B1t6_U_C.webp?r=51e",
        title : "오퍼레이션 올빼미",
        synopsis : "이웃 나라의 고위직 정치인에게 접근하라는 명령을 받은 엘리트 스파이. 완벽한 위장을 위해 어린 딸을 입양한다.",
        duration : "24분",
    },
    {
        index : "2",
        img : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQDz2t-tFedeCu-yPMz6WGyM3FdxnNMcA20QdJlADrsWekw4TDiVYCfYIelekaeHgv2bCJbnw7HqCB_lEh-uQjK8NQyH7_A5Ff4.webp?r=c9e",
        title : "아내 역을 확보하라",
        synopsis : "이든 칼리지 면접에서 아냐의 엄마 역할을 맡아줄 사람이 필요하다. 아내를 물색하던 로이드는 옷 가게에서 아름다운 여인과 마주치는데.",
        duration : "24분",
    },
    {
        index : "3",
        img : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTWYnmDS1e0WPyFYyOl47nDQ7Twf0noOgWLvfiIiP27wT7bocF0CPHu0XqSpHo1wGLtCilZwVB5QiIsXmYiiGORBWlmWk7OPbyw.webp?r=99a",
        title : "수험 대책을 세워라",
        synopsis : "포저 가족의 집에 들어온 요르. 이제 구성원은 갖춰졌다. 로이드는 상류층처럼 행동하는 법을 익히기 위해 요르와 아냐를 데리고 가족 나들이를 간다.",
        duration : "24분",
    },
    {
        index : "4",
        img : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQrH5x5ol-6zFTnfq1Qlw8eSHCapR5eWb6N0COUXuf8eE6JBqIWeWfE4ujNe_vQH19T4ofJZ_aBBeF7agIbhT6sAf59ZzU0-KFY.webp?r=21b",
        title : "명문 학교 면접시헙",
        synopsis : "입학 면접시험을 위해 이든 칼리지에 도착한 포저 가족. 그리고 교문을 넘는 순간부터 먼발치에서 이들의 일거수일투족을 엄격한 기숙사장 헨더슨이 평가하기 시작한다.",
        duration : "24분",
    },
    {
        index : "5",
        img : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWMld-xZkAcLvcIN64KJSTSx--ZRHYQ4irdRKHa4tmkwjxb7Sph6a0g9T_ki2tx4ZiIpcAhYMhr25VlqyJ2--zGTmg-8kH4ThCE.webp?r=c85",
        title : "합격 여부의 행방",
        synopsis : "합격자 명단을 보고 어깨가 축 처진 포저 가족. 하지만 이들 앞에 헨더슨이 나타나 희망적인 정보를 알려준다.",
        duration : "24분",
    },
    {
        index : "6",
        img : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABV2gqKg6N23SpXKo_jlPRkKegR2C790oJsxBmCgMpPfv4SLXLHog8rnEjvmqqE0yZKhAc0T29f1vcvApz8srb0bfoL3ybmW8eqw.webp?r=749",
        title : "친구친구 작전",
        synopsis : "관리관과 작전 회의를 하기 위해 로이드는 안전 가옥에 간다. 그사이 나쁜 어른들이 나타나, 교복을 처음 입고 들떠 있는 아냐를 노린다.",
        duration : "24분",
    },
    {
        index : "7",
        img : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQXQeeagXg0U3AAq1j-owpWhHh45DbjxMunSCMHJmjq4ck-U6k2EO9OWeWHjTxyto_VpmmcjKRNAs6UKWqj0QLKcJS-RoIbKg8I.webp?r=969",
        title : "표적은 차남",
        synopsis : "다미안에게 때려서 미안하다고 말하려 하지만 좀처럼 입이 떨어지지 않는 아냐. 마음이 조급해진 로이드가 학교에 잠입해 뒤에서 몰래 아냐를 부추긴다.",
        duration : "24분",
    },
    {
        index : "8",
        img : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTka6L78srCEuRz_wIQK9YgiQxii46kBOPT_J0-0hbxWHRCX4mI9g_M8r68DGtZ7fz0xlJavsohqGPql3uJReCNNgU-NbUB2bHQ.webp?r=708",
        title : "대비밀경찰 위장 작전",
        synopsis : "국가의 치안 유지를 위해 스파이를 색출하고 시민을 감시하는 국가안보국. 이 기관의 비밀경찰인 요르의 동생이 오늘 포저 가족의 집을 방문한다.",
        duration : "24분",
    },
    {
        index : "9",
        img : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdZhMaAn62tuWFTrgpRvJUe6W_7sVp_MqWvzAQeIUah7N0C0tiL8V2kAavuwcFfarRKIZqvylzBe1np5GsBr3yDH9vuc8uTFnZg.webp?r=d17",
        title : "러브러브를 과시하라",
        synopsis : "동생 유리의 요구를 피할 수 없게 된 요르. 술의 힘을 빌려 용기를 내 본다. 다음 날 아침, 요르의 옷에 도청기를 몰래 부착하는 로이드.",
        duration : "24분",
    },
    {
        index : "10",
        img : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTNkn5faN6hfb2h0vzFSdfK8cYOCq97CLJs-UgYbK2VVT7J6LI9ivbSd0p0dEQojsPpNDiphvKA_R1jjYVhK9KBZ9D1xLDD0rAo.webp?r=c68",
        title : "피구 대작전",
        synopsis : "체육 시간에 활약한 학생에게 스텔라가 주어진다는 소문을 들은 아냐. 요르와 함께 피구 대회에 대비해 훈련을 시작한다.",
        duration : "24분",
    },
    {
        index : "11",
        img : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABa5LlKidMsFQCnJUZIcFDPYg7JAE1RVfpCYhIG2NKwN9C8-SJXPuYxk4LBTHe6z1k7PhMOGiahByw6MedeHi6haWvJi3rjc0o6g.webp?r=554",
        title : "별",
        synopsis : "스텔라를 획득하기 위해 로이드를 따라 병원 봉사활동에 참가한 아냐. 어떤 소년이 이곳의 재활치료용 수영장에 빠진 것을 알아챈다.",
        duration : "24분",
    },
    {
        index : "12",
        img : "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYbTcP757jA-gNe9xJ0tmgK9g410CTlkz9i_6OtkOjrNYzUDifnJz8nTWJgTk4CfO9NZwEVs1m7rw1b9VP99AQ6qEjfSXLsDGOU.webp?r=ab8",
        title : "펭귄 파크",
        synopsis : "화목한 가족이란 것을 보여주기 위해 로이드는 요르, 아냐와 함께 수족관에 가기로 한다. 하지만 그곳에 가서도 WISE로부터 새로운 임무를 맡는데.",
        duration : "24분",
    },
]

function EpisodeSelector({name}){
    return(
        <Container>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
                <span style={{fontWeight: '700',fontSize:"24px",marginTop:"48px",marginBottom:"20px"}}>
                    회차
                </span>
                <span style={{fontSize:"18px"}}>
                    {/* SPYxFAMILY 스파이 패밀리 */}
                    {name}
                </span>
            </div>

            <EpisodeContainer>
                {SPYxFAMILY.map((value)=>{
                    return(<Episode key={value.index} index={value.index} img={value.img} title={value.title} synopsis={value.synopsis} duration={value.duration}/>);
                })}
            </EpisodeContainer>
        </Container>
    );
}

const EpisodeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-direction: column;
`;

const Container = styled.div`
    background-color: #181818;
    padding: 1em 0;
    padding-bottom: 0;
`;

export default EpisodeSelector;