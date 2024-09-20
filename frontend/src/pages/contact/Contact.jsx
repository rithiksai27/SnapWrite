import React, { useState } from 'react';
import './contact.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/contact`, {
        firstName,
        lastName,
        email,
        subject,
        comments,
      });
      alert("Message sent successfully!");
    } catch (err) {
      console.error("Error sending message:", err);
      alert("Failed to send message.");
    }
  };

  return (
    <>
      <div className='back'>
        <div className="contact-form">     
          <span className='topping'>Drop us a line</span>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="label" htmlFor="firstName">First Name</label>
              <input
                className="input-field form-control"
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="label" htmlFor="lastName">Last Name</label>
              <input
                className="input-field form-control"
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="label" htmlFor="email">Email address</label>
              <input
                className="input-field form-control"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="label" htmlFor="subject">Subject</label>
              <input
                className="input-field form-control"
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="label" htmlFor="comments">Comments</label>
              <textarea
                className="input-field form-control"
                id="comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-outline-success button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
