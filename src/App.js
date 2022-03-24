import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AllUsers from '../src/components/AllUsers'
import { UserProvider } from '../src/context/UserContext'
import About from './pages/About'

function App() {
  // render
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<AllUsers />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App
