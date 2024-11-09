import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">Proviz School of AI</Link>
            <div className="navbar-toggle" onClick={toggleNavbar}>
                <img src="/images/menu.png" alt="Menu Toggle" className="toggle-icon" />
            </div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li className="admin-link"><Link to="/admin">Admin</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
