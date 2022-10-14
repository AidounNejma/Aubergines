import React, { useEffect, useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import '../../styles/components/main-messenger.scss';
import MessageFriend from './jsx-components/MessageFriend';
import MessageUser from './jsx-components/MessageUser';
import DateObject from "react-date-object";
import chatAPI from '../services/chatAPI';
import { toast } from 'react-toastify';

const MainMessenger = ({discussion, user}) => {
    const [friend, setFriend] = useState([]);
    
    useEffect(() => {
        discussion.discussionUsers?.map(data=> data.user.id != user.id ? setFriend(data.user) : '');
    }, [friend, discussion, user]);
    
    /* Gérer le formulaire */
    const [chat, setChat] = useState({
        content: "",
        user: '',
        discussion: '',
        pseudo: '',
    });

    // Gestion des changements des inputs dans le formulaire
    const handleChange = ({ currentTarget }) => {
        setChat({
            content: currentTarget.value,
            user: user['@id'],
            discussion : discussion['@id'],
            pseudo: user.username
        });
    }
    
    // Gestion du submit du formulaire
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await chatAPI.create(chat).then(response => console.log(response));

        }
        catch {
            toast.error('😩 Oh une erreur est survernue!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
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
                {discussion?.chats?.map(message => (
                    message?.user.id != user?.id ?
                        <MessageFriend picture={message?.user?.userPictures} date={new DateObject(message?.createdAt).format('DD-MM-YYYY HH:MM')} key={message?.id} message={message?.content}/>
                    :
                        <MessageUser date={new DateObject(message?.createdAt).format('DD-MM-YYYY HH:MM')} key={message?.id} message={message?.content}/>
                ))}
            </div>

            <div className='send-message'>
                <form className='form-send-message' onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="content"
                        className='input-message' 
                        placeholder='Tapez votre texte...' 
                        onChange={handleChange}
                    />
                    <button type='submit' className='submit-form'><FaTelegramPlane/></button>
                </form>
            </div>

        </section>
    );
};

export default MainMessenger;