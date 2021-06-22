import React from 'react'
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

const SocialLink = ({ text, Icon, linkTo, className }) => {
    return (
        <a title={text} className={`contact ${className}`} href={linkTo}>
            <Icon className='large-icon' fontSize='large' />
        </a>
    )
}