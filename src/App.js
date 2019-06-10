import React from "react"
import ReactDOM from "react-dom"
import { Router } from '@reach/router'

import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Contacts from "./components/Contacts"
import AnonymousMes from './components/AnonymousMes'

function App() {
    return (
        <div className='cotainer'>
            <div className='title'>
                <h1>Reviakin Dmitry</h1>
            </div>
            <div className='header'>
                <Header />
            </div>
            <div className='content'>
                <Router>
                    <AboutMe path="/" />
                    <Contacts path="/contacts" />
                    <AnonymousMes path="/anonymous" />
                </Router>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"))