import React, { ChangeEvent } from "react";

type InputPropsType = {
    className: string
    value: number
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputPropsType) => {

    return (
        <input className={ props.className } type={ "number" } value={ props.value }
               onChange={ props.onChange }/>
    )
}