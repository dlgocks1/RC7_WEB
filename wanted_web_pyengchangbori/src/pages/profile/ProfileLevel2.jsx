import React, { useState } from 'react';
import styled from 'styled-components';

function ProfileLevel2({ resumeData }) {
	const [resumedataState, setResumeData] = useState(
		resumeData.resumeData.read().data.result[0],
	);

	console.log(resumedataState);

	return (
		<ComponentWrapper>
			<div className="form-classname fixedFooter">
				<header className="form-header">
					<dl>
						<dt>학교·직장등록</dt>
					</dl>
				</header>
				<button className="goto-matchup" type="button">
					매치업 서비스 소개
					<i className="icon-information-outline" />
				</button>
				<div className="formblock">
					<div className="formblock-content content">
						<div className="button-container selected">
							<label htmlFor="name" className="input-container">
								<h6>학교</h6>
								<input
									id="name"
									type="text"
									autoComplete="off"
									value={resumedataState.schoolName}
								/>
							</label>
						</div>
						<div className="button-container">
							<label htmlFor="name" className="input-container">
								<h6>직장</h6>
								<input
									id="name"
									type="text"
									autoComplete="off"
									value={resumedataState.companyName}
								/>
							</label>
						</div>
						<div className="careerPeriod">
							<select
								className="yearselect-container"
								name="startYear"
							>
								<option disabled hidden value="0">
									YYYY
								</option>
								<option value="2022">2022</option>
								<option value="2021">2021</option>
								<option value="2020">2020</option>
								<option value="2019">2019</option>
								<option value="2018">2018</option>
								<option value="2017">2017</option>
								<option value="2016">2016</option>
								<option value="2015">2015</option>
								<option value="2014">2014</option>
								<option value="2013">2013</option>
								<option value="2012">2012</option>
								<option value="2011">2011</option>
								<option value="2010">2010</option>
								<option value="2009">2009</option>
								<option value="2008">2008</option>
								<option value="2007">2007</option>
								<option value="2006">2006</option>
								<option value="2005">2005</option>
								<option value="2004">2004</option>
								<option value="2003">2003</option>
								<option value="2002">2002</option>
								<option value="2001">2001</option>
								<option value="2000">2000</option>
								<option value="1999">1999</option>
								<option value="1998">1998</option>
								<option value="1997">1997</option>
								<option value="1996">1996</option>
								<option value="1995">1995</option>
								<option value="1994">1994</option>
								<option value="1993">1993</option>
								<option value="1992">1992</option>
								<option value="1991">1991</option>
								<option value="1990">1990</option>
								<option value="1989">1989</option>
								<option value="1988">1988</option>
								<option value="1987">1987</option>
								<option value="1986">1986</option>
								<option value="1985">1985</option>
								<option value="1984">1984</option>
								<option value="1983">1983</option>
							</select>
							<span className="monthDot">.</span>
							<select
								className="monthselect-container"
								name="startMonth"
							>
								<option disabled hidden value="0">
									MM
								</option>
								<option value="1">01</option>
								<option value="2">02</option>
								<option value="3">03</option>
								<option value="4">04</option>
								<option value="5">05</option>
								<option value="6">06</option>
								<option value="7">07</option>
								<option value="8">08</option>
								<option value="9">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
							</select>
							<span className="termDash">-</span>
							<select
								className="yearselect-container"
								name="endYear"
							>
								<option disabled hidden value="0">
									YYYY
								</option>
								<option value="2022">2022</option>
								<option value="2021">2021</option>
								<option value="2020">2020</option>
								<option value="2019">2019</option>
								<option value="2018">2018</option>
								<option value="2017">2017</option>
								<option value="2016">2016</option>
								<option value="2015">2015</option>
								<option value="2014">2014</option>
								<option value="2013">2013</option>
								<option value="2012">2012</option>
								<option value="2011">2011</option>
								<option value="2010">2010</option>
								<option value="2009">2009</option>
								<option value="2008">2008</option>
								<option value="2007">2007</option>
								<option value="2006">2006</option>
								<option value="2005">2005</option>
								<option value="2004">2004</option>
								<option value="2003">2003</option>
								<option value="2002">2002</option>
								<option value="2001">2001</option>
								<option value="2000">2000</option>
								<option value="1999">1999</option>
								<option value="1998">1998</option>
								<option value="1997">1997</option>
								<option value="1996">1996</option>
								<option value="1995">1995</option>
								<option value="1994">1994</option>
								<option value="1993">1993</option>
								<option value="1992">1992</option>
								<option value="1991">1991</option>
								<option value="1990">1990</option>
								<option value="1989">1989</option>
								<option value="1988">1988</option>
								<option value="1987">1987</option>
								<option value="1986">1986</option>
								<option value="1985">1985</option>
								<option value="1984">1984</option>
								<option value="1983">1983</option>
							</select>
							<span className="monthDot">.</span>
							<select
								className="monthselect-container"
								name="endMonth"
							>
								<option disabled hidden value="0">
									MM
								</option>
								<option value="1">01</option>
								<option value="2">02</option>
								<option value="3">03</option>
								<option value="4">04</option>
								<option value="5">05</option>
								<option value="6">06</option>
								<option value="7">07</option>
								<option value="8">08</option>
								<option value="9">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
							</select>
							<div className="served-checkbox-container">
								<input type="checkbox" />
								<span>현재 재직중</span>
							</div>
						</div>
						<label htmlFor="name" className="textarea-container">
							<h6>간단 소개글</h6>
							<p>
								직무 내용, 경험, 목표 등을 추가해서 더욱 멋진
								소개글을 작성해보세요.
							</p>
							<textarea id="name" type="text" autoComplete>
								자기소개를 입력해주세요.
							</textarea>
						</label>
					</div>
				</div>
				<footer className="footer-form footer-container fixedFooter">
					<div className="childrenWrapper">
						<button className="outline" type="button">
							<i className="icon-cheveron-right" />
							전문분야 설정
						</button>
						<button
							type="button"
							data-attribute-id="profile__next"
							data-step="2"
						>
							작성 완료
						</button>
					</div>
				</footer>
			</div>
		</ComponentWrapper>
	);
}
const ComponentWrapper = styled.div`
	position: relative;
	width: 100%;
	font-family: inherit;

	.footer-container .outline {
		background: #fff;
		border: 1px solid #e1e2e3;
		color: #333;
		font-family: inherit;
		> i {
			display: inline-block;
			transform: translateY(3px) rotate(180deg);
			font-size: 21px;
			margin-right: 15px;
		}
	}
	.footer-container button {
		width: 190px;
		height: 50px;
		font-family: inherit;
		border-radius: 3px;
		background-color: #258bf7;
		color: #fff;
		font-size: 18px;
		font-weight: 600;
		margin-left: 20px;
	}
	.footer-form {
		padding-right: 30px;
		padding-left: 30px;
		margin-top: 45px;
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		background: #fff;
		border-top: 1px solid #e1e2e3;
		padding: 15px 0;
		text-align: right;
		margin: 0 auto;
		.childrenWrapper {
			width: 1060px;
			margin: 0 auto;
		}
	}

	.textarea-container {
		width: 100%;
		margin-top: 15px;
		h6 {
			font-size: 16px;
			font-weight: 600;
			color: #999;
			margin-bottom: 11px;
			font-family: inherit;
		}
		p {
			font-size: 14px;
			font-weight: 400;
			line-height: 1.57;
			color: #ccc;
			margin-bottom: 17px;
		}
		textarea {
			width: 100%;
			height: 192px;
			border-radius: 3px;
			box-sizing: border-box;
			border: 1px solid #e1e2e3;
			padding: 10px 20px;
			font-size: 16px;
			font-weight: 400;
			line-height: 1.63;
			vertical-align: top;
			color: #333;
			resize: none;
			outline: none;
			font-family: inherit;
		}
	}

	.monthselect-container {
		min-width: 26px;
		appearance: none;
		border: none;
		font-size: 14px;
		font-weight: 400;
		background-color: transparent;
		padding: 0;
		color: #333;
		color: #ccc;
	}

	.yearselect-container {
		min-width: 38px;
		appearance: none;
		border: none;
		font-size: 14px;
		font-weight: 400;
		background-color: transparent;
		padding: 0;
		color: #333;
		color: #ccc;
	}

	.careerPeriod {
		margin-top: 5px;
		margin-bottom: 25px;
		padding-left: 150px;
		position: relative;
		.monthDot {
			margin: 0 4px;
		}
		.termDash {
			margin: 0 10px;
		}
		.served-checkbox-container {
			margin-top: 14px;
			> input {
				margin-right: 5px;
			}
			> span {
				font-size: 14px;
				font-weight: 400;
				color: #999;
			}
		}
	}
	.input-container {
		width: 100%;
		display: block;
		position: relative;
		font-family: inherit;
		padding: 15px 0;
		h6 {
			top: 30px;
			left: 0;
			width: 150px;
			position: absolute;
			color: #999;
			font-size: 16px;
		}
		input {
			border: none;
			border-bottom: 1px solid #e1e2e3 !important;
			font-family: inherit;
			width: calc(100% - 150px);
			padding: 12px 0;
			margin-left: 150px;
			color: #333;
			font-size: 16px;
			outline: none;
			font-weight: 400;
			border-bottom: 1px solid #e1e2e3;
		}
	}
	.form-classname {
		padding: 41px 0 30px;
		border: 1px solid #e1e2e3;
		border-radius: 3px;
		background-color: #fff;
	}
	.form-header {
		padding-right: 30px;
		padding-left: 30px;
		dt {
			color: #333;
			font-size: 20px;
			font-weight: 600;
			line-height: 1;
		}
	}
	.goto-matchup {
		position: absolute;
		top: 41px;
		right: 32px;
		font-size: 16px;
		font-weight: 400;
		color: #999;
		font-family: inherit;
		> i {
			position: relative;
			top: 2px;
			margin-left: 12px;
		}
	}
	.formblock {
		margin-top: 43px;
	}
	.formblock-content {
		padding-right: 30px;
		padding-left: 30px;
	}
	.button-container {
		display: block;
		position: relative;
		padding: 15px 0;
		h6 {
			position: absolute;
			top: 50%;
			left: 0;
			width: 150px;
			padding-right: 10px;
			color: #999;
			font-size: 16px;
			line-height: inherit;
			-webkit-transform: translateY(-50%);
			transform: translateY(-50%);
		}
	}
`;
export default ProfileLevel2;
