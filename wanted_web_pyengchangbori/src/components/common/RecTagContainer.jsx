import React from 'react';
import { Link } from 'react-router-dom';

function RecTagContainer() {
	return (
		<>
			<h4 className="recentresult-container">추천태그로 검색해보세요</h4>
			<Link to="/tag_search" className="recentresult-rightsidebtn">
				기업태그 홈 이동하기
				<svg width="12" height="12" viewBox="0 0 12 12">
					<path
						fill="currentColor"
						d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"
					/>
				</svg>
			</Link>
			<ul className="recentsearch-result-container">
				<li className="taglist-item">
					<button className="tag-container" type="button">
						#스타트업
					</button>
				</li>
				<li className="taglist-item">
					<button className="tag-container" type="button">
						#퇴사율5%이하
					</button>
				</li>
				<li className="taglist-item">
					<button className="tag-container" type="button">
						#산업기능요원
					</button>
				</li>
				<li className="taglist-item">
					<button className="tag-container" type="button">
						#연봉상위1%
					</button>
				</li>
				<li className="taglist-item">
					<button className="tag-container" type="button">
						#연봉상위2~5%
					</button>
				</li>
			</ul>
		</>
	);
}

export default RecTagContainer;
