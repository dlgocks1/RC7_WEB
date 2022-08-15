/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styeld from "styled-components";

const user = [
  {
    id: 0,
    email: "test@naver.com",
    password: "12341234",
  },
  {
    id: 1,
    email: "test2@naver.com",
    password: "12341234",
  },
];

function LoginContent2() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({ mode: "onChange" });

  const [isDetail, Setdetail] = useState(false);
  const [emailResult, setEmailresult] = useState(true);
  const [passwordResult, setPasswordResult] = useState(true);
  const [emailInputStyle, setEmailinputStyle] = useState({});
  const [passwdInputStyle, setPasswordinputStyle] = useState({});

  const onSubmit = (data) => {
    let pw = -1;
    user.forEach((value, i) => {
      if (value.email === data.email) {
        pw = user[i].password;
      }
    });
    if (pw !== -1) {
      if (pw === data.password) {
        // navigator
        goprofile();
        setEmailresult(true);
        setPasswordResult(true);
      } else {
        setEmailresult(true);
        setPasswordResult(false);
      }
    } else {
      setEmailresult(false);
      setPasswordResult(true);
    }
  };

  const onError = (error) => {
    console.log(error);
  };

  const goprofile = () => {
    navigate("/profile");
  };

  function onInputContainerFocus(isIn, type) {
    if (type === "email") {
        if (isIn) {
            setEmailinputStyle({ top : "7px", fontSize : "11px" });
            return;
        }
        if (watch().email.length === 0) {
            setEmailinputStyle({})
        }
    } else {
        if (isIn) {
            setPasswordinputStyle({ top : "7px", fontSize : "11px" });
            return;
        }
        if (watch().password.length === 0) {
            setPasswordinputStyle({})
        }
    }
    }

  return (
    <LoginForm>
      <div style={{ flexGrow: "1" }}>
        <LoginTitle>로그인</LoginTitle>

        {!emailResult ? (
          <LoginFailMessageContainer>
            <div style={{ padding: "10px 20px", color: "#fff" }}>
              죄송합니다. 이 이메일 주소를 사용하는 계정을 찾을 수 없습니다.
              다시 시도하시거나&nbsp;
              <a style={{ textDecoration: "underline" }} href="/">
                새로운 계정을 등록
              </a>
              하세요.
            </div>
          </LoginFailMessageContainer>
        ) : (
          ""
        )}

        {!passwordResult ? (
          <LoginFailMessageContainer>
            <div style={{ padding: "10px 20px", color: "#fff" }}>
              <b>비밀번호를 잘못 입력하셨습니다. </b> 다시 입력하시거나{" "}
              <a style={{ textDecoration: "underline" }} href="/loginHelp">
                비밀번호를 재설정
              </a>
              하세요.
            </div>
          </LoginFailMessageContainer>
        ) : (
          ""
        )}

        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <InputContainer>
            <InputPlacement
            // style={!useEmailInput.valid?{ borderBottom: "2px solid #e87c03"} : {borderBottom:"0px"}}
            >
              <InputEmail
                error={(errors.email?.type === "pattern" )}
                type="text"
                {...register("email", {
                  required: true,
                  // onChange: (e) => {onEmailChange(e.target.value)},
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
                onFocus={() => {
                    onInputContainerFocus(true, "email")
                }}
                onBlur={() => {
                    onInputContainerFocus(false, "email")
                }}
              />
              <EmailLabel style={emailInputStyle}>이메일 주소 또는 전화번호</EmailLabel>
            </InputPlacement>

            <VaildErrorText>
              {errors.email?.type === "pattern" &&
                "정확한 이메일 주소를 입력하세요."}
            </VaildErrorText>
          </InputContainer>

          <InputContainer>
            <InputPlacement
            // style={!usePasswdInput.valid?{ borderBottom: "2px solid #e87c03"} : {borderBottom:"0px"}}
            >
              <InputEmail
                error={(errors.password?.type === "minLength" )}
                type="password"
                {...register("password", {
                  // onChange: (e) => {onPasswordChange(e.target.value)},
                  required: true,
                  minLength: {
                    value: 5,
                    message: "패스워드는 5글자 이상이여야 합니다.",
                  },
                })}
                onFocus={() => {
                    onInputContainerFocus(true, "password")
                }}
                onBlur={() => {
                    onInputContainerFocus(false, "password")
                }}
              />
              <EmailLabel style={passwdInputStyle}
                > 비밀번호 </EmailLabel>
            </InputPlacement>

            <VaildErrorText>
              {errors.password?.type === "minLength" &&
                "비밀번호는 4~60자 사이여야 합니다."}
            </VaildErrorText>
          </InputContainer>
          <LoginBt>로그인</LoginBt>
        </form>

        <div style={{ display: "flex" }}>
          <div style={{ flexGrow: "1", display: "inline-block" }}>
            <LoginInfoSaveCb type="checkbox" />
            <LoginInfoSave>
              <span
                style={{
                  color: "#b3b3b3",
                  position: "relative",
                  marginLeft: "-15px",
                  textAlign: "center",
                  top: "-2px",
                  fontSize: "13px",
                  fontWeight: "500",
                }}
              >
                로그인 정보 저장
              </span>
            </LoginInfoSave>
          </div>

          <LoginhelpLink>도움이 필요하신가요?</LoginhelpLink>
        </div>
      </div>
      <div>
        <LoginSignupNow>
          Netflix 회원이 아닌가요?
          <a style={{ marginLeft: "10px" }} target="_self" href="/">
            지금 가입하세요
          </a>
          .
        </LoginSignupNow>
        <div style={{ margin: "13px 0", fontSize: "13px", color: "#8c8c8c" }}>
          <p style={{ marginBottom: "13px" }}>
            <span>
              이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
              확인합니다.
            </span>
            &nbsp;
            <MoreinfoBt
              style={
                isDetail === false
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
              onClick={() => {
                Setdetail(!isDetail);
              }}
            >
              자세히 알아보기
            </MoreinfoBt>
          </p>
          <div
            style={
              isDetail === false
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }
          >
            <span>
              Google reCAPTCHA가 수집하는 정보에는 Google의
              <a
                style={{ textDecoration: "none", color: "#0080ff" }}
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                개인정보처리방침
              </a>
              과
              <a
                style={{ textDecoration: "none", color: "#0080ff" }}
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noreferrer"
              >
                서비스 약관
              </a>
              이 적용되며, 해당 정보는 reCAPTCHA 서비스 제공, 관리 및 개선과
              일반적인 보안 유지에 사용됩니다(Google의 개인 맞춤 광고에 사용 안
              함).
            </span>
          </div>
        </div>
      </div>
    </LoginForm>
  );
}

const LoginFailMessageContainer = styeld.div`
    background: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
`;

const VaildErrorText = styeld.div`
    color: #e87c03;
    margin-bottom: -6px;
    padding: 6px 3px;
    font-size: 13px;
`;

const MoreinfoBt = styeld.button`
    background-color: transparent;
    border: none;
    color: #0071eb;
    cursor: pointer;
    display: inline;
    font-family: inherit;
    font-size: inherit;
    padding: 0;
`;

const LoginSignupNow = styeld.div`
    color : #737373;
    font-size : 16px;
    font-weight : 500;
    margin-top : 16px;
`;

const LoginhelpLink = styeld.a`
    cursor: pointer;
    color: #b3b3b3;
    flex: 0 0 1;
    font-size: 13px;
    font-weight: 500;
    padding-top: 2px;
    &:hover{
        border-bottom: 1px solid #737373;
        // margin-bottom : 5px;
    }
`;

const LoginInfoSave = styeld.label`
    flex-grow: 1;
    font-size: 16px;
    &:before {
        content: "";
        position : relative;
        background: #737373;
        height: 16px;
        width: 16px;
        border-radius: 2px;
        left : -20px;
        display: inline-block;
      }

    &:after {
        color: #000;
        font-size: 18px;
        height: 16px;
        width: 16px;
        left : -116px;
        top : -3px;
        opacity : 0;
        position : relative;
        // content: "\e804";
        content: "o";
        display : inline-block;
      }
`;

const LoginInfoSaveCb = styeld.input`

    z-index : 2;
    position: relative;
    top: 0;
    left: 0;
    opacity: 0;

    &:checked + ${LoginInfoSave} {
        &:after {
            opacity: 1;
        }
    }

`;

const LoginBt = styeld.button`
    border-radius: 6px;
    font-size: 16px;
    font-weight: 700;
    margin: 24px 0 12px;
    width: 100%;
    max-width: 100%;
    background: #e50914;
    padding : 16px;
    color : #fff;
    cursor: pointer;
`;

const EmailLabel = styeld.label`
    position: absolute;
    top : 15px;
    font-size : 16px;
    z-index:1;
    left: 20px;
    color: #8c8c8c;
    transition: all 0.5s;
`;

const InputEmail = styeld.input`
    background-color : transparent;
    border-radius: 4px;
    border: 0;
    color: #fff;
    z-index:2;
    position : relative;
    height: 35px;
    line-height: 50px;
    padding: 16px 20px 0;
    width: 274px;

    border-bottom: ${props=>props.error===true && "2px solid #e87c03"};
    &:focus{
        outline : 0;
    }
`;

const InputPlacement = styeld.div`
    border-radius: 4px;
    border: 0;
    position: relative;
    background-color: #333;
  
`;

const InputContainer = styeld.div`
    padding-bottom : 16px;

`;

const LoginTitle = styeld.h1`
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 28px;
`;

const LoginForm = styeld.div`
    min-height : 560px;
    padding: 60px 68px 40px;
    margin-bottom: 90px;
    background-color: rgba(0,0,0,.75);
    border-radius: 4px;
    margin : 0 auto;
    display: flex;
    flex-direction: column;
`;

export default LoginContent2;
