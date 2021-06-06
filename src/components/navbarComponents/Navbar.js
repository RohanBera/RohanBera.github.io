import React from 'react'
import { navItems } from './navItems.js'
import { Link } from 'react-router-dom'


const NavItem = ({ text, linkTo, className }) => {
    return (
        <div className={`nav-link`}>
            <Link to={linkTo} className={className}>{text}</Link>
            {/* <a href={linkTo} className={className}>{text}</a> */}
        </div>
    )
}

export default function Navbar() {
    return (
        <React.Fragment>
            <div className='hero'>
                <a href='/'>Rohan</a>
            </div>

            <div className='nav-links'>
                {navItems.map((item, index) => {
                    return <NavItem
                        key={index}
                        text={item.text}
                        linkTo={item.linkTo}
                        className={item.className}
                    />
                })}
            </div>
        </React.Fragment>
    )
}
