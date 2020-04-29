import React from 'react';
import styles from './Post.module.css';

function Post(props) {

    return (
        <div className={styles.post}>
            <img src="https://rockcult.ru/wp-content/uploads/2017/11/amy-lee-350x232.jpg" alt='pic' />
                {props.message}
            <div>
                <span>
                    {props.likesCount} likes
                </span>
            </div>
        </div>
    )
}

export default Post;