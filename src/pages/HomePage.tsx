import React from 'react';
import Layout from '../components/Layout/Layout';
import {ReactComponent as Logo} from '../assets/logo.svg';
import styles from './HomePage.module.css';
import DownloadButton from "../components/Buttons/DownloadButton";


const HomePage: React.FC = () => {
    const tags = ['QA Engineer', 'Automation', 'API', 'Python', 'Kotlin', 'SQL', 'Left-Shift', 'T-Shape'];

    return (
        <Layout className={styles.fullHeight}>
            <Logo className={styles.logo}/>
            <div className={styles.content}>
                <div className={styles.contentWrapper}>
                    <div className={styles.name}>
                        Vitalii Sidorov
                    </div>
                    <div className={styles.tags}>
                        {tags.map((tag, index) => (
                            <React.Fragment key={index}>
                                <span className={styles.tag}>{tag}</span>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className={styles.description}>
                        <p>Looking for a QA Engineer? You found one!</p>
                        <p>As you can see I've developed this page using React and TypeScript - things <strong>I've
                            learned to
                            get the job done</strong>. I enjoy making things better, faster, and safer - and I’m always
                            up for
                            learning something new to do it. </p>
                        <p>I have 4+ years making sure <strong>web, backend, and mobile</strong> apps work the way they
                            should - securely and reliably. I’m into test automation, clean CI/CD pipelines, and smart
                            ways to catch bugs early.</p>
                        <p>I’ve worked in fintech, enterprise, and healthcare projects, automating frontend and backend
                            tests using <strong>Python, Kotlin and Cypress</strong>. I like working with agile teams,
                            sharing ideas, and
                            picking up new tools - especially anything with AI or cloud tech.</p>
                        <div className={styles.buttonWrapper}>
                            <DownloadButton />
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default HomePage;