import React from 'react';
import Logo from '../../assets/img/logo.png';
import '../../assets/components/subcomponents/login-register-form.scss'

const LoginForm = () => {
    return (
        <div className='login-form-container'>
            <img src={Logo} alt="Logo Aubergines" />
            <div className='line'></div>
            <form action="" className='login-form'>
                <input type="text" className='input-login' placeholder='Entrez votre email' name='email'/>
                <input type="text" className='input-login' placeholder='Entrez votre mot de passe' name='password' />
                <div className='wrapper-submit-form'>
                    <button type='submit' className='submit-login-form'>Connexion</button>
                </div>
                <div className='wrapper-remember-me'>
                    <input type="checkbox" id="rememberMe" name='rememberMe' />
                    <label htmlFor="rememberMe">Se souvenir de moi</label>

                    <a href="/">Besoin d'aide ?</a>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;