
import React, { useEffect } from 'react';
import "./header.css";

export default function Header() {
  
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlelg">SnapWrite</span>
      </div>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="500">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1656998019079-a7f9182c12be?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1699450059276-395702321b34?q=80&w=3494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1484712401471-05c7215830eb?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1615221158595-681cd4b379c1?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1512144915806-39e29c5565a9?q=80&w=3552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1703876087817-010eef3e0d59?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
          </div>
           <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1611628131746-3250d4c0fd38?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1494886306776-1f68f55caffb?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
          </div> 
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
          </div> 
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1660551552377-b0207f194ae2?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
          </div>
         
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

      <div className="captionThis">
        <h2>Write Your Story</h2>
      </div>
      <div className="videobit">
        <video src="https://s1.wp.com/wp-content/themes/h4/assets/block-editor/2022-10@2x.mp4" autoPlay loop muted playsInline preload="metadata" width="1000" height="1000" jm_neat="625045505" data-video="0"></video>
      </div>
      <div className="captionThis">
        <h2>Track Your Changes</h2>
      </div>

      <div class="storyForm">
  <div class="storyInner">
    <h1>Coordinate day-to-day tasks</h1>
    <h3>Utilize the dashboard for overseeing your publishing schedule and categories, adjusting contributor preferences, and monitoring analytics.</h3>
    <p>Evaluate blog traffic through analytics, revealing which posts resonate the most with readers and informing strategic content adjustments.</p>
    <p>Set personalized permissions for contributors and schedule posts to publish on specific dates, transforming your blog into a well-managed publication.</p>
    <p>Organize, tag, and highlight posts to enhance user experience, making it effortless for readers to discover and explore new and relevant content.</p>
  </div>
</div>

      <div className="captionThis">
        <h2>Connect, Share, Engage</h2>
      </div>

      <div class="description-container">
  <div class="card">
    <h2 class="card-title">Out there, your audience is waiting.</h2>
    <p class="card-text">
    Use it to connect with people who might be interested in what you have to offer.
    </p>
  </div>
  <div class="card">
    <h2 class="card-title">Begin your website today.</h2>
    <p class="card-text">
    Build a Snapwrite.com website to spread your thoughts globally.
    </p>
  </div>
  <div class="card">
    <h2 class="card-title">Get your message across with a newsletter.</h2>
    <p class="card-text">
    Make your Snapwrite.com site a newsletter and engage with your readers.
    </p>
  </div>
  <div class="card">
    <h2 class="card-title">Interact with your audience.</h2>
    <p class="card-text">
    The Reader helps you stay updated and connect with others.
    </p>
  </div>
  <div class="card">
    <h2 class="card-title">Share the news</h2>
    <p class="card-text">
    Use Blaze to extend your social media reach and highlight your posts.
    </p>
  </div>
  <div class="card">
    <h2 class="card-title">Inform them of the latest developments
</h2>
    <p class="card-text">
    RSS lets your audience easily follow your updates and stay current.
    </p>
  </div>
</div>


      <div className="captionThis">
        <h2>Empower, Inspire, Share</h2>
      </div>

      
      

    </div>
  );
}
