import styles from  "./profile.module.css"
// css 충돌 클래스 이름 같음
import classNames from 'classnames/bind'
import { Link, Routes, useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

function ProfileBox({name, img}){
    const navigate = useNavigate();
    const haechan = "해찬"
    const gotoMain = () =>{
        navigate(`/main/${haechan}`,{
            // state:{
                // id : 1,
                // name : "이해찬",
            // }
        });
    }

    return(
        <li className={cx("profile")}>
            <Link 
                // JSX 문법 내에서는 중괄호로 묶어서 보내기
                to={`/main/${haechan}`}
                state={{name : "이해찬"}}
             className={cx("profile-link","flex")}>
                <img className={cx("profile-icon")} src={img} />
                <span className={cx("profile-name")}>{name}</span>
            </Link>


            <button onClick={()=>{gotoMain();}}>TestBt</button>
        </li>
    );
}
export default ProfileBox;