const initialState = {
    isModal : false,
};

const MODAL_ON = "MODAL_ON"
const MODAL_OFF = "MODAL_OFF"

export const setEpisdoeModalOn = () =>{
    return{
        type : MODAL_ON,
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