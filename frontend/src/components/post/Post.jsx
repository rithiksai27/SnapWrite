import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const handleClick = (post_id) => {
    window.location = `/posts/${post_id}`;
  };

  // Use the backend URL from environment variables
  const PF = process.env.REACT_APP_BACKEND_URL + "/images/";

  return (
    <div className="post" onClick={() => handleClick(post._id)}>
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span key={c._id} className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
