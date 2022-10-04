import React, { useState } from 'react';
import Logo from '../../styles/img/logo.png';
import '../../styles/components/sidebar-left.scss'
import UseAnimations from 'react-useanimations';
import home from 'react-useanimations/lib/home';
import settings from 'react-useanimations/lib/settings';
import mail from 'react-useanimations/lib/mail';
import activity from 'react-useanimations/lib/activity';
import alertCircle from 'react-useanimations/lib/alertCircle';
import AuthAPI from '../services/authAPI';
import { useNavigate } from 'react-router';

const SidebarLeft = () => {
    const Home = () => <UseAnimations animation={home} size={40}/>
    const Settings = () => <UseAnimations animation={settings} size={40}/>
    const Mail = () => <UseAnimations animation={mail} size={40}/>
    const User = () => <UseAnimations animation={activity} size={40}/>
    const Info = () => <UseAnimations animation={alertCircle} size={40}/>

    const [menu, openMenu] = useState(false);

    /* Redirection de l'utilisateur */
    const navigate = useNavigate();
    
    const handleLogout = () => {
        AuthAPI.logout();
        //setIsAuthenticated(false);
        navigate('/connexion', { replace: true });
    }

    return (
        <div className='container-sidebar'>
            <div className='sideBar'>
                <div className='iconTop'>
                    <img src={Logo} alt="" />
                </div>

                <div className='iconsBottom'>
                    <a href="/"><Home /></a>
                    <a href="/"><Info/></a>
                    <a href="/profil/33"><User/></a>
                    <a href="/"><Mail/></a>
                    <button onClick={() => openMenu(open => !open)}><Settings /></button>
                </div>
                
                <div className={`settings-menu ${menu ? '' : 'out'}`}>
                    <div className='arrow-left'></div>
                    <a href="/">Paramètres du compte</a>
                    <button onClick={handleLogout}>Déconnexion</button>
                </div>

            </div>
        </div>
    );
};

export default SidebarLeft;