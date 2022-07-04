import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import PreView from "../components/PreView";
import { setGeoLocation } from "../store/GeoLocationReducer";
import Camping from "./Camping"
import GetKakaoAccessKey from "./GetKakaoAccessKey";
import Login from "./Login";
function App() {

  const {previewisvisible} = useSelector((state)=>state.PreViewReducer);
  const dispatch = useDispatch();
  const initialSetGeoLocation = (data) =>{
    dispatch(
        setGeoLocation(data)
    )
  }

  navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position.coords.latitude, position.coords.longitude);
      initialSetGeoLocation(
          {
            latitude : position.coords.latitude,
            longitude : position.coords.longitude,
          }
      );
  });

  return (
    <>
        {/* <Camping/> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/kakaoLogin" element={<GetKakaoAccessKey/>}/>
          </Routes>
        </BrowserRouter>
        {previewisvisible && <PreView/>}
    </>
  );
}

export default App;
