import { ACTIONS_TYPE, ActionType } from "./actionCreators";

const initialState = {
    counter: 'Press Set' as string | number,
    valueMin: 0,
    valueMax: 0,
    error: '' as string | boolean,
}

export const CounterReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_MIN_VALUE:
        case ACTIONS_TYPE.SET_MIN_VALUE:
            return { ...state, valueMin: action.value }
        case ACTIONS_TYPE.CHANGE_MAX_VALUE:
        case ACTIONS_TYPE.SET_MAX_VALUE:
            return { ...state, valueMax: action.value }
        case ACTIONS_TYPE.SET_COUNTER_VALUE:
            return { ...state, counter: action.value }
        case ACTIONS_TYPE.INC_COUNTER_VALUE:
            return { ...state, counter: +state.counter + 1 }
        case ACTIONS_TYPE.SET_ERROR:
            return { ...state, error: action.value }
        default:
            return state
    }
}

//types
type InitialStateType = typeof initialState
