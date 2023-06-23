// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">
            <span className={styles.navLink}>Home</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">
            <span className={styles.navLink}>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

