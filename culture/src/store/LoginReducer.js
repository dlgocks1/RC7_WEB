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