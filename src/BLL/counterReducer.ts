const initialState = {
    counter: 'Press Set',
    valueMin: 0,
    valueMax: 0,
    error: ''
}

export type InitialStateType = {
    counter: number | string,
    valueMin: number,
    valueMax: number,
    error: boolean | string
}

export const CounterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "CHANGE-MIN-VALUE":
            return {...state, valueMin: action.value}
        case 'CHANGE-MAX-VALUE':
            return {...state, valueMax: action.value}
        case "SET-COUNTER-VALUE":
            return {...state, counter: action.value}
        case "INC-COUNTER-VALUE":
            return {...state, counter: +state.counter + 1}
        case "SET-MIN-VALUE":
            return {...state, valueMin: action.value}
        case "SET-MAX-VALUE":
            return {...state, valueMax: action.value}
        case "SET-ERROR":
            return {...state, error: action.value}
        default:
            return state
    }
}


export const changeValueMinAC = (value: number) => {
    return {type: 'CHANGE-MIN-VALUE', value} as const
}
export const changeValueMaxAC = (value: number) => {
    return {type: 'CHANGE-MAX-VALUE', value} as const
}
export const setCounterValueAC = (value: number | string) => {
    return {type: 'SET-COUNTER-VALUE', value} as const
}
export const incCounterValueAC = () => {
    return {type: 'INC-COUNTER-VALUE'} as const
}
export const setValueMinAC = (value: number) => {
    return {type: 'SET-MIN-VALUE', value} as const
}
export const setValueMaxAC = (value: number) => {
    return {type: 'SET-MAX-VALUE', value} as const
}
export const setErrorAC = (value: string | boolean) => {
    return {type: 'SET-ERROR', value} as const
}

export type ChangeValueMaxType = ReturnType<typeof changeValueMaxAC>
export type ChangeValueMinType = ReturnType<typeof changeValueMinAC>
export type SetCounterValueType = ReturnType<typeof setCounterValueAC>
export type IncCounterValueType = ReturnType<typeof incCounterValueAC>
export type SetValueMinType = ReturnType<typeof setValueMinAC>
export type SetValueMaxType = ReturnType<typeof setValueMaxAC>
export type SetErrorType = ReturnType<typeof setErrorAC>

type ActionType = ChangeValueMinType
    | ChangeValueMaxType
    | SetCounterValueType
    | IncCounterValueType
    | SetValueMinType
    | SetValueMaxType
    | SetErrorType