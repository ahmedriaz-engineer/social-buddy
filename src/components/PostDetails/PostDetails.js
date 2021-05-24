import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';


const PostDetails = () => {
    const [postDetails, setPostDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPostDetails(data));
    }, [id])
    // const history = useHistory();
    // const handleClick=()=>{
    //     history.push('/comments')
    // }

    return (
        <div className='post'>
            <strong>User {postDetails.id} Posted:</strong>
            <h3> {postDetails.title}</h3>
            <p>{postDetails.body}</p>
            <br />
            {/* <button onClick = {handleClick}>Comments</button> */}
            {/* <Link to="/comments">Comments</Link> */}
            <Comments key ={id}></Comments>

        </div>
    );
};

export default PostDetails;