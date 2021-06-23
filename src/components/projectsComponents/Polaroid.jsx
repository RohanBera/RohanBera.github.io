import React, { useState, useEffect } from 'react'

import oldPaper from '../../assets/images/old-paper.png'

export default function Polaroid({ title, body, linkTo, img, stack }) {

    const [mounted, didMount] = useState(false)

    useEffect(() => {
        if (!mounted) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            didMount(true)
        }
    })

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

                <div className="links">
                    <div className="stack">
                        {stack.map((item, index) => {
                            let tooltiptext = item.split('/')[3].split('.')[0]
                            return (
                                <div key={index} className="tooltip">
                                    <img src={item} alt={'logo ' + index} />
                                    <div className="tooltiptext">{tooltiptext}</div>
                                </div>
                            );
                        })}

                    </div>
                    <a href={linkTo}>
                        Read more...
                    </a>
                </div>

            </div>
        </div>
    )
}
