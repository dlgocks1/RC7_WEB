import Footer from './Footer';
import StoryCardContainer from './StoryCardContainer';
import Header from './Header';
import styles from  "./HomeStyles.module.css"
import classNames from 'classnames/bind'
const cx = classNames.bind(styles);

function Home() {
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