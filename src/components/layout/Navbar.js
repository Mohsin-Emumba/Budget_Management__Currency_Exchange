import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    // make menu disappear on click
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
            <nav className="navbar">

                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    RXM
                    <i class='fab fa-typo3' />
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
                            to='/exchange'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Exchange
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/rates'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Rates
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/budget'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Budget
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
                {button && <Button buttonStyle='btn btn-outline-light'>SIGN UP</Button>}

            </nav>


        </>
    )
}

export default Navbar;