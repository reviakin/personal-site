import React, { useState } from 'react'
import axios from 'axios'

export default function AnonymousMes({
    myMessage = 'Two and two are five?',
} = {}) {

    var [message, setMessage] = useState(myMessage)
    var [messages, setMessages] = useState([])

    function handleChangeMes(event) {
        setMessage(event.target.value)
    }

    function submitMes(event) {
        event.preventDefault()
        var oldMessages = [...messages]
        var updateMessages = [
            ...oldMessages,
            message
        ]
        setMessages(updateMessages)
        setMessage('')
    }

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
                <button onClick={submitMes}> Submit</button>
            </form>
        </div >
    )
}