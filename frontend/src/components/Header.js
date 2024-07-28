// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <header>
        <nav className='navoption'>
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="booking">Booking</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/history">History</Link>
            
        </nav>
    </header>
);

export default Header;
