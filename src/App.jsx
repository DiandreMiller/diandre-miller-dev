import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

//Background
import MatrixBackground from './components/MatrixBackground';

//Page
import Home from './pages/Home';
import About from './pages/About';

function App() {


  return (
    <BrowserRouter> 
      <div>
        <MatrixBackground />
      </div>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<About />} path='/about' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
