import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import UserProfile from '../components/UserProfile'
import userAPI from '../services/usersAPI';
import { toast } from "react-toastify";
import { useParams } from 'react-router';

const Profile = () => {
    //récupération de l'id de l'url
    const params = useParams();

    //Pour stocker mon utilisateur
    const [user, setUser] = useState([]);
    
    // Permet d'aller récupérer l'utilisateur
    const fetchUser = async () => {
        try {
        const data = await userAPI.find(params.profileId);
        setUser(data);
        } catch (error) {
            toast.error("Impossible de charger le profil");
        }
    };

    // Au chargement du composant, on va chercher l'utilisateur
    useEffect(() => {
        fetchUser();

    }, []);


    return (
        <Layout element={<UserProfile props={user}/>}/>
    );
};

export default Profile;