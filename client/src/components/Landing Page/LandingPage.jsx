import React from 'react';
import styles from '../Landing Page/styles/styles.module.css'
import { Link } from 'react-router-dom';

 
const LandingPage = () => {
    return (
        <div className={styles.background}>
            <h1 className={styles.title}>FORMULA <span className={styles.f}>1</span></h1>
            <div className={styles.container}>
                <Link to={'/home'}><button className={styles.button}>Home</button></Link>
            </div>
        </div>
    );
};

export default LandingPage;