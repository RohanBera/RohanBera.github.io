import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';

import Polaroid from './Polaroid'
import { projectList } from './projectList'

export default function Projects() {
    return (
        <div className='projects dots'>
            <div className='left'>
                <div style={{ height: 150 }}></div>

                {
                    projectList.map((project, index) => {
                        return (
                            <Polaroid
                                key={index}
                                title={project.title}
                                body={project.body}
                                img={project.img}
                                linkTo={project.linkTo}
                                stack={project.stack}
                            />
                        );
                    })
                }

                <div style={{ height: 150 }}></div>

            </div>
            <div className='right'>
                <div className='container'>
                    <div className='info'>
                        <div className='heading' >
                            Projects
                        </div>
                        <div className='body' >
                            Projects. Projects. Projects.
                        </div>
                        <div className='matter' >
                            Lorem ipsum dolor sit amet, <br />consectetur adipiscing.
                        </div>
                    </div>
                    <br />
                    <br />

                    <a href='https://github.com/RohanBera' className=''>
                        <div>Aao kabhi <span>Github</span> pe <span role="img" aria-labelledby="heart">🖤</span> </div>
                        <GitHubIcon style={{ fontSize: 40 }} />
                    </a>
                </div>
            </div>
            {/* 
            <div class="marquee">
                <span>this is a</span>
                <span>simple marquee</span>
                <span>using css</span>
                <span>only tech</span>
                <span>with a delay</span>
                <span>brrrr</span>
            </div> */}

        </div>
    )
}
