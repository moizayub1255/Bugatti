import React from "react";
import BugattiLive from "./BugattiLive";
import "../../style/bugatilive.css";

const IteratorBugattiLive = () => {
  const [showVideo, setShowVideo] = React.useState(false);

  const cars = [
    {
      img: "https://media-api.flockler.com/instagram/image/3639563493175468923",
      caption: "The Art of Performance",
    },
    {
      img: "https://media-api.flockler.com/instagram/video_cover/3638956153235027029",
      caption: "Engineering Excellence",
    },
    {
      img: "https://media-api.flockler.com/instagram/image/3638260212737105374",
      caption: "Iconic Design",
    },
    {
      img: "https://media-api.flockler.com/instagram/image/3637472770589356169",
      caption: "Uncompromising Luxury",
    },
    {
      img: "https://media-api.flockler.com/instagram/image/3636745465760040885",
      caption: "Pure Speed",
    },
    {
      img: "https://media-api.flockler.com/instagram/image/3635260585449380302",
      caption: "Automotive Masterpiece",
    },
  ];

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <>
      <div className="bugatti_live_section">
        <div className="heading_live">
          <div className="heading_decorative_line"></div>
          <h3>
            BUGATTI <span className="heading_accent">LIVE</span>
          </h3>
          <p className="heading_description">
            Experience the thrill of Bugatti through our curated collection of
            moments from around the world
          </p>
        </div>
        <div className="bugatilive_main">
          {cars.map((ele, key) => {
            return (
              <div key={key} className="live_card_wrapper">
                <BugattiLive instacars={ele} onVideoClick={handleVideoClick} />
              </div>
            );
          })}
        </div>
        {/* <button className="live_buttons">LOAD MORE POSTS</button> */}
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="video_modal_overlay" onClick={closeVideo}>
          <div
            className="video_modal_content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="video_modal_close" onClick={closeVideo}>
              &times;
            </button>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PkkV1vLHUvQ?si=iomEP9aFz_0ivIsG"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default IteratorBugattiLive;
