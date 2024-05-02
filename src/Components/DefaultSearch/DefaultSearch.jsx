import { IoMdTrendingUp } from "react-icons/io";
import styles from "./DefaultSearch.module.css";


const DefaultSearch = () => {
    return (
        <section>
            <div className={styles.detailedRow}>
                <span>
                    <IoMdTrendingUp/>
                    trending
                </span>
                <span>
                    no. of items searched: 00 
                </span>
                <span>
                    <ul className={styles.groupButton}>
                        <li className={styles.buttonFoucus_Hover}>GIFs</li>
                        <li className={styles.buttonFoucus_Hover}>Stickers</li>
                        <li className={styles.buttonFoucus_Hover}>Clips</li>
                    </ul>
                </span>
            </div>
        </section>
    );
}

export default DefaultSearch;
