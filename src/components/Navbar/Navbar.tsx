import React from 'react';
import { useRouter } from 'next/router';
import logoLetters from './Logo';
import styles from '../../../styles/home.module.css';

const NavBar: React.FunctionComponent = () => {
    const router = useRouter();
    const pushTo = (route: string) => { router.push(route); };
    return (
        <div className={styles.navbar}>
            {logoLetters().map(l => l)}
            <div className={styles.actionContainer}>
                <p onClick={() => pushTo('/literature')} className={styles.link}>Stories</p>
                <p onClick={() => pushTo('/')} className={styles.link}>Home</p>
                <p onClick={() => pushTo('/chronology')} className={styles.link}>Chronology</p>
                <p onClick={() => pushTo('/about')} className={styles.link}>About</p>
            </div>
        </div>
    )
};
  
  export default NavBar;