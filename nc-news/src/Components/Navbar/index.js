import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from "@reach/router";
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <i className="fas fa-newspaper" />
            Nc-News
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/topics/coding'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Coding
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/topics/cooking'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Cooking
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/topics/football'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Football
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
        
      </nav>
      
    </>
  );
}

export default Navbar;