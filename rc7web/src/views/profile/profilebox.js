import styles from  "./profile.module.css"
// css 충돌 클래스 이름 같음
import classNames from 'classnames/bind'
const cx = classNames.bind(styles);

function ProfileBox({name, img}){
    return(
            <li className={cx("profile")}>
                <a className={cx("profile-link","flex")}>
                    <img className={cx("profile-icon")} src={img} />
                    <span className={cx("profile-name")}>{name}</span>
                </a>
            </li>
    );
}
export default ProfileBox;