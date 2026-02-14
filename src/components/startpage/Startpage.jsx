import React from "react";
import "../../style/startpage.css";

const Startpage = () => {
  return (
    <>
      <div className="startpage-content">
        <video
          className="background-video"
          src="https://bugatti.imgix.video/677e5469dfc8a22d8949671b/tourbillon-hero-2025-landing-long-landscape.mp4?fm=mp4&res=high"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="content">
          <h2>THIS IS FOR</h2>
          <h2>ETERNITY</h2>
          <button className="discover">DISCOVER THE BUGATTI TOURBILLON</button>
        </div>
      </div>
    </>
  );
};

export default Startpage;
