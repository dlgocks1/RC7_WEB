import LabelResponseLevel from 'components/LabelResponseLevel';
import useUserFavor from 'hoc/useUserFavor';
import React, { useDeferredValue, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginModalVisible } from 'store/action/LoginAction';
import styled from 'styled-components';
import { CustomGet } from 'utils/api';
import { TagListItemDummy } from 'utils/mockData';
import ApplyBtn from './ApplyBtn';
import BookmarkBtn from './BookmarkBtn';
import BookmarkModal from './BookmarkModal';
import LikeBtn from './LikeBtn';
import PopupAi from './PopupAi';

function PostingDetail({ fetchWdData, wdIndex }) {
	const ref = useRef();
	const fixref = useRef();
	const dispatch = useDispatch();
	const userFavorModule = useUserFavor();
	const { isLogin, userId, jwt } = useSelector(
		(state) => state.UserDataReducer,
	);

	const [inViewState, setInView] = useState(false);
	const inView = useDeferredValue(inViewState);
	const [popupAi, setpopupAi] = useState(false);
	const [postingDetailData, setPostingDetailData] = useState(
		fetchWdData.read().data.result,
	);
	const [nowLoading, setNowLoading] = useState(true);

	const [isBookmarked, setIsBookmarked] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	const [bookmarkModal, setBookMarkModal] = useState(false);
	const [likeCnt, setLikeCnt] = useState(0);

	const setLoginModalOn = () => {
		dispatch(setLoginModalVisible());
	};

	const handleScrollPage = () => {
		if (fixref.current.getBoundingClientRect().y < window.innerHeight) {
			setInView(true);
		} else {
			setInView(false);
		}
	};

	const handleClickAside = (type) => {
		if (!isLogin) {
			setLoginModalOn();
			return;
		}

		if (type === 'bookmark') {
			setIsBookmarked(!isBookmarked);
			if (isBookmarked) {
				userFavorModule.PatchBookMark({ wdIndex, userId, jwt });
			} else {
				userFavorModule.AddBookMark({ wdIndex, userId, jwt });
				setBookMarkModal(true);
			}
		}
		if (type === 'like') {
			setIsLiked(!isLiked);
			if (isLiked) {
				userFavorModule.PatchLiked({ wdIndex, userId, jwt });
				setLikeCnt(likeCnt - 1);
			} else {
				userFavorModule.AddLiked({ wdIndex, userId, jwt });
				setLikeCnt(likeCnt + 1);
			}
		}
	};

	const handleScrollPrev = (type) => {
		if (type === 'left') {
			ref.current.scrollBy({
				top: 0,
				left: -1,
				behavior: 'smooth',
			});
		} else {
			ref.current.scrollBy({
				top: 0,
				left: 1,
				behavior: 'smooth',
			});
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScrollPage);
		return () => {
			window.removeEventListener('scroll', handleScrollPage);
		};
	}, []);

	useEffect(() => {
		if (
			Object.prototype.hasOwnProperty.call(postingDetailData, 'likeCheck')
		) {
			if (postingDetailData.likeCheck === 'Y') {
				setIsLiked(true);
			}
		}
		if (
			Object.prototype.hasOwnProperty.call(
				postingDetailData,
				'bookMarkCheck',
			)
		) {
			if (postingDetailData.bookMarkCheck === 'Y') {
				setIsBookmarked(true);
			}
		}
		setLikeCnt(postingDetailData.likeCount);
	}, [postingDetailData]);

	useEffect(() => {
		setPostingDetailData(fetchWdData.read().data.result);
	}, [fetchWdData]);

	return (
		<ComponentWrapper isLogin={isLogin}>
			{nowLoading && (
				<>
					<div className="jobcontent-container">
						<section className="jobimage-imgcontainer">
							<div className="jobimage-slider" ref={ref}>
								<Button
									onClick={() => {
										handleScrollPrev('left');
									}}
									className="arrow-left"
									type="button"
								>
									<i className="icon-cheveron-right" />
								</Button>
								<Button
									onClick={() => {
										handleScrollPrev('right');
									}}
									className="arrow-right"
									type="button"
								>
									<i className="icon-cheveron-right" />
								</Button>

								{postingDetailData.companyImageUrl.map(
									(value) => (
										<div className="img-jobimage">
											<img src={value} alt="회사 사진" />
										</div>
									),
								)}
							</div>
						</section>
						<section className="jobheader">
							<h2>{postingDetailData.title}</h2>
							<div>
								<h6 style={{ maxWidth: 'calc(100% - 88px)' }}>
									<a
										href="/"
										data-company-name={
											postingDetailData.name
										}
									>
										{postingDetailData.name}
									</a>
								</h6>
								<LabelResponseLevel />
								<span className="location-conatiner">
									{postingDetailData.location}
									<span className="header-dot">.</span>
									{postingDetailData.country}
								</span>
							</div>
							<div className="taglist">
								<ul>
									{postingDetailData.companyTagCategory_no.map(
										(value) => (
											<li>
												<a href="/">{`#${
													TagListItemDummy.find(
														(item) =>
															item.idx === value,
													).content
												}`}</a>
											</li>
										),
									)}
								</ul>
							</div>
						</section>
						<div className="jobcontent-secription-warpper">
							<section className="jobdecription">
								<p>{postingDetailData.contents}</p>
								<div className="skill-wrapper">
									<div className="skillitem">Git</div>
									<div className="skillitem">GitHub</div>
									<div className="skillitem">GitLab</div>
									<div className="skillitem">Pytorch</div>
									<div className="skillitem">Tensroflow</div>
									<div className="skillitem">C / C++</div>
								</div>
							</section>
							<hr className="divider" />
							<section className="jobworkplace">
								<div>
									<span className="header">마감일</span>
									<span className="body">
										{postingDetailData.deadLine}
									</span>
								</div>
								<div>
									<span className="header">근무지역</span>
									<span className="body">
										{postingDetailData.workArea}
									</span>
								</div>
								{/* <a
                        className="navepMap"
                        href="https://map.naver.com/v5/search/서울특별시 서초구 양재천로29길 15 진미빌딩?"
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        <img
                            alt="Map with company address"
                            src="https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?w=700&amp;h=254&amp;markers=type:d|size:mid|pos:127.041813 37.4795099|color:red&amp;scale=2&amp;X-NCP-APIGW-API-KEY-ID=z7e7ujba1u"
                        />
                    </a> */}
							</section>
						</div>
						<section className="companyInfo" ref={fixref}>
							<button type="button" className="left">
								<div
									className="logo"
									style={{
										backgroundImage: `url(${postingDetailData.profileImageUrl})`,
									}}
								/>
								<div>
									<h5>{postingDetailData.name}</h5>
									<h6>{postingDetailData.relatedWork}</h6>
								</div>
							</button>
							<button type="button" className="btn-follow">
								<span className="Button_Button__label__1Kk0v">
									팔로우
								</span>
							</button>
						</section>
						<section>
							<div className="warning">
								<div className="warning-header">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
									>
										<g
											fill="currentColor"
											fillRule="evenodd"
										>
											<path
												fillRule="nonzero"
												d="M15.266 20.658A9.249 9.249 0 0112 21.25a9.25 9.25 0 010-18.5 9.21 9.21 0 016.54 2.71A9.217 9.217 0 0121.25 12a9.213 9.213 0 01-2.71 6.54.75.75 0 101.061 1.062A10.713 10.713 0 0022.75 12c0-2.89-1.146-5.599-3.149-7.601A10.717 10.717 0 0012 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75c1.31 0 2.591-.235 3.794-.688a.75.75 0 10-.528-1.404z"
											/>
											<path d="M13 16a1 1 0 11-2 0 1 1 0 012 0" />
											<path
												fillRule="nonzero"
												d="M11.25 7v5a.75.75 0 101.5 0V7a.75.75 0 10-1.5 0z"
											/>
										</g>
									</svg>
									<div className="warning-header-content">
										<h5>
											본 채용정보는 원티드랩의 동의없이
											무단전재, 재배포, 재가공할 수&nbsp;
											없으며, 구직활동 이외의&nbsp;
											<br className="break-lg" />
											용도로 사용할 수 없습니다.
										</h5>
										<button type="button">
											<i className="icon-cheveron-right" />
										</button>
									</div>
								</div>
							</div>
						</section>
					</div>
					<aside
						className={`jobprocess-container ${
							inView ? 'onfixed' : undefined
						}`}
						style={{ top: !inView && '70px' }}
					>
						<div>
							<header>
								<div className="reward-container">
									<h3>채용보상금</h3>
									<ul>
										<li>
											<h4>추천인</h4>
											<p>500,000원</p>
										</li>
										<li>
											<h4>지원자</h4>
											<p>500,000원</p>
										</li>
									</ul>
									<button className="btn-share" type="button">
										<svg
											xmlns="https://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 19 19"
										>
											<defs>
												<path
													id="shareIcon"
													d="M5.336 7.75c-.551-.703-1.418-1.136-2.365-1.136C1.337 6.614 0 7.898 0 9.494c0 1.596 1.336 2.879 2.971 2.879.93 0 1.785-.419 2.338-1.102l8.495 4.482c.128.068.276.092.42.068l.025-.004c.213-.036.395-.173.489-.367.101-.21.249-.393.437-.54.673-.526 1.643-.407 2.168.266.526.673.407 1.643-.265 2.167-.673.526-1.643.407-2.168-.266-.226-.29-.644-.34-.933-.115-.29.226-.34.644-.115.933.977 1.251 2.783 1.473 4.034.496 1.25-.976 1.472-2.782.495-4.033-.977-1.251-2.783-1.473-4.033-.496-.169.132-.32.28-.454.442L5.478 9.858c-.322-.241-.816-.145-1 .255-.259.558-.844.93-1.507.93-.913 0-1.642-.7-1.642-1.55 0-.849.73-1.55 1.642-1.55.636 0 1.2.343 1.473.863.107.368.526.64.954.413l9.026-4.762.118-.079.029-.024c.233-.197.303-.527.169-.8-.104-.212-.158-.442-.158-.68 0-.853.692-1.545 1.544-1.545.853 0 1.545.692 1.545 1.544 0 .854-.691 1.545-1.545 1.545-.367 0-.664.297-.664.664 0 .367.297.665.664.665C17.714 5.747 19 4.46 19 2.873 19 1.287 17.713 0 16.126 0c-1.586 0-2.873 1.287-2.873 2.873 0 .224.026.445.076.66L5.336 7.748z"
												/>
											</defs>
											<g fill="none" fillRule="evenodd">
												<use
													fill="#36F"
													xlinkHref="#shareIcon"
												/>
											</g>
										</svg>
									</button>
								</div>
								<BookmarkBtn
									isBookmarked={isBookmarked}
									handleClickAside={handleClickAside}
								/>
								<ApplyBtn handleClickAside={handleClickAside} />

								<LikeBtn
									handleClickAside={handleClickAside}
									isLiked={isLiked}
									likeCount={likeCnt}
								/>
							</header>
							<footer className="footer-jobprogress" />
							<div className="wantedAi-container">
								<div className="item-content">
									<img
										src="https://static.wanted.co.kr/images/ai/logo-wantedai.png"
										width="70"
										alt="logo-wantedai"
										style={{ marginBottom: '3px' }}
									/>
									<span>합격예측</span>
								</div>
								<div className="item-description">
									서류합격률이 궁금하다면?
									<button
										type="button"
										className="btn-question"
										onClick={() => {
											setpopupAi(true);
										}}
									>
										<svg
											width="17"
											height="17"
											className=""
											viewBox="0 0 17 17"
										>
											<defs>
												<filter id="bfoh3u0w3a">
													<feColorMatrix
														in="SourceGraphic"
														values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"
													/>
												</filter>
											</defs>
											<g fill="none" fillRule="evenodd">
												<g>
													<g>
														<g transform="translate(-1080 -374) translate(1080 374)">
															<g>
																<path
																	stroke="#999"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth="1.2"
																	d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745"
																	transform="translate(1 1)"
																/>
																<path
																	fill="#999"
																	d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671"
																	transform="translate(1 1) rotate(-180 7.053 10.408)"
																/>
																<path
																	stroke="#999"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth="1.2"
																	d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783"
																	transform="translate(1 1)"
																/>
															</g>
														</g>
													</g>
												</g>
											</g>
										</svg>
									</button>
								</div>
							</div>

							{popupAi && (
								<PopupAi
									popupAi={popupAi}
									setpopupAi={setpopupAi}
								/>
							)}
						</div>
					</aside>
					{bookmarkModal && (
						<BookmarkModal setBookMarkModal={setBookMarkModal} />
					)}
				</>
			)}
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	position: relative;
`;

const Button = styled.button`
	position: absolute;
	width: 9%;
	height: 100%;
	font-size: 26px;
	color: #b5b5b5;
	opacity: 0.7;
	z-index: 1;
`;

export default PostingDetail;
