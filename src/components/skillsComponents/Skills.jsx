import React from 'react'

import { skillsList } from './skillsList'

export default function Skills() {
    return (
        <div className='home skills' id='skills'>
            <div className="left">
                <div className="heading">skills</div>
                <div className="skills-info-container">

                    {skillsList.map((item, index) => {
                        return (
                            <div className="skills-info" key={index}>
                                <div className="heading-info">{item.title}</div>
                                <div className="stack">
                                    {item.stack.map((stItem, stIndex) => {

                                        let tooltiptext = stItem.split('/')[3].split('.')[0]
                                        return (
                                            <div key={stIndex} className="tooltip">
                                                <img src={stItem} alt={'logo ' + stIndex} />
                                                <div className="tooltiptext">{tooltiptext}</div>
                                            </div>
                                        );

                                    })}
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
            <div className="right image-align suit"></div>
        </div>
    )
}
