import Header from "../../components/header/Header";
import { useState, useEffect } from 'react';
import axios from "axios";
import "./home.css";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/posts${search}`);
        setPosts(res.data); // Assuming your data is in the 'data' property
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        {/* <Posts posts={posts} /> */}
        {/* You can render the posts here if needed */}
      </div>
    </>
  );
}
