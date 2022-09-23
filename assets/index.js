import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './js/pages/Home';
import Login from "./js/pages/Login";
import Profile from "./js/pages/Profile";
import Register from "./js/pages/Register";

function Index() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/connexion" element={<Login />} />
                <Route path="/inscription" element={<Register />} />
                <Route path="/profil" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default Index;