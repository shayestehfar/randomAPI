import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AllUsers from './pages/AllUsers'
import { UserProvider } from '../src/context/UserContext'
import About from './pages/About'
import Example from './pages/Example'

function App() {
  // render
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<AllUsers />} />
          <Route path='/about' element={<About />} />
          <Route path='/example' element={<Example />} />
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App
