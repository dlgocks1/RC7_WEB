import React from 'react';
import MainPage from 'views/main/MainPage';
import FavoritePage from 'views/main/favorites/FavoritePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Series from 'pages/series/series';
import Movie from 'pages/movie/movie';
import Login from '../views/login/Login';
import Profile from '../views/profile/Profile';
import Home from '../views/home/Home';

function RootRoute() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/series" element={<Series />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/favorites" element={<FavoritePage />} />
            <Route path="/main" element={<MainPage />}>
                <Route path="/main/:memberid" element={<MainPage />} />
            </Route>
            <Route path="*" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
}

export default RootRoute;