import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from './views/home/Home';
import Profile from './views/profile/Profile';
import MainHome from './views/main/home/Home';

function App(){
    // Switch를 쓰면 exrt를 자동으로 해줌
    // Component라는 키워드 대신 element를 씀
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/Main" element={<MainHome/>}/>

                </Routes>
            </BrowserRouter>    
        </>
    );

}

export default App;