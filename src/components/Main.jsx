import React from 'react';
import styles from './main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <img className={styles.img} src={require('../assets/images/ramiro.png')} alt='img'></img>
      <div className={styles.info}>
        <h1>Hi, I'm Ramiro</h1>
        <p>I work as Frontend Developer. I'm using React.js for developing my apps. I like building amazing web sites.</p>
        <p>This site will host some information about me and also my projects.</p>
      </div>
      <div className={styles.download}>
        <a download href={require('../assets/cv/cv.pdf')} className="btn btn-secondary">
          <i className='fi-rr-cloud-download download-icon' />
          Download Resume
        </a>
      </div>

    </main>
  )
};

export default Main;
