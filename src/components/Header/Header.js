import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className = "header">
            {/* <img src={logo} alt=""/> */}
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Invertory</Link>

                {/* <a href="/shop"><Link to="/shop">Shop</Link></a>
                <a href="/review"><Link to="/review">Order Review</Link></a>
                <a href="/inventory"><Link to="/inventory">Manage Invertory</Link></a> */}
            </nav>
        </div>
    );
};

export default Header;