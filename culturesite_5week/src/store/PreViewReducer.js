const initialState ={
    previewisvisible : false,
    x : 0,
    y : 0,
    firstImageUrl : ``,
    addr1 : `addr1`,
    tel : `tel`,
    facltNm : ``,
}

const SET_VISIBLE = "SET_VISIBLE"
const SET_INVISIBLE = "SET_INVISIBLE"
const SET_POSITION = "SET_POSITION"

export const setVisible = (data) =>{
    return{
        type : SET_VISIBLE,
        data : data,
    }
}

export const setinVisible = () =>{
    return{
        type : SET_INVISIBLE,
    }
}

export const setPosition = (data) =>{
    return{
        type : SET_POSITION,
        data : data,
    }
}

const PreViewReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_VISIBLE :{
            return {
                ...state,
                previewisvisible : true,
                firstImageUrl : action.data.firstImageUrl,
                addr1 : action.data.addr1,
                tel : action.data.tel,
                facltNm : action.data.facltNm,
            }
        }
        case SET_INVISIBLE :{
            return {
                ...state,
                previewisvisible : false
            }
        }
        case SET_POSITION :{
            return {
                ...state,
                x : action.data.x,
                y : action.data.y,
            }
        }
        default : {
            return{
                ...state,
            }
        }
    }
}

export default PreViewReducer;