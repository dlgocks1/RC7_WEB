import { useDispatch } from 'react-redux';
import { LoginToReDucer, LogoutToReDucer } from '../store/LoginReducer';

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// Reducer에 저장하는 기능을 모듈로 빼서 관리 
function LoginService({data,type}) {
    const dispatch = useDispatch();
    const LoginAction = (data) => {
        dispatch(
            LoginToReDucer(
                {
                    nickname : data.nickname,
                    profileImg : data.profileImg,
                    isLogin : true,
                }
            )
        )
    }
    const LogoutAction = () =>{
        dispatch(
            LogoutToReDucer()
        )
    }

    if(type === LOGIN){
        LoginAction(data);
    }
    if(type === LOGOUT){
        LogoutAction();
    }
    return <>
    </>;
}

export default LoginService;