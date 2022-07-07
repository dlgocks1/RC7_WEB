import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import kakaoLogin from '../assets/img/kakao_login_large_wide.png'
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import LoginService from '../services/LoginService';
import { useDispatch } from 'react-redux';
import { LoginToReDucer } from '../store/LoginReducer';

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${"75ee7011dc4bcfd1c4d8eb5e1c033f4a"}&redirect_uri=${"http://localhost:3000/kakaoLogin"}&response_type=code`;

const useLogin = (initialValue)=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const LoginAction = (data) => {
        dispatch(
            LoginToReDucer(
                {
                    nickname : data.nickname,
                    profileImg : data.profileImg,
                }
            )
        );
    }

    const onSubmit = (event) =>{
        // console.log(event);
        // event.id, evnet.paswword로 로그인 확인 
        LoginAction(
            {
                nickname : "진짜밀크",
                profileImg : "https://previews.123rf.com/images/nete/nete1504/nete150400041/38541393-%EC%9A%B0%EC%9C%A0-%ED%8C%A8%ED%82%B7%EC%9D%80-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD%EC%9E%85%EB%8B%88%EB%8B%A4-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-.jpg"
            }
        )
        navigate('/');
    };

    return {onSubmit};
};

function Login(props) {
    const { register, handleSubmit, formState: { errors }, watch, getValues } = useForm({ mode: "onChange" });
    const [idInputStyle, setIdinputStyle] = useState();
    const [passwordInputStyle, setPasswordinputStyle] = useState();
    
    const useloginhook = useLogin(
        {
            data : {
                nickname : "",
                profileImg : ""
            },
    });

    
    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
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
        // navigate("/");
    }
    
    const onError = (error) => {

    }

    return (
        <>
            <Header />
            <LoginContainer>
                <TitleWrapper>
                    <div >
                        로그인
                    </div>
                </TitleWrapper>

                <form onSubmit={handleSubmit(useloginhook.onSubmit, onError)}>
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
`;

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