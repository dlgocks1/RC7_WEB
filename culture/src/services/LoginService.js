import { useDispatch } from 'react-redux';
import { Login, Logout } from '../store/LoginReducer';

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// Reducer에 저장하는 기능을 모듈로 빼서 관리 
function LoginService({data,type}) {
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
    const LogoutAction = () =>{
        dispatch(
            Logout()
        )
    }

    if(type === LOGIN){
        LoginAction(data);
    }
    if(type === LOGOUT){
        LogoutAction();
    }
    
}

export default LoginService;