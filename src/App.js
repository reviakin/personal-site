import React from "react"
import ReactDOM from "react-dom"
import { Router } from '@reach/router'

import ErrorBoundary from './components/ErrorBoundary'
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Contacts from "./components/Contacts"
import AnonymousMes from './components/AnonymousMes'
import NotFound from './components/NotFound'

function App() {
    return (
        <ErrorBoundary>
            <div className='container'>
                <div className='title'>
                    <h1>Reviakin Dmitry</h1>
                </div>
                <div className='navigation'>
                    <Header />
                </div>
                <div className='content'>
                    <Router>
                        <AboutMe path="/" />
                        <Contacts path="/contacts" />
                        <AnonymousMes path="/anonymous" />
                        <NotFound default />
                    </Router>
                </div>
            </div>
        </ErrorBoundary>
    );
};

ReactDOM.render(<App />, document.getElementById("root"))