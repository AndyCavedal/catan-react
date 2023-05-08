import React from 'react';
import '@styles/Header.scss';
import catan from '@icons/catan-logo.png';

const Header = () => {
    return (

        <nav className="navbar-right">
            <div className>
                <li className="navbar-list">
                    <img id="catan-logo" src={catan} alt="catan-logo" />
                    <a href="/" className="navbar-list-link">Home</a>
                    <a href="/maps" className="navbar-list-link">Maps</a>
                    <a href="/point-tracker" className="navbar-list-link">Point Tracker</a>
                    <a href="/" className="navbar-list-link">Others</a>
                    <a href="/contact" className="navbar-list-link" id="contact-button">Contact</a>
                </li>
            </div>
        </nav>


    );
}

export default Header;