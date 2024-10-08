import React from 'react';
import "./header.css";

export default function Header() {
  const backendURL = process.env.REACT_APP_BACKEND_URL;

  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlelg">WorkShopHub</span>
      </div>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="500">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={`${backendURL}/images/image1.jpg`} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={`${backendURL}/images/image2.jpg`} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={`${backendURL}/images/image3.jpg`} className="d-block w-100" alt="Slide 3" />
          </div>
          {/* Add more carousel items as needed */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

     
      <div className="videobit">
        <video 
          src={`${backendURL}/videos/intro.mp4`} 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="metadata" 
          width="1000" 
          height="1000" 
        ></video>
      </div>
      <div className="captionThis">
        <h2>Track Your Changes</h2>
      </div>

<<<<<<< HEAD
      <div className="storyForm">
        <div className="storyInner">
          <h1>Coordinate day-to-day tasks</h1>
          <h3>Utilize the dashboard for overseeing your publishing schedule and categories, adjusting contributor preferences, and monitoring analytics.</h3>
          <p>Evaluate blog traffic through analytics, revealing which posts resonate the most with readers and informing strategic content adjustments.</p>
          <p>Set personalized permissions for contributors and schedule posts to publish on specific dates, transforming your blog into a well-managed publication.</p>
          <p>Organize, tag, and highlight posts to enhance user experience, making it effortless for readers to discover and explore new and relevant content.</p>
        </div>
      </div>
=======
      <div class="storyForm">
      <div class="storyInner">
    <h1>Coordinate Learning Activities</h1>
    <h3>Utilize the dashboard to manage your courses, track student progress, and adjust instructional strategies.</h3>
    <p>Monitor student engagement through analytics, identifying which activities resonate most and guiding course improvements.</p>
    <p>Set customized permissions for student collaboration, allowing them to participate in discussions and share resources effectively.</p>
    <p>Organize, tag, and highlight learning materials to enhance the user experience, making it easy for students to find and explore relevant content.</p>
</div>

</div>
>>>>>>> origin/main

      <div className="captionThis">
        <h2>Connect, Share, Engage</h2>
      </div>

<<<<<<< HEAD
      <div className="description-container">
        <div className="card">
          <h2 className="card-title">Out there, your audience is waiting.</h2>
          <p className="card-text">
            Use it to connect with people who might be interested in what you have to offer.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Begin your website today.</h2>
          <p className="card-text">
            Build a Snapwrite.com website to spread your thoughts globally.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Get your message across with a newsletter.</h2>
          <p className="card-text">
            Make your Snapwrite.com site a newsletter and engage with your readers.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Interact with your audience.</h2>
          <p className="card-text">
            The Reader helps you stay updated and connect with others.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Share the news</h2>
          <p className="card-text">
            Use Blaze to extend your social media reach and highlight your posts.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Inform them of the latest developments</h2>
          <p className="card-text">
            RSS lets your audience easily follow your updates and stay current.
          </p>
        </div>
      </div>
=======
      <div class="description-container">
  <div class="card">
    <h2 class="card-title">Connect Instructors and Students.</h2>
    <p class="card-text">
      WorkShopHub provides a platform for instructors and students to engage in meaningful ways.
    </p>
  </div>
  <div class="card">
    <h2 class="card-title">Enhance Learning Experiences.</h2>
    <p class="card-text">
      Utilize interactive tools to foster collaboration and enrich the learning process.
    </p>
  </div>
  <div class="card">
    <h2 class="card-title">Real-Time Feedback.</h2>
    <p class="card-text">
      Instructors can give immediate feedback, helping students improve and stay motivated.
    </p>
  </div>
  <div class="card">
    <h2 class="card-title">Create Engaging Content.</h2>
    <p class="card-text">
      Share resources, assignments, and multimedia to create an immersive learning environment.
    </p>
  </div>
  <div class="card">
    <h2 class="card-title">Foster Community.</h2>
    <p class="card-text">
      Build a supportive community where students can collaborate and learn from each other.
    </p>
  </div>
  <div class="card">
    <h2 class="card-title">Stay Updated on Courses.</h2>
    <p class="card-text">
      Use notifications and updates to keep everyone informed about important course information.
    </p>
  </div>
</div>

>>>>>>> origin/main

      <div className="captionThis">
        <h2>Empower, Inspire, Share</h2>
      </div>
    </div>
  );
}
