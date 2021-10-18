import {connect} from "react-redux";
import {AppStateType} from "../../BLL/redux";
import {incCounterValueAC, setCounterValueAC,} from "../../BLL/counterReducer";
import {Dispatch} from "redux";
import {Counter} from "./Counter";

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

export const CounterContainer = connect(MapStateToProps, MapDispatchToProps)(Counter)
