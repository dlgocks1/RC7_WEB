
import axios from 'axios';
import React, { useEffect, useState, useTransition } from 'react';
import { useDispatch } from 'react-redux';
import {useLocation,useNavigate,useSearchParams} from 'react-router-dom';
import { Login } from '../store/LoginReducer';

function GetKakaoAccessToken() {

    const [searchParams, setSearchParams] = useSearchParams();
    const KAKAO_AUTHORIZATION_CODE = searchParams.get('code');
    const navigate  = useNavigate();
    const [isPending, startTransition] = useTransition({ timeoutMs: 3000});
    const dispatch = useDispatch();

    const LoginAction = (data) => {
        dispatch(
            Login(
                {
                    nickname : data.nickname,
                    profileImg : data.profileImg,
                    isLogin : true,
                }
            )
        )
    }
    useEffect(() =>{
        startTransition(async () => {
            try {
                let url = `https://kauth.kakao.com/oauth/token?client_id=75ee7011dc4bcfd1c4d8eb5e1c033f4a&grant_type=authorization_code&redirect_uri=http://localhost:3000/kakaoLogin&code=${KAKAO_AUTHORIZATION_CODE}`;
                const res = await axios({
                    method: "POST",
                    url: url,
                });
                console.log(res);               
                url = `https://cors-anywhere.herokuapp.com/https://kapi.kakao.com/v2/user/me`;
                // url = `https://kapi.kakao.com/v2/user/me`;
                // url = `https://secret-ocean-49799.herokuapp.com/https://kapi.kakao.com/v2/user/me`;

                // 유저 정보
                const userinfo = await axios({
                    method: "POST",
                    url: url,
                    headers :{
                        Authorization : 'Bearer ' + res.data.access_token
                    }
                });
                console.log(userinfo);               

                LoginAction(
                    {
                        nickname : userinfo.data.properties.nickname,
                        profileImg : userinfo.data.properties.thumbnail_image,
                    }
                );

                navigate("/",{
                    state: userinfo.data
                });

            } catch (error) {
                console.log(error);
            }
        });
    },[])
    
    return (<>
            </>);
}

export default GetKakaoAccessToken;