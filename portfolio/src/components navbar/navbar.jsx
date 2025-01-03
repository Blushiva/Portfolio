import React, {useState} from 'react';

//scoped locally to Navbar prevents style conflicts
import styles from "portfolio/src/components navbar/navbar.module.css";
import { getImageUrl } from 'portfolio/public/utils.js';

export const Navbar = () => {
    return (
    <nav className= {styles.Navbar}>
        <a className={styles.title}
        href="/">Portfolio
        </a>
        <div className= {styles.menu}>
            <img className={styles.menuBtn} src={getImageUrl("nav/menuIcon.png")}/>
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