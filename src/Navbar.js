import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
       
      <div className='search'>
      <input type="text" placeholder='Search'/>
        <button>Search</button>
      </div>
    </div>
  )
}

export default Navbar