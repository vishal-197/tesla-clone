import React from 'react'
import Header from './Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Main from './Main';
import Cart from './Cart';
import { Provider } from 'react-redux';
import Store from '../counterRedux/Store';

function Home() {
  return (
    <Provider store={Store}>

    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    
    </Provider>
    
  )
}

export default Home
