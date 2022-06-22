import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
<BrowserRouter>
    <Routes>
    <Route path="/" element={<ContactUs />}></Route>
      <Route path="/contact-us" element={<ContactUs />}></Route>
      <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes>
</BrowserRouter>
  );
}

export default App;
