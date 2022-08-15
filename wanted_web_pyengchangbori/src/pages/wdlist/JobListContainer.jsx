import TagListItem from 'components/common/TagListItem';
import {
	LeftArticleArrow,
	RightArticleArrow,
} from 'components/common/ArticleArrows';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import styled from 'styled-components';
import { JobMainCategoryDummy, TagListItemDummy } from 'utils/mockData';
import { Link } from 'react-router-dom';
import LocationModal from 'components/wdlist/LocationModal';
import { useDispatch, useSelector } from 'react-redux';
import {
	setCareerYearsReducer,
	setJobSortTagReducer,
	setLocationModalInvisible,
	setLocationModalVisible,
	setUserTagReducer,
} from 'store/action/WdListAction';
import RcSlider from 'rc-slider';
import { setToastModalVisible } from 'store/action/ToastModalAction';
import JobListContentContainer from './JobListContentContainer';

import 'rc-slider/assets/index.css';

function JobListContainer({ contentList }) {
	const dispatch = useDispatch();

	const { locations } = useSelector((state) => state.WdListReducer);

	const { locationModalVisible, userTags } = useSelector(
		(state) => state.WdListReducer,
	);

	const [prevCareer, setPrevCareer] = useState(0);
	const [nextCareer, setNextCareer] = useState(10);
	const [selectedprevCareer, setSelectedPrevCareer] = useState(0);
	const [selectednextCareer, setSelectedNextCareer] = useState(10);
	const [isCareer, setIsCareer] = useState(false);
	// popularity_order latest_order
	const [sortingType, setSorttingType] = useState('popularity_order');
	const [isSorting, setIsSorting] = useState(false);
	const [arrowState, setArrowState] = useState(0);
	const [tagList, setTagList] = useState(userTags);
	const [ref, inView, entry] = useInView();
	const [orderText, setOrderText] = useState('최신순');

	const ArrowStyle = {
		top: '0px',
		width: '30px',
		height: '30px',
		minWidth: '30px',
		minHeight: '30px',
		fontSize: '15px',
		zIndex: '10',
		backgroundColor: '#fff',
	};

	const settings = {
		dots: false,
		speed: 500,
		infinite: false,
		slidesToShow: 5,
		slidesToScroll: 3,
		variableWidth: true,
		prevArrow: <LeftArticleArrow customStyle={ArrowStyle} />,
		nextArrow: <RightArticleArrow customStyle={ArrowStyle} />,
		arrows: true,
		afterChange: (prev) => setArrowState(prev),
	};

	const LocationmodalVisible = () => {
		dispatch(setLocationModalVisible());
	};
	const LocationmodalInvisible = () => {
		dispatch(setLocationModalInvisible());
	};

	const handleAdjustCareer = () => {
		setIsCareer(false);
		setSelectedPrevCareer(prevCareer);
		setSelectedNextCareer(nextCareer);
		dispatch(
			setCareerYearsReducer({
				years: [prevCareer, nextCareer],
			}),
		);
	};

	const handleChangeCareer = (e) => {
		setPrevCareer(e[0]);
		setNextCareer(e[1]);
	};

	const handleChangeTags = (e, tag) => {
		if (tagList.length >= 3) {
			if (tagList.includes(tag)) {
				const temp = tagList.filter((element) => element !== tag);
				setTagList(temp);
			} else {
				dispatch(
					setToastModalVisible({
						text: '태그는 최대 3개까지 선택 가능합니다.',
					}),
				);
			}
			return;
		}
		if (tagList.includes(tag)) {
			const temp = tagList.filter((element) => element !== tag);
			setTagList(temp);
		} else {
			const temp = [...tagList, tag];
			setTagList(temp);
		}
	};

	useEffect(() => {
		dispatch(
			setUserTagReducer({
				userTags: tagList,
			}),
		);
	}, [tagList]);

	useEffect(() => {
		dispatch(
			setJobSortTagReducer({
				jobSort: sortingType,
			}),
		);
	}, [sortingType]);

	const sliderHandle = (e) => {
		if (e.props.className.includes('rc-slider-handle-1')) {
			return (
				<CustomHandle {...e.props}>
					<span>{prevCareer}</span>
				</CustomHandle>
			);
		}
		return (
			<CustomHandle isEnd={nextCareer === 10} type="Right" {...e.props}>
				<span>{nextCareer}</span>
			</CustomHandle>
		);
	};

	return (
		<JobListContainers inView={!inView}>
			<div ref={ref} className="fixed-dummy" />
			<div className="container-filterwdlist">
				<div className="container-filterwdlist-inner">
					<div className="btngroup-filterwdlist">
						<button
							onClick={() => LocationmodalVisible()}
							type="button"
							className="btn-filterwdlist-first"
						>
							<span className="text-filterbtn">
								지역
								<span className="text-filtercount">
									{locations.length}
								</span>
							</span>
							<span className="text-filterbtn-display">
								{locations.length === 1 &&
								locations[0] === 'all'
									? '한국'
									: '서울 외'}
							</span>
						</button>

						<div className="container-filterbtn">
							<button
								onClick={() => {
									setIsCareer(!isCareer);
									setPrevCareer(selectedprevCareer);
									setNextCareer(selectednextCareer);
								}}
								type="button"
								className="btn-filterwdlist-first"
							>
								<span className="text-filterbtn">경력</span>
								<span className="text-filterbtn-display">
									{selectednextCareer - selectedprevCareer ===
									10
										? '전체'
										: `${
												selectedprevCareer === 0
													? '신입'
													: `${selectedprevCareer}년`
										  } - ${selectednextCareer}년`}
								</span>
								<svg
									width="8"
									height="7"
									viewBox="0 0 8 7"
									fill="none"
									xmlns="https://www.w3.org/2000/svg"
								>
									<path
										d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
										fill="#333333"
									/>
								</svg>
							</button>
							{isCareer && (
								<section className="container-yearspopup">
									<header className="header-header">
										<div className="header-range">
											{nextCareer - prevCareer === 10 ? (
												<span> 전체 </span>
											) : (
												<>
													{prevCareer === 0 ? (
														<span>신입</span>
													) : (
														<span>
															{prevCareer}년
														</span>
													)}
													<span> - </span>
													{nextCareer === 10 ? (
														<span>
															{nextCareer}년 이상
														</span>
													) : (
														<span>
															{nextCareer}년
														</span>
													)}
												</>
											)}
										</div>
									</header>
									<div className="rcSlider-wrapper">
										<CustomRcSlider
											range
											min={0}
											max={10}
											defaultValue={[
												selectedprevCareer,
												selectednextCareer,
											]}
											onChange={(e) => {
												handleChangeCareer(e);
											}}
											railStyle={{
												backgroundColor: '#EEF0F2',
												height: 7,
											}}
											trackStyle={{
												backgroundColor: '#3366FF',
												height: 7,
											}}
											handleStyle={{
												height: 25,
												width: 25,
												backgroundColor: '#fff',
												border: '1px solid #3366ff',
												borderRadius: 50,
												marginTop: -9,
												opacity: 1,
											}}
											handleRender={sliderHandle}
										/>
									</div>
									<hr
										className="divider"
										style={{ opacity: '0.2', margin: '0' }}
									/>
									<footer className="footer-yearspopup">
										<div className="btn-footer-yearspopup">
											<button
												onClick={() => {
													setIsCareer(false);
												}}
												type="button"
												className="btn-cancle"
											>
												<span className="Button_Button__label__1Kk0v">
													취소
												</span>
											</button>
											<button
												type="button"
												onClick={handleAdjustCareer}
												className="btn-adjust"
											>
												<span className="Button_Button__label__1Kk0v">
													적용하기
												</span>
											</button>
										</div>
									</footer>
								</section>
							)}
						</div>

						<div className="container-filterbtn">
							<button
								type="button"
								className="btn-filterwdlist-first"
							>
								<span className="text-filterbtn">기술스택</span>
								<span className="text-filterbtn-display" />
								<svg
									width="8"
									height="7"
									viewBox="0 0 8 7"
									fill="none"
									xmlns="https://www.w3.org/2000/svg"
								>
									<path
										d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
										fill="#333333"
									/>
								</svg>
							</button>
						</div>
					</div>

					<JobSortContainer
						issort={isSorting}
						onClick={() => {
							setIsSorting(!isSorting);
						}}
					>
						<div className="selector-jobsort">
							<div className="customselector-jobsort">
								<button type="button">
									{orderText}
									<svg
										width="8"
										height="7"
										viewBox="0 0 8 7"
										fill="none"
										xmlns="https://www.w3.org/2000/svg"
									>
										<path
											d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
											fill="#333333"
										/>
									</svg>
								</button>
								<ul
									style={{
										display: isSorting ? 'block' : 'none',
									}}
								>
									<li>
										<button
											name="job.latest_order"
											type="button"
											onClick={() => {
												setSorttingType('latest_order');
												setOrderText('최신순');
											}}
										>
											최신순
										</button>
									</li>
									<li>
										<button
											name="job.compensation_order"
											type="button"
											onClick={() => {
												setSorttingType(
													'compensation_order',
												);
												setOrderText('보상금순');
											}}
										>
											보상금순
										</button>
									</li>
									<li>
										<button
											name="job.popularity_order"
											type="button"
											onClick={() => {
												setSorttingType(
													'popularity_order',
												);
												setOrderText('인기순');
											}}
										>
											인기순
										</button>
									</li>
								</ul>
							</div>
							<div className="mobileicon-selector">
								<svg
									width="8"
									height="7"
									viewBox="0 0 8 7"
									fill="none"
									xmlns="https://www.w3.org/2000/svg"
								>
									<path
										d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
										fill="#333333"
									/>
								</svg>
							</div>
							<select className="visible-xs">
								<option
									value="company.response_rate_order"
									data-attribute-id="explore__sort__update"
									data-sort-kind="responseRate"
									data-job-category-id="all"
									data-job-category="all"
									data-job-role-id="all"
									data-job-role="all"
								>
									응답률순
								</option>
								<option
									value="job.latest_order"
									data-attribute-id="explore__sort__update"
									data-sort-kind="latest"
									data-job-category-id="all"
									data-job-category="all"
									data-job-role-id="all"
									data-job-role="all"
								>
									최신순
								</option>
								<option
									value="job.compensation_order"
									data-attribute-id="explore__sort__update"
									data-sort-kind="reward"
									data-job-category-id="all"
									data-job-category="all"
									data-job-role-id="all"
									data-job-role="all"
								>
									보상금순
								</option>
								<option
									value="job.popularity_order"
									data-attribute-id="explore__sort__update"
									data-sort-kind="popular"
									data-job-category-id="all"
									data-job-category="all"
									data-job-role-id="all"
									data-job-role="all"
								>
									인기순
								</option>
							</select>
						</div>
					</JobSortContainer>
				</div>

				<hr className="divider-filterwdlist" />

				<div className="container-taglist">
					<CustomSlider prev={arrowState} {...settings}>
						{TagListItemDummy.map((value) => (
							<TagListItem
								onClick={(e, content) => {
									handleChangeTags(e, content);
								}}
								hasClicked={tagList.includes(value.idx)}
								key={value.idx}
								idx={value.idx}
								content={value.content}
								color={value.color}
								imgUrl={value.imgUrl}
							/>
						))}
					</CustomSlider>
				</div>
			</div>

			<hr className="divier" />

			{locationModalVisible && <LocationModal />}

			<JobListContentContainer contentList={contentList} />
		</JobListContainers>
	);
}

const CustomHandle = styled.div`
	span {
		font-size: 10px;
		line-height: 13px;
		position: absolute;
		z-index: 2;
		pointer-events: none;
		font-weight: 700;
		color: #36f;
		top: 6px;
		left: 9px;
		left: ${(props) => props.isEnd && '7px !important'};
		position: absolute;
		font-family: inherit;
	}
	.rc-slider-handle {
	}
`;

const CustomRcSlider = styled(RcSlider)``;

const CustomSlider = styled(Slider)`
	z-index: 1;

	.rc-slider-handle-1 {
	}
	.slick-list {
		position: relative;
		overflow: hidden;
		display: block;
		margin: 0;
		padding: 0;
		::after,
		::before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			z-index: 2;
			width: 80px;
			height: 32px;
		}
		::after {
			background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff 50%);
			right: 0;
		}

		::before {
			left: 0;
			background: ${(props) =>
				props.prev !== 0 &&
				'linear-gradient(270deg, hsla(0, 0%, 100%, 0), #fff 50%)'};
		}
	}

	.slick-track {
		position: relative;
		left: 0;
		top: 0;
		display: block;
	}
	.slick-track:before,
	.slick-track:after {
		content: '';
		display: table;
		box-sizing: border-box;
	}
	.slick-track:after {
		clear: both;
	}
	.slick-slide {
		float: left;
		height: 100%;
		min-height: 1px;
		display: block;
	}
`;

const JobSortContainer = styled.div`
	height: 40px;
	position: relative;

	.mobileicon-selector {
		display: none;
		svg:not(:root) {
			overflow: hidden;
		}
	}
	select {
		appearance: none;
		display: none !important;
		padding: 0 15px;
		border: 1px solid #e1e2e3;
		border-radius: 5px;
		background-color: #fff;
		color: #333;
		font-size: 15px;
		font-weight: 400;
		width: 100%;
		height: 40px;
	}
	.customselector-jobsort {
		width: 104px;
		position: relative;
		svg {
			transform: ${(props) => props.issort && 'rotate(180deg)'};
			transition: 0.3s;
		}
		> ul {
			position: absolute;
			top: 39px;
			left: 0;
			right: 0;
			z-index: 98;
			background: #fff;
			border: 1px solid #ececec;
			border-radius: 0 0 4px 4px;
		}
		> ul > li button {
			width: 100%;
			font-size: 14px;
			font-weight: 400;
			font-stretch: normal;
			font-style: normal;
			line-height: 40px;
			letter-spacing: normal;
			color: #333;
			text-align: left;
			padding: 0 0 0 16px;
			border-bottom: 1px solid #ececec;
		}
		> button {
			border-radius: 4px;
			border: 1px solid #ececec;
			background-color: #fff;
			font-size: 14px;
			font-weight: 400;
			height: 40px;
			letter-spacing: normal;
			color: #000;
			padding: 0 16px;
			position: relative;
			width: 100%;
			text-align: left;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
	.selector-jobsort {
		position: relative;
	}
`;

export const JobListContainers = styled.div`
	margin: 0 auto;
	padding: 20px 0 80px;
	width: 87.72%;
	position: relative;
	max-width: 1060px;

	.fixed-dummy {
		/* height: ${(props) => props.inView && '60px'}; */
	}
	.divier {
		width: 100vw;
		margin: 0;
		margin-bottom: 38px;
		margin-left: calc(-50vw + 50%);
		height: 1px;
		border: none;
		flex-shrink: 0;
		background-color: #ececec;
	}
	.divider-filterwdlist {
		max-width: 1060px;
		height: 1px;
		margin: 25px auto;
		opacity: 0.3;
		background-color: rgba(236, 236, 236, 0.7);
	}

	.container-filterbtn {
		margin-left: 10px;
		position: relative;
		.container-yearspopup {
			position: absolute;
			width: 468px;
			height: 174px;
			overflow: hidden;
			background-color: #fff;
			z-index: 99;
			border: 1px solid #e1e2e3;
			box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
			border-radius: 5px;
			left: -1px;
			top: 45px;
			.rcSlider-wrapper {
				padding: 5px 27px 35px;
			}
			.footer-yearspopup {
				padding: 10px;
				border-color: #ececec;
			}
			.btn-footer-yearspopup {
				text-align: right;
			}
			.btn-cancle {
				color: #767676;
				font-weight: 600;
				padding-right: 10px;
				min-width: 0;
				height: 30px;
				font-size: 14px;
			}
			.btn-adjust {
				height: 30px;
				font-size: 14px;
				color: #36f;
				padding: 6px 8px;
				span {
					width: 100%;
					font-size: inherit;
					font-weight: 700;
					color: inherit;
				}
			}
		}
		.header-header {
			display: flex;
			color: #333;
			font-size: 16px;
			font-weight: 400;
			line-height: 19px;
			padding: 30px 15px 20px;
			font-family: inherit;
			div {
				> span:nth-child(2) {
					margin-left: 20px;
					margin-right: 20px;
				}
			}
		}
	}

	.text-filterbtn-display {
		color: #36f !important;
		font-weight: 600;
		margin-right: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 14px;
		letter-spacing: normal;
		white-space: nowrap;
	}
	.text-filterbtn {
		margin-right: 15px;
		font-size: 14px;
		font-weight: 400;
		letter-spacing: normal;
		color: #333;
		white-space: nowrap;
		.text-filtercount {
			position: absolute;
			top: 4px;
			right: 0;
			transform: translate(50%, -50%);
			background-color: #36f;
			border-radius: 10px;
			color: #fff;
			display: inline-block;
			font-size: 12px;
			font-weight: 600;
			width: 20px;
			height: 20px;
			line-height: 20px;
			margin-left: 7px;
			z-index: 1;
		}
	}

	.btn-filterwdlist-first {
		align-items: center;
		display: inline-flex;
		height: 40px;
		padding: 0 15px !important;
		margin-bottom: 0;
		border-radius: 5px;
		border: 1px solid #ececec;
		position: relative;
		background: #fff;
		color: #333;
		font-size: 13px;
		font-weight: 400;
		> svg {
			margin-left: 8px;
			transition: 0.3s;
		}
	}

	.btngroup-filterwdlist {
		display: flex;
		align-items: center;
		flex: auto;
		justify-content: left;
		max-width: none;
	}

	.container-filterwdlist-inner {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		position: relative;

		width: ${(props) => props.inView && '87.72%'};
		margin: ${(props) => props.inView && '0 auto'};
		max-width: ${(props) => props.inView && '1060px'};
	}

	.container-taglist {
		position: relative;
		width: ${(props) => props.inView && '87.72%'};
		margin: ${(props) => props.inView && '0 auto'};
		max-width: ${(props) => props.inView && '1060px'};
	}
	.container-filterwdlist {
		top: 50px;
		margin-bottom: 25px;
		padding-top: 10px;

		/* position: fixed; */
		position: ${(props) => props.inView && 'fixed'};
		top: ${(props) => props.inView && '50'};
		z-index: ${(props) => props.inView && '2'};
		left: ${(props) => props.inView && '0'};
		right: ${(props) => props.inView && '0'};
		border-bottom: ${(props) => props.inView && '1px solid #36f'};
		background: ${(props) => props.inView && '#fff'};
		padding: ${(props) => props.inView && '20px 0 25px !important'};
	}
`;

export default JobListContainer;
