import {connect} from "react-redux";
import {AppStateType} from "../../BLL/redux";
import {
    changeValueMaxAC,
    changeValueMinAC,
    setCounterValueAC, setErrorAC,
    setValueMaxAC,
    setValueMinAC
} from "../../BLL/counterReducer";
import {Dispatch} from "redux";
import {SettingsCounter} from "./SettingsCounter";

type MapDispatchToPropsType = {
    setValueMin: (value: number) => void
    setValueMax: (value: number) => void
    setError: (value: string | boolean) => void
    setCounterValue: (value: number | string) =>void
    changeValueMin: (value:number)=>void
    changeValueMax: (value:number)=>void
}

type MapStateToPropsType = {
    min: number,
    max : number,
    error: boolean | string
}

let MapStateToProps = (state: AppStateType) : MapStateToPropsType => {
    return {
        error: state.counter.error,
        min: state.counter.valueMin,
        max: state.counter.valueMax,
    }
}

let MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setValueMin: (value: number) => {
            dispatch(setValueMinAC(value))
        },
        setValueMax: (value: number) => {
            dispatch(setValueMaxAC(value))
        },
        setError: (value: string | boolean) => {
            dispatch(setErrorAC(value))
        },
        setCounterValue: (value: number | string) => {
            dispatch(setCounterValueAC(value))
        },
        changeValueMin: (value:number)=> {
            dispatch(changeValueMinAC(value))
        },
        changeValueMax: (value:number)=> {
            dispatch(changeValueMaxAC(value))
        }
    }
}
export const SettingsCounterContainer = connect(MapStateToProps, MapDispatchToProps)(SettingsCounter)