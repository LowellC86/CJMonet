import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import News from './components/News';
import Bio from './components/Bio';
import Tour from './components/Tour';
import Music from './components/Music';
import Merch from './components/Merch';
import Signup from './components/Signup';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/music" element={<Music />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
