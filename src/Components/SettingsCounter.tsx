import {Input} from "./Input";
import {Button} from "./Button";
import React, {ChangeEvent, useEffect} from "react";

type SettingsCounterPropsType = {
    error: boolean | string
    valueMin: number
    valueMax: number
    setError: (error: boolean | string) => void
    setValueMin: (value: number) => void
    setValueMax: (value: number) => void
    setCounter: (counter: any) => void
}

export const SettingsCounter = (props: SettingsCounterPropsType) => {


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
        localStorage.setItem('minValue', JSON.stringify(props.valueMin))
        localStorage.setItem('maxValue', JSON.stringify(props.valueMax))
        props.setCounter(props.valueMin)
        props.setError(false)
    }
    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        let min = e.target.value
        let valueMin = Number(min)
        props.setValueMin(valueMin)
        props.setCounter('Press Set')
        if (valueMin >= props.valueMax) {
            props.setError('Incorrect value!')
        } else {
            props.setError(false)
        }
    }
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        let max = e.target.value
        let valueMax = Number(max)
        props.setValueMax(valueMax)
        props.setCounter('Press Set')
        if (valueMax <= props.valueMin) {
            props.setError('Incorrect value!')
        } else {
            props.setError(false)
        }
    }

    const dis = props.valueMin >= props.valueMax || props.valueMax <= props.valueMin

    return (
        <div className="settingBox">
            <div className="inputBox">
                MinValue
                <Input className={props.error ? 'inputError' : 'input'}
                       value={props.valueMin}
                       onChange={onChangeMin}/>
            </div>
            <div className="inputBox">
                MaxValue
                <Input className={props.error ? 'inputError' : 'input'}
                       value={props.valueMax}
                       onChange={onChangeMax}/>
            </div>
            <div>
                <Button title={'set'}
                        className={'button'}
                        disabled={dis}
                        onClick={setValues}/>
            </div>
        </div>
    )
}