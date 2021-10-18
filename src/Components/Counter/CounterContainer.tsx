import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../BLL/redux";
import {incCounterValueAC, setCounterValueAC,} from "../../BLL/actionCreators";
import {Dispatch} from "redux";
import {Counter} from "./Counter";
import React from "react";

const CounterContainer: React.FC<CProps> = props => {

    const {
        counter,
        max,
        inCounterValue,
        setCounterValue,
        min,
        error,
    } = props

    const typeString = 'string'

    const incNumberHandler = () => {
        if ((typeof counter) !== typeString)
            inCounterValue()
    }

    const resetInc = () => {
        if ((typeof counter) !== typeString)
            setCounterValue(min)
    }

    const dis = !!error || counter === max || (typeof (counter) === typeString)


    return <>
        <Counter incNumberHandler={incNumberHandler}
                 resetInc={resetInc}
                 dis={dis}
                 error={error}
                 counter={counter}
                 max={max}/>
    </>
}

type MapDispatchToPropsType = {
    inCounterValue: () => void
    setCounterValue: (value: number | string) => void
}

type MapStateToPropsType = {
    counter: number | string
    max: number
    min: number,
    error: boolean | string
}

let MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        counter: state.counter.counter,
        max: state.counter.valueMax,
        min: state.counter.valueMin,
        error: state.counter.error
    }
}

let MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        inCounterValue: () => {
            dispatch(incCounterValueAC())
        },
        setCounterValue: (value: number | string) => {
            dispatch(setCounterValueAC(value))
        },
    }
}


type CProps = ConnectedProps<typeof connector>
const connector = connect(MapStateToProps, MapDispatchToProps)

export default connector(CounterContainer);


