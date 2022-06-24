import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from './views/home/Home';
import Profile from './views/profile/Profile';
import MainHome from './views/main/home/MainHome';
import Login from "./views/login/Login";

function App(){
    // Switch를 쓰면 exrt를 자동으로 해줌
    // Component라는 키워드 대신 element를 씀
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/main" element={<MainHome/>}>
                        <Route path="/main/:memberid" element={<MainHome/>}/>
                    </Route>
                    <Route path="*" exact element={<Home/>}/>
                </Routes>
            </BrowserRouter>    
        </>
    );

}

export default App;