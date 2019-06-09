import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AnonymousMes({
    myMessage = 'Two and two are five?',
} = {}) {

    var [message, setMessage] = useState(myMessage)
    var [messages, setMessages] = useState([])

    function handleChangeMes(event) {
        setMessage(event.target.value)
    }

    async function getMessageFromServer() {
        var { data } = await axios.get("https://reviakinpersonalsite.firebaseio.com/messages.json")

        var dataWithIterator = {
            ...data,
            *[Symbol.iterator]() {
                for (let key of Object.keys(this)) {
                    yield this[key]
                }
            }
        }

        setMessages([...dataWithIterator] || [])
    }

    useEffect(() => {
        getMessageFromServer()
    }, [])

    return (
        <div>
            <h2>Anonymous message:</h2>
            <form>
                <label>
                    <input
                        type="text"
                        value={message}
                        placeholder='What do you think?'
                        onChange={handleChangeMes}
                    />
                </label>
                <button> Submit</button>
            </form>
            <div>
                {messages.length > 0 && messages.map(function renderMes({ message, time }) {
                    return <p key={time}>{`${message} - ${time}`}</p>
                })}
            </div>
        </div >
    )
}