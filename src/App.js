import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Cart from './pages/Cart';
import NotFound from './pages/404';

import './App.css';
import './scss/app.scss';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className='wrapper'>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className='content'>
        <Routes>
          <Route
            path='/'
            element={<Home categoriesList={categories} searchValue={searchValue} />}
          />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {/* <NotFound /> */}
      </div>
    </div>
  );
}

export default App;
