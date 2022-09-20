import React from 'react';
import { FaHome } from 'react-icons/fa';
import CarouselEdition from '../components/jsx-components/CarouselEdition';
import '../assets/pages/login-register.scss';
import LoginForm from '../components/jsx-components/LoginForm';


const Login = () => {

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
            
            <div className='login-form-wrapper'>

                <LoginForm/>

                <div className='line'></div>

                <p className='join-aubergines'>Rejoignez Aubergines maintenant !</p>

                <div className='wrapper-link-register'>
                    <a href="/inscription" className='link-register'>Inscription</a>
                </div>
                
            </div>
        </div>
    );
};

export default Login;