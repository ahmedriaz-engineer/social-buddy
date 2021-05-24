import React from 'react';
import { useHistory } from 'react-router';
import './Post.css'

const Post = (props) => {
    const { id, title, body } = props.post;
    const history = useHistory();
    
    const handleClick=(id)=>{
        history.push(`/post/${id}`)
    }
    
    return (
        <div className= 'post'>
            <strong>User: {id}</strong>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={()=>handleClick(id)}>Post Details</button>
        </div>
    );
};

export default Post;