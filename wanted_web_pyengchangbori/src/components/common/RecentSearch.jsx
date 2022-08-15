import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function RecentSearch() {
	const [recentSearchList, setRecentSearchList] = useState([]);

	useEffect(() => {
		const output = localStorage.getItem('recentSearch');
		const arr = JSON.parse(output);
		if (arr !== null) {
			setRecentSearchList(arr);
		}
	}, []);

	const handleDeleteItem = (e, item) => {
		e.stopPropagation();
		setRecentSearchList(
			recentSearchList.filter((element) => element !== item),
		);
		localStorage.setItem(
			'recentSearch',
			JSON.stringify(
				recentSearchList.filter((element) => element !== item),
			),
		);
	};
	const handleDeleteAll = (e) => {
		e.stopPropagation();
		setRecentSearchList([]);
		localStorage.removeItem('recentSearch');
	};
	return (
		<>
			{recentSearchList.length >= 1 && (
				<>
					<h4 className="recentsearchresult-searchlabel">
						최근 검색 기록
					</h4>
					<button
						onClick={(e) => {
							handleDeleteAll(e);
						}}
						type="button"
						className="recentsearchresult-rightsidebtn"
					>
						전체삭제
					</button>
					<ul className="recentsearchresult-container">
						{recentSearchList.map((value) => (
							<li className="keywordListItem">
								<Link to={`/search?query=${value}`}>
									{value}
								</Link>
								<button
									onClick={(e) => {
										handleDeleteItem(e, value);
									}}
									type="button"
									className="recentsearchresult-listClassbtn"
								>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
										/>
									</svg>
								</button>
							</li>
						))}
					</ul>
				</>
			)}

			<div />
		</>
	);
}

export default RecentSearch;
