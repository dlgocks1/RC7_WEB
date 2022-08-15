import React from "react";
import Proptypes from "prop-types";
import classNames from 'classnames/bind'
import { Link } from "react-router-dom";
import styles from  "./profile.module.css";

const cx = classNames.bind(styles);



function ProfileBox({id,name, img}){

    const profileIcon = "profile-icon";

    // const navigate = useNavigate();
    // const gotoMain = () =>{
    //     navigate(`/main`,{
    //         // state:{
    //             // id : 1,
    //             // name : "이해찬",
    //         // }
    //     });
    // }

    return(
        <li className={cx("profile")}>
            <Link 
                // JSX 문법 내에서는 중괄호로 묶어서 보내기
                to="/main"
                onClick={()=>{
                    localStorage.setItem("userKey",id);
                }}
                // state={{name : "이해찬"}}
                className={cx("profile-link","flex")}>
                <img className={cx(profileIcon)} src={img} alt={profileIcon} />
                <span className={cx("profile-name")}>{name}</span>
            </Link>


            {/* <button onClick={()=>{gotoMain();}}>TestBt</button> */}
        </li>
    );
}

ProfileBox.propTypes = {
    id : Proptypes.number.isRequired,
    name : Proptypes.string.isRequired,
    img : Proptypes.string.isRequired,
}

export default ProfileBox;