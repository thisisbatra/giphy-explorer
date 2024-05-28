import React from 'react';
import styles from './ImgContainer.module.css';
const ImgContainer = (props) => {
    return (
        <div className={styles.cont}>
            <img src={props.src} alt={props.alt} className={styles.img} />
        </div>
    );
}

export default ImgContainer;
