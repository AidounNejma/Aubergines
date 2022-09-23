import React from 'react';
import { FaHome } from 'react-icons/fa';
import '../../styles/pages/login-register.scss';
import Logo from '../../styles/img/logo.png';
import RegisterForm from '../components/jsx-components/RegisterForm';


const Register = () => {
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

                    <RegisterForm/>

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