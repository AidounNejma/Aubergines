import React, {useState} from 'react';
import { FaHome } from 'react-icons/fa';
import '../../styles/pages/login-register.scss';
import Logo from '../../styles/img/logo.png';
import '../../styles/components/subcomponents/login-register-form.scss';
import Field from '../components/jsx-components/Forms/Fields';
import usersAPI from "../services/usersAPI";
import { toast } from "react-toastify";

const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        username: ""
    });
    
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        username: ""
    });

    // Gestion des changements des inputs dans le formulaire
    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setUser({ ...user, [name]: value });

    };

     // Gestion de la soumission
    const handleSubmit = async event => {
        event.preventDefault();


        const apiErrors = {};

        try {
            await usersAPI.register(user);
            
            toast.success('🥳 Inscription réussie !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setErrors({});
        
        } catch (error) {
            const { violations } = error.response.data;

            if (violations) {
                violations.forEach(violation => {
                    apiErrors[violation.propertyPath] = violation.message;
                });
                setErrors(apiErrors);

                toast.error('😩 Une erreur est survenue', {
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
    };
    
    return (
        <div className='register-wrapper'>
            <div className='left-block-wrapper'>

                <h1 className='title-left-block'>Rejoignez des millions de personnes sur Aubergines</h1>

                <img src={Logo} alt="logo aubergines" className='logo-register' />

                <div className='wrapper-subtitle-icon'>
                    <a href="/" className='icon-home'><FaHome/></a>
                </div>

            </div>
            <div className='right-block-wrapper'>
                <div className='register-form-wrapper'>

                    <div className='register-form-container'>
                        <div className='container-title-form-register'>
                            <img src={Logo} alt="" className='logoForm' />
                            <h1 className='title-form-register'>Inscrivez-vous maintenant !</h1>
                        </div>
                        
                        <div className='line'></div>

                        <form onSubmit={handleSubmit} className='register-form'>
                            <Field
                            name="name"
                            error={errors.name}
                            value={user.name}
                            type="text"
                            placeholder="Entrez votre nom"
                            className="input-register"
                            onChange={handleChange}
                            />
                            <Field
                            name="username"
                            error={errors.username}
                            value={user.username}
                            type="text"
                            placeholder="Entrez votre nom d'utilisateur"
                            className="input-register"
                            onChange={handleChange}
                            />
                            <Field
                            name="email"
                            error={errors.email}
                            value={user.email}
                            type="email"
                            placeholder="Entrez votre email"
                            className="input-register"
                            onChange={handleChange}
                            />
                            <Field
                            name="password"
                            error={errors.password}
                            value={user.password}
                            type="password"
                            placeholder="Entrez votre mote de passe"
                            className="input-register"
                            onChange={handleChange}
                            />
                            <div className='wrapper-submit-form'>
                                <button type='submit' className='submit-register-form'>Inscription</button>
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

                    <p className='already-member'>Déjà membre ?</p>

                    <div className='wrapper-link-register'>
                        <a href="/connexion" className='link-register'>Connexion</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;