import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './About';
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/about' element={<About/>}/>
       
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App