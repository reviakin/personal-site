import React from 'react'

export default function Contacts() {
    return (
        <div>
            <h3>Contacts:</h3>
            <ul>
                {contacts.map(function renderContacts({ link, name }) {
                    return (
                        <li key={link}>
                            <a
                                href={link}
                                target="_blank"
                                rel='noreferrer noopener'>
                                {name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

var contacts = [
    {
        "link": "https://www.instagram.com/reviakin_/",
        "name": "Instagram"
    },
    {
        "link": "https://vk.com/id539526023",
        "name": "VK"
    },
    // {
    //     "link": "https://t.me/reviak1n",
    //     "name": "Telegram"
    // },
    {
        "link": "mailto:reviakindi@gmail.com?subject=Your personal site is amazing",
        "name": "Email"
    },
    {
        "link": "https://www.last.fm/user/dmitryRev",
        "name": "last.fm"
    },
    {
        "link": "https://github.com/reviakin",
        "name": "GitHub"
    }
]