import React from 'react'

export default function Polaroid() {
    return (
        <div className="polaroid">
            <div className="old-paper">
                <img className="original-image black-and-white" src="https://i.imgur.com/ouDwClz.jpg" alt="background" />
                <div className="overlay">
                    <img src="https://i.imgur.com/4rKVgAQ.png" alt="projectimage" />
                </div>
            </div>

            <div className="polaroid-info">
                <div className="polaroid-heading">
                    Project title
                </div>
                <div className="polaroid-body">
                    Veniam aute laboris commodo id ut ad excepteur velit officia eu.
                </div>
                <a href='github.com'>
                    Read more...
                </a>
            </div>
        </div>
    )
}
