/* eslint-disable array-callback-return */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setJobCategoryInvisible } from 'store/action/JobCategoryAction';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { JobMainCategoryDummy } from 'utils/mockData';
import { useInView } from 'react-intersection-observer';

function JobCategory({ setJobCategoryVisible }) {
	const dispatch = useDispatch();

	const [hoveridx, setHoveridx] = useState(-1);
	const [subContent, setSubContent] = useState([]);
	const [ulWidth, setUlWidth] = useState(0);
	const [ref, inView, entry] = useInView();

	useEffect(() => {
		if (entry) {
			setUlWidth(
				Math.floor((entry.boundingClientRect.x - 50) / 200) * 200,
			);
		} else {
			setUlWidth(200);
		}
	}, [entry?.boundingClientRect.x]);

	useEffect(() => {
		const testArr = JobMainCategoryDummy.find((v) => v.idx === hoveridx);
		setSubContent(testArr?.itemList);
	}, [hoveridx]);

	// const setJobInvisibleReducer = () => {
	// 	dispatch(setJobCategoryInvisible());
	// };

	return (
		<JobCategoryContainer>
			<div>
				<nav
					onMouseLeave={() => {
						setJobCategoryVisible(false);
					}}
					className="box-jobcategory"
				>
					<section className="box-maincategory-container">
						<ul>
							{JobMainCategoryDummy.map((value) => (
								<li
									onMouseEnter={() => {
										setHoveridx(value.idx);
									}}
									className="category-item"
								>
									<Link
										to={`/wdlist/${value.idx}`}
										onClick={() =>
											setJobCategoryVisible(false)
										}
									>
										<em>{value.title}</em>
									</Link>
								</li>
							))}
						</ul>
					</section>

					{hoveridx !== 1 && subContent !== undefined && (
						<section className="box-subcategory-container">
							<CustomUl ulWidth={ulWidth}>
								{subContent !== undefined &&
									subContent.map((item) => (
										<li
											ref={ref}
											className="explore-category-item"
										>
											<Link
												to={
													item.idx !== -1
														? `/wdlist/2/${item.idx}`
														: `/wdlist/2`
												}
												onClick={() =>
													setJobCategoryVisible(false)
												}
											>
												{item.title}
											</Link>
											<i className="icon-cheveron-right" />
										</li>
									))}
							</CustomUl>
						</section>
					)}
				</nav>
			</div>
		</JobCategoryContainer>
	);
}

const JobCategoryContainer = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	top: 50px;
	overflow: hidden;
	width: 100%;
	.box-jobcategory {
		position: relative;
		height: 100%;
		width: 100%;
		max-width: 1100px;
		display: flex;
		margin: 0 auto;
		z-index: 1400 !important;
	}
	.box-maincategory-container {
		border-left: 1px solid #f7f9fa;
		border-right: 1px solid #f7f9fa;
		height: calc(100vh - 50px);
		width: 220px;
		background-color: #fff;
		/* overflow-y: auto; */
		a {
			height: 40px;
			display: flex;
			align-items: center;
			flex: 1 1;
			padding: 0 20px;
			width: 100%;
			color: #333;

			:hover {
				color: #36f;
				background-color: #f7f9fa;
			}
		}
		h2 {
			font-size: 14px;
			font-weight: 700;
			font-style: normal;
			line-height: 2.86;
			letter-spacing: normal;
			color: #333;
		}
		em {
			font-size: 13px;
			font-weight: 700;
			font-style: normal;
			letter-spacing: normal;
			width: 100%;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			h2 {
				:hover {
					color: #36f;
					background-color: #f7f9fa;
				}
			}
		}
	}
	.box-subcategory-container {
		position: absolute;
		left: 202px;
		ul {
		}
		.explore-category-item {
			position: relative;
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 200px;
			padding: 0 20px;
			> i {
				display: none;
				font-size: 16px;
				color: #36f;
			}
			:hover > i {
				position: absolute;
				display: inline-block;
				right: 20px;
				top: 14px;
			}
		}
		a {
			padding-top: 14px;
			display: inline-block;
			height: 40px;
			font-size: 13px;
			font-weight: 400;
			font-style: normal;
			color: #333;
			-ms-flex: 1 1;
			flex: 1 1;
			vertical-align: middle;
			max-width: 140px;
			width: 100%;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			:hover {
				color: #36f;
			}
		}
	}
`;

const CustomUl = styled.ul`
	width: ${(props) => props.ulWidth && `${props.ulWidth}px`};
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	height: calc(100vh - 50px);
	background-color: #f7f9fa;
`;

export default JobCategory;
