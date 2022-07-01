const initialState = {
    isModal : false,
    name : `test`,
    imgUrl : `test`,
};

const MODAL_ON = "MODAL_ON"
const MODAL_OFF = "MODAL_OFF"

export const setEpisdoeModalOn = (data) =>{
    return{
        type : MODAL_ON,
        data : data,
    }
}

export const setEpisdoeModalOff= () =>{
    return{
        type : MODAL_OFF,
    }
}

const episodeModalReducer = (state=initialState, action) => {
    switch(action.type){
        case MODAL_ON :{
            return {
                    ...state,
                    isModal : true,
                    name : action.data.name,
                    imgUrl : action.data.imgUrl,
            }
        }
        case MODAL_OFF :{
            return {
                    ...state,
                    isModal : false,
            }
        }
        default : {
            return{
                ...state,
            }
        }
    }
}

export default episodeModalReducer;