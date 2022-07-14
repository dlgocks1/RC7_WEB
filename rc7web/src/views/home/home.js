import React, {useEffect} from "react";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import StoryCardContainer from "./StoryCardContainer";
import Header from "./Header";
import styles from "./HomeStyles.module.css";

const cx = classNames.bind(styles);

function Home() {
  // console.log(localStorage.getItem("userKey"));

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userKey") != null) {
      navigate("/main");
    }
  });

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
