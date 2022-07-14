import React from 'react';
import classNames from 'classnames/bind';
import styles from  "./HomeStyles.module.css";

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
function StoryCard({content}){
    return(
        <div className={cx("our-story-card")}>
            {content}
        </div>
    );
}

export default StoryCard;