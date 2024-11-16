import { useState } from 'react'

import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Success from './pages/Success'
function App() {
 

  return (
    <>
    
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/error" element={<Error/>}/>
      <Route path="/success" element={<Success/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
