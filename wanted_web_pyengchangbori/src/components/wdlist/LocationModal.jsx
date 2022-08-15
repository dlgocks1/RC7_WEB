/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setLocationModalInvisible,
	setLocationTagReducer,
} from 'store/action/WdListAction';
import styled from 'styled-components';
import { LocationListDummy } from 'utils/mockData';

function LocationModal() {
	const dispatch = useDispatch();
	const { sublocationListForReducer, locationListForReducer } = useSelector(
		(state) => state.WdListReducer,
	);
	const [locationList, setLocationList] = useState(locationListForReducer);
	const [selecetedSubLocationList, setSelectedSubLocationList] = useState(
		sublocationListForReducer,
	);
	const [subLocationList, setSubLocationList] = useState([]);
	const [country, setCountry] = useState('kr');

	const LocationmodalInvisible = () => {
		dispatch(setLocationModalInvisible());
	};

	const initializeSelected = () => {
		setLocationList(['all']);
		setSubLocationList([]);
		setSelectedSubLocationList([
			{
				idx: -1,
				fullkr: '한국 전국',
				en: '전국',
			},
		]);
	};

	const handleChangeCountry = (e) => {
		setCountry(e.target.value);
	};

	const handleChangeLocation = ({ item, value, idx }) => {
		if (idx === 0) {
			setLocationList([value]);
			setSelectedSubLocationList([
				{
					idx: -1,
					fullkr: '한국 전국',
					en: '전국',
				},
			]);
		}
		// 새로운 Location 눌렀을 때
		else if (!locationList.includes(value)) {
			let temp = locationList.filter((element) => element !== 'all');
			temp = [...temp, value];
			setLocationList(temp);
			if (item.subLocationList) {
				temp = selecetedSubLocationList.filter(
					(element) => element.idx !== -1,
				);
				setSelectedSubLocationList([...temp, item.subLocationList[0]]);
			}
		}
		if (idx === -1) {
			setSubLocationList([]);
		} else if (LocationListDummy[idx].subLocationList) {
			setSubLocationList(LocationListDummy[idx].subLocationList);
		} else {
			setSubLocationList([]);
		}
	};

	const handleChangeSubLocation = (value) => {
		if (value.idx === 0) {
			setSelectedSubLocationList([value]);
		} else if (selecetedSubLocationList.includes(value)) {
			const temp = selecetedSubLocationList.filter(
				(element) => element !== value,
			);
			setSelectedSubLocationList(temp);
		} else {
			let temp = selecetedSubLocationList.filter(
				(element) => element.idx !== 0,
			);
			temp = [...temp, value];
			setSelectedSubLocationList(temp);
		}
	};

	const handleSubmitLocationData = () => {
		dispatch(
			setLocationTagReducer({
				locations: selecetedSubLocationList.map((i) => i.en),
				locationListForReducer: locationList,
				sublocationListForReducer: selecetedSubLocationList,
			}),
		);
		LocationmodalInvisible();
	};

	useEffect(() => {
		document.body.style = `overflow: hidden`;
		return () => (document.body.style = `overflow: auto`);
	}, []);

	useEffect(() => {
		if (selecetedSubLocationList.length === 0) {
			initializeSelected();
		}
	}, [selecetedSubLocationList]);

	return (
		<ComponentWrapper>
			<div className="popup-location">
				<div className="modal-header">
					<button
						onClick={() => {
							initializeSelected();
						}}
						type="button"
						className="btn-reset"
					>
						<i className="icon-reload" />
						초기화
					</button>
					<span>
						지역
						<span className="filter-count">1</span>
					</span>
					<button
						onClick={() => dispatch(setLocationModalInvisible())}
						type="button"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							color="#999"
						>
							<path
								fill="currentColor"
								d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
							/>
						</svg>
					</button>
				</div>
				<div className="modal-body">
					<div className="container-selector">
						<h6 className="header-selector">국가</h6>
						<div className="select-selector">
							<select
								defaultValue="kr"
								onChange={handleChangeCountry}
							>
								<option value="all">전세계</option>
								<option value="tw">대만</option>
								<option value="sg">싱가폴</option>
								<option value="jp">일본</option>
								<option value="kr">한국</option>
								<option value="others">기타</option>
							</select>
						</div>
					</div>
					<div className="container-location">
						<div className="column-location">
							<h6>지역</h6>
							<ul>
								{LocationListDummy.map((value) => (
									<li>
										<button
											className={
												locationList.includes(value.en)
													? 'selected'
													: undefined
											}
											onClick={() => {
												handleChangeLocation({
													item: value,
													value: value.en,
													idx: value.idx,
												});
											}}
											type="button"
										>
											{value.kr}
										</button>
									</li>
								))}
							</ul>
						</div>
						<div className="column-location">
							<h6>상세지역</h6>
							{subLocationList.length === 0 ? (
								<div className="container-empylocation">
									지역을 선택하면
									<br />
									상세 지역을 확인할 수 있습니다.
								</div>
							) : (
								<ul>
									{subLocationList.map((value) => (
										<li>
											<button
												className={
													selecetedSubLocationList.includes(
														value,
													) && 'selected'
												}
												onClick={() => {
													handleChangeSubLocation(
														value,
													);
												}}
												type="button"
											>
												{value.kr}
											</button>
										</li>
									))}
								</ul>
							)}
						</div>
					</div>
				</div>
				<div className="modal-footer">
					<div className="selectedLocation-container">
						<ul className="selectedLocation-ul-container">
							{selecetedSubLocationList.map((value) => (
								<li className="selectedLocation-li-container">
									<span>{value.fullkr}</span>
									<button
										onClick={() => {
											const temp =
												selecetedSubLocationList.filter(
													(element) =>
														element !== value,
												);
											setSelectedSubLocationList(temp);
										}}
										type="button"
									>
										{value.idx !== -1 && (
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
											>
												<path
													fill="currentColor"
													d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
												/>
											</svg>
										)}
									</button>
								</li>
							))}
						</ul>
						<p>최대 15개까지 선택 가능합니다.</p>
					</div>
					<button
						onClick={handleSubmitLocationData}
						className="btn-footer"
						type="submit"
					>
						확인
					</button>
				</div>
			</div>
			<div
				onClick={() => {
					LocationmodalInvisible();
				}}
				className="overlay-modal"
			/>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	position: fixed;
	overflow: hidden;
	z-index: 1400;

	.modal-footer {
		border-top: 0;
		height: 225px;
		padding-top: 0;
		padding: 0px 20px 20px;
		.btn-footer {
			color: #fff;
			width: 100%;
			height: 50px;
			background-color: #36f;
			border-radius: 25px;
			font-size: 16px;
			font-weight: 600;
			line-height: 50px;
			letter-spacing: normal;
			text-align: center;
			padding: 0;
		}
		p {
			position: absolute;
			bottom: 5px;
			left: 21px;
			line-height: 27px;
			font-size: 11px;
			font-weight: 400;
			font-stretch: normal;
			font-style: normal;
			letter-spacing: normal;
			color: #999;
		}
		.selectedLocation-container {
			height: 135px;
			background: #f6f6f6;
			margin: 0 -20px 20px;
			padding: 5px 20px;
			position: relative;
			.selectedLocation-ul-container {
				height: 88px;
				overflow-y: auto;
			}
			.selectedLocation-li-container {
				display: inline-block;
				margin: 10px 6px 0 0;
				padding: 0 16px 0 15px;
				background: #fff;
				border: 1px solid #36f;
				border-radius: 17px;
				line-height: 32px;
				font-size: 13px;
				font-weight: 600;
				font-style: normal;
				letter-spacing: normal;
				color: #36f;
				button {
					margin-left: 8px;
					position: relative !important;
					top: 2px;
					svg {
						color: #36f;
						width: 14px;
						height: 14px;
					}
				}
			}
		}
	}

	.container-empylocation {
		max-height: 230px;
		min-height: 98px;
		height: calc(100vh - 567px);
		border: 1px solid #e1e2e3;
		border-left: none;
		font-size: 11px;
		font-weight: 400;
		font-stretch: normal;
		font-style: normal;
		letter-spacing: normal;
		color: #999;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		white-space: pre-line;
	}

	.modal-body {
		border-top: 0;
		max-height: 408px;
		min-height: 276px;
		height: calc(100vh - 389px);
		overflow-y: auto;
		padding: 20px;
		.container-location {
			display: flex;
			.column-location {
				flex: 1 1;
				max-width: 50%;
				> h6 {
					font-size: 14px;
					font-weight: 500;
					font-stretch: normal;
					font-style: normal;
					line-height: 23px;
					letter-spacing: normal;
					color: #767676;
					margin-bottom: 8px;
				}
				> ul {
					max-height: 230px;
					min-height: 98px;
					height: calc(100vh - 567px);
					overflow-y: auto;
					border: 1px solid #e1e2e3;
				}
				> ul > li {
					height: 27px;
					line-height: 27px;
					> button {
						width: 100%;
						font-family: inherit;
						text-align: left;
						padding: 0 14px;
						font-size: 15px;
						font-weight: 400;
						line-height: 27px;
						letter-spacing: normal;
						color: #333;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						:hover {
							background-color: #f6f6f6;
						}
					}
					.selected {
						color: #36f;
						font-weight: 600;
						background-color: #f6f8ff;
					}
				}
			}
		}
		.container-selector {
			margin: 10px 0 30px;
		}
		.header-selector {
			font-size: 16px;
			font-weight: 400;
			color: #999;
			margin: 0 0 10px;
		}
		.select-selector {
			position: relative;
			select {
				appearance: none;
				padding: 0 15px;
				border: 1px solid #e1e2e3;
				border-radius: 5px;
				background-color: #fff;
				color: #333;
				font-size: 15px;
				font-weight: 400;
				width: 100%;
				height: 40px;
				font-family: inherit;
				line-height: inherit;
			}
		}
	}

	.modal-header {
		top: 0;
		left: 0;
		right: 0;
		background: #fff;
		height: 54px;
		border-bottom: none;
		padding: 16px 20px;
		position: relative;
		border-bottom: 1px solid #ececce;
		color: #333;
		text-align: center;
		font-size: 16px;
		font-weight: 600;
		word-wrap: break-word;
		button {
			position: absolute;
			top: 50%;
			right: 0;
			-webkit-transform: translateY(-50%);
			transform: translateY(-50%);
			padding: 15px;
			line-height: 0;
		}
		.filter-count {
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
			position: relative;
			top: -2px;
			z-index: 1;
		}
		.btn-reset {
			left: 0;
			right: auto;
			font-size: 14px;
			font-weight: 400;
			color: #999;
			text-align: left;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			padding: 15px;
			line-height: 0;
			i {
				margin-right: 5px;
				color: #bbb;
				line-height: 1;
				font-size: 13px;
			}
		}
	}

	.Header_Header__0d6dF {
		height: 54px;
		padding: 16px 20px;
		position: relative;
		color: #333;
		text-align: center;
		font-size: 16px;
		font-weight: 600;
		word-wrap: break-word;
	}

	.popup-location {
		max-height: 687px;
		min-height: 556px;
		top: 50%;
		left: 50%;
		width: 100%;
		max-width: 500px;
		transform: translate(-50%, -50%);
		z-index: 5;
		overflow-y: auto;
		border-radius: 5px;
		background-color: #fff;
		position: absolute;
		overflow: hidden;
	}
	.overlay-modal {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 4;
		background-color: rgba(0, 0, 0, 0.5);
	}
`;

export default LocationModal;
