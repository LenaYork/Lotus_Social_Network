import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post.js';

function MyPosts() {
    const postsData = [
        {id: 1, message: 'New here', likesCount: 12},
        {id: 2, message: 'Hows ur react?', likesCount: 1},
        {id: 3, message: 'Hello World!', likesCount: 50},
        {id: 4, message: 'I can code', likesCount: 17},

    ];

    let postsElement = postsData.map(el => (
        <Post message={el.message} likesCount={el.likesCount} id={el.id} />
        )
    );

    return(
        <div className={styles.contentItem}>
       <h3>My posts</h3>

        <div className ={styles.newPost}>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div>
            {postsElement}
        </div>
        </div>
    )
}

export default MyPosts;