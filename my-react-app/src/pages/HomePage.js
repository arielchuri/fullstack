// HomePage.js
import React from 'react';
import Layout from '../components/Layout';
import InputCard from '../components/InputCard';
import ChatGPT from '../components/ChatGPT';
import DatabaseUpdater from '../components/DatabaseUpdater';

const HomePage = () => {
  return (
    <Layout>
      {/* Your home page content goes here */}
      <ChatGPT />
      <InputCard />
      <DatabaseUpdater />
    </Layout>
  );
};

export default HomePage;