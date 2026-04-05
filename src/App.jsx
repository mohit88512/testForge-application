import React from 'react'
import Navbar from './component/navbar'
import Home from './component/Home'
import About from './component/About'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import Result from './component/Result'
import Login from './component/Login'
import Signup from './component/Signup'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      
      <Routes>
        <Route path='/' element={<>
          <Navbar/>
      <Home/>
      <About/>
      <Footer/>
        </>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App