import React from 'react';
import styles from './TelegramButton.module.css';
import {ReactComponent as LinkedInLogo} from '../../assets/telegram.svg';

const TelegramButton: React.FC = () => {
    const handleClick = () => {
        window.open('https://t.me/ROVVIT', '_blank');
    };
    return (
        <button className={styles.button} onClick={handleClick}>
            <LinkedInLogo className={styles.mercadoMatch}/>
        </button>
    );
};

export default TelegramButton;