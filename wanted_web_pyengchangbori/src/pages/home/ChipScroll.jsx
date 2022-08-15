/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
import ArticleCard from 'components/common/ArticleCard';
import ChipButton from 'components/common/ChipButton';
import SkeletonUIArticleCard from 'components/common/skeletonUI/SkeletonUIArticleCard';
import React, { useEffect, useState } from 'react';
import {
	ScrollMenu,
	getItemsPos,
	slidingWindow,
} from 'react-horizontal-scrolling-menu';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CustomGet } from 'utils/api';
import { HomeChipDummydata } from 'utils/mockData';
import { LeftArrow, RightArrow } from './ChipArrows';
import { ChipScrollBox } from './ChipscrollBox';

function ChipScroll({ url, tag }) {
	const [items] = useState(HomeChipDummydata);
	const [selected, setSelected] = useState(3);
	const [boxselect, setBoxselect] = useState(false);
	const [articleList, setArticleList] = useState([]);
	const [articleLoading, setArticleLoading] = useState(false);
	const testArticle = new Array(8).fill(0);

	const handleItemClick =
		(itemId) =>
		({ getItemById, scrollToItem }) => {
			setBoxselect(false);
			setSelected(selected !== itemId ? itemId : '');
			scrollToItem(getItemById(itemId), 'smooth', 'center', 'nearest');
		};

	useEffect(() => {
		setArticleLoading(true);
		const result = CustomGet({
			url: `web/home/insights?InterestTagCategoryId=${selected}`,
		});
		result
			.then((res) => {
				switch (res.code) {
					case 1006:
						setArticleList(res.result);
						break;
					default:
				}
			})
			.finally(() => {
				setArticleLoading(false);
			});
	}, [selected]);

	return (
		<ComponentWrapper>
			<ChipContainer>
				<ScrollMenu
					LeftArrow={LeftArrow}
					RightArrow={RightArrow}
					// onWheel={onWheel}
					onMouseUp={({ getItemById, scrollToItem, visibleItems }) =>
						() => {
							// NOTE: for center items
							const { center } = getItemsPos(visibleItems);
							scrollToItem(
								getItemById(center),
								'smooth',
								'center',
							);
						}}
					options={{ throttle: 0 }}
				>
					{items.map((value) => (
						<ChipScrollBox
							defaultColor="#36f"
							title={value.content}
							itemId={value.idx}
							key={value.idx}
							url={url}
							onClick={handleItemClick(value.idx)}
							selected={value.idx === selected}
						/>
					))}
				</ScrollMenu>

				<ModalButton
					onClick={() => {
						setBoxselect(!boxselect);
					}}
					boxselect={boxselect}
				>
					<button type="button" className="btn-more-info">
						<svg width="16" height="3" viewBox="0 0 16 3">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M2 0C2.828 0 3.5 0.672 3.5 1.5C3.5 2.328 2.828 3 2 3C1.172 3 0.5 2.328 0.5 1.5C0.5 0.672 1.172 0 2 0ZM8 0C8.828 0 9.5 0.672 9.5 1.5C9.5 2.328 8.828 3 8 3C7.172 3 6.5 2.328 6.5 1.5C6.5 0.672 7.172 0 8 0ZM14 0C14.828 0 15.5 0.672 15.5 1.5C15.5 2.328 14.828 3 14 3C13.172 3 12.5 2.328 12.5 1.5C12.5 0.672 13.172 0 14 0Z"
								fill="currentColor"
							/>
						</svg>
					</button>
				</ModalButton>
			</ChipContainer>

			{boxselect && (
				<ModalContainer>
					<div className="box-modalcontent-wrapper">
						{items.map((value) => (
							<ChipButton
								key={value.idx}
								title={value.content}
								itemId={value.idx}
								onClick={handleItemClick(value.idx)}
								selected={value.idx === selected}
							/>
						))}
					</div>
					<div className="box-moretag-wrapper">
						<button type="button">
							<span className="label-moretag">
								관심태그 설정하기
								<span className="btn-endicon-wrapper">
									<span>
										<svg viewBox="0 0 18 18">
											<path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
										</svg>
									</span>
								</span>
							</span>
						</button>
					</div>
				</ModalContainer>
			)}

			<ContentList>
				{articleLoading ? (
					testArticle.map((value) => <SkeletonUIArticleCard />)
				) : (
					<>
						{articleList.map((value, index) => (
							<ArticleCard
								key={index}
								title={value.title}
								imgUrl={value.insightsImageUrl}
								subtitle={value.contents}
								publisherimgUrl="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90"
								publisher={value.writer}
							/>
						))}
					</>
				)}
			</ContentList>

			<div className="btn-morecontent-wrapper">
				<button type="button">
					<span className="btn-moreinfo-label">
						더 많은 콘텐츠 보기
						<span>
							<span className="icon-svg-wrapper">
								<svg className="icon-svg" viewBox="0 0 19 19">
									<path
										d="M2.71967 5.71967C2.98594 5.4534 3.4026 5.4292 3.69621 5.64705L3.78033 5.71967L9.499 11.438L15.2162 5.7211C15.4824 5.45479 15.899 5.43051 16.1927 5.64832L16.2768 5.72092C16.5431 5.98715 16.5674 6.40381 16.3496 6.69745L16.277 6.78158L10.0304 13.0302C9.76416 13.2966 9.34745 13.3208 9.0538 13.103L8.96967 13.0303L2.71967 6.78033C2.42678 6.48744 2.42678 6.01256 2.71967 5.71967Z"
										fill="currentColor"
									/>
								</svg>
							</span>
						</span>
					</span>
				</button>
			</div>
		</ComponentWrapper>
	);
}
export default ChipScroll;

const ContentList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin: 0 -10px;
`;

const ComponentWrapper = styled.div`
	position: relative;
	.btn-morecontent-wrapper {
		display: flex;
		justify-content: center;
		button {
			width: 345px;
			color: #333;
			margin: 0 auto;
			height: 50px;
			font-size: 16px;
			background-color: #fff;
			border: 1px solid #e1e2e3;
			position: relative;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			vertical-align: middle;
			min-width: 64px;
			padding: 0 27px;
			box-sizing: border-box;
			border-radius: 25px;
			font-weight: 800;
			line-height: normal;
			cursor: pointer;
		}
	}
	.btn-moreinfo-label {
		width: 100%;
		font-size: inherit;
		font-weight: inherit;
		display: inherit;
		align-items: inherit;
		justify-content: inherit;
		color: inherit;
		> span {
			margin-top: -2px;
			margin-right: -1px;
			margin-left: 2px;
		}
	}
`;

const ModalContainer = styled.div`
	z-index: 1;
	background-color: #fafafa;
	position: absolute;
	top: 58px;
	padding: 30px 30px 13px !important;
	max-width: 1060px;
	border: 1px solid #e1e2e3;
	box-sizing: border-box;
	box-shadow: 0 4px 20px rgb(0 0 0 / 15%);
	border-radius: 4px;
	.box-modalcontent-wrapper {
		padding: 4px;
		flex: 1 1;
		overflow-y: auto;
		button {
			margin-bottom: 10px;
		}
	}
	.box-moretag-wrapper {
		margin-top: 10px;
		text-align: center;
		button {
			height: 50px;
			font-size: 16px;
			color: #36f;
			padding: 6px 8px;
			position: relative;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			vertical-align: middle;
			min-width: 64px;
			border-radius: 25px;
			font-weight: 700;
			line-height: normal;
			border: none;
			background-color: none;
			cursor: pointer;
		}
	}
	.btn-endicon-wrapper {
		margin-top: -2px;
		margin-right: -1px;
		margin-left: 2px;
		span {
			width: 100%;
			display: flex;
			align-items: inherit;
			justify-content: inherit;
			svg {
				overflow: hidden;
				user-select: none;
				width: 1em;
				height: 1em;
				display: inline-block;
				fill: currentColor;
				flex-shrink: 0;
				font-size: inherit;
			}
		}
	}
	.label-moretag {
		width: 100%;
		font-size: inherit;
		font-weight: inherit;
		display: inherit;
		align-items: inherit;
		justify-content: inherit;
		color: inherit;
	}
`;

const ModalButton = styled.div`
	position: absolute;
	right: -60px;
	top: 0px;
	.btn-more-info {
		min-width: 50px;
		min-height: 50px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #e1e2e3;
		background-color: ${(props) => props.boxselect && '#36f'};
		color: ${(props) => (props.boxselect ? '#fff' : '#939393')};
		border-radius: 5px;
		box-shadow: 0 4px 4px rgb(0 0 0 / 5%);
	}
`;

const ChipContainer = styled.div`
	margin: 30px 0;
	position: relative;
	margin-right: 60px;
`;

// 안쓸 듯
// function onWheel({ getItemById, items, visibleItems, scrollToItem }, ev) {
// 	const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
// 	if (isThouchpad) {
// 		ev.stopPropagation();
// 		return;
// 	}
// 	if (ev.deltaY < 0) {
// 		const nextGroupItems = slidingWindow(
// 			items.toItemsKeys(),
// 			visibleItems,
// 		).next();
// 		const { center } = getItemsPos(nextGroupItems);
// 		scrollToItem(getItemById(center), 'smooth', 'center');
// 	} else if (ev.deltaY > 0) {
// 		const prevGroupItems = slidingWindow(
// 			items.toItemsKeys(),
// 			visibleItems,
// 		).prev();
// 		const { center } = getItemsPos(prevGroupItems);
// 		scrollToItem(getItemById(center), 'smooth', 'center');
// 	}
// }
