import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import PreView from "../components/PreView";
import { setGeoLocation } from "../store/GeoLocationReducer";
import Camping from "./Camping"
import Exibition from "./Exibition";
import GetKakaoAccessKey from "./GetKakaoAccessToken";
import Home from "./Home";
import Hotel from "./Hotel";
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
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/camping" element={<Camping/>}/>
            <Route path="/tourism" element={<Hotel/>}/>
            <Route path="/exhibition" element={<Exibition/>}/>
            <Route path="/kakaoLogin" element={<GetKakaoAccessKey/>}/>
          </Routes>
        </BrowserRouter>
        {previewisvisible && <PreView/>}
    </>
  );
}

export default App;
