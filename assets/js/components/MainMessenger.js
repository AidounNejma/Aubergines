import React, { useEffect, useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import '../../styles/components/main-messenger.scss';
import MessageFriend from './jsx-components/MessageFriend';
import MessageUser from './jsx-components/MessageUser';
import DateObject from "react-date-object";

const MainMessenger = ({discussion, user}) => {
    const [friend, setFriend] = useState([]);
    
    useEffect(() => {
        discussion.discussionUsers?.map(data=> data.user.id != user.id ? setFriend(data.user) : '');
    }, [friend, discussion]);
    
    return (
        <section className='main-messenger'>

            <div className='header-conversation'>
                {discussion?.discussionUsers &&
                    <>
                        <div className='container-picture'>
                            <img src={friend?.userPictures} alt="" />
                        </div>
                        <div className='container-name'>
                            <h1 className='name-conversation'>{friend?.name}</h1>
                            <p className='sub-name-conversation'>Amis</p>
                        </div>
                    </>
                }
            </div>

            <div className='conversation'>
                {discussion?.chats?.map(chat => (
                    chat?.user.id != user?.id ?
                        <MessageFriend picture={chat?.user?.userPictures} date={new DateObject(chat?.createdAt).format('DD-MM-YYYY HH:MM')} key={chat?.id} message={chat?.content}/>
                    :
                        <MessageUser date={new DateObject(chat?.createdAt).format('DD-MM-YYYY HH:MM')} key={chat?.id} message={chat?.content}/>
                ))}
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