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
import Messenger from './js/pages/Messenger';
import { CurrentUserProvider } from "./js/contexts/CurrentUserContext";


AuthAPI.setup();

const Index = () => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(AuthAPI.isAuthenticated());
    
    const [currentUser, setCurrentUser] = useState(AuthAPI.findCurrentUser().then(response => setCurrentUser(response)));

    /* console.log(currentUser); */
    
    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated
            }}
        >
            <CurrentUserProvider
                value={{
                    currentUser,
                    setCurrentUser
                }}
            >
                <main className="container mt-5">
                    <ToastContainer position={toast.POSITION.TOP_CENTER} />
                    <Routes>
                        <Route path="/connexion" element={<Login />} />
                        <Route path="/inscription" element={<Register />} />
                        <Route 
                            path="/*" 
                            element={
                                    <PrivateRoute>
                                        <Home />
                                    </PrivateRoute>
                                }
                        />
                        <Route 
                            path="/profil/:profileId" 
                            element={
                                    <PrivateRoute>
                                        <Profile />
                                    </PrivateRoute>
                                }
                        />
                        <Route 
                            path="/profil/" 
                            element={
                                    <PrivateRoute>
                                        <Profile />
                                    </PrivateRoute>
                                }
                        />
                        <Route 
                            path="/messagerie" 
                            element={
                                    <PrivateRoute>
                                        <Messenger/>
                                    </PrivateRoute>
                                }
                        />
                    </Routes>
                </main>
            </CurrentUserProvider>
        </AuthContext.Provider>
    );
}

export default Index;