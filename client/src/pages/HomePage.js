import React from 'react';
import Layout from './../components/Layout/Layout';
import { useAuth } from '../context/auth';

const HomePage = () => {
  const [auth,setAuth]=useAuth()
  return (
    <Layout title={"HomePage"}>
        <h1>Home Page</h1>
        <pre>{JSON.stringify(auth,null,4)}</pre>
    </Layout>
  );
};

export default HomePage;