import React, { useEffect, useState } from 'react';
import Post from './Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h1>This is Home</h1>
            <h3>I have get {posts.length} post.</h3>

            {
                posts.map(post => <Post post ={post} key={post.id}></Post>)
            }
        </div>
    );
};

export default Home;