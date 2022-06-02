import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'


function App() {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
    </Routes>
    </Suspense>
  </Router>
  )
}

export default App
