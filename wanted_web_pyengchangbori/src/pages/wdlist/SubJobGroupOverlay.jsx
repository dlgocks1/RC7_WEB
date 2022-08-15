import React from 'react';
import { useDispatch } from 'react-redux';
import { setToastModalVisible } from 'store/action/ToastModalAction';
import styled from 'styled-components';

function SubJobGroupOverlay({
	setSelectedSubjoblist,
	selectedSubjobList,
	handleChangeSelectedSubJob,
	jobMainCategory,
}) {
	const dispatch = useDispatch();

	const handleClickSubJob = (value) => {
		if (selectedSubjobList.length >= 5) {
			if (value.idx === 1) {
				setSelectedSubjoblist([value]);
				return;
			}
			if (selectedSubjobList.includes(value)) {
				const temp = selectedSubjobList.filter(
					(element) => element !== value,
				);
				setSelectedSubjoblist(temp);
				return;
			}
			dispatch(
				setToastModalVisible({
					text: '직무는 최대 5개까지 선택 가능합니다.',
				}),
			);
		} else {
			if (selectedSubjobList.includes(value)) {
				const temp = selectedSubjobList.filter(
					(element) => element !== value,
				);
				setSelectedSubjoblist(temp);
			} else {
				let temp = selectedSubjobList.filter(
					(element) => element.idx !== 1,
				);
				temp = [...temp, value];
				setSelectedSubjoblist(temp);
			}
			if (value.idx === 1) {
				setSelectedSubjoblist([value]);
			}
		}
	};

	return (
		<JubJobGroupOverlay>
			<div className="container-subjob-top">
				<p className="text-subjob-title">
					직무를 선택해 주세요. (최대 5개 선택 가능)
				</p>
				<div className="container-jobcategorylist">
					{jobMainCategory.itemList?.map((value) => (
						<button
							type="button"
							onClick={() => {
								handleClickSubJob(value);
							}}
							className={`btn-jobcategoryitem ${
								selectedSubjobList.includes(value) && 'selected'
							}`}
						>
							{value.title}
						</button>
					))}
				</div>
			</div>

			<div className="container-subjob-bottom">
				<button
					onClick={(e) => handleChangeSelectedSubJob(e, 'submit')}
					type="button"
				>
					선택 완료하기
				</button>
			</div>
		</JubJobGroupOverlay>
	);
}
const JubJobGroupOverlay = styled.section`
	position: absolute;
	left: 0;
	bottom: 0;
	top: 40px;
	width: calc(100% - 140px);
	max-width: 910px;
	display: table;
	height: fit-content;
	background-color: #fff;
	border: 1px solid #e1e2e3;
	-webkit-box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
	box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
	border-radius: 5px;
	z-index: 99;

	.btn-jobcategoryitem {
		// Actvie
		border: 1px solid #36f;
		color: #36f;
		background-color: #fff;
		font-weight: 600;

		height: 32px;
		margin-right: 10px;
		margin-bottom: 12px;
		border: 1px solid #f2f4f7;
		background: #f2f4f7;
		border-radius: 20px;
		padding: 8px 14px;
		font-size: 13px;
		line-height: 16px;
		font-weight: 400;
		color: #333;
		:hover {
			border: 1px solid rgba(51, 102, 255, 0.3);
		}
	}
	.container-jobcategorylist {
		display: flex;
		flex-wrap: wrap;
		button {
			height: 32px;
			margin-right: 10px;
			margin-bottom: 12px;
			border: 1px solid #f2f4f7;
			background: #f2f4f7;
			border-radius: 20px;
			padding: 8px 14px;
			font-size: 13px;
			line-height: 16px;
			font-weight: 400;
			color: #333;
		}
		.selected {
			border: 1px solid #36f;
			color: #36f;
			background-color: #fff;
			font-weight: 600;
		}
	}
	.text-subjob-title {
		color: #666;
		font-weight: 400;
		font-size: 12px;
		line-height: 14.4px;
		margin-bottom: 10px;
	}
	.container-subjob-top {
		padding: 25px 25px 8px;
		max-width: 910px;
	}
	.container-subjob-bottom {
		padding: 16px;
		text-align: right;
		border-top: 1px solid #ececec;
		background-color: #fff;
		button {
			width: 160px;
			height: 40px;
			font-size: 15px;
			color: #fff;
			background-color: #36f;
			border: none;
			min-width: 64px;
			padding: 0 27px;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			border-radius: 25px;
			font-weight: 700;
			line-height: normal;
		}
	}
`;

export default SubJobGroupOverlay;
