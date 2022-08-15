import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MakeNewResumeBt from './MakeNewResumeBt';
import ResumeBt from './ResumeBt';

function ResumeListWrapper({ setReload, setResumeList, resumeList }) {
	// const provideData = resumeList.read();
	const [resumeContent, setResumeContent] = useState(
		resumeList.read().data.result,
	);

	useEffect(() => {
		setResumeContent(resumeList.read().data.result);
	}, [resumeList]);

	return (
		<ComponentWrapper>
			<MakeNewResumeBt />
			<div className="resumeitem" role="button">
				<div className="resumelist-additem-upload">
					<input multiple type="file" style={{ display: 'none' }} />
					<div className="resumelist-additem-upload-icon">
						<i className="icon-upload" />
					</div>
					<p>파일 업로드</p>
				</div>
			</div>
			{resumeContent
				.slice(0)
				.reverse()
				.map((value) => (
					<ResumeBt
						key={value.no}
						idx={value.no}
						setReload={setReload}
						setResumeList={setResumeList}
						basicResume={value.basic_resume}
						date={value.date}
						resumeName={value.resume_name}
						writingStatus={value.writing_status}
					/>
				))}
		</ComponentWrapper>
	);
}

const ComponentWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	width: calc(100% + 20px);
	flex-wrap: wrap;

	.resumeitem {
		height: 190px;
		width: calc(25% - 20px);
		margin-bottom: 20px;
		margin-right: 20px;
		position: relative;
		border: 1px solid #dbdbdb;
		background-color: #fff;
	}
	.resumelist-additem {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		p {
			font-size: 16px;
			font-weight: 600;
			letter-spacing: normal;
			text-align: center;
			color: #333;
			margin: 20px 0 0;
		}
	}
	.resumelist-additem-icon {
		background-color: #36f;
		color: #fff;
		cursor: pointer;
		width: 74px;
		height: 74px;
		margin: 0 auto;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 26px;
	}
	.resumelist-additem-upload-icon {
		cursor: pointer;
		width: 74px;
		height: 74px;
		margin: 0 auto;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 26px;
		background-color: #e1e2e3;
	}
	.resumelist-additem-upload {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		p {
			font-size: 16px;
			font-weight: 600;
			letter-spacing: normal;
			text-align: center;
			color: #333;
			margin: 20px 0 0;
		}
	}
	.resumelist-badge {
		padding-left: 18px;
		padding-top: 15px;
		display: flex;
		flex-wrap: wrap;
		grid-gap: 5px;
		gap: 5px;
	}
	.matchup-badge {
		height: 24px;
		background-color: #f3f9fe;
		color: #36f;
		font-size: 11px;
		font-weight: 700;
		line-height: 13.2px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
		padding: 6px;
	}
	.resumeitem-title {
		padding: 6px 20px;
		font-size: 16px;
		font-weight: 500;
		letter-spacing: normal;
		text-align: left;
		> h3 {
			font-size: 18px;
			font-weight: 600;
			line-height: 1.33;
			max-height: 46px;
			max-width: 100%;
			letter-spacing: normal;
			text-align: left;
			overflow: hidden;
			word-break: break-all;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			border: none;
			color: #999;
		}
		> p {
			color: #999;
			margin-top: 5px;
		}
	}
	.resumeitem-info {
		position: absolute;
		bottom: 0;
		height: 41px;
		width: 100%;
		display: flex;
		flex-direction: row;
		padding: 0 12px 0 20px;
		align-items: center;
		border-top: 1px solid #e0e0e0;
		.iswriting {
			color: #333;
			font-weight: 600;
		}
		> span {
			font-size: 16px;
			font-weight: 500;
			line-height: 20px;
			color: #999;
			letter-spacing: normal;
			text-align: left;
		}
	}

	.resumeitem-lang {
		width: 20px;
		color: #999;
		border: 1px solid #999;
		height: 20px;
		border-radius: 2px;
		text-align: center;
		font-size: 12px;
		line-height: 20px;
		font-weight: 600;
		margin-right: 10px;
	}
	.resumeitem-menu {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: auto;
		cursor: pointer;
		> button {
			font-size: 24px;
			color: #76797e;
			height: 100%;
			width: 24px;
		}
	}
`;

export default ResumeListWrapper;
