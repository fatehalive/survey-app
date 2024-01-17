import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'

import { Header, Footer } from './components'
import { Home, About, Quiz, Settings } from './pages'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/survey" element={<Quiz />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App
