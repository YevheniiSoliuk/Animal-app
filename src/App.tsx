import React from 'react';
import './App.css';
import Header from "../src/components/Header/Header";
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products/Products';
import Home from './pages/Home/Home';
import Shops from './pages/Shops/Shops';
import Brands from './pages/Brands/Brands';
import Contact from './pages/Contact/Contact';
import Favorite from './pages/Favorite/Favorite';
import Signup from './pages/Signup/Signup';
import Footer from './components/Footer/Footer';
import Sales from './pages/Sales/Sales';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Profile/UserAccountSettings/Settings';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/products" element={ <Products /> } />
        <Route path="/shops" element={ <Shops /> } />
        <Route path="/brands" element={ <Brands /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/favorite" element={ <Favorite /> } />
        <Route path="/sales" element={ <Sales /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/profile/settings" element={ <Settings /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
