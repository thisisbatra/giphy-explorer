import React, { useEffect,useState,useContext } from 'react';
import { MdOutlineYoutubeSearchedFor } from "react-icons/md";
import styles from './SearchedResultBox.module.css';
import { useNavigate } from 'react-router-dom';
import {cusContext} from '../../Context/StateContext';
import ImgContainer from "../ImgContainer/ImgContainer";
import axios from "axios";

const SearchedResultBox = (props) => {

    const [data,setData]=useState([]);
    const [resource, setResource]=useState("gifs");
    const nav=useNavigate()

    const {searchVal}=useContext(cusContext);

    const getResource=(e)=>{
        // console.log(e.target.value);
        setResource(e.target.value);
    }

    const backButton=()=>{
        nav("/");
    }

    const tagLine=`you have searched ${resource} for ${searchVal}`

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
        getData();
        // console.log(searchVal);
    },[searchVal,resource]);
    return (
        <section>
            <div className={styles.detailedRow}>
                <span>
                <input type="button" value="back" className={styles.backButton} onClick={backButton} />    
                <MdOutlineYoutubeSearchedFor />
                &nbsp;
                    searched: {searchVal?tagLine:"you have searched nothing!"}
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
                    data.map((gif,index)=>
                        <ImgContainer src={gif.images.original.url} alt={gif.title} key={index} resource={resource}/>
                    )
                }
            </div>
        </section>
    );
}

export default SearchedResultBox;
