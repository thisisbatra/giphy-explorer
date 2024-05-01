import { IoMdTrendingUp } from "react-icons/io";
import styles from "./DefaultSearch.module.css";


const DefaultSearch = () => {
    return (
        <section>
            <div>
                <span>
                    <IoMdTrendingUp/>
                    trending
                </span>
                <span>
                    no. of items searched: 00 
                </span>
                <span>
                    
                </span>
            </div>
        </section>
    );
}

export default DefaultSearch;
