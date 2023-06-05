import React from 'react';
// images
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img className="site-logo" src={Logo} alt='' />
          </a>
          {/* button */}
          <a className='btn btn-sm btn-header'>Work with me</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
