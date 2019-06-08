import React from "react"
import ReactDOM from "react-dom"
import { Router } from '@reach/router'

import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Contacts from "./components/Contacts";
import AnonymousMes from './components/AnonymousMes'

function App() {
    return (
        <div>
            <h1>Reviakin Dmitry</h1>
            <Header />
            <AboutMe />
            <Contacts />
            <AnonymousMes />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"))