import React from 'react';
import styled from 'styled-components';
import ResumeCareer from './ResumeCareer';

function ResumeList({
	userCvdata,
	setEducationData,
	setLinkdata,
	setCompanyCareer,
}) {
	return (
		<ComponentWrapper>
			<ResumeCareer
				setCompanyCareer={setCompanyCareer}
				title="경력"
				content="• 담당하신 업무 중 우선순위가 높은 업무를 선별하여 최신순으로 작성해주세요.<br/>• 신입의 경우, 직무와 관련된 대외활동, 인턴, 계약직 경력 등이 있다면 작성해주세요.<br/>• 업무 또는 활동 시 담당했던 역할과 과정, 성과에 대해 자세히 작성해주세요. <br/>• 업무 성과는 되도록 구체적인 숫자 혹은 [%]로 표현해주세요!<br/>• 경력 조회 후 기업명이 실제와 다른 경우, 부서명/직책 란에 원하시는 기업명을 작성해주세요."
				isCareer
				userCvdata={userCvdata}
			/>
			<ResumeCareer
				isEducation
				setEducationData={setEducationData}
				title="학력"
				userCvdata={userCvdata}
				content="• 최신순으로 작성해주세요."
			/>
			<ResumeCareer
				title="스킬"
				content="• 개발 스택, 디자인 툴, 마케팅 툴 등 가지고 있는 직무와 관련된 스킬을 추가해보세요.<br/>• 데이터 분석 툴이나 협업 툴 등의 사용해본 경험이 있으신 툴들도 추가해보세요.<br/>• 스킬을 등록한 원티드 이력서는 일반 이력서에 비해 서류통과율이 더 높습니다!"
				isSkill
			/>
			<ResumeCareer
				title="외국어"
				content="• 외국어 자격증을 보유한 경우 작성해주세요. <br/>• 활용 가능한 외국어가 있다면, 어느정도 수준인지 레벨을 선택해주세요."
			/>

			<ResumeCareer
				title="링크"
				setLinkdata={setLinkdata}
				content="• 깃헙, 노션으로 작성한 포트폴리오, 구글 드라이브 파일 등 업무 성과를 보여줄 수 있는 링크가 있다면 작성해주세요."
				userCvdata={userCvdata}
				isLink
			/>
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	margin-bottom: 20px;
	.resumecontentlist-body-btn-add {
		width: 100%;
		padding: 30px 0;
		display: block;
		font-size: 18px;
		font-weight: 600;
		text-align: left;
		border: none;
		border-radius: 0;
		color: #36f;
		font-family: inherit;
		background-color: transparent;
		border-bottom: 1px solid #f1f1f1;
	}
	.resumecontentlist-header {
		padding: 40px 0 6px;
		font-size: 16px;
		font-weight: 500;
		color: #3b3d40;
		border-bottom: 1px solid #bababa;
	}
	.resumecontentlist-guide {
		white-space: pre-wrap;
		padding: 10px;
		background-color: #f3f9fe;
		font-size: 12px;
		line-height: 1.42;
		letter-spacing: normal;
		color: #666;
		margin-top: 10px;
	}
	.banner {
		display: flex;
		align-items: center;
		width: 100%;
		height: 70px;
		padding: 0 20px;
		border-radius: 3px;
		margin: 10px 0 20px;
		background: #f7f7f7;
		cursor: pointer;
	}
	.banner-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		font-size: 15px;
		font-weight: 500;
		line-height: 18px;
		color: #333;
	}
	.banner-content-text {
		display: inline-flex;
		text-align: left;
		p + p {
			margin-left: 2px;
		}
	}
	.banner-content-btn {
		display: flex;
		align-items: center;
		font-size: 14px;
		font-weight: 700;
		line-height: 17px;
		color: #36f;
		> svg {
			margin-left: 5px;
		}
	}
`;

export default ResumeList;
