import React, { useState } from "react";

export const App = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div style={{textAlign: "center"}} >
            <h1>React App</h1>
            <button onClick={() => setCounter(counter + 1)} >counter: {counter}</button>
        </div>
    )
}