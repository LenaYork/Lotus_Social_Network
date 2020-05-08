import React from 'react';
import styles from './DialogueItem.css';
import {NavLink} from 'react-router-dom';

function DialogueItem(props) {
    return(
        <div className={`${styles.dialogue} ${styles.active}`}>
            <NavLink to={'/dialogues/'+props.id} activeClassName={styles.activeLink}>{props.name}</NavLink>
        </div>
    )
}



export default DialogueItem;