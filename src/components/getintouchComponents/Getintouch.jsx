import React from 'react'
import useSound from 'use-sound'

import { getInTouchList } from './getintouchList'

export default function Getintouch() {

    return (
        <div className="home contact" id="contact">
            <div className="left">
                <div className="contact-heading">
                    get in touch
                </div>

                <div className="contact-body">
                    {
                        getInTouchList.map((item, index) => {
                            return (
                                <SocialLink
                                    key={index}
                                    Icon={item.icon}
                                    text={item.text}
                                    linkTo={item.linkTo}
                                    className={item.class}
                                    note={item.note}
                                />
                            )
                        })
                    }
                </div>

            </div>
            <div className="right image-align duck"></div>
        </div>
    )
}

const SocialLink = ({ text, Icon, linkTo, className, note }) => {
    const [play] = useSound(
        note, { volume: 0.3 }
    )

    return (
        <a title={text} className={`contact ${className}`} href={linkTo}
            onMouseEnter={() => {
                play()
            }}
        >
            <Icon className='large-icon' fontSize='large' />
        </a>
    )
}