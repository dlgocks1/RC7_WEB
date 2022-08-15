import React from 'react';

function PopupAi({ setpopupAi, popupAi }) {
	return (
		<div className="wantedAi-popup">
			<hr />
			<p className="wantedAi-title">
				<img
					aria-label="wantedai-logo"
					src="https://static.wanted.co.kr/images/ai/logo-wantedai.png"
					width="70"
					alt="logo-wantedai"
					style={{ marginBottom: '3px' }}
				/>
				가 예측해드려요.
			</p>
			<button
				type="button"
				className="btn-closewantedAi"
				onClick={() => {
					setpopupAi(!popupAi);
				}}
			>
				<svg
					xmlns="https://www.w3.org/2000/svg"
					width="21"
					height="21"
					color="#666"
				>
					<g fill="none" fillRule="evenodd">
						<g fill="#666">
							<g>
								<g>
									<g>
										<path
											d="M0 7H14V8H0z"
											transform="translate(-600 -121) translate(319 113) rotate(45 137.178 355.712) translate(.795 .584)"
										/>
										<path
											d="M0 7H14V8H0z"
											transform="translate(-600 -121) translate(319 113) rotate(45 137.178 355.712) translate(.795 .584) rotate(90 7 7.5)"
										/>
									</g>
								</g>
							</g>
						</g>
					</g>
				</svg>
			</button>
			<p className="description-wantedAipopup">
				원티드 이력서를 400자 이상 작성해보세요.
				<br />
				<br />딱 맞는 포지션 발견 시, 서류합격률을 예측해드립니다.
				<br />
				<br />
				이력서를 상세하게 작성하실수록 더 정확하게 분석됩니다.
			</p>
			<div className="WantedAiPopup_container__jaZ3e text-gotofrofile">
				<div className="wantedAipopup-conatiner-item">
					<a
						href="/cv/list"
						className="WantedAiPopup_root_goProfile__Ib13I"
						aria-label=""
						data-attribute-id="position__aiScore__goToResume"
						data-ai-score-status="underLv4"
						data-position-id="122227"
					>
						이력서 작성하러가기 &gt;
					</a>
				</div>
			</div>
		</div>
	);
}

export default PopupAi;
