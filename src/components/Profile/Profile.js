import React from 'react';
import styles from './Profile.module.css';
import Post from './MyPosts/Post/Post';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
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
    return (
   <div className={styles.content}>
        <ProfileInfo />
        <MyPosts />
   </div>
    );
}
    
export default Profile;