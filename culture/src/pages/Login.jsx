import axios from 'axios';
import React, { useEffect } from 'react';

function Login(props) {

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${"75ee7011dc4bcfd1c4d8eb5e1c033f4a"}&redirect_uri=${"http://localhost:3000/kakaoLogin"}&response_type=code`;

    const handleLogin = () =>{
        window.location.href = KAKAO_AUTH_URL;
    }

    useEffect(() =>{

    });

    return (
        <div>
            <button
                onClick={handleLogin}
            > 
                카카오 로그인
            </button>

        </div>
    );
}

export default Login;