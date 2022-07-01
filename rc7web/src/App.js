import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from './views/home/Home';
import Profile from './views/profile/Profile';
import Login from "./views/login/Login";
import Main from "views/main/Main";
import Dialog from "views/dialog/Dialog";
import episodeModalReducer from "reducers/episodemodalReducer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import PreViewModal from "views/previewModal/PreViewModal";
import MainPage from "views/main/MainPage";
import FavoritePage from "views/main/favorites/FavoritePage";

function App(){

    const {isModal} = useSelector((state) => state.episodeModalReducer);
    const {previewVisible} = useSelector((state) => state.previewModalReducer);
    
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    
                    <Route path="/favorites" element={<FavoritePage/>}/>
                    <Route path="/main" element={<MainPage/>}>
                        <Route path="/main/:memberid" element={<MainPage/>}/>
                    </Route>
                    <Route path="*" exact element={<Home/>}/>
                </Routes>
                {/* {modalStaet && <Moda />} */}
            </BrowserRouter>  
            {isModal && <Dialog/>}
            {previewVisible && <PreViewModal/>}

        </>
    );

}

export default App;