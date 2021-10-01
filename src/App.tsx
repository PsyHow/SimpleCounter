import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";
import {SettingsCounter} from "./Components/SettingsCounter";
import {Input} from "./Components/Input";

function App() {

    const [valueMin, setValueMin] = useState<number>(0)
    const [valueMax, setValueMax] = useState<number>(0)
    const [error, setError] = useState<boolean | string>(false)
    const [counter, setCounter] = useState<number | string>('Press Set')

    return (
        <div className="wrapper">
            <SettingsCounter error={error}
                             valueMin={valueMin}
                             valueMax={valueMax}
                             setError={setError}
                             setValueMin={setValueMin}
                             setValueMax={setValueMax}
                             setCounter={setCounter}/>
            <Counter error={error}
                     valueMin={valueMin}
                     valueMax={valueMax}
                     setCounter={setCounter}
                     counter={counter}/>
        </div>
    );
}

export default App;
