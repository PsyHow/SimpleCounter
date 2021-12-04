import { SettingsCounter } from "./SettingsCounter";
import React, { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    changeValueMaxAC,
    changeValueMinAC,
    setCounterValueAC,
    setErrorAC,
    setValueMaxAC,
    setValueMinAC,
} from "../../BLL/actionCreators";
import { AppStateType } from "../../BLL/redux";


export const SettingsCounterContainer = () => {

    const dispatch = useDispatch()
    const min = useSelector<AppStateType, number>(state => state.counter.valueMin)

    const max = useSelector<AppStateType, number>(state => state.counter.valueMax)


    useEffect(() => {
        const valueAsString = localStorage.getItem('minValue')
        if(valueAsString) {
            const min = JSON.parse(valueAsString)
            dispatch(setValueMinAC(min))
        }
    }, [dispatch])

    useEffect(() => {
        const valueAsString = localStorage.getItem('maxValue')
        if(valueAsString) {
            const max = JSON.parse(valueAsString)
            dispatch(setValueMaxAC(max))
        }
    }, [dispatch])

    const setValues = () => {
        localStorage.setItem('minValue', JSON.stringify(min))
        localStorage.setItem('maxValue', JSON.stringify(max))
        dispatch(setCounterValueAC(min))
    }

    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        const min = e.target.value
        const minValue = Number(min)
        dispatch(changeValueMinAC(minValue))
        dispatch(setCounterValueAC('Set Value'))
        if(minValue >= max) {
            dispatch(setErrorAC('Incorrect Value'))
        }
        else {
            dispatch(setErrorAC(false))
        }
    }
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        const max = e.target.value
        const maxValue = Number(max)
        dispatch(changeValueMaxAC(maxValue))
        dispatch(setCounterValueAC('Set Value'))
        if(maxValue <= min) {
            dispatch(setErrorAC('Incorrect Value'))
        }
        else {
            dispatch(setErrorAC(false))
        }
    }

    const disableButton = min >= max

    return <>
        <SettingsCounter setValues={ setValues }
                         onChangeMin={ onChangeMin }
                         onChangeMax={ onChangeMax }
                         disableButton={ disableButton }/>
    </>
}

