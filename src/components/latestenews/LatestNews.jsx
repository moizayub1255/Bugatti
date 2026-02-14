import React from "react";
import "../../style/latestnews.css";
const LatestNews = () => {
  return (
    <>
      <div className="latestnews-section">
        <h1 className="section-title">LATEST NEWS & UPDATES</h1>
      </div>

      <div className="News-page">
        <video
          className="background-video"
          src="https://bugatti.imgix.video/677db9af00446b3d45384493/mistral-worldrecord-cut-2k.mp4?fm=mp4&res=high"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="video-overlay"></div>
        <div className="content">
          {/* <div className="badge">WORLD RECORD</div> */}
          {/* <h4>A RECORD-BREAKING FORCE OF NATURE</h4> */}
          <p>
            Setting a new benchmark at 453.91 km/hr. A triumph of passion,
            precision, and performance.
          </p>
          {/* <button className="discover">DISCOVER MORE</button> */}
        </div>
      </div>

      <div className="news-grid">
        <div className="news-card">
          <h3>Speed Innovation</h3>
          <p>Experience unparalleled performance and engineering excellence.</p>
          {/* <a href="#" className="card-link">
            Learn More
          </a> */}
        </div>
        <div className="news-card">
          <h3>Precision Engineering</h3>
          <p>
            Crafted with meticulous attention to every detail and specification.
          </p>
          {/* <a href="#" className="card-link">
            Learn More
          </a> */}
        </div>
        <div className="news-card">
          <h3>Luxury Experience</h3>
          <p>Immerse yourself in the pinnacle of automotive craftsmanship.</p>
          {/* <a href="#" className="card-link">
            Learn More
          </a> */}
        </div>
      </div>
    </>
  );
};

export default LatestNews;
