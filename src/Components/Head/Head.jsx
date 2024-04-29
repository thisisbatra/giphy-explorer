import Keywords from "./Keywords";
import styles from './Head.module.css';
import Searchbar from "./Searchbar";

const Head = () => {
    return (
        <>
            <header className={styles.head}>
                <h1>GIPHY</h1>
                <div className={styles.Keyword}>
                    <Keywords Text="Reaction" clr="#02caff" gradient="linear-gradient(to right,  #02caff ,#2ba0ff)" />
                    <Keywords Text="Entertainment" clr="#7459ff" gradient="linear-gradient(to right,  #3696ff,#7459ff)" />
                    <Keywords Text="Sports" clr="#b239e6" gradient="linear-gradient(to right,  #9c34fd ,#b239e6)" />
                    <Keywords Text="Meme" clr="#de44be" gradient="linear-gradient(to right,  #ba3be0 ,#de44be)" />
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
