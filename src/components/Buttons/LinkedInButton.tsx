import React from 'react';
import styles from './LinkedInButton.module.css';
import {ReactComponent as LinkedInLogo} from '../../assets/linkedinLogo.svg';

const LinkedInButton: React.FC = () => {
    const handleClick = () => {
        window.open('https://www.linkedin.com/in/vitalii-sidorov-a13142260/', '_blank');
    };
    return (
        <button className={styles.button} onClick={handleClick}>
                <LinkedInLogo className={styles.mercadoMatch}/>
        </button>
    );
};

export default LinkedInButton;