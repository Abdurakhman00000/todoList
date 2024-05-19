import { Link } from 'react-router-dom';
import coffeImg from '../images/image 2.png'
import React from 'react';

const Header = () => {
    return (
        <header>
            <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <img src={coffeImg} alt="" />
                    </div>

                    <div className="nav">
                        <Link to='/listProduct'>
                        <p>Menu</p>
                        </Link>

                        <Link to='/addProduct'>
                        <p>Admin</p>
                        </Link>

                        <Link to='/support'>
                        <p>Support</p>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </header>
    );
};

export default Header;