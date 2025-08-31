import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

//Background
import MatrixBackground from './components/matrixBackground';

//Page
import Home from './pages/Home'

function App() {


  return (
    <BrowserRouter> 
      <div className='relative min-h-screen'>
        <MatrixBackground />
      </div>
      <Routes>
        <Route element={<Home />} path='/' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
