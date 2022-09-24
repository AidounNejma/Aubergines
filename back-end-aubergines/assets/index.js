import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../assets/Js/pages/Home';
import Login from "../assets/Js/pages/Login";
import Profile from "../assets/Js/pages/Profile";
import Register from "../assets/Js/pages/Register";

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