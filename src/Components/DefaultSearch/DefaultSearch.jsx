import { IoMdTrendingUp } from "react-icons/io";
import styles from "./DefaultSearch.module.css";


const DefaultSearch = () => {
    return (
        <div className={styles.Container}>
            <IoMdTrendingUp className={styles.icon} />
            <div className={styles.DefaultSearch}>
                
                <p>Default Search</p>
                <p>No. of search items: 25</p>
                <div className={styles.bttn}>
                    <span className={styles.GIFs}>GIFs</span>
                    <span className={styles.Stickers}>Stickers</span>
                    <span className={styles.Clips}>Clips</span>
                </div>
            </div>
        </div>
    );
}

export default DefaultSearch;
