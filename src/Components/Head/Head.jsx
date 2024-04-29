import Keywords from "./Keywords";
import styles from './Head.module.css';
import Searchbar from "./Searchbar";

const Head = () => {
    return (
        <>
            <header className={styles.head}>
                <h1>GIPHY</h1>
                <div className={styles.Keyword}>
                    <Keywords Text="Reaction"/>
                    <Keywords Text="Entertainment"/>
                    <Keywords Text="Sports"/>
                    <Keywords Text="Meme"/>
                </div>
                <div className={styles.user}>
                    <img src="./images/boyIcon.png" alt="boyIcon" />
                    <p>username</p>
                    <img src="./images/ArrowIcon.png" alt="ArrowIcon" />
                </div>
            </header>
            <Searchbar/>  
        </>
    );
}

export default Head;
