import React from 'react';
import styles from './Navbar.module.css';
// import styles from './Navbar.css';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
    <nav className="nav">
        <div className={styles.navbarItem}> 
            <NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink>
        </div>
        <div className={styles.navbarItem}>
            <NavLink to="/dialogues" activeClassName={styles.activeLink}>Messages</NavLink>
        </div>
        <div className={styles.navbarItem}>
            <NavLink to="/news" activeClassName={styles.activeLink}>News</NavLink>
        </div>
        <div className={styles.navbarItem}>
            <NavLink to="/music" activeClassName={styles.activeLink}>Music</NavLink>
        </div>
        <div className={styles.navbarItem}>
            <NavLink to="/photo" activeClassName={styles.activeLink}>Pics</NavLink>
        </div>
        <div className={styles.navbarItem}>
            <NavLink to="/video" activeClassName={styles.activeLink}>Video</NavLink>
        </div>
        <div className={styles.navbarItem}>
            <NavLink to="/settings" activeClassName={styles.activeLink}>Settings</NavLink>
        </div>
              
    </nav>

    );
}
    
export default Navbar;