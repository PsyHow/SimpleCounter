import {Button} from "./Button";
import React from "react";

type CounterPropsType = {
    error: boolean | string
    valueMin: number
    valueMax: number
    counter: number | string
    setCounter: (counter: number | string) => void
}

export const Counter = (props: CounterPropsType) => {


    const incNumberHandler = () => {
        if(typeof (props.counter) !== 'string')
            props.setCounter(props.counter + 1)
    }
    const resetInc = () => {
        if(typeof (props.counter) !== 'string')
            props.setCounter(props.valueMin)
    }

    const dis = !!props.error || props.counter === props.valueMax || (typeof (props.counter) === 'string')

    return (
        <div className="counterBox">
            <div className='counter'>
                <div>
                    {props.error ? <div className={'hError'}>{props.error}</div>
                        : <div className={props.counter >= props.valueMax ? 'Er' : 'h'}>{props.counter}</div>}
                </div>
            </div>
            <div className='counterButton'>
                <Button title={"Inc"} className={'cButton'} onClick={incNumberHandler} disabled={dis}/>
                <Button title={"RESET"} className={'cButton'} onClick={resetInc} disabled={!!props.error || (typeof (props.counter) === 'string')}/>
            </div>
        </div>
    )
}