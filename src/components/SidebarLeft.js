import React from 'react';
import Logo from '../assets/img/logo.png';
import { FaHome, FaUserAlt, FaRegCommentDots, FaStar, FaCog } from 'react-icons/fa';
import '../assets/components/sidebar-left.scss'

const SidebarLeft = () => {
    return (
        <div className='container-sidebar'>
            <div className='sideBar'>
                <div className='iconTop'>
                    <img src={Logo} alt="" />
                </div>

                <div className='iconsBottom'>
                    <a href="/"><FaHome /></a>
                    <a href="/"><FaRegCommentDots/></a>
                    <a href="/"><FaUserAlt/></a>
                    <a href="/"><FaStar/></a>
                    <a href="/"><FaCog/></a>
                </div>
            </div>
        </div>
    );
};

export default SidebarLeft;