import React, { useState } from 'react';

import './App.css';
import Projects from './components/section/Projects';
import Hero from './components/Hero';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';


function App() {

  return (
    <div>
      <Layout>
        <Home/>
      </Layout>

    </div>
  );
}

export default App;