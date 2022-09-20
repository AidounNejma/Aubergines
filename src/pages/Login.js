import React from 'react';
import CarouselEdition from '../components/jsx-components/CarouselEdition';
import '../assets/pages/login.scss';
import LoginForm from '../components/jsx-components/LoginForm';

import UseAnimations from 'react-useanimations';
import home from 'react-useanimations/lib/home'


const Login = () => {

    const Home = () => <UseAnimations animation={home} size={40}/>
    return (
        <div className='login-wrapper'>
            <div className='left-block-wrapper'>

                <h1 className='title-left-block'>Connectez-vous pour accéder à des millions de posts</h1>
                
                <CarouselEdition/>
                
                <div className='wrapper-subtitle-icon'>
                    <h2 className='subtitle-left-block'>Connectons-nous !</h2>
                    <a href="/" className='icon-home'><Home/></a>
                </div>

            </div>
            
            <div className='login-form-wrapper'>

                <LoginForm/>

                <div className='line'></div>

                <p className='join-aubergines'>Rejoignez Aubergines maintenant !</p>

                <div className='wrapper-link-register'>
                    <a href="/" className='link-register'>Inscription</a>
                </div>
                
            </div>
        </div>
    );
};

export default Login;