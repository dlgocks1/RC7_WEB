import React from 'react';
import styled from 'styled-components';

export function OnlineLabel() {
	return (
		<OnlineLabels>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="11"
				height="12"
				viewBox="0 0 11 12"
			>
				<path
					fill="currentColor"
					d="M5.98.9A5.09 5.09 0 00.32 6.54l1.03-.1a4.07 4.07 0 014.52-4.53L5.98.89zm4.57 4.56l-1.03.1A4.07 4.07 0 015 10.1l-.11 1.03a5.1 5.1 0 005.66-5.66zM5.76 2.94c-.9-.1-1.84.18-2.53.86a3.06 3.06 0 00-.86 2.54l1.02-.11c-.07-.6.12-1.24.57-1.7a2.05 2.05 0 011.7-.57l.1-1.02zM8.5 5.68l-1.04.12a2 2 0 01-2.24 2.24L5.1 9.06a3.06 3.06 0 003.4-3.4zm-2.53-.22c-.3-.3-.8-.3-1.1 0-.3.3-.29.78.02 1.08.3.3.79.3 1.09 0 .3-.3.3-.78 0-1.08z"
				/>
			</svg>
			<span className="EventKinds_EventKind__text__sYu5A">온라인</span>
		</OnlineLabels>
	);
}

export function VODlabel() {
	return (
		<VODLabels>
			<span>VOD</span>
		</VODLabels>
	);
}

export function ArticleLabel() {
	return (
		<ArticleLabels>
			<span>아티클</span>
		</ArticleLabels>
	);
}

const ArticleLabels = styled.span`
	color: #ff9100;
	border-color: #ff9100;
	display: inline-flex;
	-ms-flex-pack: center;
	justify-content: center;
	-ms-flex-align: center;
	align-items: center;
	height: 20px;
	border: 1px solid;
	border-radius: 2px;

	span {
		font-size: 11px;
		font-weight: 700;
		line-height: normal;
		padding: 0 6px;
	}
`;

const VODLabels = styled.span`
	color: #5866dc;
	border-color: #5866dc;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	height: 20px;
	margin-right: 5px;
	border: 1px solid;
	border-radius: 2px;
	span {
		font-size: 11px;
		font-weight: 700;
		line-height: normal;
		padding: 0 6px;
	}
`;

const OnlineLabels = styled.span`
	border-color: #1c1c1c;
	background-color: #1c1c1c;
	margin-right: 5px;
	color: #fff;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	height: 20px;
	border: 1px solid;
	border-radius: 2px;
	svg {
		margin-left: 4px;
	}
	span {
		font-size: 11px;
		font-weight: 700;
		line-height: normal;
		padding: 0 6px;
	}
`;
