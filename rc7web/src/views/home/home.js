import './home.css';
// import React, { useState } from 'react';
import Footer_Home from './footer_Home';
import StoryCardContainer from './storyCardContainer';
import Header_Home from './header_Home';

function Home() {
    return (
        <div className="appMountPoint">
            <div className="dark-background">
                <Header_Home />
                <StoryCardContainer />
            </div>
            <Footer_Home />
        </div>
    );
}

export default Home;