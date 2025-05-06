import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'

import Chat from './pages/Chat/Chat'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'
import Login from './pages/login/login'

const App = () => {
  return (

    <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Chat" element={<Chat/>}/>
      <Route path="/profile" element={<ProfileUpdate/>}/>
    </Routes>
    </Router>

  )
}

export default App
