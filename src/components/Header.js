import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return <header className="py-8">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <a href="#">
          <img className="logo-png" src={Logo} alt="logo" />
        </a>
        <button className="btn btn-sm">Work With Me</button>
      </div>
    </div>
  </header>;
};

export default Header;
