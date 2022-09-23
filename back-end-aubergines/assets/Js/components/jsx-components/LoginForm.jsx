import React from 'react';
import Logo from '../../../style/img/logo.png';
import '../../../style/components/subcomponents/login-register-form.scss'
import Field from './Forms/Fields';

const LoginForm = () => {
    return (
        <div className='login-form-container'>
            <img src={Logo} alt="Logo Aubergines" />
            <div className='line'></div>
            <form action="" className='login-form'>
                <Field
                name="email"
                value=""
                placeholder="Entrez votre email"
                className="input-login"
                />
                <Field
                name="password"
                value=""
                placeholder="Entrez votre mot de passe"
                className="input-login"
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
    );
};

export default LoginForm;