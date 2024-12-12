import React from 'react'
import Login from './pages/login_signup/Login'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './pages/login_signup/signup.jsx'

const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/Signup" element={<Signup/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
