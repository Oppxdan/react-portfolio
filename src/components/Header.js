import React from 'react';
// images
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img className="site-logo" src={Logo} alt='' />
          </a>
          <Link to='contact' smooth={true} duration={500}>
            <button className='btn btn-sm btn-header'>Work With Me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
