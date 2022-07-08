import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PreView from "../components/PreView";
import { setGeoLocation } from "../store/GeoLocationReducer";
import { LoginToReDucer } from "../store/LoginReducer";
import Bookmark from "./Bookmark";
import Camping from "./Camping"
import Exibition from "./Exibition";
import GetKakaoAccessKey from "./GetKakaoAccessToken";
import Home from "./Home";
import Hotel from "./Hotel";
import Login from "./Login";
import axios from 'axios';
import useAutoLogin from "../hoc/useAutoLogin";

const KAKAO_ACCESS_TOKEN = localStorage.getItem("kakaoAccessToken");

function App() {

  const AutoLogin = useAutoLogin();
  useEffect(() => {
    if (KAKAO_ACCESS_TOKEN !== null) {
      AutoLogin.KAKAO_LOGIN();
    }
  }, [])

  const { previewisvisible } = useSelector((state) => state.PreViewReducer);
  const dispatch = useDispatch();
  const initialSetGeoLocation = (data) => {
    dispatch(
      setGeoLocation(data)
    )
  }

  navigator.geolocation.getCurrentPosition((position) => {
    initialSetGeoLocation(
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }
    );
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/camping" element={<Camping />} />
          <Route path="/tourism" element={<Hotel />} />
          <Route path="/exhibition" element={<Exibition />} />
          <Route path="/kakaoLogin" element={<GetKakaoAccessKey />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </BrowserRouter>
      {previewisvisible && <PreView />}
    </>
  );
}

export default App;
