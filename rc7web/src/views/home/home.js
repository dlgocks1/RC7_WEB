import Footer from './Footer';
import StoryCardContainer from './StoryCardContainer';
import Header from './Header';
import styles from  "./HomeStyles.module.css"
import classNames from 'classnames/bind'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const cx = classNames.bind(styles);

function Home() {

    // console.log(localStorage.getItem("userKey"));

    const navigate = useNavigate();
   
    useEffect(() => {
        if(localStorage.getItem("userKey") != null){
            navigate(`/main`);
        }
    })

    return (
        <div className={cx("appMountPoint")}>
            <div className={cx("dark-background")}>
                <Header />
                <StoryCardContainer />
            </div>
            <Footer type="home" />
        </div>
    );
}

export default Home;