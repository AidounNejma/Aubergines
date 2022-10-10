import React from 'react';
import Layout from '../components/Layout';
import MainMessenger from '../components/MainMessenger';
import MessengerSideBar from '../components/MessengerSideBar';
import '../../styles/pages/messenger.scss';

const Messenger = () => {
    let content = (
        <div className='messenger'>
            <MessengerSideBar/> 
            <MainMessenger/>
        </div>
    );

    return (
        <Layout element={content}/>
    );
};

export default Messenger;