import React from 'react'
import { Link } from '@reach/router'

export default function Header(props) {
    return (
        <div>
            <ul>
                {renderNavLink(navLink, props)}
            </ul>
        </div>
    )
}

var navLink = [
    {
        "name": "About me",
        "link": "/"
    },
    {
        "name": "My project",
        "link": "/projects"
    },
    {
        "name": "Contacts",
        "link": "/contacts"
    },
    {
        "name": "Anonymous",
        "link": "/anonymous"
    }
]

function renderNavLink(links, props) {
    return (
        links.map(function renderLinksToLi({ name, link }) {
            return (
                <li key={link}>
                    <Link
                        {...props} getProps={({ isCurrent }) => {
                            return {
                                style: {
                                    color: isCurrent ? "#E2C055" : ""
                                }
                            }
                        }}
                        to={link}>
                        {name}
                    </Link>
                </li>
            )
        })
    )

}