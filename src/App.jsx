import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FrontPage from './FrontPage'
import Signinoutpage from './Signinoutpage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/signin" element={<Signinoutpage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App