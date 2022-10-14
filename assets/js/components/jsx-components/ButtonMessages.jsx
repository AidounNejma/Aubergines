import React, { useEffect, useState } from 'react';
import AlertTablet from './AlertTablet';
import '../../../styles/components/subcomponents/button-messages.scss';
import chatAPI from '../../services/chatAPI';
import { toast } from 'react-toastify';
import DateObject from 'react-date-object';

const ButtonMessages = ({number, discussion, user, setOneDiscussion}) => {
    
    const chooseDiscussion = (data) => {
        setOneDiscussion(discussion);
    };

    const [chats, setChats] = useState([]);
    const [friend, setFriend] = useState();

    // Permet d'aller récupérer les messages d'une discussion
    const fetchChats = async () => {
        try {
            const data = await chatAPI.findByDiscussion(discussion.id);
            setChats(data['hydra:member']);
            chats.map(message => message.user.id != user.id ? setFriend(message.user) : ''); 
        } catch (error) {
            toast.error("Impossible de charger la discussion");
        }
    };

    // Au chargement du composant, on va chercher les messages de la discussion 
    // et on stocke l'ami dans la variable
    useEffect(() => {
        fetchChats();
    }, [chats, friend, discussion]);

    let unseen;
    
    if (number == ""){
        unseen = "";
    }
    else{
        unseen = "unseen-message" ;
    }

    return (
        <button className='container-conversation' onClick={()=> chooseDiscussion(discussion.id)}>
            <div className='container-img'>
                <img src={friend?.userPictures} alt="" />
            </div>
            <div className='wrapper-name'>
                <h3>{friend?.name}</h3>
                <p className={`message ${unseen}`}>{chats[chats.length-1]?.content}</p>
            </div>
            <div className='date-number-wrapper'>
                <p className='date'>{new DateObject(chats[chats.length-1]?.createdAt).format('DD MMM')}</p>
                <AlertTablet number={number}/>
            </div>
        </button>
    );
};

export default ButtonMessages;