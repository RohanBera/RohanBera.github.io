import React from 'react'
import useSound from 'use-sound'

function importAll(r) {
    let notes = {};
    r.keys().forEach((item, index) => {
        notes[item.replace('./', '')] = r(item);
    });
    return notes;
}

export default function Home() {
    const notes = importAll(require.context('../../assets/sounds', false, /\.(wav)$/));

    return (
        <div className="home">
            <div className="left">
                <div className="info">
                    <div className="heading">
                        {
                            'namaste'.split('').map((letter, index) => {
                                return (
                                    <SingleLetter
                                        key={index}
                                        letter={letter}
                                        zIndex={8 - index}
                                        note={notes['note' + (index + 1) + '.wav']}
                                    />
                                )
                            })
                        }
                        {' World.'}
                    </div>
                    <div className="sub-heading">
                        I am Rohan Bera. <br />
                        I code.
                    </div>
                </div>
            </div>
            <div className="right image-align rohan"></div>
        </div>
    )
}

function SingleLetter({ letter, note, zIndex }) {

    const [play] = useSound(
        note, { volume: 0.3 }
    )

    return (
        <span
            onMouseEnter={() => { play() }}
            style={{ zIndex: zIndex }}
            className="namaste">
            {letter}
        </span>
    )
}