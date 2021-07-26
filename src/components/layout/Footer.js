import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    The Original Currency Exchange Rates Calculator
                </p>
                <p>Since 1995, the RXM Currency Converter has provided free mid-market exchange rates for millions of users.
                    Our latest currency calculator is a direct descendent of the fast and reliable original
                    "Universal Currency Calculator" and of course it's still free! Learn more about Xe,
                    our latest money transfer services, and how we became known as the world's currency data authority.</p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Transfer Money</h2>
                        <Link to='/sign-up'>Register/Login</Link>
                        <Link to='/'>US-Money Transfer</Link>
                        <Link to='/'>UK-Money Transfer</Link>
                        <Link to='/'>How does it works?</Link>
                        <Link to='/'>Fraud Prevention</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Apps & Services</h2>
                        <Link to='/'>Money Tranfer & Currency app</Link>
                        <Link to='/'>Ios App</Link>
                        <Link to='/'>Android App</Link>
                        <Link to='/'>Huawei App</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Tools & resources</h2>
                        <Link to='/'>Blog</Link>
                        <Link to='/'>Currency converter</Link>
                        <Link to='/'>Currency encyclopedia</Link>
                        <Link to='/'>IBAN calculator</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>XE Businesses</h2>
                        <Link to='/'>Business Money Transfer</Link>
                        <Link to='/'>Products & Services</Link>
                        <Link to='/'>Partnerships</Link>
                        <Link to='/'>Why XE?</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            RXM
                            <i class='fab fa-typo3' />
                        </Link>
                    </div>
                    <small class='website-rights'>Budget-Management-App © 2021</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;