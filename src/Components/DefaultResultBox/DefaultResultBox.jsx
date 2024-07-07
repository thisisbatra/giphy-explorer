import { IoMdTrendingUp } from "react-icons/io";
import styles from "./DefaultResultBox.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ImgContainer from "../ImgContainer/ImgContainer";


const ResultBox = () => {
    const [data,setData]=useState([]);
    const [resource, setResource]=useState("gifs");
    const getResource=(e)=>{
        // console.log(e.target.value);
        setResource(e.target.value);
    }

    useEffect(()=>{
        const getData=()=>{
            // console.log("inside getData",resource);
            let url='http://localhost:3001/trendingRequest';
            let p=axios.post(url,{value:resource});
            p.then(res=>{
                // console.log(`from res of ${resource}: ${res.data}`)
                setData(res.data)
            }).catch(err=>{
                console.log(err)
            })
        }
        getData();
    },[resource])
    return (
        <section>
            <div className={styles.detailedRow}>
                <span>
                    <IoMdTrendingUp/>
                    &nbsp;
                    trending
                </span>
                <span>
                    no. of items searched: {data.length}
                </span>
                <span className={styles.groupButton}>
                        <button  className={`${styles.buttonFoucus_Hover} ${resource==="gifs"?styles.hoverActive:""}`} value="gifs" onClick={(e)=>getResource(e)}>Gifs</button>
                        <button  className={`${styles.buttonFoucus_Hover} ${resource==="stickers"?styles.hoverActive:""}`} value="stickers" onClick={(e)=>getResource(e)}>Stickers</button>
                </span>
            </div>
            <div className={styles.dataDiv}>
                {
                data.map((gif)=>
                    <ImgContainer src={gif.images.original.url} alt={gif.title} key={gif.id} resource={resource}/>
                )
                }
            </div>
        </section>
    );
}

export default ResultBox;