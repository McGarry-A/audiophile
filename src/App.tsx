import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import BannerShort from './components/BannerShort/BannerShort';
import BannerSplit from './components/BannerSplit/BannerSplit';
import Categories from './components/Categories/Categories';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Categories />
      <Banner />
      <BannerShort />
      <BannerSplit />
    </div>
  );
}

export default App;
