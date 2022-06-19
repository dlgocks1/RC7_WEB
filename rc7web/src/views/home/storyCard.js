import React, { useEffect, useState } from 'react';
import styles from  "./HomeStyles.module.css"
import classNames from 'classnames/bind'
import { Link, useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function StoryCard({maintitle,subtitle,content}){

   

    return(
        <div className={cx("our-story-card")}>
            {content}
            {/* 링크태그와 A태그의 차이점 : 새로고침을 해주지 않는다. */}
            {/* state초기화 되버림 */}
            <Link style={{zIndex:"5"}} to="/profile">프로필로 이동</Link>

            
        </div>
    );
}

export default StoryCard;