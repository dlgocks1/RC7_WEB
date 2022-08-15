import React, { Component } from 'react';
import styled from 'styled-components';
import { EventChipDummydata } from 'utils/mockData';
import { ArticleLabel, OnlineLabel } from './EventLabels';

function ArticleEvents({
	no,
	eventImageUrl,
	eventUrl,
	onlineCheck,
	title,
	date,
	eventCategoryNo,
}) {
	return (
		<ComponentWrapper>
			<a href={eventUrl} className="event-item-link">
				<header
					className="event-item-media"
					style={{
						backgroundImage: `url("${eventImageUrl}")`,
					}}
				/>
				<div className="event-item-body">
					<div className="label">
						<ArticleLabel />
						{onlineCheck === 'ON' && <OnlineLabel />}
					</div>
					<h2 className="event-item-maintitle">{title}</h2>
					<h3 className="event-item-subtitle">{date}</h3>
					<div className="event-item-category">
						<span className="event-item-category-tags">
							#
							{
								EventChipDummydata.find(
									(item) => item.idx === eventCategoryNo,
								).content
							}
						</span>
					</div>
				</div>
			</a>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	float: left;
	width: calc(25% - 20px);
	border: 1px solid #ececec;
	border-radius: 5px;
	font-size: 18px;
	margin: 0 10px 20px;

	.label {
		display: inline-flex;
		margin-bottom: 8px;
		> span {
			margin-right: 5px;
		}
	}
	.event-item-link {
		display: block;
	}
	.event-item-media {
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 70%;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		background-position: 50%;
		background-size: cover;
	}
	.event-item-body {
		position: relative;
		padding: 20px;
		height: 179px;
		border-top: 1px solid #eee;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}
	.event-item-maintitle {
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		position: relative;
		height: 50px;
		display: -webkit-box;
		word-wrap: break-word;
		font-size: calc(18 / var(--base-font-size) * 1rem);
		color: #333;
		text-overflow: ellipsis;
		overflow: hidden;
		line-height: 1.4;
		font-weight: 600;
	}
	.event-item-subtitle {
		position: absolute;
		left: 20px;
		bottom: 45px;
		width: calc(100% - 40px);
		margin-bottom: 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		word-wrap: break-word;
		font-size: 12px;
		color: #767676;
		overflow: hidden;
		line-height: 1.4;
		font-weight: 600;
	}
	.event-item-category {
		position: absolute;
		bottom: 20px;
		left: 20px;
		margin-top: 5px;
		height: 20px;
		width: calc(100% - 40px);
	}
	.event-item-category-tags {
		display: block;
		font-size: 12px;
		font-weight: 600;
		line-height: 1.67;
		color: #333;
		width: 100%;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
`;

export default ArticleEvents;
