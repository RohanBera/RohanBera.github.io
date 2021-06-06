import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Projects() {
    return (
        <div className='projects dots'>
            <div className='left'> brrr</div>
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
        </div>
    )
}
