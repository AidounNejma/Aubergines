import React, { useEffect, useState } from 'react';
import BlockTimeline from '../components/BlockTimeline';
import Layout from '../components/Layout';
import postsAPI from '../services/postsAPI';
import { toast } from "react-toastify";

const Home = () => {
    const [posts, setPosts] = useState([]);
    
    // Permet d'aller récupérer les posts
    const fetchPost = async () => {
        try {
        const data = await postsAPI.findAll();
        setPosts(data);
        console.log(data);
        } catch (error) {
            toast.error("Impossible de charger les posts");
        }
    };

    // Au chargement du composant, on va chercher les customers
    useEffect(() => {
        fetchPost();
    }, []);

    console.log(posts);
    return (
        <Layout element={<BlockTimeline/>}/>
    );
};

export default Home;