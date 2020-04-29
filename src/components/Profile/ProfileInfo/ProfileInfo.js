import React from 'react';
import styles from './ProfileInfo.module.css';
import bg from './bg.jpg';

function ProfileInfo() {
    return(
        <div>
            <div className={styles.contentItem}> 
                <img
                    width="100%"
                    height="100%" 
                    src={bg} /> 
                </div>
            <div className={styles.contentItem}>
                ava description
            </div>
        </div>
    )
}

export default ProfileInfo;