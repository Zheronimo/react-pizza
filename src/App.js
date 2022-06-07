import React, { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Cart from './pages/Cart';
import NotFound from './pages/404';

import './App.css';
import './scss/app.scss';

export const SearchContext = createContext();

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className='wrapper'>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
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
      </SearchContext.Provider>
    </div>
  );
}

export default App;
