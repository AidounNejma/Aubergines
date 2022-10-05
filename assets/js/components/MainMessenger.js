import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import '../../styles/components/main-messenger.scss';
import profilePicture from '../../styles/img/profile-pictures/image1.png';
import MessageFriend from './jsx-components/MessageFriend';
import MessageUser from './jsx-components/MessageUser';

const MainMessenger = () => {
    return (
        <section className='main-messenger'>

            <div className='header-conversation'>
                <div className='container-picture'>
                    <img src={profilePicture} alt="" />
                </div>
                <div className='container-name'>
                    <h1 className='name-conversation'>Kristen Mackenzie</h1>
                    <p className='sub-name-conversation'>Amis</p>
                </div>
                
            </div>

            <div className='conversation'>
                <MessageFriend picture={profilePicture} date="16:39" message="T'as vu le dernier épisode de LOTR?"/>
                <MessageUser date="16:41" message="Oui!!! Une dinguerie !"/>
                <MessageFriend picture={profilePicture} date="16:42" message="C'était majestueux, franchement, je suis de plus en plus impatiente"/>
                <MessageUser date="16:43" message="Mais same !"/>
                <MessageUser date="16:44" message="En même temps ils avaient du budget hein"/>
                <MessageFriend picture={profilePicture} date="16:44" message="Oui j'avoue c'est fou !"/>
            </div>

            <div className='send-message'>
                <form className='form-send-message'>
                    <input type="text" className='input-message' placeholder='Tapez votre texte...' />
                    <button type='submit' className='submit-form'><FaTelegramPlane/></button>
                </form>
            </div>

        </section>
    );
};

export default MainMessenger;