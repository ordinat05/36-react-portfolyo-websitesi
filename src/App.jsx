import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {

  return (
    <div className="App">
      {/* 🍀 This Component App.jsx */}
      <Router>
        <Navbar />

        {/* Kapsayıcı */}
        <Routes>
          {/* Yollar */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          {/* Yol */}

        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
