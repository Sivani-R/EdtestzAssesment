// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
        </nav>
    </header>
);

export default Header;