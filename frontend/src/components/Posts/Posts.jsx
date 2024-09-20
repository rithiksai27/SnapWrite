import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Post from '../../components/post/Post';
import "./posts.css";

export default function PostComp() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/posts`);
        console.log(res);
        setPosts(res.data); // Assuming your data is in the 'data' property
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts(); // Call the fetchPosts function
  }, []); // Empty dependency array to run only once when component mounts

  console.log(posts);

  return (
    <div className="posts">
      <div className="posts-in">
        {/* Map over the posts array and render each Post component */}
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
