import React from 'react';
import {
    Link
} from 'react-router-dom';

const Header = () => (
    <nav>
        <div className="container">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                    <img src={require('../assets/images/logo.png')} alt="BookStore"/>
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                </ul>
                <div className="clearfix"></div>
            </div>
        </div>        
    </nav>
);

export default Header;