import {Button} from "../Button";
import React from "react";
import styles from './Counter.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../BLL/redux";

type PropsType = {
    incNumberHandler: () => void
    resetInc: () => void
    dis: boolean
}

export const Counter = (props: PropsType) => {

    const {incNumberHandler, resetInc, dis} = props

    const max = useSelector<AppStateType, number>(state => state.counter.valueMax)
    const error = useSelector<AppStateType, boolean | string>(state => state.counter.error)
    const counter = useSelector<AppStateType, number | string>(state => state.counter.counter)

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