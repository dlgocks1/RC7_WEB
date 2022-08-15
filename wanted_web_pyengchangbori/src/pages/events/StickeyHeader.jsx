import React, { useRef } from 'react';
import styled from 'styled-components';

function StickeyHeader() {
	return (
		<ComponentWrapper>
			<div className="eventlist-container">
				<div className="headet-trigger">
					<div className="filtermenu">
						<button type="button" className="filtermenu-bottom">
							<svg
								width="15"
								height="15"
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="filtermenu-icon"
							>
								<path
									d="M4.66699 10.51C5.55699 10.51 6.30999 11.11 6.54099 11.927H13.875C14.168 11.927 14.406 12.165 14.406 12.458C14.406 12.752 14.168 12.99 13.875 12.99H6.54099C6.30999 13.807 5.55799 14.406 4.66699 14.406C3.77499 14.406 3.02299 13.806 2.79199 12.989H1.12499C0.831994 12.989 0.593994 12.752 0.593994 12.459C0.593994 12.165 0.831994 11.927 1.12499 11.927H2.79199C3.02399 11.109 3.77599 10.51 4.66699 10.51V10.51ZM4.66699 11.573C4.17799 11.573 3.78099 11.97 3.78099 12.458C3.78099 12.947 4.17799 13.344 4.66699 13.344C5.15499 13.344 5.55199 12.947 5.55199 12.458C5.55199 11.97 5.15499 11.573 4.66699 11.573ZM10.333 5.55299C11.225 5.55299 11.977 6.15199 12.208 6.96899H13.875C14.168 6.96899 14.406 7.20699 14.406 7.49999C14.406 7.79299 14.168 8.03099 13.875 8.03099H12.208C11.976 8.84899 11.224 9.44799 10.333 9.44799C9.44299 9.44799 8.68999 8.84799 8.45899 8.03199H1.12499C0.831994 8.03199 0.593994 7.79299 0.593994 7.49999C0.593994 7.20699 0.831994 6.96899 1.12499 6.96899H8.45899C8.68999 6.15199 9.44199 5.55199 10.333 5.55199V5.55299ZM10.333 6.61499C9.84499 6.61499 9.44799 7.01099 9.44799 7.49999C9.44799 7.98899 9.84499 8.38499 10.333 8.38499C10.822 8.38499 11.219 7.98899 11.219 7.49999C11.219 7.01099 10.822 6.61499 10.333 6.61499V6.61499ZM4.66699 0.593994C5.55699 0.593994 6.30999 1.19299 6.54099 2.00999H13.875C14.168 2.00999 14.406 2.24799 14.406 2.54199C14.406 2.83499 14.168 3.07199 13.875 3.07199L6.54099 3.07399C6.30899 3.89099 5.55799 4.48999 4.66699 4.48999C3.77599 4.48999 3.02399 3.88999 2.79199 3.07399L1.12499 3.07299C0.831994 3.07299 0.593994 2.83499 0.593994 2.54199C0.593994 2.24799 0.831994 2.00999 1.12499 2.00999H2.79199C3.02399 1.19299 3.77599 0.593994 4.66699 0.593994V0.593994ZM4.66699 1.65599C4.17799 1.65599 3.78099 2.05299 3.78099 2.54199C3.78099 3.02999 4.17799 3.42699 4.66699 3.42699C5.15499 3.42699 5.55199 3.02999 5.55199 2.54199C5.55199 2.05299 5.15499 1.65599 4.66699 1.65599V1.65599Z"
									fill="#333333"
								/>
							</svg>
							<span>필터 및 정렬</span>
							<div className="filtermenu-container">1</div>
						</button>
					</div>
					<div className="notification-container">
						<button
							type="button"
							className="notification-manager is-desktop"
						>
							<svg
								width="17"
								height="15"
								viewBox="0 0 17 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="notification-icon"
							>
								<path
									d="M5.385 13H8.615C8.38 13.583 7.745 14 7 14C6.254 14 5.62 13.583 5.385 13ZM7 15C8.522 15 9.755 13.829 9.755 12.384C9.755 12.094 9.508 11.86 9.205 11.86H1.856C1.553 11.86 1.326 11.847 1.172 11.823L1.236 11.708C1.271 11.648 1.583 11.145 1.686 10.964C2.154 10.151 2.407 9.405 2.407 8.547V5.407C2.407 2.937 4.422 1.047 6.999 1.047C9.576 1.047 11.591 2.937 11.591 4.407C11.594 4.711 11.842 4.957 12.146 4.957H12.149C12.449 4.957 12.693 4.713 12.693 4.413V4.407C12.694 2.356 10.182 0 7 0C3.818 0 1.306 2.356 1.306 5.407V8.547C1.306 9.204 1.107 9.79 0.72 10.463C0.628 10.625 0.318 11.123 0.273 11.201C0.089 11.516 0 11.733 0 11.975C0 12.701 0.62 12.907 1.857 12.907H4.3C4.555 14.101 5.667 15 7 15Z"
									fill="#fff"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M13.433 6.6C13.737 6.6 13.983 6.846 13.983 7.15V9.516H16.35C16.623 9.516 16.85 9.716 16.893 9.977L16.9 10.067V10.133C16.9 10.437 16.654 10.683 16.35 10.683H13.983V13.05C13.983 13.354 13.737 13.6 13.433 13.6H13.367C13.063 13.6 12.817 13.354 12.817 13.05L12.816 10.683H10.45C10.177 10.683 9.94999 10.483 9.90699 10.223L9.89999 10.133V10.067C9.89999 9.763 10.146 9.517 10.45 9.517L12.816 9.516V7.15C12.816 6.846 13.063 6.6 13.366 6.6H13.433V6.6Z"
									fill="#fff"
								/>
							</svg>
							<span>키워드 알림 신청</span>
						</button>
						{/* <button
							id="NotificationManger"
							type="button"
							className="notification-manager"
						>
							<svg
								width="17"
								height="15"
								viewBox="0 0 17 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5.385 13H8.615C8.38 13.583 7.745 14 7 14C6.254 14 5.62 13.583 5.385 13ZM7 15C8.522 15 9.755 13.829 9.755 12.384C9.755 12.094 9.508 11.86 9.205 11.86H1.856C1.553 11.86 1.326 11.847 1.172 11.823L1.236 11.708C1.271 11.648 1.583 11.145 1.686 10.964C2.154 10.151 2.407 9.405 2.407 8.547V5.407C2.407 2.937 4.422 1.047 6.999 1.047C9.576 1.047 11.591 2.937 11.591 4.407C11.594 4.711 11.842 4.957 12.146 4.957H12.149C12.449 4.957 12.693 4.713 12.693 4.413V4.407C12.694 2.356 10.182 0 7 0C3.818 0 1.306 2.356 1.306 5.407V8.547C1.306 9.204 1.107 9.79 0.72 10.463C0.628 10.625 0.318 11.123 0.273 11.201C0.089 11.516 0 11.733 0 11.975C0 12.701 0.62 12.907 1.857 12.907H4.3C4.555 14.101 5.667 15 7 15Z"
									fill="#fff"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M13.433 6.6C13.737 6.6 13.983 6.846 13.983 7.15V9.516H16.35C16.623 9.516 16.85 9.716 16.893 9.977L16.9 10.067V10.133C16.9 10.437 16.654 10.683 16.35 10.683H13.983V13.05C13.983 13.354 13.737 13.6 13.433 13.6H13.367C13.063 13.6 12.817 13.354 12.817 13.05L12.816 10.683H10.45C10.177 10.683 9.94999 10.483 9.90699 10.223L9.89999 10.133V10.067C9.89999 9.763 10.146 9.517 10.45 9.517L12.816 9.516V7.15C12.816 6.846 13.063 6.6 13.366 6.6H13.433V6.6Z"
									fill="#fff"
								/>
							</svg>
						</button> */}
						<div className="tooltip notification-tooltip">
							관심 태그를 등록하시면
							<mark>
								이벤트가 오픈되는
								<br />
								즉시 카카오톡으로
							</mark>
							알려드릴게요!
						</div>
					</div>
				</div>
			</div>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	top: 50px;
	margin-top: -5px;
	box-shadow: 0 1px 4px 0rgba (0, 0, 0, 0.1);
	border-bottom-color: #36f;
	z-index: 10;
	height: 80px;
	padding-top: 20px;
	padding-bottom: 20px;
	background-color: #fff;
	border-bottom: 1px solid transparent;
	transition: all 0.3s;
	position: sticky;
	.eventlist-container {
		position: relative;
		max-width: 1060px;
		width: 87.72%;
		margin: 0 auto;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.headet-trigger {
		display: flex;
		justify-content: space-between;
		width: 100%;
		background-color: #fff;
	}
	.filtermenu {
		display: flex;
		position: relative;
	}
	.filtermenu-bottom {
		display: flex;
		align-items: center;
		height: 40px;
		padding-right: 16px;
		padding-left: 16px;
		border-radius: 5px;
		border: 1px solid #e1e2e3;
	}
	.filtermenu-icon {
		margin-right: 7px;
		transform: translateZ(0);
	}
	.filtermenu-container {
		position: absolute;
		top: 4px;
		right: 1px;
		transform: translate(50%, -50%);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 20px;
		height: 20px;
		padding: 0 5px;
		border-radius: 10px;
		background-color: #36f;
		font-size: 12px;
		color: #fff;
	}
	.notification-container {
		position: relative;
	}
	.notification-container-desktop {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: relative;
		height: 40px;
		padding-right: 20px;
		padding-left: 20px;
		border-radius: 9999px;
		background-color: #36f;
		margin-left: auto;
		white-space: nowrap;
		color: #fff;
	}
	.notification-icon {
		margin-right: 5px;
	}
	.notification-manager {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: relative;
		height: 40px;
		padding-right: 20px;
		padding-left: 20px;
		border-radius: 9999px;
		background-color: #36f;
		margin-left: auto;
		white-space: nowrap;
		color: #fff;
	}
	.notification-manager:hover ~ .notification-tooltip {
		opacity: 1;
		z-index: 1;
		word-break: keep-all;
	}

	.tooltip {
		position: absolute;
		position: absolute;
		pointer-events: none;
		top: 0;
		right: 0;
		z-index: 2;
		width: 259px;
		padding: 10px 14px;
		border-radius: 3px;
		border: 1px solid rgba(51, 51, 51, 0.2);
		background-color: #fff;
		opacity: 0;
		transform: translateY(-110%);
		text-align: left;
		transition: all 0.5s;
		font-size: 12.5px;
		font-weight: 500;
		line-height: 1.77;
		letter-spacing: -0.45px;
		color: #000;
		mark {
			background-color: transparent;
			color: #36f;
		}
	}
`;
export default StickeyHeader;
