import React, { useEffect,useState,useContext } from 'react';
import { MdOutlineYoutubeSearchedFor } from "react-icons/md";
import styles from './SearchedResultBox.module.css';
import { useNavigate } from 'react-router-dom';
import {cusContext} from '../../Context/StateContext';
import ImgContainer from "../ImgContainer/ImgContainer";
import SkeletonContainer from "../SkeletonContainer/SkeletonContainer";
import axios from "axios";

const SearchedResultBox = (props) => {

    const [data,setData]=useState([]);
    const [resource, setResource]=useState("gifs");
    const [loading, setLoading]=useState(true);
    const skeletonLength=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    const nav=useNavigate()

    const {searchVal}=useContext(cusContext);


    const getResource=(e)=>{
        // console.log(e.target.value);
        setResource(e.target.value);
    }

    const backButton=()=>{
        nav("/");
    }


    useEffect(()=>{
        const getData=()=>{
            // console.log("inside getData",resource);
            let url='http://localhost:3001/searchRequest';
            let p=axios.post(url,{value:resource,search:searchVal});
            p.then(res=>{
                console.log("searched data",res.data)
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

        // console.log(searchVal);

        timeForSkeleton();
    },[searchVal]);
    return (
        <section>
            <div className={styles.detailedRow}>
                <span>
                <input type="button" value="back" className={styles.backButton} onClick={backButton} />    
                <MdOutlineYoutubeSearchedFor />
                &nbsp;
                    searched: {searchVal}
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

export default SearchedResultBox;
