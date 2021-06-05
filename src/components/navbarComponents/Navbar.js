import React from 'react'
import { navItems } from './navItems.js'


const NavItem = ({ text, linkTo, className }) => {
    return (
        <div className={`nav-link ${className}`}>
            <a href={linkTo} exact activeClassName='active'>{text}</a>
        </div>
    )
}

export default function Navbar() {
    return (
        <React.Fragment>
            {navItems.map((item, index) => {
                return <NavItem
                    key={index}
                    text={item.text}
                    linkTo={item.linkTo}
                    className={item.className}
                />
            })}
        </React.Fragment>
    )
}
