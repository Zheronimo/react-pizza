import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Cart from './pages/Cart';
import NotFound from './pages/404';

import './App.css';
import './scss/app.scss';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home categoriesList={categories} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {/* <NotFound /> */}
      </div>
    </div>
  );
}

export default App;
