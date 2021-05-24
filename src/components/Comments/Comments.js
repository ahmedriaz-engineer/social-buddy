import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Comments = () => {

    const [comments, setComments]= useState([]);
    const {id} = useParams();
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response=> response.json())
        .then(data=> setComments(data))
    },[id])
    return (
        <div>
            
            <strong>Number of Comments: {comments.length}</strong>
           {
               comments.map(comment=>{
                   const { email, body}=comment;
                   return <div>
                       <h3>{email}</h3>
                       <p>{body}</p>
                   </div>
               })
           } 
        </div>
    );
};

export default Comments;