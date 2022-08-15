import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function UserPopup() {
	return (
		<ComponentWrapper>
			<div className="MenuPopover_menuWrapper__Sju5Y">
				{/* <div className="MenuPopover_header__u1J9n">
					<button type="button">
						<svg width="24" height="24" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
							/>
						</svg>
					</button>
				</div> */}
				<ul className="MenuPopover_list__BzAsJ MenuPopover_desktop__QcuKl">
					<li className="MenuPopover_hasNewMywantedAlarm__Ij29H">
						<Link to="/mywanted" className="">
							<span>MY 원티드</span>
						</Link>
					</li>
					<li className="">
						<Link to="/profile/matching?level=3" className="">
							<span>프로필</span>
						</Link>
					</li>
					<li className="">
						<Link to="/status/applications">
							<span>지원 현황</span>
						</Link>
					</li>
					<li className="">
						<Link to="/profile/status">
							<span>제안받기 현황</span>
						</Link>
					</li>
					<li className="">
						<Link to="/profile/likes">
							<span>좋아요</span>
						</Link>
					</li>
					<li className="">
						<Link to="/profile/bookmarks">
							<span>북마크</span>
						</Link>
					</li>
					<li className="">
						<Link to="/referral">
							<span>추천</span>
						</Link>
					</li>
					<li className="">
						<Link to="/profile/point">
							<span>포인트</span>
						</Link>
					</li>
					<li>
						<Link to="/logout" className="is-logout">
							<span>로그아웃</span>
						</Link>
					</li>
				</ul>
			</div>
			<div className="MenuPopover_bubblePoint__q6Ypq" />
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	height: 100%;
	font-size: 14px;
	color: #333;
	font-weight: 600;
	line-height: 1;
	position: absolute;
	top: 100%;
	right: -27px;
	margin-top: 13px;
	padding: 0 !important;
	display: block;
	transform: translate(50%, 8px);

	.MenuPopover_bubblePoint__q6Ypq {
		position: absolute;
		right: 50%;
		bottom: 100%;
		height: 11px;
		overflow: hidden;
		margin-bottom: -1px;
		transform: translateX(-47px);
		:after {
			content: '';
			margin-top: 4px;
			border: 1px solid #cdcdcd;
			background-color: #fff;
			height: 14px;
			width: 14px;
			display: block;
			border-top-right-radius: 30%;
			-webkit-transform: rotate(-55deg) skewX(-20deg);
			transform: rotate(-55deg) skewX(-20deg);
		}
	}
	.MenuPopover_menuWrapper__Sju5Y {
		overflow: hidden;
		min-width: 194px;
		border-radius: 10px;
		box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
		border: 1px solid #cdcdcd;
		background-color: #fff;
	}
	.MenuPopover_desktop__QcuKl {
		padding-top: 14px;
		li {
			height: 34px !important;
			position: relative;
			display: inline-block;
			vertical-align: middle;
			width: 100%;
			* {
				height: 100%;
				font-size: 14px;
				color: #333;
			}
			a {
				display: flex;
				color: #333;
				align-items: center;
				justify-content: center;
				vertical-align: bottom;
				font-weight: 500 !important;
				line-height: normal !important;
				padding: 8px !important;
				:hover span {
					z-index: 1;
					position: relative;
				}
				:hover::before {
					position: absolute;
					content: '';
					display: block;
					top: 0;
					right: 0;
					left: 0;
					bottom: 0;
					border-radius: 8px;
					background-color: #f7f7f7;
					margin: 0 8px;
					height: 34px;
					z-index: 0;
				}
			}
			:nth-child(3),
			:nth-child(7) {
				margin-top: 18px;
			}
			:nth-child(2)::after,
			:nth-child(6)::after {
				content: '';
				display: block;
				margin: 9px 7px;
				height: 1px;
				background-color: #ececec;
			}
			:last-child {
				border: 0;
				margin-top: 9px;
				background-color: #f7f7f7;
				overflow: hidden;
				height: 50px !important;
				border-radius: 0 0 10px 10px;
				border-top: 1px solid #ececec;
				span {
					height: auto;
				}
			}
		}
	}
`;

export default UserPopup;
