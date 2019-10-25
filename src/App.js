import React from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Result from './components/Results/Results';
import Recipe from './components/Recipe/Recipe';
import Shopping from './components/Shopping/Shopping';

function App() {
  return (
    <>
      <Layout>
        <Header></Header>
        <Result></Result>
        <Recipe></Recipe>
        <Shopping></Shopping>
      </Layout>
    </>
  );
}

export default App;
