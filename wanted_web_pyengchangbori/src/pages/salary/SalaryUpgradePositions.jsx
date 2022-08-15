import ArticleEmployment from 'components/common/ArticleEmployment';
import React, { useState } from 'react';

function SalaryUpgradePositions({ fetchData }) {
	const [dataList, setDataList] = useState(fetchData[0].read().data.result);
	console.log(dataList);

	return (
		<ul data-cy="job-list" className="clearfix">
			{dataList !== undefined &&
				dataList.map((value) => (
					<li>
						<ArticleEmployment
							jobno={value.no}
							companyImageUrl={value.companyImageUrl}
							country={value.country}
							name={value.name}
							title={value.title}
						/>
					</li>
				))}
		</ul>
	);
}

export default SalaryUpgradePositions;
