import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src="https://www.remove.bg/images/samples/combined/s1.jpg" alt=""/>
            {props.message}
            <div>
                <span>{props.likesCount} likes</span>
            </div>

        </div>

    );
}

export default Post;
