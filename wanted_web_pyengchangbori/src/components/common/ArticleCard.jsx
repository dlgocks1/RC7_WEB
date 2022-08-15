/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import styled from 'styled-components';
import { ArticleLabel, OnlineLabel, VODlabel } from './EventLabels';

function ArticleCard({
	linkUrl,
	imgUrl,
	title,
	subtitle,
	isVod,
	category,
	publisher,
	publisherimgUrl,
	tags,
	eventlabels,
	playTime,
	onlineCheck,
	type,
}) {
	return (
		<ComponentWrapper type={type}>
			<a href={linkUrl}>
				<div className="img-wrapper">
					<img src={imgUrl} alt="[삼삼한] 목표, 3가지 키워드" />
					{isVod && (
						<div className="playtime-wrapper">
							<span>{playTime}</span>
						</div>
					)}
				</div>
				{onlineCheck && (
					<div className="container-eventLabels">
						<VODlabel />
						{onlineCheck === 'ON' && <OnlineLabel />}
					</div>
				)}
				{eventlabels && (
					<div className="container-eventLabels">
						{eventlabels.map((value) => {
							if (value === 'Online') {
								return <OnlineLabel />;
							}
							if (value === 'VOD') {
								return <VODlabel />;
							}
							if (value === 'Article') {
								return <ArticleLabel />;
							}
						})}
					</div>
				)}

				<p className="title-wrapper">{title}</p>
				<p className="subcontent-wrapper">{subtitle}</p>
				<div className="publisher-wrapper">
					{publisherimgUrl && (
						<img src={publisherimgUrl} alt="brunch" />
					)}
					<p>
						{publisher} {tags}
					</p>
				</div>
				<p className="category-wrapper">{category} </p>
			</a>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.li`
	display: flex;
	flex-direction: column;
	width: ${(props) => !(props.type === 'List') && 'calc(25% - 20px)'};
	margin: 0 10px 50px;
	margin-bottom: ${(props) => props.type === 'List' && '0'};
	.publisher-wrapper {
		margin-top: 12px;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
		img {
			width: 30px;
			height: 30px;
			border-radius: 50%;
			border: 1px solid #ececec;
		}
		p {
			margin-left: 10px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-style: normal;
			font-weight: 600;
			font-size: 13px;
			line-height: 19px;
			color: #aaa;
		}
	}
	.playtime-wrapper {
		position: absolute;
		right: 9px;
		bottom: 8px;
		span {
			display: inline-block;
			padding: 0 10px;
			border-radius: 4px;
			background-color: rgba(0, 0, 0, 0.5);
			height: 24px;
			font-size: 13px;
			font-weight: 700;
			line-height: 1.85;
			color: #fff;
		}
	}
	.category-wrapper {
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
		font-size: 12px;
		font-weight: 500;
		color: #333;
		display: -webkit-box;
		text-overflow: ellipsis;
	}
	.subcontent-wrapper {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		font-style: normal;
		font-weight: 600;
		font-size: 13px;
		line-height: 21px;
		color: #aaa;
	}
	.title-wrapper {
		overflow: hidden;
		text-overflow: ellipsis;
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 24px;
		color: #333;
		margin: 14px 0 8px;
	}
	.img-wrapper {
		position: relative;
		height: auto;
		padding-bottom: 70%;
		padding-left: 0;
		img {
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			display: block;
			border-radius: 4px;
			object-fit: cover;
			object-position: top;
			outline: 1px solid rgba(0, 0, 0, 0.05);
			outline-offset: -1px;
		}
	}
	.container-eventLabels {
		display: flex;
		margin-top: 12px;
	}
`;

export default ArticleCard;
