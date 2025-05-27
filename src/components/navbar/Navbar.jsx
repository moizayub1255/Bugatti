import React from 'react'
import '../../style/navbar.css'
const Navbar = () => {
    return (
        <div>
            <div className="mainNav">
                <div className="leftNav">
                    <ul>
                        <li>LA MARQUE</li>
                        <li>HYPER SPORTS CARS</li>
                        <li>LIFESTYLE</li>
                    </ul>
                </div>
                <div className="brandName">
                    <h1>BUGATTI</h1>
                </div>
                <div className="rightNav">
                    <ul>
                        <li>NewsRoom</li>
                        <li>STORE</li>
                        <li>EN</li>
                        <li>FR</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
