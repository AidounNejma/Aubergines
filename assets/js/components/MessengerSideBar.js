import React, { useEffect, useState } from 'react';
import '../../styles/components/messenger-sidebar.scss';
import { FaAddressBook, FaArchive, FaCommentDots, FaPhoneAlt, FaTh } from 'react-icons/fa';
import InputSearch from './jsx-components/InputSearch';
import ButtonMessages from './jsx-components/ButtonMessages';
import AlertTablet from './jsx-components/AlertTablet';
import ButtonIcons from './jsx-components/ButtonIcons';
import ButtonCreate from './jsx-components/ButtonCreate';

const MessengerSideBar = ({discussions, setOneDiscussion, user}) => {
    
    return (
        <section className='messenger-sidebar'>
            
            <div className='wrapper-sidebar'>
                <div className='container-title'>
                    <button className='button-menu-tab'>
                        <FaTh/>
                    </button>
                    <h1>Messages</h1>
                    <AlertTablet number="3"/>
                </div>

                <div className='container-searchbar'>
                    <InputSearch text="Rechercher une conversation..."/>
                </div>

                <div className='container-icons'>
                    <ButtonIcons icon={<FaCommentDots/>} text="Discussions" onClick={()=> console.log('test')}/>
                    <ButtonIcons icon={<FaPhoneAlt/>} text="Appels"/>
                    <ButtonIcons icon={<FaAddressBook/>} text="Contacts"/>
                    <ButtonIcons icon={<FaArchive/>} text="Archivés"/>
                </div>

                <h2 className='title-discussions'>Discussions</h2>
            </div>

            <div className='wrapper-conversations'>
                {discussions?.map(discussion => (
                    <ButtonMessages 
                        number="" 
                        discussion={discussion}
                        user={user}
                        key={discussion.id}
                        setOneDiscussion={setOneDiscussion}
                    />
                ))}
                <div className='wrapper-button-send-message'>
                    <ButtonCreate/>
                </div>
            </div>

            

        </section>
    );
};

export default MessengerSideBar;