import {Input} from "../Input";
import {Button} from "../Button";
import React, {ChangeEvent, useEffect} from "react";
import s from './SettingsCounter.module.css'

type PropsType = {
    setValueMin: (value: number) => void
    setValueMax: (value: number) => void
    setError: (value: string | boolean) => void
    setCounterValue: (value: number | string) =>void
    changeValueMax: (value:number)=>void
    changeValueMin: (value:number)=>void
    min: number,
    max : number,
    error: boolean | string
}

export const SettingsCounter = (props:PropsType) => {

    useEffect(() => {
        let valueAsString = localStorage.getItem('minValue')
        if (valueAsString) {
            let min = JSON.parse(valueAsString)
            props.setValueMin(min)
        }
    }, [])

    useEffect(() => {
        let valueAsString = localStorage.getItem('maxValue')
        if (valueAsString) {
            let max = JSON.parse(valueAsString)
            props.setValueMax(max)
        }
    }, [])

    const setValues = () => {
        localStorage.setItem('minValue', JSON.stringify(props.min))
        localStorage.setItem('maxValue', JSON.stringify(props.max))
        props.setCounterValue(props.min)
    }

    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        let min = e.target.value
        let minValue = Number(min)
        props.changeValueMin(minValue)
        props.setCounterValue('Set Value')
        if (minValue >= props.max) {
            props.setError('Incorrect Value')
        } else {
            props.setError(false)
        }
    }
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        let max = e.target.value
        let maxValue = Number(max)
        props.changeValueMax(maxValue)
        props.setCounterValue('Set Value')
        if (maxValue <= props.min) {
            props.setError('Incorrect Value')
        } else {
            props.setError(false)
        }
    }

    const disableButton = props.min >= props.max

    return (
        <div className={s.settingsBox}>
            <div className={s.inputBox}>
                MinValue
                <Input className={props.error ? s.inputError : s.input}
                       value={props.min}
                       onChange={onChangeMin}/>
            </div>
            <div className={s.inputBox}>
                MaxValue
                <Input className={props.error ? s.inputError : s.input}
                       value={props.max}
                       onChange={onChangeMax}/>
            </div>
            <div>
                <Button title={'set'}
                        className={s.button}
                        disabled={disableButton}
                        onClick={setValues}/>
            </div>
        </div>
    )
}