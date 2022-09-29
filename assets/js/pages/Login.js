import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import CarouselEdition from '../components/jsx-components/CarouselEdition';
import '../../styles/components/subcomponents/login-register-form.scss'
import '../../styles/pages/login-register.scss';
import AuthContext from '../contexts/AuthContext';
import AuthApi from "../services/authAPI";
import { toast } from "react-toastify";
import Field from '../components/jsx-components/Forms/Fields';
import Logo from '../../styles/img/logo.png';


const Login = () => {
    const {setIsAuthenticated} = useContext(AuthContext);

    /* Redirection de l'utilisateur */
    const navigate = useNavigate();
    const to =  "/";

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState("");

    // gestion des champs
    const handleChange = ({currentTarget}) => {
        const {value, name} = currentTarget;

        setCredentials({
            ...credentials,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await AuthApi.authenticate(credentials);
            setError("");
            toast.success('🥳 Connexion réussie !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setIsAuthenticated(true);
            navigate(to, { replace: true });

        } catch (error) {
            setError("Les informations de connexions ne sont pas valides");
            toast.error('😩 Les informations de connexions ne sont pas valides.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        
    }

    return (
        <div className='login-wrapper'>
            <div className='left-block-wrapper'>

                <h1 className='title-left-block'>Connectez-vous pour accéder à des millions de posts</h1>
                
                <CarouselEdition/>
                
                <div className='wrapper-subtitle-icon'>
                    <h2 className='subtitle-left-block'>Connectons-nous !</h2>
                    <a href="/" className='icon-home'><FaHome/></a>
                </div>

            </div>
            
            <div className='right-block-wrapper'>
                <div className='login-form-wrapper'>

                    <div className='login-form-container'>
                        <img src={Logo} alt="Logo Aubergines" />
                        <div className='line'></div>
                            <form onSubmit={handleSubmit} className='login-form'>
                                <Field
                                name="username"
                                placeholder="Entrez votre email"
                                className="input-login"
                                onChange={handleChange}
                                autoComplete="off"
                                error={error}
                                value={credentials.username}
                                type="email"
                                />
                                <Field
                                name="password"
                                placeholder="Entrez votre mot de passe"
                                className="input-login"
                                onChange={handleChange}
                                autoComplete="off"
                                error={error}
                                value={credentials.password}
                                type="password"
                                />
                                <div className='wrapper-submit-form'>
                                    <button type='submit' className='submit-login-form'>Connexion</button>
                                </div>
                                <div className='wrapper-remember-me-help'>
                                    
                                    <div className='wrapper-remember-me'>
                                        <input type="checkbox" id="rememberMe" name='rememberMe' />
                                        <label htmlFor="rememberMe">Se souvenir de moi</label>
                                    </div>
                                    
                                    <a href="/">Besoin d'aide ?</a>
                                </div>
                        </form>
                    </div>

                    <div className='line'></div>

                    <p className='join-aubergines'>Rejoignez Aubergines maintenant !</p>

                    <div className='wrapper-link-register'>
                        <a href="/inscription" className='link-register'>Inscription</a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;