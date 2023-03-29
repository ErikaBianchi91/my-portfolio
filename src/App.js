import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Experience from './components/pages/Experience'
import Projects from './components/pages/Projects'
import './components/Navbar.css'
import './components/Cards.css'
import './components/Skills.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/my-portfolio" exact Component={Home} />
          <Route path="/erfahrung" exact Component={Experience} />
          <Route path="/Projekte" exact Component={Projects} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
