import React from 'react'

import oldPaper from '../../assets/images/old-paper.png'

export default function Polaroid({ title, body, linkTo, img }) {
    return (
        <div className="polaroid">
            <div className="old-paper">
                <img className="original-image" src={img} alt="projectImage" />
                <div className="overlay">
                    <img src={oldPaper} alt="background" />
                </div>
            </div>

            <div className="polaroid-info">
                <div className="polaroid-heading">
                    {title}
                </div>
                <div className="polaroid-body">
                    {body}
                </div>
                <a href={linkTo}>
                    Read more...
                </a>
            </div>
        </div>
    )
}
