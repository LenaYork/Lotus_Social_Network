import React from 'react';
import styles from './DialogueMessage.css';

function DialogueMessage(props) {
        return(
            <div className={styles.message}>{props.message}</div>
        )   
    }

export default DialogueMessage;