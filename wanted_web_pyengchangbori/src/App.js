import Loading from 'components/common/Loading';
import AutoLogin from 'hoc/AutoLogin';
import { ErrorBoundary } from 'hoc/ErrorBoundary';
import { useLogin } from 'hoc/useLogin';
import React, { Suspense, useState } from 'react';
import RootRouter from 'routes';
import { CustomPost } from 'utils/api';

function App() {
	const uselogin = useLogin();
	const jwt = localStorage.getItem('jwt');
	const [loginState, setLoginState] = useState(
		uselogin.SuspenseLoginWithJwt({ jwt }),
	);
	return (
		<Suspense fallback={<Loading />}>
			<AutoLogin loginState={loginState} />
			<RootRouter />
		</Suspense>
	);
}

export default App;
