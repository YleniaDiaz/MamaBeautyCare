import React from 'react';
import './Header.css'
import logo from '../../assets/logoMamaBeauty.jpg';

const Header = () => {
  return (
    <header className="container" style={{ width: '100%', marginBottom: '20px' }}>
      <nav className="navbar">
        <div className="logo-container">
            <img src={logo} alt="Logo Mamá Beauty Care" className="logo-img" />
        </div>
        
        <div className="logo">Mamá Beauty Care</div>

        <button className="btn-primary">Reservar Cita</button>
      </nav>
    </header>
  );
};

export default Header;
