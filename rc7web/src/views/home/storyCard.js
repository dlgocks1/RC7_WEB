import React, { useEffect, useState } from 'react';
import styles from  "./HomeStyles.module.css"
import classNames from 'classnames/bind'
import { Link, useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function StoryCard({maintitle,subtitle,content}){

   
    return(
        <div className={cx("our-story-card")}>
            {content}
        </div>
    );
}

export default StoryCard;