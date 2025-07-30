import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

type LayoutProps = {
    children: React.ReactNode;
    className?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
    return (
        <main className={`${styles.main} ${className || ''}`}>
            <Header />
            <section className={styles.content}>
                {children}
            </section>
            <Footer />
        </main>
    );
};

export default Layout;