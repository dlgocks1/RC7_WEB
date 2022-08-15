import axios from "axios";
import { useDispatch } from "react-redux";
import { LoginToReDucer } from "../store/LoginReducer";

const useAutoLogin = () => {
    const KAKAO_ACCESS_TOKEN = localStorage.getItem("kakaoAccessToken");
    const dispatch = useDispatch();
    const LoginAction = (data) => {
      dispatch(
        LoginToReDucer(
          {
            nickname: data.nickname,
            profileImg: data.profileImg,
            isLogin: true,
          }
        )
      )
    }
    const KAKAO_LOGIN = async () => {
      try {
        const url = `https://cors-anywhere.herokuapp.com/https://kapi.kakao.com/v2/user/me`;
        const userinfo = await axios({
          method: "POST",
          url: url,
          headers: {
            Authorization: 'Bearer ' + KAKAO_ACCESS_TOKEN
          }
        });
        LoginAction(
          {
            nickname: userinfo.data.properties.nickname,
            profileImg: userinfo.data.properties.thumbnail_image,
          }
        );
      } catch (error) {
          console.log(error);
      }
    }
    return { KAKAO_LOGIN };
  }
  
  export default useAutoLogin;