import {Button} from "../Button";
import React from "react";
import styles from './Counter.module.css'

type PropsType = {
    incNumberHandler: () => void
    resetInc: () => void
    dis: boolean
    error: boolean | string
    counter: number | string
    max: number
}

export const Counter = (props: PropsType) => {

    const {
        incNumberHandler,
        resetInc,
        dis,
        error,
        counter,
        max,
    } = props

    const typeString = 'string'

    return (
        <div className={styles.counterBox}>
            <div className={styles.counter}>
                <div>

                    {
                        error ? <div className={styles.ErrorH}>{error}</div>
                            : <div className={counter >= max ? styles.Er : styles.h}>{counter}</div>
                    }

                </div>
            </div>

            <div className={styles.counterButton}>
                <Button title={"Inc"}
                        className={styles.cButton}
                        onClick={incNumberHandler}
                        disabled={dis}/>
                <Button title={"RESET"}
                        className={styles.cButton}
                        onClick={resetInc}
                        disabled={!!error || (typeof (counter) === typeString)}/>
            </div>

        </div>
    )
}