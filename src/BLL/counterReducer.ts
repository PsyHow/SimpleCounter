import {ACTIONS_TYPE, ActionType} from "./actionCreators";

export type InitialStateType = {
    counter: number | string,
    valueMin: number,
    valueMax: number,
    error: boolean | string
}

const initialState = {
    counter: 'Press Set',
    valueMin: 0,
    valueMax: 0,
    error: ''
}

export const CounterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_MIN_VALUE:
        case ACTIONS_TYPE.SET_MIN_VALUE:
            return {...state, valueMin: action.value}
        case ACTIONS_TYPE.CHANGE_MAX_VALUE:
        case ACTIONS_TYPE.SET_MAX_VALUE:
            return {...state, valueMax: action.value}
        case ACTIONS_TYPE.SET_COUNTER_VALUE:
            return {...state, counter: action.value}
        case ACTIONS_TYPE.INC_COUNTER_VALUE:
            return {...state, counter: +state.counter + 1}
        case ACTIONS_TYPE.SET_ERROR:
            return {...state, error: action.value}
        default:
            return state
    }
}


