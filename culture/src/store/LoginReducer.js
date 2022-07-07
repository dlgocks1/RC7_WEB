const initialState ={
    nickname : "",
    profileImg : "",
    isLogin : false,
}

const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

export const LoginToReDucer = (data) =>{
    return{
        type : LOGIN,
        data : data,
    }
}
export const LogoutToReDucer = () =>{
    // + 카카오 API로 엑세스 토큰 만료
    localStorage.removeItem("kakaoAccessToken");
    return{
        type : LOGOUT,
    }
}



const LoginReducer = (state=initialState, action) => {
    switch(action.type){
        case LOGIN :{
            return {
                ...state,
                nickname : action.data.nickname,
                profileImg : action.data.profileImg,
                isLogin : true,
            }
        }
        case LOGOUT :{
            return {
                ...state,
                isLogin : false,
            }
        }
        default : {
            return{
                ...state,
            }
        }
    }
}

export default LoginReducer;