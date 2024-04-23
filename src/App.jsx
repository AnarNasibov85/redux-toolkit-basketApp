import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Basket from './pages/Basket/Basket';

import Header from './components/Header/Header';
import Products from './pages/Products/Products';

function App() {
  return (
 <>
  <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      </>
  );
}

export default App;
