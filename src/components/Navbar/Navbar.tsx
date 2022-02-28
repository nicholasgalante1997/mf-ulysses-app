import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/home.module.css';


const NavBar: React.FunctionComponent<{}> = ({ children }) => (
    <div className={styles.navbar}>
        <h2 className={styles.heading}>Ulysses</h2>
        <div className={styles.actionContainer}>
            <p className={styles.link}>Stories</p>
            <p className={styles.link}>Home</p>
            <p className={styles.link}>Chronology</p>
            <p className={styles.link}>About</p>
        </div>
    </div>
);
  
  export default NavBar;