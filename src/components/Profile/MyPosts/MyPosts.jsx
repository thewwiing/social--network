import React  from 'react';
import Post   from './Post/Post'
import s      from './MyPosts.module.css'


const MyPosts = (props) => {

    let postsElements = props.posts.map((post) =>
        <Post message={post.message} key={post.id} likesCount={post.likesCount} />
    )

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={ newPostElement }
                              value={ props.newPostText }
                              onChange={ onPostChange }
                    />
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}

export default MyPosts;
