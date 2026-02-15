import React from "react";
import "../../style/bugatilive.css";

const BugattiLive = ({ instacars, onVideoClick }) => {
  const handleVideoClick = (e) => {
    e.stopPropagation();
    if (onVideoClick) {
      onVideoClick();
    }
  };

  return (
    <div className="live_card">
      <div className="live_card_image">
        <img src={instacars.img} alt="Bugatti Live" />
        <div className="live_card_overlay"></div>
      </div>

      <div className="live_card_content">
        {instacars.caption && (
          <p className="live_card_caption">{instacars.caption}</p>
        )}

        <div className="live_card_hover_content">
          <div
            className="live_icon_container"
            onClick={handleVideoClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleVideoClick(e);
              }
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="live_card_decorative"></div>
    </div>
  );
};

export default BugattiLive;
