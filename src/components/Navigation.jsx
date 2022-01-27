import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/">Ramiro Ledesma</Link>
      </div>
      <div className={styles.options}>
        <Link to="/start-here">START HERE</Link>
        <Link to="/projects">PROJECTS</Link>
      </div>
    </nav>
  )
};

export default Navigation;

