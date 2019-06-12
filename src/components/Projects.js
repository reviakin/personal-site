
import React from 'react'

var projectsArr = [
    {
        "name": "gorkogo55-main-design",
        "link": "https://codepen.io/reviakin/live/wbWjgQ"
    }
]

export default function Projects() {
    return (
        <div>
            <ul>
                {
                    projectsArr.map(function renderProject({ name, link }) {
                        return (
                            <li key={name}>
                                <a
                                    href={link}
                                    target="_blank"
                                    rel='noreferrer noopener'>
                                    {name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}