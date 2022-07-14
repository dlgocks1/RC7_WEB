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

// eslint-disable-next-line default-param-last
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
        default:{
            return{
                ...state,
            }
        }
    }

}

export default previewModalReducer;