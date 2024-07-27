import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicial from './pages/Inicial'
import Noticias from './pages/Noticias'
import DpoLgpd from './pages/DpoLgpd'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <h1>Uniesp - Centro Universitário</h1>
    <Navbar />
    <Routes>
      <Route path="/" element={<Inicial />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/dpo-lgpd" element={<DpoLgpd />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App