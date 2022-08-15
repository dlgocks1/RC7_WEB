/* eslint-disable react/destructuring-assignment */
import Header from 'components/common/Header';
import NoMatchPage from 'pages/NoMatchPage';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.log(error);
	}

	render() {
		if (this.state.hasError) {
			// 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
			return <NoMatchPage />;
		}
		return this.props.children;
	}
}
