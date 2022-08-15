/* eslint-disable no-unused-expressions */
import React, { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useProfileData from 'hoc/useProfileData';
import { CustomGet, SuspenseGet } from 'utils/api';
import { useSelector } from 'react-redux';
import { fetchUserProfile } from './fetchProfileData';

function ProfileAside({ fetchTest }) {
	const [baseProfileData, setBaseProfileData] = useState(
		fetchTest.read().data.result[0],
	);

	useEffect(() => {
		setBaseProfileData(fetchTest.read().data.result[0]);
	}, [fetchTest]);

	return (
		<ProfileAsideWrapper>
			<header className="aside-header">
				<div className="aside-avatar">
					<div
						className="aside-avatar_image"
						style={{
							backgroundImage: `url(${baseProfileData.profileImageUrl})
							,url("https://static.wanted.co.kr/images/profile_default.png")`,
						}}
					>
						<div className="avatarcrop">
							<input type="file" accept="image/*" />
							<i className="icon-camera" role="presentation" />
						</div>
					</div>
				</div>
				<div className="aside-me">
					<div className="aside-me-name">{baseProfileData.name}</div>
					<div className="aside-me-email">
						{baseProfileData.email}
					</div>
					<div className="aside-me-tel">
						{baseProfileData.phone
							.toString()
							.replace(/[^0-9]/g, '')
							.replace(
								/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
								'$1-$2-$3',
							)}
					</div>
				</div>
				<Link to="/profile/matching?level=1" className="aside-edit">
					기본정보 수정
				</Link>
			</header>
			<div className="matchupstatus ">
				<Link
					to="/profile/status?type=matchup-likes"
					className="matchupstatus-item"
				>
					<span className="matchupstatus-label">관심 있음</span>
					<strong className="matchupstatus-value">0</strong>
				</Link>
				<Link
					to="/profile/status?type=matchup-opens"
					className="matchupstatus-item"
				>
					<span className="matchupstatus-label">열람</span>
					<strong className="matchupstatus-value">0</strong>
				</Link>
				<Link
					to="/profile/status?type=matchup-offers"
					className="matchupstatus-item"
				>
					<span className="matchupstatus-label">받은 제안</span>
					<strong className="matchupstatus-value">0</strong>
				</Link>
			</div>
		</ProfileAsideWrapper>
	);
}

const ProfileAsideWrapper = styled.aside`
	top: 0;
	left: 0;
	width: 250px;
	position: absolute;
	padding: 42px 20px 41px;
	border: 1px solid #e1e2e3;
	border-radius: 3px;
	background-color: #fff;
	margin-bottom: 0;
	.aside-header {
		width: 100%;
		text-align: center;
	}
	.aside-avatar {
		line-height: 1.4;
	}
	.aside-avatar_image {
		display: inline-block;
		position: relative;
		width: 77px;
		height: 77px;
		border-radius: 50%;
		background-size: cover;
		background-position: 50%;
	}
	.avatarcrop {
		width: 100%;
		height: 100%;
		position: relative;
		text-align: center;
		cursor: pointer;
		box-shadow: none !important;
		input {
			opacity: 0;
			cursor: pointer;
			width: 100%;
			height: 100%;
		}
	}
	.icon-camera {
		position: absolute;
		right: -4px;
		bottom: 0;
		padding: 8px;
		font-size: 16px;
		color: #999;
		line-height: 1;
		border-radius: 50%;
		background-color: #fff;
		box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
	}
	.aside-me {
		margin-top: 31px;
		font-size: 14px;
		font-weight: 500;
		line-height: 1.07;
		color: #999;
	}
	.aside-me-name {
		line-height: 1.3;
		width: 100%;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-size: 18px;
		font-weight: 600;
		color: #333;
	}
	.aside-me-email {
		line-height: 1.3;
		width: 100%;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.aside-me-tel {
		margin-top: 10px;
	}
	.aside-edit {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 160px;
		height: 40px;
		border-radius: 20px;
		border: 1px solid #e1e2e3;
		margin: 30px auto 0;
		font-size: 16px;
		line-height: 0.94;
		color: #333;
	}
	.matchupstatus {
		margin-top: 42px;
	}
	.matchupstatus-item:first-child {
		margin-top: 0;
	}
	.matchupstatus-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 23px;
		font-size: 16px;
		font-weight: 400;
		line-height: 1.06;
	}
	.matchupstatus-label {
		word-break: break-word;
		line-height: 22px;
	}
	.matchupstatus-value {
		font-size: 18px;
		font-weight: 600;
	}
`;
export default ProfileAside;
