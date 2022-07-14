const initialState ={
    name:"해찬",
    email : "cksgodl@naver.com"
}

// eslint-disable-next-line default-param-last
const loginReducer = (state=initialState, action) => {
    switch(action.type){
        case 'LOGIN' :{
            return {
                ...state, // 값 없으면 들어가고 있으면 대체됨
                name : action.data.name,
                email : action.data.email
            }
        }
        default : {
            return{
                ...state,
            }
        }
    }
}

export default loginReducer;