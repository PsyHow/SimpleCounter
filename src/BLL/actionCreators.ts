export enum ACTIONS_TYPE {
    CHANGE_MIN_VALUE = 'CHANGE-MIN-VALUE',
    CHANGE_MAX_VALUE = 'CHANGE-MAX-VALUE',
    SET_COUNTER_VALUE = 'SET-COUNTER-VALUE',
    INC_COUNTER_VALUE = 'INC-COUNTER-VALUE',
    SET_MIN_VALUE = 'SET-MIN-VALUE',
    SET_MAX_VALUE = 'SET-MAX-VALUE',
    SET_ERROR = 'SET-ERROR',
}

export const changeValueMinAC = (value: number) => {
    return { type: ACTIONS_TYPE.CHANGE_MIN_VALUE, value } as const
}
export const changeValueMaxAC = (value: number) => {
    return { type: ACTIONS_TYPE.CHANGE_MAX_VALUE, value } as const
}
export const setCounterValueAC = (value: number | string) => {
    return { type: ACTIONS_TYPE.SET_COUNTER_VALUE, value } as const
}
export const incCounterValueAC = () => {
    return { type: ACTIONS_TYPE.INC_COUNTER_VALUE } as const
}
export const setValueMinAC = (value: number) => {
    return { type: ACTIONS_TYPE.SET_MIN_VALUE, value } as const
}
export const setValueMaxAC = (value: number) => {
    return { type: ACTIONS_TYPE.SET_MAX_VALUE, value } as const
}
export const setErrorAC = (value: string | boolean) => {
    return { type: ACTIONS_TYPE.SET_ERROR, value } as const
}

//types
export type ActionType = ReturnType<typeof changeValueMaxAC>
    | ReturnType<typeof changeValueMinAC>
    | ReturnType<typeof setCounterValueAC>
    | ReturnType<typeof incCounterValueAC>
    | ReturnType<typeof setValueMinAC>
    | ReturnType<typeof setValueMaxAC>
    | ReturnType<typeof setErrorAC>
