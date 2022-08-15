import React, { useEffect } from 'react';

function BookmarkBtn({ isBookmarked, handleClickAside }) {
	return (
		<button
			onClick={() => {
				handleClickAside('bookmark');
			}}
			className="btn-bookmark"
			type="button"
		>
			{isBookmarked ? (
				<svg
					width="13"
					height="17"
					viewBox="0 0 13 17"
					style={{ color: 'rgb(51, 102, 255)' }}
				>
					<defs>
						<path
							id="bookmarkIconFill"
							d="M6.25 13.21L.905 16.22c-.403.228-.905-.06-.905-.517V.596C0 .267.27 0 .605 0h11.29c.334 0 .605.267.605.596v15.107c0 .458-.502.745-.905.518L6.25 13.209z"
						/>
					</defs>
					<g
						fill="none"
						fillRule="evenodd"
						transform="translate(.188)"
					>
						<use
							fill="currentColor"
							xlinkHref="#bookmarkIconFill"
						/>
					</g>
				</svg>
			) : (
				<svg
					width="13"
					height="17"
					viewBox="0 0 13 17"
					style={{ color: 'rgb(51, 102, 255)' }}
				>
					<defs>
						<path
							id="bookmarkIconLine"
							d="M1.481 1.481h9.382v10.727c0 .409.331.74.74.74.41 0 .741-.331.741-.74V.74c0-.41-.331-.741-.74-.741H.74C.33 0 0 .332 0 .74v14.814c0 .568.614.925 1.108.643l5.18-2.873 5.104 2.873c.355.203.807.08 1.01-.276.203-.355.08-.808-.275-1.01l-5.471-3.083c-.228-.13-.507-.13-.735 0l-4.44 2.45V1.48z"
						/>
					</defs>
					<g fill="none" fillRule="evenodd">
						<use
							fill="currentColor"
							xlinkHref="#bookmarkIconLine"
						/>
					</g>
				</svg>
			)}

			{isBookmarked ? '북마크 완료' : '북마크하기'}
		</button>
	);
}

export default BookmarkBtn;
