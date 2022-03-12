import styles from '../styles/Home.module.scss'
import Navbar from "./components/_logobar";
import Footer from "./components/_footer";
import Header from "./components/_header";
import Content from "./components/_content";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header/>
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    )
}
