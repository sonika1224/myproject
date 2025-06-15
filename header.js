import React from 'react';
import '../app.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h2 className="logo">E-Commerce</h2>
        <nav>
          <ul className="nav-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
