/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react"
// css 충돌 클래스 이름 같음
import classNames from 'classnames/bind'
import styles from "./profile.module.css"
import ProfileBox from "./ProfileBox";

const cx = classNames.bind(styles);

const UserList = [
    { id:1, name: "아부지", img: "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABb_DHMVDo8hDAK3yCzp_kViqNAzRqtn4oFSvy8FppaaBvPEgXCYaVMOX7QyrOZvuznXMuC7CCX4H0-NmnBa5bxs4CCEluvvauk87.png" },
    { id:2, name: "어무이", img: "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABT4cxkF1q0aSEVCvqYghhYlTJfAE1Oz78QZ2Zco0GN_c1kr_X8Q01ASn1bPFPCo1cy4XB5-hBHWzPhB3te4PXTohBW34bVKPZRAt.png?r=f71" },
    { id:3, name: "해찬", img: "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWlv6_yJtcBLd4qgKFQ23x03l0qy-WSTme5vEh_EMK9t1ZOKfElXzAn85YhlWwLbAzsqU2gU29IVsyHoCsXw_au3-I1bBL_e2eDa.png" },
    { id:4, name: "해준", img: "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVgz74RE1Vv5f4MSaEzKsJNRB4v0Xg3BDpf9M08Xl-FnW2rGdNDQbknddTs4cPsmaimT_7w_xvDmUakcVJVM6y3xSg-X3XBWwW53.png?r=f80" },
    { id:5, name: "이모부", img: "https://occ-0-3076-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQeGHKNMmLwGKq16NvKP6XTkbyBE0_KaWc6JahZksi5Xp6gr44E-3ZwFQcQZHe2MHXsC3FSGxriP29b5UbNP8h-NcuhXvO6kIo9T.png?r=b97" },
]

function Profile() {
    return (
        <div className="appMountPoint">
            <div className={cx("dark-background")}>
                <div className={cx("pinning-header-container", "flex")}>
                    <div className={cx("logo-container")}>
                        <a aria-label="넷플릭스" className={cx("logo")} href="">
                            <img id={styles.logo} src="http://www.gnnews.co.kr/news/photo/201811/343582_102326_2141.jpg" />
                        </a>
                    </div>
                </div>
                <div className={cx("profiles-gate-container", "flex")}>
                    <div className={cx("list-profiles-container")}>
                        <div className={cx("list-profiles")}>
                            <h1 className={cx("profile-gate-label")}>
                                넷플릭스를 시청할 프로필을 선택하세요.
                            </h1>
                            <ul className={cx("choose-profiles", "flex")}>
                                {UserList.map( (value) => 
                                    // Each child in a list should have a unique "key" prop.
                                     (<ProfileBox key={value.id} id={value.id} img={value.img} name={value.name} />)
                                )}

                            </ul>

                            <div>
                                <a aria-label="프로필 관리" href="" className={cx("profile-button")}>프로필 관리</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
