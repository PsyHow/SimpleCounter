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
        props.setCounter(+props.counter + 1)
    }
    const resetInc = () => {
        props.setCounter(props.valueMin)
    }

    function dis() {
        return !!props.error || props.counter === props.valueMax
    }

    return (
        <div className="counterBox">
            <div className='counter'>
                <div>
                    {props.error ? <div className={'hError'}>{props.error}</div>
                        : <div className={props.counter >= props.valueMax ? 'Er' : 'h'}>{props.counter}</div>}
                </div>
            </div>
            <div className='counterButton'>
                <Button title={"Inc"} className={'cButton'} onClick={incNumberHandler} disabled={dis()}/>
                <Button title={"RESET"} className={'cButton'} onClick={resetInc} disabled={!!props.error}/>
            </div>
        </div>
    )
}