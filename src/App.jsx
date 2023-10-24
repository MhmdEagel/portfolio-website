import React from 'react'
import Layout from './Components/Layout'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Home from './Page/Home';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='works' element={<h1>Hello World!</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
