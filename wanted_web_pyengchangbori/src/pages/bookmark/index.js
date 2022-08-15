/* eslint-disable consistent-return */
import ArticleEmployment from 'components/common/ArticleEmployment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CustomGet } from 'utils/api';

function BookmarkPage() {
	const navigate = useNavigate();

	const { isLogin, userId, jwt } = useSelector(
		(state) => state.UserDataReducer,
	);
	const [bookMarkData, setBookMarkData] = useState([]);

	useEffect(() => {
		if (!isLogin) {
			navigate('/');
			return;
		}
		let isCompleted = false;
		const getDetailData = async () => {
			try {
				const data = CustomGet({
					url: `/web/bookMarkList/${userId}`,
					headers: {
						'x-access-token': jwt,
					},
				});
				if (!isCompleted) {
					data.then((res) => {
						console.log(res);
						if (res.result.length !== 0) {
							setBookMarkData(res.result);
						}
					});
				}
			} catch (error) {
				console.log(error);
			}
		};
		getDetailData();
		return () => {
			isCompleted = true;
		};
	}, []);

	return (
		<ComponentWrapper>
			<nav role="presentation" className="nav-container">
				<h2>
					<p>북마크</p>
				</h2>
			</nav>
			<div className="bookmarklist-container">
				<ul className="clearfix">
					{bookMarkData.map((value) => (
						<li>
							<ArticleEmployment
								key={value.no}
								jobno={value.no}
								companyImageUrl={value.companyImageUrl}
								country={value.country}
								name={value.name}
								title={value.title}
							/>
						</li>
					))}
				</ul>
				{bookMarkData.length === 0 && (
					<div className="empty-container">
						<div>추천 포지션이 없습니다.</div>
					</div>
				)}

				<div />
			</div>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	padding-bottom: 100px;
	margin: 0 auto;
	width: 87.72%;
	position: relative;
	max-width: 1060px;

	.empty-container {
		padding: 200px 0;
		text-align: center;
		div {
			margin: 240px 0;
			color: #d1d1d1;
			font-size: 24px;
		}
	}

	.nav-container {
		position: relative;
		line-height: normal;
		p {
			font-size: 20px;
			font-weight: 700;
			color: #333;
			padding: 50px 0 20px;
		}
	}

	.bookmarklist-container > ul {
		margin: -10px;
		padding: 0;
		li {
			width: 25%;
			padding: 10px;
			list-style: none;
			display: inline-block;
			vertical-align: top;
		}
	}

	.clearfix:before {
		content: ' ';
		display: table;
	}
	.clearfix:after {
		clear: both;
	}
`;

export default BookmarkPage;
