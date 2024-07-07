import React from 'react';
import styles from './ImgContainer.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SkeletonImgContainer=()=>{
    const randomColor=require('randomcolor')
    let propForRandomColor={
        luminosity:'light',
        hue: 'random'
    }
    let mycolor=randomColor(propForRandomColor)
    const inlineStyle={
        backgroundColor: `${mycolor}`,
        height: '100%',
        width: '100%'
    }
    return(
        <div style={inlineStyle}>

        </div>
    )
}

const ImgContainer = (props) => {
    return (
        props.resource==="gifs"?
            <div className={styles.cont}>
            {/* <img src={props.src} alt={props.alt} className={styles.img} /> */}
            <LazyLoadImage src={props.src} alt={props.alt} placeholder={<SkeletonImgContainer/>} delayTime={1000} className={styles.img} />
            </div>
            :
            <div className={`${styles.cont} ${styles.contWithStickers}`}>
            {/* <img src={props.src} alt={props.alt} className={styles.img} /> */}
            <LazyLoadImage src={props.src} alt={props.alt} placeholder={<SkeletonImgContainer/>} className={styles.img} />
            </div>
    );
}
export default ImgContainer;
