import React from 'react';
import {SettingsCounterContainer} from "./Components/CounterSettings/SettingsCounterContainer";
import {CounterContainer} from "./Components/Counter/CounterContainer";
import s from './App.module.css'

function App() {

    return (
        <div className={s.wrapper}>
            <SettingsCounterContainer/>
            <CounterContainer/>
        </div>
    );
}

export default App;
