import Divider from 'pages/home/Divider';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { JobMainCategoryDummy } from 'utils/mockData';
import LocationModal from 'components/wdlist/LocationModal';
import { useDispatch, useSelector } from 'react-redux';
import { setToastModalVisible } from 'store/action/ToastModalAction';
import { setDutyCategoryIdsReducer } from 'store/action/WdListAction';
import { CustomGet } from 'utils/api';
import { useOutsideClick } from 'hoc/useOutsideClick';
import JobListContainer from './JobListContainer';
import JobListContentContainer from './JobListContentContainer';
import SubJobGroupOverlay from './SubJobGroupOverlay';
import SubjocMoreBtn from './SubjocMoreBtn';
import JobGroupOverlayComponent from './JobGroupOverlayComponent';
import JobMoreBtn from './JobMoreBtn';

function WdlistPage() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { wdIndex, subJobCategory } = useParams();

	const { locations, years, userTags, jobSort, country, dutyCategoryIds } =
		useSelector((state) => state.WdListReducer);
	const [isMoreJob, setIsmoreJob] = useState(false);
	const [isMoreSubJob, setIsMoreSubJob] = useState(false);

	const [title, setTitle] = useState('전체');
	const [jobMainCategory, setJobMainCategory] = useState({});
	const [selectedSubjobList, setSelectedSubjoblist] = useState([]);
	const [contentList, setContentList] = useState([]);

	const confirmUrl = () => {
		let finalUrl = '';
		if (userTags.length >= 0) {
			finalUrl += `${userTags
				.map((item) => `user_tags=${item}`)
				.join('&')}`;
		}
		finalUrl += `&${dutyCategoryIds
			.map((item) => `dutyCategoryIds=${item}`)
			.join('&')}`;
		finalUrl += `&years=${years[0]}&years=${years[1]}`;
		finalUrl += `&${locations
			.map((item) => `locations=${item}`)
			.join('&')}`;

		finalUrl = `?jobCategoryId=${wdIndex}&country=${country}&job_sort=${jobSort}&${finalUrl}`;
		if (wdIndex !== undefined && wdIndex !== '-1') {
			navigate(`/wdlist/${wdIndex}${finalUrl}`);
		} else {
			navigate(`/wdlist/${finalUrl}`);
		}

		console.log('서버에 요청을 보냈다.', finalUrl);
		const listRes = CustomGet({
			url: `/web/jobPostinglist${finalUrl}`,
		});
		listRes.then((res) => {
			console.log(res);
			switch (res.code) {
				case 1010:
					setContentList(res.result);
					break;
				default:
			}
		});
	};

	const handleChangeSelectedSubJob = (e, type) => {
		if (type === 'cancle') {
			setIsMoreSubJob(!isMoreSubJob);
			if (jobMainCategory.itemList !== undefined) {
				setSelectedSubjoblist(
					jobMainCategory.itemList.filter((item) =>
						dutyCategoryIds.includes(item.idx),
					),
				);
			} else {
				setSelectedSubjoblist([]);
			}
		}
		if (type === 'submit') {
			setIsMoreSubJob(false);
			// 인덱스 뽑아와서 Redux에 저장하기
			const result = selectedSubjobList.map((a) => a.idx);
			dispatch(setDutyCategoryIdsReducer({ dutyCategoryIds: result }));
		}
	};

	useEffect(() => {
		if (jobMainCategory.itemList !== undefined) {
			setSelectedSubjoblist(
				jobMainCategory.itemList.filter((item) =>
					dutyCategoryIds.includes(item.idx),
				),
			);
		}
	}, [dutyCategoryIds]);

	useEffect(() => {
		const jobData = JobMainCategoryDummy.filter(
			(item) => item.idx.toString() === wdIndex,
		);
		// 이상한 인덱스로 접근 시 전체로 보내버리기
		if (jobData.length === 0) {
			navigate('/wdlist/1');
			return;
		}
		// 메인 카테고리 및 title 제목 가져오기
		setJobMainCategory(jobData[0]);
		setTitle(jobData[0].title);

		// 더미리스트 데이터에 없으면 예외처리
		// null이 default 값, ( 전체Idx 는 itemList가 없다. )
		if (jobData[0].itemList !== undefined) {
			setSelectedSubjoblist([jobData[0].itemList[0]]);
			dispatch(setDutyCategoryIdsReducer({ dutyCategoryIds: [1] }));
		} else {
			setSelectedSubjoblist(null);
		}
		// confirmUrl();
	}, [wdIndex]);

	useEffect(() => {
		// subJobCategory로 들어오면 Redux에 저장하고 redirect
		if (subJobCategory !== undefined) {
			dispatch(
				setDutyCategoryIdsReducer({
					dutyCategoryIds: [parseInt(subJobCategory, 10)],
				}),
			);
		}
	}, [subJobCategory]);

	useEffect(() => {
		confirmUrl();
	}, [locations, years, userTags, jobSort, country, dutyCategoryIds]);

	return (
		<WdListPageComponent>
			<article className="navbar-category-container">
				<div className="navbar-categorymain">
					<JobMoreBtn
						isMoreJob={isMoreJob}
						setIsmoreJob={setIsmoreJob}
						title={title}
					/>

					{isMoreJob && (
						<JobGroupOverlayComponent
							JobMainCategoryDummy={JobMainCategoryDummy}
							title={title}
							setIsmoreJob={setIsmoreJob}
						/>
					)}

					<div className="box-jobcategory">
						{selectedSubjobList === null ? (
							<span className="btn-jobcategorytitle-empty">
								직군을 선택해주세요.
							</span>
						) : (
							<>
								<SubjocMoreBtn
									isMoreSubJob={isMoreSubJob}
									handleChangeSelectedSubJob={
										handleChangeSelectedSubJob
									}
									dutyCategoryIds={dutyCategoryIds}
									title={title}
									wdIndex={wdIndex}
								/>

								{isMoreSubJob && (
									<SubJobGroupOverlay
										setSelectedSubjoblist={
											setSelectedSubjoblist
										}
										selectedSubjobList={selectedSubjobList}
										handleChangeSelectedSubJob={
											handleChangeSelectedSubJob
										}
										jobMainCategory={jobMainCategory}
									/>
								)}
							</>
						)}
					</div>
				</div>
			</article>

			<JobListContainer contentList={contentList} />
		</WdListPageComponent>
	);
}

const MoreButton = styled.button`
	display: flex;
	align-items: center;
	white-space: nowrap;

	.text-jobgroup-title {
		padding-top: 3px;
		margin-right: 15.5px;
		font-size: 24px;
		line-height: 29px;
		font-weight: 700;
		color: #333;
	}
	.btn-jobgroup {
		transform: ${(props) => props.clicked && 'rotate(180deg)'};
		position: relative;
		border: 1px solid #e1e2e3;
		border-radius: 9999px;
		background-color: #fff;
		width: 26px;
		height: 26px;
		transition: 0.3s;
		flex-shrink: 0;
		svg {
			margin-top: 7px;
		}
	}
`;

const JobGroupOverlay = styled.section`
	position: absolute;
	max-width: 190px;
	left: 0;
	right: 0;
	bottom: 0;
	top: 50px;
	overflow-y: scroll;
	height: 70vh;
	background-color: #fff;
	border: 1px solid #e1e2e3;
	box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
	border-radius: 5px;
	z-index: 99;
	padding: 15px 0;

	.active {
		color: #36f;
	}

	::-webkit-scrollbar {
		width: 6px; /* 스크롤바의 너비 */
	}

	::-webkit-scrollbar-thumb {
		height: 30%; /* 스크롤바의 길이 */
		background: #cccccc; /* 스크롤바의 색상 */

		border-radius: 10px;
	}

	a {
		font-weight: 500;
		font-size: 16px;
		padding: 10px 0 10px 25px;
		display: flex;
		color: #333;
		align-items: center;
		:hover {
			background-color: #f8f8f8;
			color: #36f;
		}
	}
`;

const WdListPageComponent = styled.div`
	background: #fff;
	min-height: calc(100vh - 50px);
	overflow-x: hidden;
	font-family: inherit;
	position: relative;

	.navbar-category-container {
		background: #fff;
		padding-top: 40px;
	}
	.navbar-categorymain {
		margin: 0 auto;
		width: 87.72%;
		position: relative;
		display: flex;
		max-width: 1060px;
		align-items: center;
	}

	.box-jobcategory {
		display: flex;
		align-items: center;
		white-space: nowrap;
		:before {
			content: '|';
			font-size: 28px;
			line-height: 29px;
			padding: 3px 24px 0;
			color: #ececec;
		}
	}
	.btn-jobcategorytitle-empty {
		padding-top: 3px;
		font-size: 24px;
		line-height: 29px;
		font-weight: 400;
		color: #aaa;
	}
`;

export default WdlistPage;
