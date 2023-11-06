import React from 'react'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';

import Layout from './Components/Layout'
import Home from './Page/Home';
import About from './Page/About';
import Store from './Page/Store';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='store' element={<Store />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
