import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import bookmark_on_icon from "../assets/icon/bookmark_on_icon.png"
import bookmark_off_icon from "../assets/icon/bookmark_off_icon.png"
import { AddtoBookmarkReducer, SubtoBookmarkReducer } from '../store/BookmarkReducer';

function BookmarkItem({resveUrl,firstImageUrl, facltNm, addr1, lineIntro, intro, themaEnvrnCl}) {

    const dispatch = useDispatch();
    const {itemList} = useSelector((state)=>state.BookmarkReducer);
    const [isBookmark, setBookmark] = useState(false);

    const addBookmarkAction = () => {
        setBookmark(true);
        dispatch(
            AddtoBookmarkReducer(
                {
                    resveUrl : resveUrl, // 관령 링크
                    firstImageUrl : firstImageUrl, 
                    facltNm : facltNm, // title, 제목 등
                    addr1 : addr1, // 주소
                    lineIntro : lineIntro, // 한줄 설명
                    intro : intro, // 설명 글
                    themaEnvrnCl : themaEnvrnCl,  // 테마 글씨
                }
            )
        )
    }

    const subBookmarkAction = () => {
        setBookmark(false);
        dispatch(
            SubtoBookmarkReducer(
                {
                    resveUrl : resveUrl, // 관령 링크
                    firstImageUrl : firstImageUrl, 
                    facltNm : facltNm, // title, 제목 등
                    addr1 : addr1, // 주소
                    lineIntro : lineIntro, // 한줄 설명
                    intro : intro, // 설명 글
                    themaEnvrnCl : themaEnvrnCl,  // 테마 글씨
                }
            )
        )
    }

    useEffect(() => {
        itemList.map((value)=>{
            if(value.facltNm === facltNm){
                setBookmark(true);
                return;
            }
        });
    },[]);

    return (
        <>
            {isBookmark ? 
                <BookmarkImg onClick={subBookmarkAction} src={bookmark_off_icon}/> :
                <BookmarkImg onClick={addBookmarkAction} src={bookmark_on_icon}/>
            }
            
        </>
    );
}

const BookmarkImg = styled.img`
    width : 1.5rem;
    height : 1.5rem;
    margin: 0 0 0 5px;
    cursor: pointer;
`;


export default BookmarkItem;