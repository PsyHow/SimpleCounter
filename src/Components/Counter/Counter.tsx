import {Button} from "../Button";
import React from "react";
import s from './Counter.module.css'

type PropsType = {
    counter: number | string
    max: number
    inCounterValue: () => void
    setCounterValue: (value: number | string) => void
    min: number,
    error: boolean | string
}

export const Counter = (props:PropsType) => {

    const incNumberHandler = () => {
        if ((typeof props.counter) !== 'string')
            props.inCounterValue()
    }
    const resetInc = () => {
        if ((typeof props.counter) !== 'string')
            props.setCounterValue(props.min)
    }

    const dis = !!props.error || props.counter === props.max || (typeof (props.counter) === 'string')

    return (
        <div className={s.counterBox}>
            <div className={s.counter}>
                <div>
                    {props.error ? <div className={s.ErrorH}>{props.error}</div>
                        : <div className={props.counter >= props.max ? s.Er : s.h}>{props.counter}</div>}
                </div>
            </div>
            <div className={s.counterButton}>
                <Button title={"Inc"}
                        className={s.cButton}
                        onClick={incNumberHandler}
                        disabled={dis}/>
                <Button title={"RESET"}
                        className={s.cButton}
                        onClick={resetInc}
                        disabled={!!props.error || (typeof (props.counter) === 'string')}/>
            </div>
        </div>
    )
}