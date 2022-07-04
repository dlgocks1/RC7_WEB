
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useLocation,useSearchParams} from 'react-router-dom';

function GetKakaoAccessKey(props) {
    // https://hymndev.tistory.com/72
    const location = useLocation();
    const [userData, setUserData] = useState();
    const [kakaoCode, setKakaoCode] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    const code = searchParams.get('code');

    console.log(code);

    let isCompleted = false;
    useEffect(() => {
        const getUserData = async () => {
            setKakaoCode(code);
            try {
                const url = `https://kauth.kakao.com/oauth/token?client_id=75ee7011dc4bcfd1c4d8eb5e1c033f4a&redirect_uri=http://localhost:3000/kakaoLogin&grant_type=authorization_code&code=${code}`;
                
                const res = await axios({
                    method: "POST",
                    url: url,
                    headers: {
                        // Authorization: 'Bearer ' + code
                        "Content-Type" : 'application/x-www-form-urlencoded',
                    }
                });

                if (!isCompleted) {
                    setUserData(res);
                    console.log(res);
                    // setNowLoading(true);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getUserData();

        return () => {
            isCompleted = true;
        }
    });

    return (
        <div>
            카카오 로그인 코드 : {kakaoCode}
            <p>
                사용자 정보 : {userData}
            </p>
        </div>
    );
}

export default GetKakaoAccessKey;