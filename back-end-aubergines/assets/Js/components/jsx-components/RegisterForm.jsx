import React from 'react';
import Logo from '../../style/img/logo.png';
import '../../style/components/subcomponents/login-register-form.scss';
import Field from '../jsx-components/Forms/Fields';

const RegisterForm = () => {
    return (
        <div className='register-form-container'>
            <div className='container-title-form-register'>
                <img src={Logo} alt="" className='logoForm' />
                <h1 className='title-form-register'>Inscrivez-vous maintenant !</h1>
            </div>
            
            <div className='line'></div>

            <form action="" className='register-form'>
                <Field
                name="name"
                value=""
                placeholder="Entrez votre nom"
                className="input-register"
                />
                <Field
                name="username"
                value=""
                placeholder="Entrez votre nom d'utilisateur"
                className="input-register"
                />
                <Field
                name="email"
                value=""
                placeholder="Entrez votre email"
                className="input-register"
                />
                <Field
                name="password"
                value=""
                placeholder="Entrez votre mote de passe"
                className="input-register"
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
    );
};

export default RegisterForm;