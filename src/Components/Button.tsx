import React from "react";

type ButtonPropsType = {
    title: string
    className: string
    onClick: () => void
    disabled?: boolean
}

export const Button = (props: ButtonPropsType) => {

    return (
        <button
            className={ props.className }
            onClick={ props.onClick }
            disabled={ props.disabled }>{ props.title }</button>
    )
}

