import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function AdvertiseBanner() {
	return (
		<GridComponentWrapper>
			<div className="box-subscribe">
				<div className="box-title-wrapper">
					wanted+구독해야 하는 이유
				</div>
				<p>
					구독자의 서류 합격률이 비구독자보다 <span>1.5배</span>{' '}
					높아요!
				</p>
				<Link className="btn-subscribe" to="/events/wantedplus">
					<svg className="icon-svg" viewBox="0 0 15 15">
						<defs>
							<path
								id="al3je9dvha"
								d="M576.95 196.13c-.217-.217-.57-.217-.787 0-.217.218-.217.57 0 .788l3.71 3.71c.217.217.57.217.787 0l6.677-6.678c.217-.217.217-.57 0-.787-.217-.217-.57-.217-.787 0l-6.284 6.284-3.316-3.316z"
							/>
						</defs>
						<g fill="currentColor" fillRule="evenodd">
							<g transform="translate(-575 -192)">
								<use
									fill="#FFF"
									fillRule="nonzero"
									stroke="#FFF"
									strokeWidth=".3"
									xlinkHref="#al3je9dvha"
								/>
							</g>
						</g>
					</svg>
					<span>첫 구독 0원 신청하기</span>
				</Link>
			</div>
			<div className="box-subscribe">
				<img
					src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Ffirst-wantedplus-subscribe.png&amp;w=800&amp;q=90"
					alt="wantedplus"
					height="158"
					loading="lazy"
				/>
			</div>
		</GridComponentWrapper>
	);
}

export const GridComponentWrapper = styled.div`
	flex-direction: row;
	align-self: auto;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	display: flex;
	width: 100%;

	.box-title-wrapper {
		font-size: 30px;
		font-weight: 700;
		word-break: keep-all;
		flex-direction: row;
		align-items: flex-start;
	}
	.btn-subscribe {
		width: 260px;
		margin-top: 25px;
		height: 50px;
		font-size: 16px;
		color: #fff;
		background-color: #36f;
		border: none;
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		vertical-align: middle;
		min-width: 64px;
		padding: 0 27px;
		box-sizing: border-box;
		border-radius: 25px;
		font-weight: 700;
		line-height: normal;
		cursor: pointer;
		svg {
			margin-top: 3px;
			margin-right: 1px;
		}
	}
`;
export default AdvertiseBanner;
