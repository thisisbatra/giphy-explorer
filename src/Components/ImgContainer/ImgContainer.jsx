import React from 'react';
import styles from './ImgContainer.module.css';
const ImgContainer = (props) => {
    return (
        props.resource==="gifs"?
            <div className={styles.cont}>
            <img src={props.src} alt={props.alt} className={styles.img} />
            </div>
            :
            <div className={`${styles.cont} ${styles.contWithStickers}`}>
            <img src={props.src} alt={props.alt} className={styles.img} />
            </div>
    );
}

export default ImgContainer;
