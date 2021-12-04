import React from 'react';
import { SettingsCounterContainer } from "./Components/CounterSettings/SettingsCounterContainer";
import s from './App.module.css'
import { CounterContainer } from "./Components/Counter/CounterContainer";

function App() {

    return (
        <div className={ s.wrapper }>
            <SettingsCounterContainer/>
            <CounterContainer/>
        </div>
    );
}

export default App;
