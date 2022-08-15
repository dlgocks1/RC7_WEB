import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToastModalInvisible } from 'store/action/ToastModalAction';
import styled from 'styled-components';

function ToastModal() {
	const dispatch = useDispatch();
	const { toastModalVisible, text } = useSelector(
		(state) => state.ToastModalReducer,
	);
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (!toastModalVisible) {
			setShow(true);
			const timeout = setTimeout(() => {
				setShow(false);
			}, 2000);
			return () => {
				clearTimeout(timeout);
				dispatch(setToastModalInvisible());
			};
		}
		return () => {
			dispatch(setToastModalInvisible());
		};
	}, [toastModalVisible]);

	useEffect(() => {
		setShow(false);
	}, []);

	return (
		<ComponentWrapper show={show}>
			<span className="icon-notice">
				<i className="icon-block" />
			</span>
			<span>{text}</span>
		</ComponentWrapper>
	);
}
const ComponentWrapper = styled.div`
	display: flex;
	align-items: center;
	position: fixed;
	left: 50%;
	bottom: 0;
	padding: 15px;
	color: #fff;
	font-size: 14px;
	font-weight: 500;
	line-height: normal;
	background-color: #3d4045;
	border-radius: 4px;
	transform: translate(-50%);
	transition: 0.3s;
	box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
	opacity: 1;
	visibility: hidden;
	z-index: 1600;

	bottom: ${(props) => props.show && '50px'};
	visibility: ${(props) => props.show && 'visible'};
	opacity: ${(props) => props.show && '1'};

	.icon-block {
		color: #ff415c;
		position: relative;
		font-size: 14px;
		margin-right: 8px;
	}
`;

export default ToastModal;
