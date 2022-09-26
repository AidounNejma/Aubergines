import React from 'react';
import BlockTimeline from '../components/BlockTimeline';
import Layout from '../components/Layout';

const Home = () => {

    return (
        <Layout element={<BlockTimeline/>}/>
    );
};

export default Home;