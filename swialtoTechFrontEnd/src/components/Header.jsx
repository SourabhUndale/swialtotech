import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
      setTimeout(() => {
        navbarCollapse.classList.remove('show');
      }, 300); // Adjust the delay time for the collapse here (300ms)
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: 'linear-gradient(-225deg, #65379B 0%, #886AEA 53%, #6457C6 100%)',
      }}
    >
      <Link className="navbar-brand text-white" to="/">
        <img
          src="assets/images/logo.jpg"
          width="150"
          height="50"
          className="d-inline-block align-top"
          alt="Logo"
        />
        
      </Link>
      
      <div className="d-flex align-items-center">
        {/* Cart Icon */}
        <Link to="/cart" className="text-white mr-2">
          <i className="fas fa-shopping-cart" style={{color:"white"}}></i>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="" style={{color:'white'}}>
            <img width="32" height="32" src="https://img.icons8.com/pixels/32/000000/menu.png" alt="menu"/>
          </span>
        </button>
      </div>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link text-white" to="/" onClick={handleNavLinkClick}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about" onClick={handleNavLinkClick}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/contact" onClick={handleNavLinkClick}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/info" onClick={handleNavLinkClick}>
              Info
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
