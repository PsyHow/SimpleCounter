import { Input } from "../Input";
import { Button } from "../Button";
import React, { ChangeEvent } from "react";
import styles from './SettingsCounter.module.css'
import { useSelector } from "react-redux";
import { AppStateType } from "../../BLL/redux";

type PropsType = {
    setValues: () => void
    onChangeMin: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMax: (e: ChangeEvent<HTMLInputElement>) => void
    disableButton: boolean
}

export const SettingsCounter = (props: PropsType) => {

    const {
        onChangeMin,
        onChangeMax,
        disableButton,
        setValues,
    } = props

    const min = useSelector<AppStateType, number>(state => state.counter.valueMin)

    const max = useSelector<AppStateType, number>(state => state.counter.valueMax)

    const error = useSelector<AppStateType, boolean | string>(state => state.counter.error)

    return (
        <div className={ styles.settingsBox }>
            <div className={ styles.inputBox }>
                MinValue
                <Input className={ error ? styles.inputError : styles.input }
                       value={ min }
                       onChange={ onChangeMin }/>
            </div>
            <div className={ styles.inputBox }>
                MaxValue
                <Input className={ error ? styles.inputError : styles.input }
                       value={ max }
                       onChange={ onChangeMax }/>
            </div>
            <div>
                <Button title={ 'set' }
                        className={ styles.button }
                        disabled={ disableButton }
                        onClick={ setValues }/>
            </div>
        </div>
    )
}