import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import About from './Pages/about';
import Contact from './Pages/Contact';
import Navbar from './component/Navbar';

function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path="/:name" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


