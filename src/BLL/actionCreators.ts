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
    return {type: ACTIONS_TYPE.CHANGE_MIN_VALUE, value} as const
}
export const changeValueMaxAC = (value: number) => {
    return {type: ACTIONS_TYPE.CHANGE_MAX_VALUE, value} as const
}
export const setCounterValueAC = (value: number | string) => {
    return {type: ACTIONS_TYPE.SET_COUNTER_VALUE, value} as const
}
export const incCounterValueAC = () => {
    return {type: ACTIONS_TYPE.INC_COUNTER_VALUE} as const
}
export const setValueMinAC = (value: number) => {
    return {type: ACTIONS_TYPE.SET_MIN_VALUE, value} as const
}
export const setValueMaxAC = (value: number) => {
    return {type: ACTIONS_TYPE.SET_MAX_VALUE, value} as const
}
export const setErrorAC = (value: string | boolean) => {
    return {type: ACTIONS_TYPE.SET_ERROR, value} as const
}

export type ChangeValueMaxType = ReturnType<typeof changeValueMaxAC>
export type ChangeValueMinType = ReturnType<typeof changeValueMinAC>
export type SetCounterValueType = ReturnType<typeof setCounterValueAC>
export type IncCounterValueType = ReturnType<typeof incCounterValueAC>
export type SetValueMinType = ReturnType<typeof setValueMinAC>
export type SetValueMaxType = ReturnType<typeof setValueMaxAC>
export type SetErrorType = ReturnType<typeof setErrorAC>

export type ActionType = ChangeValueMinType
    | ChangeValueMaxType
    | SetCounterValueType
    | IncCounterValueType
    | SetValueMinType
    | SetValueMaxType
    | SetErrorType
