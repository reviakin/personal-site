import React from "react"
import ReactDOM from "react-dom"

import Header from "./components/Header";

function App() {
    return (
        <div>
            <h1>Reviakin Dmitry</h1>
            <Header />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"))