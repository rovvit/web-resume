import React from 'react';
import styles from './DownloadButton.module.css';
import {ReactComponent as DownloadIcon} from '../../assets/download.svg';


const DownloadButton: React.FC = () => {
    const handleClick = () => {
        const link = document.createElement('a');
        link.href = '/files/Vitalii_Sidorov_CV.pdf';
        link.download = 'Vitalii_Sidorov_QA_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <button className={styles.button} onClick={handleClick}>
            <span>Download CV</span>
            <DownloadIcon className={styles.mercadoMatch}/>
        </button>
    );
};

export default DownloadButton;