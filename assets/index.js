import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './js/pages/Home';
import Login from "./js/pages/Login";
import Profile from "./js/pages/Profile";
import Register from "./js/pages/Register";
import AuthAPI from './js/services/authAPI';
import AuthContext from "./js/contexts/AuthContext";
import PrivateRoute from "./js/components/PrivateRoute";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

AuthAPI.setup();

const Index = () => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(AuthAPI.isAuthenticated());

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated
            }}
        >
            <main className="container mt-5">
                <ToastContainer position={toast.POSITION.TOP_CENTER} />
                <Routes>
                    <Route 
                        path="/*" 
                        element={
                                <PrivateRoute>
                                    <Home />
                                </PrivateRoute>
                            }
                    />
                    <Route path="/connexion" element={<Login />} />
                    <Route path="/inscription" element={<Register />} />
                    <Route path="/profil" element={<Profile />} />
                </Routes>
            </main>
        </AuthContext.Provider>
    );
}

export default Index;