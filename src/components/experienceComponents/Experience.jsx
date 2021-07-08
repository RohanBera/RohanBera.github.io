import React from 'react'

export default function Experience() {
    return (
        <div className="experience" id="experience">
            <div className="exp-heading">
                experience
            </div>

            <div className="exp-cards-container">
                <div className="exp-card">
                    <div className="job-title">
                        SDE Intern
                    </div>
                    <div>
                        at <span className="organization">INCOIS</span>
                    </div>
                    <div className="duration">
                        3rd May 2019 to 9th June 2019
                    </div>
                    <div className="card-info">
                        <ul>
                            <li>Built a python program to interpolate ocean temperature and salinity values over a given ﬁnite set of ocean pressure values.</li>
                            <li>Learnt use of python library ’pydiva’</li>
                        </ul>
                        <a href="https://github.com/RohanBera/Interpolation-using-PYDIVA">Read more...</a>
                    </div>
                </div>

                <div className="exp-card">
                    <div className="job-title">
                        SDE Intern
                    </div>
                    <div>
                        at <span className="organization">Apty</span>
                    </div>
                    <div className="duration">
                        12th Oct 2020 to 30th Jan 2021
                    </div>
                    <div className="card-info">
                        <ul>
                            <li>Built an admin page to manage onboarding new users</li>
                            <li>Built an e-commerce website, which was used as a testing ground for their product.</li>
                            <li>Learnt ReactJS</li>
                        </ul>
                        <a href="https://github.com/RohanBera/Shopping">Read more...</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
