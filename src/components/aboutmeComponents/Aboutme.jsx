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
                        <p>Sunt aliqua sunt ea nostrud qui duis.Commodo aute aliquip fugiat ea tempor non ea aliquip occaecat.
                            Fugiat mollit exercitation consectetur mollit sint aute velit eiusmod nisi pariatur officia.Lorem eu amet magna veniam.
                            Non aute commodo deserunt fugiat aute magna ipsum in. Nostrud fugiat laborum anim est dolor consequat. Lorem ut pariatur
                            fugiat nostrud nulla aliqua cillum culpa exercitation eiusmod pariatur anim. Aliqua ullamco deserunt laborum nulla
                            Elit enim ad esse elit qui.</p>
                        {/* <p>When I am not coding, you'll find me at the gym or in my room with my guitar.</p> */}
                        <p>Occaecat reprehenderit ullamco dolor cillum aute ut laborum laborum. </p>

                    </div>
                </div>
            </div>
        </div>
    )
}
