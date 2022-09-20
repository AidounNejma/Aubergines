import React from 'react';
import Logo from '../assets/img/logo.png';
import '../assets/components/sidebar-left.scss'
import UseAnimations from 'react-useanimations';
import home from 'react-useanimations/lib/home'
import settings from 'react-useanimations/lib/settings'
import star from 'react-useanimations/lib/star'
import userPlus from 'react-useanimations/lib/userPlus'
import info from 'react-useanimations/lib/info'

const SidebarLeft = () => {
    const Home = () => <UseAnimations animation={home} size={40}/>
    const Settings = () => <UseAnimations animation={settings} size={40}/>
    const Star = () => <UseAnimations animation={star} size={40}/>
    const User = () => <UseAnimations animation={userPlus} size={40}/>
    const Info = () => <UseAnimations animation={info} size={40}/>
    return (
        <div className='sideBar'>
            <div className='iconTop'>
                <img src={Logo} alt="" />
            </div>

            <div className='iconsBottom'>
                <a href="/"><Home /></a>
                <a href="/"><Info/></a>
                <a href="/"><User/></a>
                <a href="/"><Star/></a>
                <a href="/"><Settings/></a>
            </div>
        </div>
    );
};

export default SidebarLeft;