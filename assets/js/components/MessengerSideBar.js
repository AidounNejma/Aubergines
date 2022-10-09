import React from 'react';
import '../../styles/components/messenger-sidebar.scss';
import { FaAddressBook, FaArchive, FaCommentDots, FaPhoneAlt, FaPlus, FaTh } from 'react-icons/fa';
import InputSearch from './jsx-components/InputSearch';
import ButtonMessages from './jsx-components/ButtonMessages';
import AlertTablet from './jsx-components/AlertTablet';
import ButtonIcons from './jsx-components/ButtonIcons';
import {importAll} from './functions/ImportImages';

const MessengerSideBar = () => {
    /* Import de mes images */
    const profilePicture = importAll(require.context(`../../styles/img/profile-pictures`, false, /\.(png|jpe?g|svg|gif)$/));
    const profilePictures = Object.values(profilePicture);

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
                    <ButtonIcons icon={<FaCommentDots/>} text="Discussions"/>
                    <ButtonIcons icon={<FaPhoneAlt/>} text="Appels"/>
                    <ButtonIcons icon={<FaAddressBook/>} text="Contacts"/>
                    <ButtonIcons icon={<FaArchive/>} text="Archivés"/>
                </div>

                <h2 className='title-discussions'>Discussions</h2>
            </div>

            <div className='wrapper-conversations'>
                <ButtonMessages picture={profilePictures[0]} date="25 sept." number="2" name="Kristen Mackenzie" message="Ouais j'avoue c'est fou..."/>
                <ButtonMessages picture={profilePictures[1]} date="1 aout" number="1" name="Mily Arthur" message="Saluuuut comment vas-tu ? Je..."/>
                <ButtonMessages picture={profilePictures[2]} date="3 janv." number="" name="Julian Speed" message="Ça marche, à plus !"/>
                <ButtonMessages picture={profilePictures[3]} date="10 oct." number="" name="Sveltlana Flasuova" message="Je vois, ça à l'air..."/>
                <ButtonMessages picture={profilePictures[4]} date="18 dec." number="9" name="Kylie Mansour" message="Mais réponds moi bon..."/>
                <ButtonMessages picture={profilePictures[5]} date="29 fev." number="" name="Pam Anderson" message="Yeah of course, why not..."/>
                
                <div className='wrapper-button-send-message'>
                    <button className='create-message'>
                        <FaPlus/>
                    </button>
                </div>
            </div>

            

        </section>
    );
};

export default MessengerSideBar;