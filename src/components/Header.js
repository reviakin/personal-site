import React from 'react'
import { Link } from '@reach/router'

export default function Header(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link {...props} getProps={({ isCurrent }) => {
                        return {
                            style: {
                                color: isCurrent ? "#E2C044" : ""
                            }
                        }
                    }} to="/">
                        Abount me
                    </Link>
                </li>
                <li>
                    <Link {...props} getProps={({ isCurrent }) => {
                        return {
                            style: {
                                color: isCurrent ? "#E2C044" : ""
                            }
                        }
                    }} to="/projects">
                        My project
                    </Link>
                </li>
                <li>
                    <Link {...props} getProps={({ isCurrent }) => {
                        return {
                            style: {
                                color: isCurrent ? "#E2C044" : ""
                            }
                        }
                    }} to="/contacts">
                        Contacts
                    </Link>
                </li>
                <li>
                    <Link {...props} getProps={({ isCurrent }) => {
                        return {
                            style: {
                                color: isCurrent ? "#E2C044" : ""
                            }
                        }
                    }} to="anonymous">
                        Anonymous
                    </Link>
                </li>
            </ul>
        </div>
    )
}