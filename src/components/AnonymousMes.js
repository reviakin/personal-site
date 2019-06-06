import React, { useState } from 'react'

export default function anonymousMes() {

    var [mesVal, setMesVal] = useState('')
    var [messages, setMessages] = useState([])

    function handleChangeMes(event) {
        setMesVal(event.target.value)
    }

    function submitMes(event) {
        event.preventDefault()
        var oldMessages = [...messages]
        var updateMessages = [
            ...oldMessages,
            mesVal
        ]
        setMessages(updateMessages)
        setMesVal('')
    }

    return (
        <div>
            <form>
                <label>
                    anonymous message
                    <input
                        type="text"
                        value={mesVal}
                        placeholder='What do you think?'
                        onChange={handleChangeMes}
                    />
                </label>
                <button onClick={submitMes}> Submit</button>
            </form>
        </div >
    )
}