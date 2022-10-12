import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import MainMessenger from '../components/MainMessenger';
import MessengerSideBar from '../components/MessengerSideBar';
import '../../styles/pages/messenger.scss';
import { toast } from 'react-toastify';

const Messenger = () => {
    const [discussions, setDiscussions] = useState([]);

    // Permet d'aller récupérer les posts
    const fetchDiscussion = async () => {
        try {
        const data = await discussion_usersAPI.findAll();
        setDiscussions(data);
        } catch (error) {
            toast.error("Impossible de charger les messages.");
        }
    };

    // Au chargement du composant, on va chercher les posts
    useEffect(() => {
        fetchDiscussion();
    }, []);

    console.log(discussions);

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