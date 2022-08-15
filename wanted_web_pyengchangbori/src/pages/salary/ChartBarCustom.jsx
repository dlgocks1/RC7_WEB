import React, { useEffect } from 'react';

function ChartBarCustom({ careerIdx, value, index }) {
	const xArray = [
		68.345, 135.072, 202, 268.5272, 335.254, 401.9818, 468.709, 535.436,
		602.1636, 668.8909, 735.618,
	];

	return (
		<g className="recharts-layer recharts-bar-rectangle">
			<path
				width="20"
				height={357 - value}
				x={xArray[10 - index]}
				y={value}
				style={{
					fill:
						careerIdx !== (10 - index).toString()
							? 'rgba(0, 0, 0, 0.1)'
							: 'rgba(255,255,255,0.6',
				}}
				radius="0"
				className="recharts-rectangle"
				d={`M ${xArray[10 - index]},${value} h 20 v ${
					357 - value
				} h -20 Z`}
			/>
		</g>
	);
}

export default ChartBarCustom;
