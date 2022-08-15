import { useEffect, useState } from 'react';

export const useOutsideClick = (ref, initialState) => {
	const [isActive, setIsActive] = useState(initialState);
	useEffect(() => {
		const pageClickEvent = (e) => {
			if (ref.current !== null && !ref.current.contains(e.target)) {
				setIsActive(!isActive);
			}
		};
		if (isActive) {
			window.addEventListener('click', pageClickEvent);
		}
		return () => {
			window.removeEventListener('click', pageClickEvent);
		};
	}, [isActive, ref]);
	return [isActive, setIsActive];
};
