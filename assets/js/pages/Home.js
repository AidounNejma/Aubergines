import React, { useEffect, useState } from 'react';
import BlockTimeline from '../components/BlockTimeline';
import Layout from '../components/Layout';
import postsAPI from '../services/postsAPI';
import { toast } from "react-toastify";
import { useCurrentUser } from '../contexts/CurrentUserContext';

const Home = () => {
    const [posts, setPosts] = useState([]);
    /* const {currentUser} = useCurrentUser();

    console.log(currentUser); */

    // Permet d'aller récupérer les posts
    const fetchPost = async () => {
        try {
        const data = await postsAPI.findAll();
        setPosts(data);
        } catch (error) {
            toast.error("Impossible de charger les posts");
        }
    };

    // Au chargement du composant, on va chercher les posts
    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <Layout element={<BlockTimeline props={posts}/>}/>
    );
};

export default Home;