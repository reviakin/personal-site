import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import ErrorBoundary from "./ErrorBoundary";

function App() {
    return (
        <ErrorBoundary>
            <div>
                lol
            </div>
        </ErrorBoundary>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
