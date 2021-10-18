import {Input} from "../Input";
import {Button} from "../Button";
import React, {ChangeEvent} from "react";
import styles from './SettingsCounter.module.css'

type PropsType = {
    setValues: () => void
    onChangeMin: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMax: (e: ChangeEvent<HTMLInputElement>) => void
    disableButton: boolean
    error: boolean | string
    min: number
    max: number
}

export const SettingsCounter = (props: PropsType) => {

    const {
        setValues,
        onChangeMin,
        onChangeMax,
        disableButton,
        error,
        max,
        min,
    } = props

    return (
        <div className={styles.settingsBox}>
            <div className={styles.inputBox}>
                MinValue
                <Input className={error ? styles.inputError : styles.input}
                       value={min}
                       onChange={onChangeMin}/>
            </div>
            <div className={styles.inputBox}>
                MaxValue
                <Input className={error ? styles.inputError : styles.input}
                       value={max}
                       onChange={onChangeMax}/>
            </div>
            <div>
                <Button title={'set'}
                        className={styles.button}
                        disabled={disableButton}
                        onClick={setValues}/>
            </div>
        </div>
    )
}