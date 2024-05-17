import { IoMdTrendingUp } from "react-icons/io";
import styles from "./resultBox.module.css";
import { useEffect, useState } from "react";
import axios from "axios";


const ResultBox = () => {
    const [data,setData]=useState([]);

    const getData=()=>{
        let url='http://localhost:3001/trendingRequest';
        let p=axios.post(url);
        p.then(res=>{
            console.log("from res",res.data)
            setData(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getData();
    },[])
    
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
            <div>

            </div>
        </section>
    );
}

export default ResultBox;
