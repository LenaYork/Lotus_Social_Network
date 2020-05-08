import React from 'react';
// import styles from './Header.module.css';
import './Header.css';
import logo from "../../images/lotuslogogreen.png";

function Header() {
    return (
    <header className="header">
        <img src={logo} alt='logo'/>
        <h1>LooxyVock</h1>
    </header>

    );
}
    
export default Header;