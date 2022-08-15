import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CustomPost } from 'utils/api';
import { OnboardingTag1, OnboardingTag2, OnboardingTag3 } from 'utils/mockData';

function TagsSetting({ userId, jwt }) {
	const navigate = useNavigate();
	const [tagList, setTagList] = useState([]);

	const handleChangeTags = (e, tag) => {
		if (tagList.includes(tag)) {
			const temp = tagList.filter((element) => element !== tag);
			setTagList(temp);
		} else {
			const temp = [...tagList, tag];
			setTagList(temp);
		}
	};

	const handleUserinfoSubmit = () => {
		const interestTag = tagList.map((element) => ({
			interestTagCategory_no: element,
		}));
		const result = CustomPost({
			url: `/web/users/${userId}/interestTag`,
			body: {
				interestTag,
			},
			headers: {
				'x-access-token': jwt,
			},
		});
		result.then((res) => {
			if (res.code === 1009) {
				console.log(res);
				navigate('/');
			}
		});
	};

	return (
		<ComponentsContainer>
			<div className="wrapper-body-container">
				<div className="level-interest">
					<div className="header-wrapper">
						<p className="header-desc">
							이해찬님의 커리어를 위한
							<br />
							콘텐츠를 추천해 드릴게요!
						</p>
					</div>
					<div className="tags-interest">
						<div className="tags-interest-curation">
							<ul>
								<li className="curationtags">
									<div className="container-curationtags-img">
										<img
											src="https://static.wanted.co.kr/images/tags/0a15b242.png"
											alt="직장인 공감"
										/>
										<span>직장인 공감</span>
									</div>
									<ul className="subtags-curationtags">
										{OnboardingTag1.map((value) => (
											<li className="">
												<TagButton
													type="checkbox"
													key={value.idx}
													onClick={(e) => {
														handleChangeTags(
															e,
															value.idx,
														);
													}}
													hasClicked={tagList.includes(
														value.idx,
													)}
												>
													{
														value.interestTagCategory_no
													}
												</TagButton>
											</li>
										))}
									</ul>
								</li>
								<li className="curationtags">
									<div className="container-curationtags-img">
										<img
											src="https://static.wanted.co.kr/images/tags/2011f1b4.png"
											alt="관심분야"
										/>
										<span>관심분야</span>
									</div>
									<ul className="subtags-curationtags">
										{OnboardingTag2.map((value) => (
											<li className="">
												<TagButton
													type="checkbox"
													key={value.idx}
													onClick={(e) => {
														handleChangeTags(
															e,
															value.idx,
														);
													}}
													hasClicked={tagList.includes(
														value.idx,
													)}
												>
													{
														value.interestTagCategory_no
													}
												</TagButton>
											</li>
										))}
									</ul>
								</li>
								<li className="curationtags">
									<div className="container-curationtags-img">
										<img
											src="https://static.wanted.co.kr/images/tags/49bae778.png"
											alt="트렌드/인사이트"
										/>
										<span className="CurationTags_tagTitle__NjbQw">
											트렌드/인사이트
										</span>
									</div>
									<ul className="subtags-curationtags">
										{OnboardingTag3.map((value) => (
											<li className="">
												<TagButton
													type="checkbox"
													key={value.idx}
													onClick={(e) => {
														handleChangeTags(
															e,
															value.idx,
														);
													}}
													hasClicked={tagList.includes(
														value.idx,
													)}
												>
													{
														value.interestTagCategory_no
													}
												</TagButton>
											</li>
										))}
									</ul>
								</li>
							</ul>
						</div>
					</div>
					<Button
						onClick={() => handleUserinfoSubmit()}
						type="button"
					>
						원티드 시작하기
					</Button>
				</div>
			</div>
		</ComponentsContainer>
	);
}

const TagButton = styled.button`
	display: inline-block;
	padding: 0 15px;
	font-family: inherit;
	font-size: 15px;
	height: 100%;
	font-weight: 500;
	color: #666;
	border: 1px solid transparent;
	border-radius: 21px;
	background: #f2f4f7;
	line-height: 1em;

	background: ${(props) => props.hasClicked && '#fff'};
	border-color: ${(props) => props.hasClicked && '#36f'};
	color: ${(props) => props.hasClicked && '#36f'};
	font-weight: ${(props) => props.hasClicked && '700'};
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 54px;
	border: 0;
	border-radius: 27px;
	background-color: #36f;
	font-size: 16px;
	font-weight: 600;
	color: #fff;
	cursor: pointer;
	:disabled {
		background-color: #f2f4f7;
		border-color: transparent;
		color: #cacaca;
		cursor: not-allowed;
	}
`;

const ComponentsContainer = styled.div`
	.subtags-curationtags {
		> li {
			float: left;
			margin: 0 10px 16px 0;
			height: 38px;
		}
		/* > li > button {
			display: inline-block;
			padding: 0 15px;
			font-family: inherit;
			font-size: 15px;
			height: 100%;
			font-weight: 500;
			color: #666;
			border: 1px solid transparent;
			border-radius: 21px;
			background: #f2f4f7;
			line-height: 1em;
		} */
	}
	.tags-interest {
		margin-bottom: 24px;
	}
	.tags-interest-curation {
		ul {
			display: flex;
			flex-wrap: wrap;
		}
	}
	.curationtags {
		min-width: 90%;
		.container-curationtags-img {
			margin-bottom: 14px;
			> img {
				width: 15px;
				height: 16px;
				margin-right: 4px;
				margin-top: -5px;
			}
			span {
				font-weight: 700;
				font-size: 15px;
				color: #666;
			}
		}
	}
`;

export default TagsSetting;
