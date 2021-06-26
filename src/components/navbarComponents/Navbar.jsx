import React from 'react'
import { navItems } from './navItems.js'
import { HashLink as Link } from 'react-router-hash-link';

import r from '../../assets/images/r.png'

const NavItem = ({ text, linkTo, className }) => {
    return (
        <div className={`nav-link`}>
            <Link smooth to={linkTo} className={className}>{text}</Link>
        </div>
    )
}

export default function Navbar() {
    return (
        <React.Fragment>
            <div className='nav-title'>
                {/* <a href='/'>Rohan</a> */}
                <a href='/'><img src={r} alt="R" /></a>
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
