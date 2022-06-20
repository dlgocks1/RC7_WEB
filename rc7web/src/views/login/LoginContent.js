import styeld from "styled-components";

function LoginContent() {
    return (
        <>
            <LoginForm>
                <div style={{ flexGrow: "1" }}>
                    <LoginTitle>
                        로그인
                    </LoginTitle>
                    <form method="post" action>
                        <InputContainer>
                            <InputPlacement>
                                <InputEmail type="text" />
                                <EmailLabel>이메일 주소 또는 전화번호</EmailLabel>
                            </InputPlacement>
                        </InputContainer>

                        <InputContainer>
                            <InputPlacement>
                                <InputEmail type="password" />
                                <EmailLabel>비밀번호 </EmailLabel>
                            </InputPlacement>
                        </InputContainer>
                        <LoginBt>로그인</LoginBt>
                    </form>

                    <div style={{ display: "flex" }}>
                        <div style={{ flexGrow: "1", display: "inline-block" }}>
                            <LoginInfoSaveCb type="checkbox" />
                            <LoginInfoSave>
                                <span style={{ color: "#b3b3b3", position: "relative", marginLeft: '-15px', textAlign: "center", top: "-2px", fontSize: "13px", fontWeight: "500" }}>
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
                    <a class=" " target="_self" href="/">지금 가입하세요</a>.
                </LoginSignupNow>
                </div>
            </LoginForm>
        </>
    );
}

const LoginSignupNow=styeld.div`
    color : #737373;
    font-size : 16px;
    font-weight : 500;
    margin-top : 16px;
`

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
        :after {
            opacity: 1;
        }
    }

`;

const LoginBt = styeld.button`
    border-radius: 4px;
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
    top : 7px;
    left: 20px;
    font-size : 11px;
    color: #8c8c8c;
`;

const InputEmail = styeld.input`
    background: #333;
    border-radius: 4px;
    border: 0;
    color: #fff;
    height: 35px;
    line-height: 50px;
    padding: 16px 20px 0;
    width: 274px;
    &:focus{
        outline : 0;
    }
`;

const InputPlacement = styeld.div`
    border-radius: 4px;
    border: 0;
    position: relative;
    background-color: rgba(0,0,0,1);
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
    // min-height : 660px;
    padding: 60px 68px 40px;
    margin-bottom: 90px;
    background-color: rgba(0,0,0,.75);
    border-radius: 4px;
    margin : 0 auto;

    display: flex;
    flex-direction: column;

`;

export default LoginContent;