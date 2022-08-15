import React from 'react';
import styled from 'styled-components';

// icon : ?아이콘 있는지
function Articletitle({ title, icon, subtitle }) {
	return (
		<ComponentsWrapper>
			<div className="title-wrapper">
				<h2 className="title-content">{title}</h2>

				{icon && (
					<button type="button">
						<svg width="24" height="24" viewBox="0 0 17 17">
							<defs>
								<filter id="bfoh3u0w3a">
									<feColorMatrix
										in="SourceGraphic"
										values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"
									/>
								</filter>
							</defs>
							<g fill="none" fillRule="evenodd">
								<g>
									<g>
										<g transform="translate(-1080 -374) translate(1080 374)">
											<g>
												<path
													stroke="#999"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.2"
													d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745"
													transform="translate(1 1)"
												/>
												<path
													fill="#999"
													d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671"
													transform="translate(1 1) rotate(-180 7.053 10.408)"
												/>
												<path
													stroke="#999"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.2"
													d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783"
													transform="translate(1 1)"
												/>
											</g>
										</g>
									</g>
								</g>
							</g>
						</svg>
					</button>
				)}
			</div>
			{subtitle && (
				<Subtitle>
					{subtitle}
					<span className="icon-svg-wrapper">
						<svg className="icon-svg" viewBox="0 0 19 19">
							<path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
						</svg>
					</span>
				</Subtitle>
			)}
		</ComponentsWrapper>
	);
}

const Subtitle = styled.a`
	font-size: 15px;
	margin: 5px 0 0;
	font-weight: 500;
	line-height: normal;
	vertical-align: middle;
	color: #767676 !important;
	span {
		width: 100%;
		align-items: inherit;
		justify-content: inherit;
		display: inline-flex !important;
		width: 10px !important;
		margin-left: 4px !important;
		vertical-align: middle !important;
	}
`;

const ComponentsWrapper = styled.div`
	text-align: center;
	.title-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		button {
			margin-top: 3px;
			margin-left: 4px;
			line-height: normal;
		}
	}
	.title-content {
		font-size: 22px;
		line-height: 1.33;
		font-weight: 700;
		color: #333;
		margin-left: 4px;
		line-height: normal;
	}
`;

export default Articletitle;
