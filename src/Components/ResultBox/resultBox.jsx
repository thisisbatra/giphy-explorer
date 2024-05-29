import { IoMdTrendingUp } from "react-icons/io";
import styles from "./resultBox.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ImgContainer from "../ImgContainer/ImgContainer";
import SkeletonContainer from "../SkeletonContainer/SkeletonContainer";


const ResultBox = () => {
    const [data,setData]=useState([]);
    const [resource, setResource]=useState("gifs");
    const [loading, setLoading]=useState(true);
    const skeletonLength=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
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

        const timeForSkeleton=()=>{
            setTimeout(()=>{
            setLoading(false);
        },3000)
        getData();
        }

        timeForSkeleton();
    },[resource])
    return (
        <section>
            <div className={styles.detailedRow}>
                <span>
                    <IoMdTrendingUp/>
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
                {loading?skeletonLength.map((s)=>
                    <SkeletonContainer key={s}/>
                )
                :
                data.map((gif)=>
                    <ImgContainer src={gif.images.original.url} alt={gif.title} key={gif.id} resource={resource}/>
                )}
            </div>
        </section>
    );
}

export default ResultBox;