import React from 'react';
import Contact from './Contact';
import styles from './start.module.css'

const Start = () => {
  return (
    <main className={styles.main}>
      <div className={styles.about}>
        <h2>About me</h2>
        <p>I'm from Rosario, Santa Fé, Argentina. Developer, traveller and musician. I love travelling, discovering cultures and meeting people. I like to write songs, sing, play piano and guitar. I enjoy coding each day!</p>

      </div>
      <div className={styles.skills}>
        <h2>Skills</h2>
        <div>
          <p>Javascript (React)</p>
          <p>HTML5</p>
          <p>CSS (Bootstrap)</p>
          <p>Node JS (Express)</p>
          <p>Mongo DB</p>
          <p>Git (Github)</p>
        </div>
      </div>
      <Contact />
    </main>
  )
};

export default Start;
