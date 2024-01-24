import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='logo'>
        <img src="https://1000logos.net/wp-content/uploads/2023/04/Starbucks-logo.png" alt="" />
      </div>
        <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
       
      <div className='search'>
      <input type="text" placeholder='Search'/>
        <button>Search</button>
      </div>
    </div>
  )
}

export default Navbar