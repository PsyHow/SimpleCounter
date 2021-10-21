import {useDispatch, useSelector} from "react-redux";
import {incCounterValueAC, setCounterValueAC,} from "../../BLL/actionCreators";
import {Counter} from "./Counter";
import React from "react";
import {AppStateType} from "../../BLL/redux";

export const CounterContainer = () => {

    const dispatch = useDispatch()
    const counter = useSelector<AppStateType, number | string>(state => state.counter.counter)
    const min = useSelector<AppStateType, number>(state => state.counter.valueMin)
    const error = useSelector<AppStateType, boolean | string>(state => state.counter.error)
    const max = useSelector<AppStateType, number>(state => state.counter.valueMax)

    const typeString = 'string'

    const incNumberHandler = () => {
        if ((typeof counter) !== typeString)
            dispatch(incCounterValueAC())
    }

    const resetInc = () => {
        if ((typeof counter) !== typeString)
            dispatch(setCounterValueAC(min))
    }

    const dis = !!error || counter === max || (typeof (counter) === typeString)


    return <>
        <Counter incNumberHandler={incNumberHandler}
                 resetInc={resetInc}
                 dis={dis}/>
    </>
}



