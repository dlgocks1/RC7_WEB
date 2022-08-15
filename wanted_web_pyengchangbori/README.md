## 220716 (토)

-   React 초기 앱 생성
-   코드 컨벤션을 위한 Eslint, Prettier설정
-   외부 폰트 설정
    [Pretendard](https://cactus.tistory.com/306)
-   icomoon을 사용해 아이콘 폰트 사용하기
    [icomoon](https://icomoon.io/)
-   메인화면 디자인 진행 중 ( 반응형 디자인 X )
    _ react-slick 이용 Top Banner 구현
    _ react-horizontal-scrolling-menu 이용 Chip Scroll 구현
    작업한거 모듈로 빼기
    ![image](https://user-images.githubusercontent.com/14178811/179367247-a231a02d-6738-4d02-995e-156cd0aab6eb.png)

---

## 220717 (일)

-   메인 화면 퍼블리싱 완료
-   로그인/회원가입 모달창 구현 완료 [스크롤막기](https://joylee-developer.tistory.com/185)
-   헤더 Category 구현
-   icomoon 아이콘 업데이트
-   [Conditional 렌더링인 컴포넌트에 useRef달아서 위치, 크기 가져오기](https://stackoverflow.com/questions/58095183/how-to-use-ref-in-conditional-render)

[원티드 - 나다운 일의 시작.webm](https://user-images.githubusercontent.com/14178811/179425234-92de4c94-68ba-4153-bb39-ff2d995d0afc.webm)

---

## 220718 (월)

-   회원가입, 로그인 API 연동 완료
-   Axios 모듈화
-   회원가입 후 Onboarding 창 제작
-   [outlet을 사용한 중첩렌더링](https://velog.io/@reasonz/2022.07.14-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9A%B0%ED%84%B0-%EC%A4%91%EC%B2%A9-%EB%9D%BC%EC%9A%B0%ED%8C%85-nested-routes-outlet)
-   직업,직군페이지(Wdlist) 퍼블리싱 작업 시작

[원티드 - 나다운 일의 시작 (1).webm](https://user-images.githubusercontent.com/14178811/179650552-0b9a414e-b879-4be2-83b3-a10938b72fe3.webm)

---

## 220719 (화)

-   직군 페이지 퍼블리싱 80% 완료
-   메인화면 데이터 API 연결 및 스켈레톤 UI 구현
    -   쿼리스트링 value에 따른 화면 값 렌더링
-   [rc-slick 이용하여 range 컴포넌트 커스텀](https://stackoverflow.com/questions/57689714/how-to-input-value-into-rc-slider-handle)
-   react-observer-intersection으로 스크롤 시 fixed 화면 구현
-   [하위 컴포넌트에서 콜백함수 이용해서 상위 컴포넌트로 값 빼오기](https://velog.io/@dudgks5846/React-State-%EB%81%8C%EC%96%B4%EC%98%AC%EB%A6%AC%EA%B8%B0)

[원티드 - 나다운 일의 시작 (2).webm](https://user-images.githubusercontent.com/14178811/179833775-c016a123-6189-41c6-8441-1d5a58befae4.webm)

---

## 220720 (수)

-   직군 페이지 퍼블리싱 완료
-   직군 디테일 페이지 퍼블리싱 완료
-   직군별 연봉 탭 퍼블리싱 시작

[원티드 - 나다운 일의 시작 (3).webm](https://user-images.githubusercontent.com/14178811/180084160-9bd2ab97-9c3e-4904-9c1a-352a06007584.webm)

## 220721 (목)

-   채용, 직군별 연봉 페이지 퍼블리싱 완료
-   이력서 페이지 퍼블리싱 완료 -> 로그인에 따라 다르게
-   채용 직군페이지 API 연결 완료
-   프로필 페이지 퍼블리싱 시작

[원티드 - 나다운 일의 시작 (4).webm](https://user-images.githubusercontent.com/14178811/180334129-75a50b91-9fc0-47d3-877e-ca2f326130a5.webm)

---

## 220723 (토)

-   이력서 작성 페이지
-   채용페이지 APi 연결 및 Errorboundary + [Suspense](https://ko.reactjs.org/docs/concurrent-mode-suspense.html)로 로딩화면 구현
    -   fetchData를 batch를 사용해 한번에 실행 및 Error 및 예외 URL에 따른 No match Page 연결
-   로그인 상태에 따른 다른 컴포넌트 렌더링
-   채용 디테일 페이지 구현 및 API 연결
-   프로필 페이지 퍼블리싱
-   이력서 작성 페이지 구현

[원티드 - 나다운 일의 시작 (5).webm](https://user-images.githubusercontent.com/14178811/180624501-03e19052-8220-4fc4-9552-5acd0cba288d.webm)

---

## 220724 (일)

-   자동로그인 API 연결
-   이력서 페이지 퍼블리싱 완료 및 조건부 라우팅 구현
-   좋아요 북마크 API 연결 및 페이지 퍼블리싱
-   마이페이지 퍼블리싱 완료
-   검색 탭 퍼블리싱 시작

[원티드 - 나다운 일의 시작 (5).webm](https://user-images.githubusercontent.com/14178811/180670996-6ad2491b-ee23-4edd-9e50-b2676d9a8c84.webm)

---

## 220726 (화)

-   채용, 메인탭, 직군별 연봉 남은 API 연동
-   검색 탭 구현 및 API 연동
-   이력서 CRUD 및 수정 구현
    +) Redux를 건드리면 관련된 모든 함수형 컴포넌트의 소스가 재 렌더링된다.

```
wanted_web_pyengchangbori
├─ .gitignore
├─ .prettierrc
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
└─ src
   ├─ assets
   │  ├─ fonts
   │  ├─ img
   ├─ components
   │  ├─ common
   │  ├─ login
   │  └─ wdlist
   ├─ hoc
   ├─ pages
   │  ├─ cv
   │  ├─ events
   │  ├─ home
   │  ├─ jobsfeed
   │  ├─ logout
   │  ├─ oauth
   │  ├─ onboarding
   │  ├─ profile
   │  ├─ salary
   │  ├─ search
   │  ├─ wd
   │  └─ wdlist
   ├─ routes
   ├─ store
   │  ├─ action
   │  └─ reducer
   └─ utils
```
