import React, { useEffect, useState } from 'react';

function SalaryAsideText({ career, job, salaryData, diffSalary }) {
	console.log();
	const [salaryList, setSalaryList] = useState(salaryData.read().data.result);

	useEffect(() => {
		setSalaryList(salaryData.read().data.result);
	}, [salaryData]);
	return (
		<aside>
			<h4 className="info-jobcategory">
				{career === `0` ? '신입 ' : `${career}년 경력 `}
				{`${job.job} 예상 연봉`}
			</h4>
			{salaryList.length !== 0 && (
				<h2 className="info-jobcategory-salary">
					{salaryList[parseInt(career, 10)].price
						.toString()
						.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
					<sub>만원</sub>
				</h2>
			)}

			{diffSalary !== '0' && (
				<h4 className="info-diff-salary">
					<sup>*</sup> {career === `0` && '신입'} 예상 연봉 대비
					{parseInt(diffSalary.split(',').join(''), 10) >=
					salaryList[parseInt(career, 10)].price
						? ` ${Math.round(
								(parseInt(diffSalary.split(',').join(''), 10) /
									salaryList[parseInt(career, 10)].price) *
									100 -
									100,
						  )}% 높음`
						: ` ${Math.round(
								(salaryList[parseInt(career, 10)].price /
									parseInt(
										diffSalary.split(',').join(''),
										10,
									)) *
									100 -
									100,
						  )}% 낮음`}
				</h4>
			)}
		</aside>
	);
}

export default SalaryAsideText;
