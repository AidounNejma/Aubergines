import React, { useState } from 'react';
import Logo from '../../styles/img/logo.png';
import '../../styles/components/sidebar-left.scss'
import UseAnimations from 'react-useanimations';
import home from 'react-useanimations/lib/home';
import settings from 'react-useanimations/lib/settings';
import mail from 'react-useanimations/lib/mail';
import activity from 'react-useanimations/lib/activity';
import AuthAPI from '../services/authAPI';
import { useNavigate } from 'react-router';

const SidebarLeft = () => {
    const Home = () => <UseAnimations animation={home} size={40}/>
    const Settings = () => <UseAnimations animation={settings} size={40}/>
    const Mail = () => <UseAnimations animation={mail} size={40}/>
    const User = () => <UseAnimations animation={activity} size={40}/>

    const [menu, openMenu] = useState(false);

    /* Redirection de l'utilisateur */
    const navigate = useNavigate();
    
    const handleLogout = () => {
        AuthAPI.logout();
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
                    <a href="/profil"><User/></a>
                    <a href="/messagerie"><Mail/></a>
                    <button onClick={() => openMenu(open => !open)}><Settings /></button>
                </div>
                
                <div className={`settings-menu ${menu ? '' : 'out'}`}>
                    <div className='arrow-left'></div>
                    <a href="/">Paramètres</a>
                    <button onClick={handleLogout}>Déconnexion</button>
                </div>

            </div>
        </div>
    );
};

export default SidebarLeft;