import React from "react"
import ReactDOM from "react-dom"
import { Router } from '@reach/router'

import ErrorBoundary from './ErrorBoundary'
import Header from "./Header"
import AboutMe from "./AboutMe"
import Contacts from "./Contacts"
import AnonymousMes from './AnonymousMes'
import Projects from './Projects'
import NotFound from './NotFound'

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
                        <Projects path="/projects" />
                        <AnonymousMes path="/anonymous" />
                        <NotFound default />
                    </Router>
                </div>
            </div>
        </ErrorBoundary>
    );
};

ReactDOM.render(<App />, document.getElementById("root"))