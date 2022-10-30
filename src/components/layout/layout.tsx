import styles from '../../styles/Home.module.css';
import NavBar from '../nav-bar/nav-bar';
import TopBar from '../top-bar/top-bar';

export default function Layout ({ Component, pageProps }: any) {
    return (
        <>
            <main className={styles.main}>
                <TopBar/>
                <NavBar/>
                <Component />
                {/* <Footer /> */}
            </main>
        </>
    )
}