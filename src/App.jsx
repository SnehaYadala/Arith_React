
import { useState } from 'react';
import './App.css';

import { callAPI } from './assets/callAPI';
import { API_URL } from './assets/data';

function App() {
    const [numberA, setNumberA] = useState(0);
    const [numberB, setNumberB] = useState(0);
    const [result, setResult] = useState(0);

    function handleAddition() {
        const data = {
            num1: numberA,
            num2: numberB
        };

        callAPI(
            "POST",
            API_URL + "/add",
            data,
            (response) => setResult(response.result)
        );
    }

    function handleSubtraction() {
        callAPI(
            "GET",
            API_URL + "/sub/" + numberA + "/" + numberB,
            null,
            (response) => setResult(response.result)
        );
    }

    return (
        <div>
            <h1>React Calculator</h1>

            <label>Enter Number A:</label>
            <input
                type="number"
                value={numberA}
                onChange={(e) => setNumberA(e.target.value)}
            />

            <br /><br />

            <label>Enter Number B:</label>
            <input
                type="number"
                value={numberB}
                onChange={(e) => setNumberB(e.target.value)}
            />

            <br /><br />

            <label>Result:</label>
            <input type="number" value={result} readOnly />

            <br /><br />

            <button onClick={handleAddition}>
                Addition
            </button>

            <button onClick={handleSubtraction}>
                Subtraction
            </button>
        </div>
    );
}

export default App;