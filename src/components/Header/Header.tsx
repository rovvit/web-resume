import React from 'react';
import styles from "./Header.module.css";
import LinkedInButton from "../Buttons/LinkedInButton";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.name}>Vitalii Sidorov</div>
            </div>
            <div className={styles.linkedin_button}>
                <LinkedInButton />
            </div>
            <div className={styles.filler}/>
            <nav className={styles.nav}>
                <a href="/">Home</a>
                <a href="/contacts">Contacts</a>
            </nav>
        </header>
    );
};

export default Header;