import React from 'react';

import styles from "portfolio/src/components navbar/navbar.module.css"

export const Navbar = () => {
    return (
    <nav className= {StyleSheet.Navbar}>
        <a className={styles.title}
        href="/">Portfolio
        </a>
        <div className= {styles.menu}>
            <ul className= {styles.menuItems}>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experiance</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    );
};