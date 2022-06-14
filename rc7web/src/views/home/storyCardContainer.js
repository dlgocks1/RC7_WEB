
import Question from './question';
import StoryCard from './storyCard';
import './home.css';

function StoryCardContainer() {
    return (
        <div className="our-story-cards">
            <StoryCard content={
                <>
                    <div className="concord-img-wrapper">
                        <img className="concord-img vlv-creative"
                            src="https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/fdbda4bf-7038-4889-9e5e-01ef45114e55/KR-ko-20220530-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                            srcset="https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/fdbda4bf-7038-4889-9e5e-01ef45114e55/KR-ko-20220530-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/fdbda4bf-7038-4889-9e5e-01ef45114e55/KR-ko-20220530-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/fdbda4bf-7038-4889-9e5e-01ef45114e55/KR-ko-20220530-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
                            alt="" />
                        <div className="concord-img-gradient"></div>
                    </div>

                    <div className="our-story-card-text">
                        <h1 id="" className="our-story-card-title" data-uia="hero-title">영화와 시리즈를 무제한으로.</h1>

                        <h2 id="" className="our-story-card-subtitle" data-uia="our-story-card-subtitle">다양한 디바이스에서
                            시청하세요. 언제든 해지하실 수 있습니다.</h2>

                        <form className="cta-form email-form flex" data-uia="email-form" method="GET">
                            <h3 className="email-form-title">시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</h3>
                            <div className="email-form-lockup flex">
                                <div data-uia="field-email+container" className="nfInput">
                                    <input type="email" data-uia="field-email" name="email" className="nfTextField"
                                        id="id_email_hero_fuji" value="" tabindex="0" autocomplete="email"
                                        maxlength="50" minlength="5" dir="" placeholder="이메일 주소" />
                                </div>
                                <div className="our-story-cta-container cta-link-wrapper">
                                    <button className="btn btn-red startbt flex"
                                        type="submit" autocomplete="off" tabindex="0" role="link"
                                        data-uia="our-story-cta-hero_fuji"><span>시작하기</span>
                                        <span id="" className="chevron-right-arrow"
                                            data-uia=""> <svg viewBox="0 0 6 12" >
                                                <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
                                                    fill="evenodd" fill-rule="evenodd"></path>
                                            </svg></span></button>
                                </div>
                            </div>
                        </form>

                    </div>
                </>
            } />
            <StoryCard content={
                <>
                    <div className="animation-card-container flex">
                        <div className="our-card-text">
                            <h1 id="" className="our-story-card-title" data-uia="animation-card-title">TV로 즐기세요.</h1>
                            <h2 id="our-story-card-subtitle" className="our-story-card-subtitle"
                                data-uia="our-story-card-subtitle">스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이
                                플레이어 등 다양한 디바이스에서 시청하세요.</h2>
                        </div>
                        <div className="our-story-card-img-container flex">
                            <div className="our-story-card-animation-container">
                                <img alt="" className="our-story-card-img"
                                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                                data-uia="our-story-card-img" />

                                <div className="our-story-card-animation">
                                    <video className="our-story-card-video" autoplay="" playsinline="" muted="" loop="true">
                                        <source
                                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                                            type="video/mp4" />
                                    </video>
                                    <div className="our-story-card-animation-text"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            } />
            <StoryCard content={
                <>
                    <div className="animation-card-container flex">
                        <div className="our-story-card-text flex">
                            <h1 id="" className="our-story-card-title2" data-uia="animation-card-title">즐겨 보는 콘텐츠를 저장해 오프라인으로
                                시청하세요.</h1>
                            <h2 id="" className="our-story-card-subtitle2" data-uia="our-story-card-subtitle">간편하게 저장하고 빈틈없이
                                즐겨보세요.</h2>

                        </div>
                        <div className="our-story-card-img-container flex">
                            <div className="our-story-card-animation-container">
                                <img alt="" className="our-story-card-img"
                                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                                    data-uia="our-story-card-img" />
                                <div className="our-story-card-animation2">
                                    <div className="our-story-card-animation-image">
                                        <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
                                    </div>
                                    <div className="our-story-card-animation-text">
                                        <div id="" className="text-0" data-uia="">저장 중...</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            }
            />
            <StoryCard content={
                <>
                    <div className="our-story-card-text"><h1 id="" className="our-story-card-title" data-uia="animation-card-title">어린이 전용 프로필을 만들어 보세요.</h1><h2 id="" className="our-story-card-subtitle" data-uia="our-story-card-subtitle">자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.</h2></div>
                    <div className="our-story-card-img-container-kid">
                        <div className="kid-image flex">
                            <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png" data-uia="our-story-card-img" /><div className="our-story-card-animation" /><div className="our-story-card-animation-text" /></div></div>
                </>
            } />
            <StoryCard content={
                <><div className="qeustion-text-container">
                    <h1>
                        자주 묻는 질문
                    </h1>
                </div>
                    <div className="qestion-container">
                        <div className="question-list">
                            <Question title="넷플릭스란 무엇인가요?" content="넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다.<br/><br/>
                         저렴한 월 요금으로 일체의 광고 없이 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가 제공됩니다."/>

                            <Question title="넷플릭스 요금은 얼마인가요?" content="스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 9,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다.</div></details>
                        "/>

                            <Question title="어디에서 시청할 수 있나요?" content="언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다.
                                    <br/><br/>
                                    iOS, Android, Windows 10용 앱에서는 좋아하는 시리즈를 저장할 수도 있습니다. 저장 기능을 이용해 이동 중이나 인터넷에 연결할 수 없는 곳에서도 시청하세요. 넷플릭스는 어디서든 함께니까요.
                                "/>

                            <Question title="멤버십을 해지하려면 어떻게 하나요?" content="넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요. 멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요.
                                "/>
                            <Question title="넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?" content="넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하세요.
                                "/>

                            <Question title="아이들이 넷플릭스를 봐도 좋을까요?" content="멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서 가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다.
                                    <br/><br/>
                                    키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어, 자녀가 시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의 시청을 원치 않는 특정 작품을 차단할 수도 있습니다.
                                "/>
                        </div>
                    </div>
                    <form className="email-form flex" method="">
                        <h3 className="email-form-title2">시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</h3>
                        <div className="email-form-lockup flex">
                            <div data-uia="field-email+container" className="nfInput">
                                <label className="input_id" placeholder="email">
                                    <input type="email" data-uia="field-email" name="email" className="nfTextField" id="id_email_hero_fuji" value="" tabindex="0" autocomplete="email" maxlength="50" minlength="5" dir="" placeholder="이메일 주소" />
                                </label></div>
                            <div className="our-story-cta-container cta-link-wrapper">
                                <button className="btn btn-red startbt flex" type="submit" autocomplete="off" tabindex="0" role="link" data-uia="our-story-cta-hero_fuji"><span>시작하기</span>
                                    <span id="" className="chevron-right-arrow" data-uia=""> <svg viewBox="0 0 6 12">
                                        <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="evenodd" fill-rule="evenodd"></path>
                                    </svg></span></button>
                            </div>
                        </div>
                    </form></>
            } />
        </div>
    );
}

export default StoryCardContainer;