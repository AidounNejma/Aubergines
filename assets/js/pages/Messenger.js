import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import MainMessenger from '../components/MainMessenger';
import MessengerSideBar from '../components/MessengerSideBar';
import '../../styles/pages/messenger.scss';
import { toast } from 'react-toastify';
import authAPI from '../services/authAPI';
import discussionsAPI from '../services/discussionsAPI';

const Messenger = () => {
    
    const [user, setUser] = useState([]);
    const [discussions, setDiscussions] = useState([]);
    const [oneDiscussion, setOneDiscussion] = useState([]);

    // Permet d'aller récupérer l'utilisateur
    const fetchUser = async () => {
        try {
            await authAPI.findCurrentUser().then(response => setUser(response));
        } catch (error) {
            toast.error("Impossible de charger l'utilisateur");
        }
    };

    const fetchDiscussions = async () => {
        try{
            user.discussionUsers?.map(discussion => discussionsAPI.findByDiscussionUser(discussion.id).then(response=> setDiscussions(response['hydra:member'])));
        }
        catch (error) {
            toast.error("Impossible de charger la discussion");
        }
    }

    // Au chargement du composant, on va chercher les discussions et l'utilisateur
    useEffect(() => {
        fetchUser();
        fetchDiscussions();
    }, [user, discussions]);

    let content = (
        <div className='messenger'>
            <MessengerSideBar 
                setDiscussions={setDiscussions}
                discussions={discussions} 
                user={user}
                setOneDiscussion={setOneDiscussion}
            /> 
            <MainMessenger
                discussion={oneDiscussion} 
                user={user}
            />
        </div>
    );

    return (
        <Layout element={content}/>
    );
};

export default Messenger;