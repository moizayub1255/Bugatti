import React from 'react'
import LaMaisonbugati from './LaMaisonbugati'
import '../../style/La.css'
const LAmainsonIterator = () => {
    const card = [{
        title: "DISCOVER BUGATTI",
        des: "IF COMPARABLE, IT IS NO LONGER BUGATTI",
        btn: "LEARN MORE ABOUT BUGATTI",
        img: "https://bugatti.imgix.net/6734a2b6eae7ef2f6d1c330d/02%20BUGATTI_Custmer-Car-Gathering.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=512&fp-x=0.5&fp-y=0.5&dpr=1.5"
    },
    {
        title: "HISTORIC MODELS",
        des: "MILESTONES IN THE AUTOMOTIVE HISTORY",
        btn: "LEARN MORE ABOUT OUR HISTORIC MODELS",
        img: "https://bugatti.imgix.net/6734a28b8d33578d8bd2af36/01%20BUGATTI_Type%2035%20Making%20of%20a%20Champion_edit.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=512&fp-x=0.5&fp-y=0.5&dpr=1.5"
    },
    {
        title: "CAREERS",
        des: "WORKING AT BUGATTI",
        btn: "LEARN MORE ABOUT CAREERS AT BUGATTI",
        img: "https://bugatti.imgix.net/6734a52ceae7ef2f6d1c380c/AB105132_Crop.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=512&fp-x=0.5&fp-y=0.5&dpr=1.5"
    }
    ]
    return (
        <div className="supermain">
            <div className='maindiv'>
                <p>LA MAISON BUGATTI</p>
                <p>Since 1909, the people at BUGATTI Automobiles create incomparable products and <br /> experiences by pushing the limits of aesthetics and dynamics</p>
                <div className="card_div">
                    {
                        card.map((ele, key) =>
                        (
                            <div className='data_div' key={key}>
                                <LaMaisonbugati data={ele} />
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default LAmainsonIterator
