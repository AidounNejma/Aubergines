import React from 'react';
import Layout from '../components/Layout';
import UserProfile from '../components/UserProfile'

const Profile = () => {

    return (
        <Layout element={<UserProfile/>}/>
    );
};

export default Profile;