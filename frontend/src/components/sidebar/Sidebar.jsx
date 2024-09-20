import "./sidebar.css";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/categories`);
        setCats(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchData(); // Call the asynchronous function inside useEffect
  }, []); // Empty dependency array to run only once when component mounts

  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img 
          src="https://images.unsplash.com/photo-1497215842964-222b430dc094?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFwdG9wLHdyaXRpbmd8fHx8fHwxNzA0MzYyMjcy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200" 
          alt=""
        />
        <p>This is a new website created for the users to write their own blogs and publish here.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link" key={c.id}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon topIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon topIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon topIcon fa-brands fa-pinterest"></i>
          <i className="sidebarIcon topIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
