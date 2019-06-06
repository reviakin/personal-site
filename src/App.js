import React from "react"
import ReactDOM from "react-dom"

import Header from "./components/Header";
import AnonymousMes from './components/AnonymousMes'

function App() {
    return (
        <div>
            <h1>Reviakin Dmitry</h1>
            <Header />
            <AnonymousMes />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"))