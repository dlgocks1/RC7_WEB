/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-cycle */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TagListItemDummy } from 'utils/mockData';
import CompanyRec from './CompanyRec';
import { companyByTagResult } from './index';

export function CompanyByTagComponent() {
	const companyByTag = companyByTagResult.companyByTag.read();
	const tag1 = TagListItemDummy.find(
		(item) =>
			item.idx === companyByTag.data.result[0][0].companyTagCategory_no,
	);
	const tag2 = TagListItemDummy.find(
		(item) =>
			item.idx === companyByTag.data.result[1][0].companyTagCategory_no,
	);

	return (
		<>
			<div className="featured-joblist">
				<CompanyRec
					company
					title={`#${tag1.content}`}
					icon={tag1.imgUrl}
					data={companyByTag.data.result[0]}
				/>
			</div>

			<div className="featured-joblist">
				<CompanyRec
					company
					title={`#${tag2.content}`}
					icon={tag2.imgUrl}
					data={companyByTag.data.result[1]}
				/>
			</div>
		</>
	);
}
