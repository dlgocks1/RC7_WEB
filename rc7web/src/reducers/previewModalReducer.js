const initialState = {
    previewVisible : false,
    x : 9999,
    y : 9999,
    width : 0,
    name : '',
    imgUrl : ``,
    id : -1,
    hoverstyle: {},
    transfromorigin : {},
} 

const VISIBILTITY_ON = "VISIBILTITY_ON"
const VISIBILTITY_OFF = "VISIBILTITY_OFF"
const VISIBILTITY_KEEP = "VISIBILTITY_KEEP"

export const setPreviewModalOn = (data) =>{
    return{
        type : VISIBILTITY_ON,
        data : data,
    }
}

export const setPreviewModalOff = () =>{
    return{
        type : VISIBILTITY_OFF,
    }
}

export const setPreviewModalKeep = () =>{
    return{
        type : VISIBILTITY_KEEP,
    }
}

const previewModalReducer = (state=initialState, action) => {
    switch (action.type) {
        case VISIBILTITY_ON:{
            return{
                ...state,
                previewVisible : true,
                id : action.data.id,
                x : action.data.x,
                name : action.data.name,
                imgUrl : action.data.imgUrl,
                width : action.data.width,
                y : action.data.y,
                transfromorigin : action.data.transfromorigin,
                hoverstyle : action.data.hoverstyle,
            }
        }
        case VISIBILTITY_OFF:{
            return{
                ...state,
                previewVisible : false,
            }
        }
        case VISIBILTITY_KEEP:{
            return{
                ...state,
                previewVisible : true,
            }
        }
        default:{
            return{
                ...state,
            }
        }
    }

}

export default previewModalReducer;