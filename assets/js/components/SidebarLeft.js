import React from 'react';
import Logo from '../../styles/img/logo.png';
import '../../styles/components/sidebar-left.scss'
import UseAnimations from 'react-useanimations';
import home from 'react-useanimations/lib/home';
import settings from 'react-useanimations/lib/settings';
import star from 'react-useanimations/lib/star';
import activity from 'react-useanimations/lib/activity';
import alertCircle from 'react-useanimations/lib/alertCircle';

const SidebarLeft = () => {
    const Home = () => <UseAnimations animation={home} size={40}/>
    const Settings = () => <UseAnimations animation={settings} size={40}/>
    const Star = () => <UseAnimations animation={star} size={40}/>
    const User = () => <UseAnimations animation={activity} size={40}/>
    const Info = () => <UseAnimations animation={alertCircle} size={40}/>
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
                    <a href="/"><Star/></a>
                    <a href="/"><Settings/></a>
                </div>
            </div>
        </div>
    );
};

export default SidebarLeft;