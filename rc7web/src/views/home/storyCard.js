import './home.css';
import React, { useState } from 'react';

function StoryCard({maintitle,subtitle,content}){
    return(
        <div className="our-story-card">
            {content}
        </div>
    );
}

export default StoryCard;