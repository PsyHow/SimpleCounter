import { Button } from "../Button";
import React from "react";
import styles from './Counter.module.css'
import { useSelector } from "react-redux";
import { AppStateType } from "../../BLL/redux";

type PropsType = {
    incNumberHandler: () => void
    resetInc: () => void
    disable: boolean
}

export const Counter = (props: PropsType) => {

    const typeString = 'string'

    const { incNumberHandler, resetInc, disable } = props

    const max = useSelector<AppStateType, number>(state => state.counter.valueMax)

    const error = useSelector<AppStateType, boolean | string>(state => state.counter.error)

    const counter = useSelector<AppStateType, number | string>(state => state.counter.counter)

    return (
        <div className={ styles.counterBox }>
            <div className={ styles.counter }>
                <div>

                    {
                        error ? <div className={ styles.ErrorH }>{ error }</div>
                            : <div className={ counter >= max ? styles.Er : styles.h }>{ counter }</div>
                    }

                </div>
            </div>

            <div className={ styles.counterButton }>
                <Button title={ "Inc" }
                        className={ styles.cButton }
                        onClick={ incNumberHandler }
                        disabled={ disable }/>
                <Button title={ "RESET" }
                        className={ styles.cButton }
                        onClick={ resetInc }
                        disabled={ !!error || ( typeof ( counter ) === typeString ) }/>
            </div>

        </div>
    )
}