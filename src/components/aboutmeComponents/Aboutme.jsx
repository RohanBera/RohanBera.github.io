import React from 'react'
import Typewriter from 'typewriter-effect';

import dio from '../../assets/images/aboutme.gif'

export default function Aboutme() {
    return (
        <div className='home about' id='about'>
            <div className="left">
                <div className="about-gif">
                    <img src={dio} alt="dio" />
                </div>
                <div className="about-heading">
                    <Typewriter
                        options={{
                            deleteSpeed: 15,
                            strings: ['Human rohan = new Human();'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="right">
                <div className="about-info">
                    <div className="heading-info">
                        about me.
                    </div>
                    <div className="main-info">
                        I am a student at University of Hyderabad pursuing Integrated Mtech in Computer Science.
                    </div>
                    <div className="sub-info">
                        <p> I was introduced to the fascinating world of computers in 2008 when my dad brought home a Compaq desktop computer.
                            Remember that one kid in your colony whose house you and your friends used to go to play the legendary Roadrash and bet on who gets the highest score?
                            Well, I was that kid <span role="img" aria-labelledby="cool">😎</span>.
                            I grew, and so did my fascination with computers.
                        </p>
                        <p>When I am not coding, you'll find me at the gym or in my room with my guitar.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
