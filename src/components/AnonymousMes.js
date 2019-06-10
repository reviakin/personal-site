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

    function submitMes(event) {
        event.preventDefault()
        var sendMes = {
            "message": message,
            "time": new Date()
        }
        axios.post("https://reviakinpersonalsite.firebaseio.com/messages.json", sendMes)
            .then(() => {
                getMessageFromServer()
                setMessage('')
            })
    }

    return (
        <div>
            <h3>Anonymous message:</h3>
            <form>
                <label>
                    <input
                        type="text"
                        value={message}
                        placeholder='What do you think?'
                        onChange={handleChangeMes}
                    />
                </label>
                <button
                    onClick={submitMes}
                    disabled={!message}>
                    Submit
                </button>
            </form>
            <div>
                {messages.length > 0 && messages.map(function renderMes({ message, time }) {
                    return (
                        <p key={time} className='message'>
                            {`${message} - ${time}`}
                        </p>
                    )
                })}
            </div>
        </div >
    )
}