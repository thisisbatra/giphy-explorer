// import Keywords from "../Keyword/Keywords";
import styles from './Head.module.css';
import Searchbar from "../SearchBar/Searchbar";
// import { CgBoy } from "react-icons/cg";
// import { MdArrowDropDown } from "react-icons/md";
// import { CiMenuKebab } from "react-icons/ci";

const Head = () => {
    return (
        <>
            <header className={styles.head}>
                <span>
                    <img src="./assets/logo/GIPHY Icon DarkBackgrounds 45.png" alt="logo" />
                    <h1>GIPHY</h1>
                </span>
                {/* <ul className={styles.Keyword}>
                    <li><CiMenuKebab /></li>
                    <li><Keywords Text="Reaction" clr="#02caff" gradient="linear-gradient(to right,  #02caff ,#2ba0ff)" /></li>
                    <li><Keywords Text="Entertainment" clr="#7459ff" gradient="linear-gradient(to right,  #3696ff,#7459ff)" /></li>
                    <li><Keywords Text="Sports" clr="#b239e6" gradient="linear-gradient(to right,  #9c34fd ,#b239e6)" /></li>
                    <li><Keywords Text="Meme" clr="#de44be" gradient="linear-gradient(to right,  #ba3be0 ,#de44be)" /></li>
                </ul> */}
                {/* <div className={styles.user}>
                    <CgBoy />
                    <CgGirl />
                    <p>username</p>
                    <MdArrowDropDown />
                </div> */}
            </header>
            <Searchbar/>  
        </>
    );
}

export default Head;
