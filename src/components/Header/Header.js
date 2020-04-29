import React from 'react';
// import styles from './Header.module.css';
import './Header.css';
import logo from "../../images/lotuslogo.png";

function Header() {
    return (
    <header className="header">
        <img src={logo} />
    </header>

    );
}
    
export default Header;