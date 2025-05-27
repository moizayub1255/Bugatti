import React from 'react'
import BugattiLive from './BugattiLive'
import '../../style/bugatilive.css'

const IteratorBugattiLive = () => {
    const cars = [
        { img: "https://media-api.flockler.com/instagram/image/3639563493175468923" },
        { img: "https://media-api.flockler.com/instagram/video_cover/3638956153235027029" },
        { img: "https://media-api.flockler.com/instagram/image/3638260212737105374" },
        { img: "https://media-api.flockler.com/instagram/image/3637472770589356169" },
        { img: "https://media-api.flockler.com/instagram/image/3636745465760040885" },
        { img: "https://media-api.flockler.com/instagram/image/3635260585449380302" },
    ]
    return (
        <div>
            <div className='heading_live'>
                <h3>BUGATI LIVE</h3>
            </div>
            <div className="bugatilive_main">
                {
                    cars.map((ele,key) => {
                        return (
                           <div key={key}>
                             <BugattiLive instacars={ele} />
                           </div>
                        )
                    })
                }
            </div>
             <button className='live_buttons'>LOAD MORE POSTS</button>
        </div>
    )
}

export default IteratorBugattiLive
