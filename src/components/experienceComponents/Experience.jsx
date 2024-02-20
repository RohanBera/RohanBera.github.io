import React, { useState } from 'react'
import { exps } from './experiences'

export default function Experience() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToJob = (jobId) => {
        console.log(jobId, currentIndex);

        setCurrentIndex(jobId)

        console.log(jobId, currentIndex);
    }

    const nextJob = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % exps.length);
    };

    const prevJob = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? exps.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="experience" id="experience">
            <div className="exp-heading">
                experience
            </div>

            <div className="exp-cards-container">
                <button className='prev' onClick={prevJob}> Prev</button>

                {exps.map((exp, idx) => (
                    <div key={idx}
                        // hidden by default
                        className={"exp-card"
                            + (idx === currentIndex ? ' focus' : '')
                            + (idx === (currentIndex + 1) % exps.length ? ' right-blurr' : '')
                            + (idx === (currentIndex - 1 + exps.length) % exps.length ? ' left-blurr' : '')
                        }>
                        <div className="job-title">
                            {exp['job-title']}
                        </div>
                        <div>
                            at <span className="organization">{exp.organisation}</span>
                        </div>
                        <div className="duration">
                            {exp.duration['start-date']} to {exp.duration['end-date']}
                        </div>
                        <div className="card-info">
                            <ul>
                                {exp.work.map((w, wid) => (
                                    <li key={wid}>{w}</li>
                                ))}
                            </ul>
                            <a href={exp.link.href}>{exp.link.text}</a>
                        </div>
                    </div>
                ))}
                <button className='next' onClick={nextJob}> Next</button>
            </div>

            <div className="experience-dots">
                {
                    exps.map((exp, idx) => (
                        <button className={"dot" + (idx === currentIndex ? ' focus' : '')} key={idx} onClick={() => { goToJob(Number(idx)) }}>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}
