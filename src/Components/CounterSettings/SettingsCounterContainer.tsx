import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../BLL/redux";
import {
    changeValueMaxAC,
    changeValueMinAC,
    setCounterValueAC, setErrorAC,
    setValueMaxAC,
    setValueMinAC
} from "../../BLL/actionCreators";
import {Dispatch} from "redux";
import {SettingsCounter} from "./SettingsCounter";
import React, {ChangeEvent, useEffect} from "react";


const SettingsCounterContainer: React.FC<SCProps> = props => {

    const {
        setValueMin,
        setValueMax,
        setError,
        setCounterValue,
        changeValueMax,
        changeValueMin,
        min,
        max,
        error,
    } = props

    //console.log('rerender')

    useEffect(() => {
        const valueAsString = localStorage.getItem('minValue')
        if (valueAsString) {
            const min = JSON.parse(valueAsString)
            setValueMin(min)
        }
    }, [])

    useEffect(() => {
        const valueAsString = localStorage.getItem('maxValue')
        if (valueAsString) {
            const max = JSON.parse(valueAsString)
            setValueMax(max)
        }
    }, [])

    const setValues = () => {
        localStorage.setItem('minValue', JSON.stringify(min))
        localStorage.setItem('maxValue', JSON.stringify(max))
        setCounterValue(min)
    }

    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        const min = e.target.value
        const minValue = Number(min)
        changeValueMin(minValue)
        setCounterValue('Set Value')
        if (minValue >= max) {
            setError('Incorrect Value')
        } else {
            setError(false)
        }
    }
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        const max = e.target.value
        const maxValue = Number(max)
        changeValueMax(maxValue)
        setCounterValue('Set Value')
        if (maxValue <= min) {
            setError('Incorrect Value')
        } else {
            setError(false)
        }
    }

    const disableButton = min >= max

    return <>
        <SettingsCounter setValues={setValues}
                         onChangeMin={onChangeMin}
                         onChangeMax={onChangeMax}
                         disableButton={disableButton}
                         error={error}
                         min={min}
                         max={max}/>
    </>
}

type MapDispatchToPropsType = {
    setValueMin: (value: number) => void
    setValueMax: (value: number) => void
    setError: (value: string | boolean) => void
    setCounterValue: (value: number | string) => void
    changeValueMin: (value: number) => void
    changeValueMax: (value: number) => void
}

type MapStateToPropsType = {
    min: number,
    max: number,
    error: boolean | string
}

let MapStateToProps = (state: AppStateType): MapStateToPropsType => {
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
        changeValueMin: (value: number) => {
            dispatch(changeValueMinAC(value))
        },
        changeValueMax: (value: number) => {
            dispatch(changeValueMaxAC(value))
        }
    }
}

type SCProps = ConnectedProps<typeof connector>
const connector = connect(MapStateToProps, MapDispatchToProps)
export default connector(SettingsCounterContainer);