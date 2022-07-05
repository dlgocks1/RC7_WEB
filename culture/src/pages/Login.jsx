import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import kakaoLogin from '../assets/img/kakao_login_large_wide.png'
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import LoginService from '../services/LoginService';
import { useDispatch } from 'react-redux';

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${"75ee7011dc4bcfd1c4d8eb5e1c033f4a"}&redirect_uri=${"http://localhost:3000/kakaoLogin"}&response_type=code`;

function Login() {
    const { register, handleSubmit, formState: { errors }, watch, getValues } = useForm({ mode: "onChange" });
    const [idInputStyle, setIdinputStyle] = useState();
    const [passwordInputStyle, setPasswordinputStyle] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
   

    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

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

    function onInputContainerFocus(isIn, type) {
        if (type === "id") {
            if (isIn) {
                setIdinputStyle({ marginTop: '0.3rem', fontSize: '0.7rem' });
                return;
            }
            if (watch().id.length === 0) {
                setIdinputStyle({})
            }
        } else {
            if (isIn) {
                setPasswordinputStyle({ marginTop: '0.3rem', fontSize: '0.7rem' })
                return;
            }
            if (watch().password.length === 0) {
                setPasswordinputStyle({})
            }
        }
    }

    const onSubmit = (data) => {
        // LoginService({
        //     data : {
        //         nickname : "밀크",
        //         profileImg : "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b498d336-3e1f-4981-a448-a35a789f7d9a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220705T063901Z&X-Amz-Expires=86400&X-Amz-Signature=ab214a9057c8c8238f0eb5c0964eef279261bb6cddc506a17a976aea401716c2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject"
        //     },
        //     type : "LOGIN" 
        // });
        // LoginAction(
        //     {
        //         nickname : "밀크",
        //         profileImg : "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b498d336-3e1f-4981-a448-a35a789f7d9a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220705T063901Z&X-Amz-Expires=86400&X-Amz-Signature=ab214a9057c8c8238f0eb5c0964eef279261bb6cddc506a17a976aea401716c2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject"
        //     }
        // )
        navigate("/camping");
    }
    

    const onError = (error) => {

    }

    return (
        <>
            <Header />
            <LoginContainer>
                <TitleWrapper>
                    <div>
                        로그인
                    </div>
                </TitleWrapper>

                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <InputWrapper>
                        <InputText style={idInputStyle}>
                            아이디를 입력해주세요.
                        </InputText>
                        <LoginInput
                            {...register("id", {
                                required: true,
                                minLength: {
                                    value: 8,
                                    message: '8글자 이상 아이디를 입력해주세요.',
                                },
                            })}
                            onFocus={() => {
                                onInputContainerFocus(true, "id")
                            }}
                            onBlur={() => {
                                onInputContainerFocus(false, "id")
                            }}
                            type="text"
                        />

                    </InputWrapper>
                    <ErrorMessage>
                        {errors.id?.type === 'required' && "아이디를 입력해주세요."}
                        {errors.id?.type === 'minLength' && "8글자 이상 아이디를 입력해주세요."}
                        <br/>
                    </ErrorMessage>
                    <InputWrapper>
                        <InputText style={passwordInputStyle}>비밀번호를 입력해주세요.</InputText>
                        <LoginInput
                            {...register("password", {
                                required: true,
                                minLength: {
                                    value: 8,
                                    message: '8글자 이상 패스워드를 입력해주세요.',
                                },
                            })}
                            onFocus={() => {
                                onInputContainerFocus(true)
                            }}
                            onBlur={() => {
                                onInputContainerFocus(false)
                            }}
                            type="password" />
                    </InputWrapper>
                    <ErrorMessage>
                        {errors.password?.type === 'required' && "패스워드를 입력해주세요."}
                        {errors.password?.type === 'minLength' && "8글자 이상 패스워드를 입력해주세요."}
                        <br/>
                    </ErrorMessage>
                    <button > 로그인 </button>
                </form>

                <SocialLoginWrapper>
                    <SocialLoginImg
                        onClick={handleLogin}
                        src={kakaoLogin} />
                </SocialLoginWrapper>
                
                <Signin> 아이디가 없으신가요? <a 
                    style={{
                        textDecoration: 'none', 
                        color: 'black',
                        fontweight:'70'}} href="/">회원가입</a></Signin>

            </LoginContainer>

        </>
    );
}
const Signin= styled.div`
    margin : 0 auto;
    color : gray;

`

const ErrorMessage= styled.div`
    color : red;
    margin-left: 1rem;
    font-size: 0.7rem;
    margin-bottom: 0.8rem;
`;

const InputText = styled.span`
    position : absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 0.9rem;
    transition: all 0.5s;
    margin-left: 1rem;
    margin-top : 1rem;
`;

const InputWrapper = styled.div`
    border: 1px solid gray;
    margin: 0.3rem 0;
    position: relative;
    display: flex;
    height: 3rem;
    flex-direction: column;
`

const LoginInput = styled.input`
    /* border: 1px solid gray; */
    border: none;
    margin-top: 0.6rem;
    outline: none;
    height: 2rem;
    padding-left: 1rem;
    position:absolute;
    background-color: transparent;
    z-index: 1;
    bottom: 0;
    left:0;
    right:0;
`

const SocialLoginImg = styled.img`
    cursor: pointer;
    object-fit: contain;
    width: 100%;
    height: 2.3rem;
    background-color: #FEE500;
    border-radius: 20px;
`

const SocialLoginWrapper = styled.div`
    margin: 1.5rem 2rem 2rem 2rem;
`

const TitleWrapper = styled.div`
    & div {
        font-size: 2.5rem;
        font-weight: 600;
        margin: 2rem 0;
    }
`;

const LoginContainer = styled.div`
    display: flex;
    width: 60%;
    max-width: 500px;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 5rem;
    border-radius: 20px;
    /* box-shadow: 6px 2px 3px rgb(144,144,144); */
    border: 1px solid gray;
    padding: 2rem 2rem;
    & button{
        background-color: #141414;
        color : white;
        width: 100%;
        border-radius: 25px;
        height: 2.3rem;
        cursor: pointer;
    }
`


export default Login;