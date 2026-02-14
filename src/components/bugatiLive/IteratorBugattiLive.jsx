import React from "react";
import BugattiLive from "./BugattiLive";
import "../../style/bugatilive.css";

const IteratorBugattiLive = () => {
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
  return (
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
              <BugattiLive instacars={ele} />
            </div>
          );
        })}
      </div>
      <button className="live_buttons">LOAD MORE POSTS</button>
    </div>
  );
};

export default IteratorBugattiLive;
