import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../../styles/pages/post.scss';
import { toast } from "react-toastify";
import postsAPI from '../services/postsAPI';
import Layout from '../components/Layout';
import ShowPost from '../components/ShowPost';

const Post = () => {
    //récupération de l'id de l'url
    const params = useParams();

    //Pour stocker mon post
    const [post, setPost] = useState([]);

    // Permet d'aller récupérer le post
    const fetchPost = async () => {
        /* Si on récupère un id alors on recherche le post en question */
        if(params.postId){
            try {
                const data = await postsAPI.find(params.postId);
                setPost(data);

            } catch (error) {
                toast.error("Impossible de charger le post");
            }
        }
    };

    // Au chargement du composant, on va chercher l'utilisateur
    useEffect(() => {
        fetchPost();
    }, [post]);

    return (
        <Layout element={<ShowPost post={post}/>}/>
    );
};

export default Post;