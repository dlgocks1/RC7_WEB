import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogout } from 'store/action/UserDataAction';

function LogoutPage() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	localStorage.setItem('jwt', '');

	useEffect(() => {
		dispatch(setLogout());
		navigate('/');
	}, []);

	return null;
}

export default LogoutPage;
