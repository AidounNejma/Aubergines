import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import UserProfile from '../components/UserProfile'
import userAPI from '../services/usersAPI';
import { toast } from "react-toastify";
import { useParams } from 'react-router';
import authAPI from '../services/authAPI';

const Profile = () => {
    //récupération de l'id de l'url
    const params = useParams();

    //Pour stocker mon utilisateur
    const [user, setUser] = useState([]);
    
    // Permet d'aller récupérer l'utilisateur
    const fetchUser = async () => {
        /* Si on récupère un id alors on recherche l'utilisateur en question */
        if(params.profileId){
            try {
            const data = await userAPI.find(params.profileId);
            setUser(data);
            } catch (error) {
                toast.error("Impossible de charger le profil");
            }
        }
        else{
            /* Sinon on récupère l'utilisateur connecté */
            authAPI.findCurrentUser().then(response => setUser(response));
        }
    };

    // Au chargement du composant, on va chercher l'utilisateur
    useEffect(() => {
        fetchUser();
    }, [user]);

    return (
        <Layout element={<UserProfile user={user} posts={user.posts}/>}/>
    );
};

export default Profile;