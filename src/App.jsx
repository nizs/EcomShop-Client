import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from '../src/pages/Collection'
import About from '../src/pages/About'
import Contact from '../src/pages/Contact'
import Product from '../src/pages/Product'
import Cart from '../src/pages/Cart'
import Login from '../src/pages/Login'
import Placeorder from '../src/pages/Placeorder'
import Orders from '../src/pages/Orders'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<Placeorder />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;