import React from 'react'
import '../../style/latestnews.css';
const LatestNews = () => {
    return (
        <>
        <div className="latestnews">
                <h1>OUR LATEST NEWS</h1>
        </div>
            <div className="News-page">
                <video
                    className="background-video"
                    src="https://bugatti.imgix.video/677db9af00446b3d45384493/mistral-worldrecord-cut-2k.mp4?fm=mp4&res=high"
                    autoPlay
                    loop
                    muted
                    playsInline>
                </video>
                <div className="content">
                    <h4>A RECORD-BREAKING FORCE OF NATURE</h4>
                    <p>Setting a new benchmark at 453.91 km/hr. A triumph of passion, precision, and performance.</p>
                    <button className="discover">
                        DISCOVER THE BUGATTI TOURBILLON
                    </button>
                </div>
            </div>
        </>
    )
}

export default LatestNews
