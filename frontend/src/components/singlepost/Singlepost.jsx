import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";

export default function SinglePost({ postId }) {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const { user } = useContext(Context);
  const PF = `${process.env.REACT_APP_BACKEND_URL}/images/`;

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/posts/${postId}`);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
      } catch (err) {
        console.error("Error fetching post:", err);
      }
    };
    getPost();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/posts");
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {
      console.error("Error updating post:", err);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}

        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/posts`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>

        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}

        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
