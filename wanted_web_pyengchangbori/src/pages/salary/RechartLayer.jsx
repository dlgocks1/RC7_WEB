/* eslint-disable react/no-array-index-key */
import React, { useDeferredValue, useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { ChartDummyData } from 'utils/mockData';
import ChartBarCustom from './ChartBarCustom';

function RechartLayer({ careerIdx, salaryList, salaryData }) {
	const ref = useRef();
	const navigate = useNavigate();
	const [mouseXState, setMouseX] = useState(0);
	const [mouseYState, setMouseY] = useState(0);
	const [career, setCareer] = useState(0);
	const [salary, setSalary] = useState(0);
	const [visibleState, setVisible] = useState(false);
	const mouseX = useDeferredValue(mouseXState);
	const mouseY = useDeferredValue(mouseYState);
	const visible = useDeferredValue(visibleState);
	const [gridHeight, setGridHeight] = useState([]);
	const [barHeight, setBarHeight] = useState([]);

	const fetchedData = salaryData.read().data.result;

	const xArray = [
		68.345, 135.072, 202, 268.5272, 335.254, 401.9818, 468.709, 535.436,
		602.1636, 668.8909, 735.618,
	];

	const handleMoveMouse = (e) => {
		if (
			e.clientX - ref.current.getBoundingClientRect().x < 45 ||
			e.clientX - ref.current.getBoundingClientRect().x > 760 ||
			e.clientY > 370
		) {
			setVisible(false);
			return;
		}
		setVisible(true);
		if (e.clientX - ref.current.getBoundingClientRect().x > 710) {
			setMouseX(670);
		} else {
			setMouseX(
				Math.floor(
					(e.clientX - ref.current.getBoundingClientRect().x + 33) /
						67,
				) *
					67 +
					20,
			);
		}
		setMouseY(e.clientY - ref.current.getBoundingClientRect().y);
	};

	useEffect(() => {
		switch (mouseX) {
			case 87:
				setCareer(0);
				setSalary(fetchedData[0].price);
				break;
			case 154:
				setCareer(1);
				setSalary(fetchedData[1].price);
				break;
			case 221:
				setCareer(2);
				setSalary(fetchedData[2].price);
				break;
			case 288:
				setCareer(3);
				setSalary(fetchedData[3].price);
				break;
			case 355:
				setCareer(4);
				setSalary(fetchedData[4].price);
				break;
			case 422:
				setCareer(5);
				setSalary(fetchedData[5].price);
				break;
			case 489:
				setCareer(6);
				setSalary(fetchedData[6].price);
				break;
			case 556:
				setCareer(7);
				setSalary(fetchedData[7].price);
				break;
			case 623:
				setCareer(8);
				setSalary(fetchedData[8].price);
				break;
			case 690:
				setCareer(9);
				setSalary(fetchedData[9].price);
				break;
			case 757:
				setCareer(10);
				setSalary(fetchedData[10].price);
				break;
			default:
				break;
		}
	}, [mouseX]);

	useEffect(() => {
		if (fetchedData === undefined || fetchedData.length === 0) {
			navigate('/slary/1');
			return;
		}

		// GridHeight
		let gridHeightTemp = [];
		for (let i = 0; i <= Math.round(fetchedData[10].price / 1000); i += 1) {
			gridHeightTemp = [
				...gridHeightTemp,
				(i * 352) / Math.round(fetchedData[10].price / 1000) + 5,
			];
		}

		// BarHeight
		let barHeightTemp = [];
		for (let i = 0; i < fetchedData.length; i += 1) {
			barHeightTemp = [
				...barHeightTemp,
				((fetchedData[i].price - fetchedData[0].price) /
					(fetchedData[10].price - fetchedData[0].price)) *
					160 +
					10,
			];
		}
		setBarHeight(barHeightTemp);
		setGridHeight(gridHeightTemp);
	}, [fetchedData]);

	return (
		<>
			<svg
				className="recharts-surface"
				width="784"
				height="392"
				viewBox="0 0 784 392"
				version="1.1"
				ref={ref}
				onMouseMove={(e) => handleMoveMouse(e)}
				onMouseEnter={() => setVisible(true)}
				onMouseLeave={() => setVisible(false)}
			>
				<defs>
					<clipPath id="recharts1-clip">
						<rect x="45" y="5" height="352" width="734" />
					</clipPath>
				</defs>
				<g>
					<line
						orientation="bottom"
						width="734"
						height="30"
						type="category"
						x="45"
						y="357"
						stroke="rgba(0, 0, 0, 0.2)"
						fill="none"
						x1="45"
						y1="357"
						x2="779"
						y2="357"
					/>
					<g>
						<g>
							<text
								orientation="bottom"
								width="734"
								height="30"
								type="category"
								x="78.36363636363632"
								y="370"
								stroke="none"
								fill="#333"
								fontSize="12px"
								textAnchor="middle"
							>
								<tspan x="78.36363636363632" dy="0.71em">
									신입
								</tspan>
							</text>
						</g>
						<g>
							<text
								orientation="bottom"
								width="734"
								height="30"
								type="category"
								x="145.09090909090904"
								y="370"
								stroke="none"
								fill="#333"
								fontSize="12px"
								className="recharts-text recharts-cartesian-axis-tick-value"
								textAnchor="middle"
							>
								<tspan x="145.09090909090904" dy="0.71em">
									1년
								</tspan>
							</text>
						</g>
						<g className="recharts-layer recharts-cartesian-axis-tick">
							<text
								orientation="bottom"
								width="734"
								height="30"
								type="category"
								x="211.81818181818178"
								y="370"
								stroke="none"
								fill="#333"
								fontSize="12px"
								className="recharts-text recharts-cartesian-axis-tick-value"
								textAnchor="middle"
							>
								<tspan x="211.81818181818178" dy="0.71em">
									2년
								</tspan>
							</text>
						</g>
						<g className="recharts-layer recharts-cartesian-axis-tick">
							<text
								orientation="bottom"
								width="734"
								height="30"
								type="category"
								x="278.5454545454545"
								y="370"
								stroke="none"
								fill="#333"
								fontSize="12px"
								className="recharts-text recharts-cartesian-axis-tick-value"
								textAnchor="middle"
							>
								<tspan x="278.5454545454545" dy="0.71em">
									3년
								</tspan>
							</text>
						</g>
						<g className="recharts-layer recharts-cartesian-axis-tick">
							<text
								orientation="bottom"
								width="734"
								height="30"
								type="category"
								x="345.27272727272725"
								y="370"
								stroke="none"
								fill="#333"
								fontSize="12px"
								className="recharts-text recharts-cartesian-axis-tick-value"
								textAnchor="middle"
							>
								<tspan x="345.27272727272725" dy="0.71em">
									4년
								</tspan>
							</text>
						</g>
						<g className="recharts-layer recharts-cartesian-axis-tick">
							<text
								orientation="bottom"
								width="734"
								height="30"
								type="category"
								x="412"
								y="370"
								stroke="none"
								fill="#333"
								fontSize="12px"
								className="recharts-text recharts-cartesian-axis-tick-value"
								textAnchor="middle"
							>
								<tspan x="412" dy="0.71em">
									5년
								</tspan>
							</text>
						</g>
						<g className="recharts-layer recharts-cartesian-axis-tick">
							<text
								orientation="bottom"
								width="734"
								height="30"
								type="category"
								x="478.7272727272727"
								y="370"
								stroke="none"
								fill="#333"
								fontSize="12px"
								className="recharts-text recharts-cartesian-axis-tick-value"
								textAnchor="middle"
							>
								<tspan x="478.7272727272727" dy="0.71em">
									6년
								</tspan>
							</text>
						</g>
						<g className="recharts-layer recharts-cartesian-axis-tick">
							<text
								orientation="bottom"
								width="734"
								height="30"
								type="category"
								x="545.4545454545454"
								y="370"
								stroke="none"
								fill="#333"
								fontSize="12px"
								className="recharts-text recharts-cartesian-axis-tick-value"
								textAnchor="middle"
							>
								<tspan x="545.4545454545454" dy="0.71em">
									7년
								</tspan>
							</text>
						</g>
						<g className="recharts-layer recharts-cartesian-axis-tick">
							<text
								orientation="bottom"
								width="734"
								height="30"
								type="category"
								x="612.1818181818181"
								y="370"
								stroke="none"
								fill="#333"
								fontSize="12px"
								className="recharts-text recharts-cartesian-axis-tick-value"
								textAnchor="middle"
							>
								<tspan x="612.1818181818181" dy="0.71em">
									8년
								</tspan>
							</text>
						</g>
						<g className="recharts-layer recharts-cartesian-axis-tick">
							<text
								orientation="bottom"
								width="734"
								height="30"
								type="category"
								x="678.9090909090909"
								y="370"
								stroke="none"
								fill="#333"
								fontSize="12px"
								className="recharts-text recharts-cartesian-axis-tick-value"
								textAnchor="middle"
							>
								<tspan x="678.9090909090909" dy="0.71em">
									9년
								</tspan>
							</text>
						</g>
						<g className="recharts-layer recharts-cartesian-axis-tick">
							<text
								orientation="bottom"
								width="734"
								height="30"
								type="category"
								x="745.6363636363636"
								y="370"
								stroke="none"
								fill="#333"
								fontSize="12px"
								className="recharts-text recharts-cartesian-axis-tick-value"
								textAnchor="middle"
							>
								<tspan x="745.6363636363636" dy="0.71em">
									10년
								</tspan>
							</text>
						</g>
					</g>
				</g>
				<g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
					<line
						width="40"
						orientation="left"
						height="352"
						type="number"
						x="5"
						y="5"
						className="recharts-cartesian-axis-line"
						stroke="rgba(0, 0, 0, 0.3)"
						fill="none"
						x1="45"
						y1="5"
						x2="45"
						y2="357"
					/>
					<g className="recharts-cartesian-axis-ticks">
						{gridHeight.map((value, index) => (
							<g className="recharts-layer recharts-cartesian-axis-tick">
								<text
									width="40"
									orientation="left"
									height="352"
									type="number"
									x="32"
									y={value}
									stroke="none"
									fill="#333"
									fontSize="12px"
									className="recharts-text recharts-cartesian-axis-tick-value"
									textAnchor="end"
								>
									<tspan x="32" dy="0.355em">
										{(gridHeight.length - 1 - index) * 1000}
									</tspan>
								</text>
							</g>
						))}
					</g>
				</g>
				<g className="recharts-cartesian-grid">
					<g className="recharts-cartesian-grid-horizontal">
						{gridHeight.map((value) => (
							<line
								stroke="rgba(0, 0, 0, 0.1)"
								fill="none"
								x="45"
								y="5"
								width="734"
								height="352"
								offset="[object Object]"
								x1="45"
								y1={value}
								x2="779"
								y2={value}
							/>
						))}
					</g>
				</g>

				<g className="recharts-layer recharts-bar">
					<g className="recharts-layer recharts-bar-rectangles">
						<g className="recharts-layer">
							{barHeight.map((value, index) => (
								<ChartBarCustom
									careerIdx={careerIdx}
									value={value}
									index={index}
								/>
							))}
						</g>
					</g>
				</g>
			</svg>
			{visible && (
				<div
					className="chart-tooltip"
					style={{
						transform: `translate(${mouseX}px, ${mouseY}px)`,
					}}
				>
					<div className="custom-tooltip">
						<p>{career === 0 ? '신입' : `${career}년`}</p>
						<p>{salary} 만원</p>
					</div>
				</div>
			)}
		</>
	);
}

export default RechartLayer;
