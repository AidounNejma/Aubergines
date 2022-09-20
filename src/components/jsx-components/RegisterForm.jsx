import React from 'react';
import '../../assets/components/subcomponents/login-register-form.scss';

const RegisterForm = () => {
    return (
        <div className='register-form-container'>
            <div className='container-title-form-register'>
                <h1 className='title-form-register'>Inscrivez-vous maintenant !</h1>
            </div>
            
            <div className='line'></div>

            <form action="" className='register-form'>
                <input type="text" className='input-register' placeholder='Entrez votre nom' name='name'/>
                <input type="text" className='input-register' placeholder="Entrez votre nom d'utilisateur" name='username' />
                <input type="text" className='input-register' placeholder='Entrez votre email' name='email'/>
                <input type="text" className='input-register' placeholder='Entrez votre mot de passe' name='password' />
                <div className='wrapper-submit-form'>
                    <button type='submit' className='submit-register-form'>Inscription</button>
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

export default RegisterForm;