const initialState ={
    itemList : [
        // {
        //     resveUrl : "", // 관령 링크
        //     firstImageUrl : "", 
        //     facltNm : "", // title, 제목 등
        //     addr1 : "", // 주소
        //     lineIntro : "", // 한줄 설명
        //     intro : "", // 설명 글
        //     themaEnvrnCl : "",  // 테마 글씨
        // },
    ]
}
const ADD_BOOKMARK = "ADD_BOOKMARK"
const SUB_BOOKMARK = "SUB_BOOKMARK"

export const AddtoBookmarkReducer = (data) =>{
    return{
        type : ADD_BOOKMARK,
        data : data,
    }
}

export const SubtoBookmarkReducer = (data) =>{
    return{
        type : SUB_BOOKMARK,
        data : data,
    }
}


const BookmarkReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_BOOKMARK :{
            return {
                ...state,
                itemList : [...state.itemList, action.data],
            }
        }
        case SUB_BOOKMARK :{
            return {
                ...state,
                itemList : state.itemList.filter((element) => element.facltNm !== action.data.facltNm),
            }
        }
        default : {
            return{
                ...state,
            }
        }
    }
}

export default BookmarkReducer;